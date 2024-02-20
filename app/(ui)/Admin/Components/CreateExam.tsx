'use client'

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Button from '@/app/(ui)/Button';
import { useRouter } from 'next/navigation';
import pdf from '@/public/pdf.png';
import toast from 'react-hot-toast';
import clsx from 'clsx';
import { createExam } from '@/app/lib/actions';



export default function CreateExam({clusterId}: {clusterId: string}) {
    const[visible,setVisible]= useState(false)
    const [loading, setisLoading] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const [formData, setFormData] = useState({
      title: '',
      category: clusterId,
      level: '',
      file: null as { name: string, type: string, data: string } | null,
      imagePreview: null as string | null,
      cloudinaryFileUrl: null as string | null,
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
        toast.loading('Uploading document...');
        const response = await fetch('/api/create',{
          method:'POST',
          mode:'cors',
          body:JSON.stringify(formData),
          headers: {
            'Content-Type': 'use client'
          },          

        })

        
    
        if(response.ok){
          toast.dismiss()
          toast.loading('Creating exam...');


          const data = await response.json();
          
          const cloudinaryFileUrl = data;

          setFormData({
            ...formData,
            cloudinaryFileUrl: cloudinaryFileUrl,
          });

          const create = await createExam(formData)
          if(create){
            toast.dismiss()
            toggleVisible()
            toast.success('Exam created Successfully')
          }
          else{
            toast.dismiss()
            toast.error('Something went wrong while creating exam')
          }
  
          
        }
        else{
          toast.dismiss()
          toast.error('Something went wrong while uploading file')
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
              data: base64String || '', 
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
    
    
    

    const toggleVisible = () => {
        setVisible((prev) => !prev)
    }
  return (
    <div className='w-full flex flex-col justify-center items-center'>
        <div className='w-full flex justify-between'>
          <div>
            <h1 className='text-4xl font-serif font-bold mx-20 mt-10'>Exams</h1>
          </div>
          <div className='mt-10 mx-20 cursor-pointer' onClick={toggleVisible}>
                    <button className='border lg:rounded-lg rounded-full border-black py-1 px-2 text-sm cursor-pointer hidden lg:block'>Add Exam</button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 24 24"><path fill="currentColor" d="M11.5 12.5H6v-1h5.5V6h1v5.5H18v1h-5.5V18h-1z" className=' lg:hidden '/></svg>                </div>
          </div>
        <div>
        <form  className={clsx(`w-[80vw] flex flex-col gap-2`,!visible && 'hidden')}>
            <div className='w-full flex justify-center items-center flex-col gap-2'>
              <textarea
                name="title"
                id="title"
                title='title'
                placeholder='Exam Title'
                className='resize-none p-2 h-10 w-80 flex items-center rounded-md outline-sky-200 overflow-hidden'
                value={formData.title}
                onChange={handleChange}
                disabled={disabled}
              ></textarea>

              
              <label>
                <select
                  name='level'
                  className='bg-white outline-sky-400 px-2 py-1 rounded-md w-80 text-gray-800 text-sm'
                  required
                  title='level'
                  value={formData.level}
                  onChange={handleChange}
                  disabled={disabled}
                  
                >
                  <option disabled value=''>
                    Choose Form Level
                  </option>
                  <option value='Form1'>Form 1</option>
                  <option value='Form2'>Form 2</option>
                  <option value='Form3'>Form 3</option>
                  <option value='Form4'>Form 4</option>
                </select>
              </label>
      

            </div>

        <div className="w-full flex justify-center">
              <div className="w-2/5 mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                <div className="text-center">

                 {formData.imagePreview ? (
    /\.(jpg|jpeg|png|gif|jfif)$/i.test(formData.file?.name || '') ? (
      <Image
        src={formData.imagePreview}
        alt="File Preview"
        className="mb-4 max-w-full max-h-96"
        width={150}
        height={150}
      />
    ) : (
      <Image
        src={pdf}
        alt="Document Preview"
        className="mb-4 max-w-full max-h-96"
        width={150}
        height={150}
      />
    )
  ) : null}
                  
                  <div className="mt-4 flex text-sm leading-6 text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500 w-[110px] h-[30px] "
                    >
                      <span>Upload a file</span>
                      <input
                        id="file-upload"
                        name="file"
                        type="file"
                        className="sr-only"
                        onChange={handleChange}
                        disabled={disabled}                   />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                </div>
              </div>
            </div>

            <div className='w-full md:w-2/5 flex justify-end'>
              <Button
                type='submit'
                onClick={handleSubmit}
                disabled={disabled}
              >
                Submit
              </Button>
            </div>
          </form>  
          
          </div>
    </div>
  )
}
