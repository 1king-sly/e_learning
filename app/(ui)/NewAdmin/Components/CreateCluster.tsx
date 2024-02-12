'use client'
import React, { useEffect, useState } from 'react';
import Button from '../../Button';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import SearchBar from '@/app/(ui)/Student/Component/SearchBar';
import { fetchSingleCluster } from '@/app/lib/actions';
import Link from 'next/link';
import clsx from 'clsx';



export default function CreateCluster() {
    const [visible, setVisible] = useState(false);
    const [loading, setLoading] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const [formData, setFormData] = useState({
    title: '',
    Visibility: '',
  });

  const router = useRouter();

  const toggleLoading = () => {
    setLoading((prevLoading) => !prevLoading);
  };

  const handleChange = (event: React.ChangeEvent< HTMLTextAreaElement | HTMLSelectElement>) => {
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

    console.log(formData)

    toast.loading('Creating Cluster .....')

    toggleLoading();
    try {
      const create = await fetch('/api/createCluster', {
        method: 'POST',
        body:JSON.stringify(formData)
        });

      if (create?.ok && create?.status === 200) {
        toast.dismiss()
        toast.success('Cluster Created Successfully')
      } else if (create?.status !== 200) {
        toast.dismiss()
        toast.error('Something Went wrong')
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
  

    const toggleVisible = () => {
        setVisible((prev) => !prev)
    }
  return (
    <>
        <div className='w-full flex flex-col justify-center '>
            <div className='flex flex-row justify-between'>
                <div className='mx-20 mt-10'>
                    <h1 className='text-4xl font-serif font-bold'>Clusters</h1>
                </div>
                <div className='mt-10 mx-20 cursor-pointer' onClick={toggleVisible}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 24 24"><path fill="currentColor" d="M11.5 12.5H6v-1h5.5V6h1v5.5H18v1h-5.5V18h-1z"/></svg>
                </div>
            </div>
        
            <div>
          <form  className={clsx(`w-[80vw] flex flex-col gap-2`, !visible && 'hidden')} >
            <div className='w-full flex justify-center items-center flex-col gap-2'>
              <textarea
                name="title"
                id="title"
                title='title'
                placeholder='Cluster Title'
                className='resize-none p-2 h-10 w-80 flex items-center rounded-md outline-sky-200 overflow-hidden'
                maxLength={50}
                value={formData.title}
                onChange={handleChange}

                
                
              ></textarea>
             
             <label>
                
                <select
                  name='Visibility'
                  className='bg-white outline-sky-400 px-2 py-1 rounded-md w-80 text-gray-800 text-sm  '
                  required
                  title='school'
                  value={formData.Visibility}
                  onChange={handleChange}

                >
                   <option disabled value=''>
                   Choose Visibility
                  </option> 
                  <option value='Hidden'>Hidden</option>
                  <option value='Visible'>Visible</option>
                </select>
              </label>     
            
             
            </div>

            

           

            <div className='w-full md:w-2/5 flex justify-center items-center mx-auto'>
              <Button type='submit'              
              onClick={handleSubmit}
              disabled={disabled}

               >Submit</Button>
            </div>
          </form>
        </div>
        
        
        </div>
    </>
    )
}