'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image'
import profile from '@/public/images/ProfilePic.jpeg'
import Button from '@/app/(ui)/Button';
import { useRouter } from 'next/navigation';
import pdf from '@/public/pdf.png';
import toast from 'react-hot-toast';
import clsx from 'clsx';
import { updateUser } from '@/app/lib/actions';

export default function ProfileForm({user}:{user:any})

{  
    const [loading, setisLoading] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const [formData, setFormData] = useState({
      firstName: '',
      secondName: '',
      password: '',
      file: null as { name: string, type: string, binary: string } | null,
      imagePreview: null as string | null,
      registrationNumber:'',
      userId:user.id
    });
  
    const toggleLoading = () => {
      setisLoading((prevLoading) => !prevLoading);
    };
  
   
  
    const router = useRouter()
  
   
  
    
  
  
    const handleSubmit = async () => {
      const event = window.event;
      if (!event) {
        return;
      }
      event.preventDefault();
  
      toggleLoading();
      try {
        toast.loading('Updating user...');
      
        const create = await updateUser(formData)
    
        if(create){
          toast.dismiss()
          toast.success('User updated Successfully')
        }
        else{
          toast.dismiss()
          toast.error('Something went wrong')
        }
      } catch (error) {
        toast.dismiss();
        toast.error('Server Side error');
      } finally {
        toggleLoading();
      }
    };
    
    
    useEffect(() => {
      setDisabled(loading);
    }, [loading]);

   
   
  
    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLSelectElement | HTMLInputElement>) => {
      const { name, value, files } = event.target as HTMLInputElement;
    
      if (name === 'file' && files && files.length > 0) {
        const file = files[0];
        const reader = new FileReader();
    
        reader.onload = () => {
          const base64String = reader.result?.toString().split(',')[1];
    
          setFormData({
            ...formData,
            file: {
              name: file.name,
              type: file.type,
              binary: base64String || '', 
            },
            imagePreview: reader.result as string,
          });
        };
    
        reader.readAsDataURL(file);
      } else {
        setFormData({
          ...formData,
          [name]: value,
        });
      }
    };
    
    
    

    
  return (
    <>
         <div className='shadow-lg rounded-md flex flex-col w-96 h-96  items-center justify-center'>
        <div className=' h-24 flex items-center justify-center  gap-4 px-2'>
        <label htmlFor="file-upload">
  <div className='h-20 w-20 rounded-full shadow-md overflow-hidden relative'>
    <Image 
      src={ formData.imagePreview || user.image || profile} 
      alt='profile'
      layout="fill"
      objectFit="cover"
    />
  </div>
</label>
<input
  id="file-upload"
  name="file"
  type="file"
  className="sr-only"
  title='File upload'
  onChange={handleChange}
/>
        </div>

        <form action=''>
        <div className=' gap-3 flex flex-col ' >
          <label >
          <input type="text"  className='bg-white outline-sky-400 px-2 py-1 rounded-md ' placeholder={user.firstName } name='firstName'  disabled />
         
          <input type="text"  className='hidden ' value={user?.id} name='userId' />

          </label>
          <label>
          <input type="text"  className='bg-white outline-sky-400 px-2 py-1 rounded-md ' placeholder={ user.secondName} name='secondName' disabled/>
          </label>
          <label >
          <input type="text" name='registrationNumber' className='bg-white outline-sky-400 px-2 py-1 rounded-md ' placeholder={user.registrationNumber} disabled/>

          </label>


          <label >
          <input type="text" name='password' className='bg-white outline-sky-400 px-2 py-1 rounded-md ' placeholder='Password'onChange={handleChange}/>

          </label>
             
        </div>
        <div className='mt-2 w-full flex justify-center '>
            <button className='w-4/5 text-white bg-sky-300 rounded-md p-1'  onClick={handleSubmit}
              disabled={disabled}>Update</button>
        
        </div>
       
        </form>

      </div>
    </>
  )
}
