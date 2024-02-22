'use client'
import { createUser } from '@/app/lib/actions';
import clsx from 'clsx'
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';



export default function AddStudent() {
    const [visible, setVisible] = useState(false);
    const [loading, setLoading] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const [formData, setFormData] = useState({
    FName: '',
    SName: '',
    regNo:'',
    userType:'TEACHER',
    email:'',
  });

  const toggleLoading = () => {
    setLoading((prevLoading) => !prevLoading);
  };
    const toggleVisible = () => {
        setVisible((prev) => !prev)
    }

    const handleChange = (event: React.ChangeEvent< HTMLTextAreaElement | HTMLSelectElement|HTMLInputElement>) => {
        const { name, value } = event.target;
       {
          setFormData({
            ...formData,
            [name]: value,
          });
        }
      };
    
      const handleSubmit = async () => {
        const event = window.event;
        if (!event) {
          return;
        }
        event.preventDefault();
    
       
        toast.loading('Creating Teacher .....')
    
        toggleLoading();
        try {
          
    
          const create = await createUser(formData)
    
          if(create){
            setFormData({
              FName: '',
              SName: '',
              regNo: '',
              userType: 'TEACHER',
              email: '',
            });
            toast.dismiss()
            toggleVisible()
            toast.success('Teacher Created Successfully')
          }else{
            toast.dismiss()
            toast.error('Something went wrong')
          }
    
         
        } catch (error) {
          toast.dismiss()
          toast.error('Server Side error')
        } finally {
          toggleLoading();
        }
      };
    
      useEffect(() => {
        setDisabled(loading);
      }, [loading]);
  return (
    <>
            <div className='w-full flex justify-between'>
                <div className=' mx-20 mt-10 max-[425px]:mx-6'>
                    <h1 className='text-4xl font-serif font-bold max-[425px]:text-2xl'>Teachers</h1>
                </div>
                <div className='cursor-pointer mx-20 mt-10 max-[425px]:mx-6' onClick={toggleVisible}>
                    <button className='border lg:rounded-lg rounded-full border-black py-1 px-2 text-sm cursor-pointer hidden lg:block'>Add Teacher</button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="2.5em" height="2.5em" viewBox="0 0 24 24"><path fill="currentColor" d="M11.5 12.5H6v-1h5.5V6h1v5.5H18v1h-5.5V18h-1z" className=' lg:hidden '/></svg>
                </div>
            </div>
        <div className={clsx(`px-20 py-5 grid lg:grid-cols-4 gap-10 max-[1000px]:gap-2 w-full md:w-auto justify-evenly `, !visible && 'hidden')}>
            <input placeholder='First Name' className='rounded p-2 w-full my-2'name='FName'
                        value={formData.FName}
                        onChange={handleChange}></input>
            <input placeholder='Second Name' className='rounded p-2 w-full my-2' name='SName'
                        value={formData.SName}
                        onChange={handleChange}></input>
            <input placeholder='TSC Number' className='rounded p-2 w-full my-2' name='regNo'
                        value={formData.regNo}
                        onChange={handleChange}></input>
            <input placeholder='Email' className='rounded p-2 w-full my-2' name='email'
                        value={formData.email}
                        onChange={handleChange}></input>
        </div>
        <div className={clsx(`px-20  w-full grid lg:justify-end max-[1000px]:justify-center  `, !visible && 'hidden')}>
            <button className='text-white bg-sky-300 rounded-md p-1'  onClick={handleSubmit}
              disabled={disabled}>Create</button>
        </div>
    </>
    )
}
