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
      userId:user.id,
      cloudinaryFileUrl:''
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
        const formDataToUpload = new FormData();
        formDataToUpload.append('file', formData.imagePreview as unknown as  Blob);
        formDataToUpload.append('upload_preset', 'psy5tipf'); 
    
        const response = await fetch('https://api.cloudinary.com/v1_1/dwav3nker/upload', {
          method: 'POST',
          body: formDataToUpload,
        });
    
        if (response.ok) {
          const data = await response.json();

          const cloudinaryFileUrl = data.secure_url;

    
          setFormData({
            ...formData,
            cloudinaryFileUrl: cloudinaryFileUrl,
          });
    
          toast.dismiss();

          const newFormData =  new FormData();

          newFormData.append('file',cloudinaryFileUrl)
          newFormData.append('firstName',formData.firstName)
          newFormData.append('secondName',formData.secondName)
          newFormData.append('password',formData.password)
          newFormData.append('registrationNumber',formData.registrationNumber)
          newFormData.append('userId',formData.userId)

        const create = await updateUser(newFormData)
    
        if(create){
          toast.dismiss()
          toast.success('User updated Successfully')
        }
        else{
          toast.dismiss()
          toast.error('Something went wrong')
        }
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
          <input type="text"  className='bg-white outline-sky-400 px-2 py-1 rounded-md ' placeholder={user.firstName } name='firstName' onChange={handleChange} />
         
          <input type="text"  className='hidden ' value={user?.id} name='userId' />

          </label>
          <label>
          <input type="text"  className='bg-white outline-sky-400 px-2 py-1 rounded-md ' placeholder={ user.secondName} name='secondName' onChange={handleChange}/>
          </label>
          <label >
          <input type="text" name='registrationNumber' className='bg-white outline-sky-400 px-2 py-1 rounded-md ' placeholder={user.registrationNumber} onChange={handleChange}/>

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
