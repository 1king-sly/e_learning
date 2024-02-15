'use client'
import React, { useEffect, useState, useCallback } from 'react';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import clsx from 'clsx'

export default function CreateExam({ title, category,type,level,file }: { title: string; category: string,type:string,level:string,file:File }) {
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [formData, setFormData] = useState({
    title: title,
    category: category,
    type: type,
    level: level,
    file: file,
  });
  

  const router = useRouter();

  const handleSubmit = async ()=>{
    const event = window.event;
    if (!event) {
      return;
    }
    event.preventDefault();

    toggleLoading();
    try{
      toast.loading('Creating exam...')
      const create = await fetch('/api/create',{
        method:"POST",
        body:JSON.stringify(formData)
      })
      if(create?.ok && create?.status===200){
        toast.dismiss();
        toast.success('Exam Created Successfully')
        router.push('/Admin/Dashboard')

     } else if(create?.status!==200 ){
      toast.dismiss();
        toast.error('Something went wrong')
      }

    }catch(error){
      toast.dismiss();
      toast.error('Server Side error')
    }finally {
      toggleLoading();
    }
  }

  const toggleLoading = useCallback(() => {
    setLoading((prevLoading) => !prevLoading);
  }, []); 

  useEffect(() => {
    setDisabled(loading);
  }, [loading]);

  return (
    <div className="w-full h-full ">
      
      <div className="w-full justify-around flex mt-2">
        
        <button
          className={clsx(`p-3 bg-green-500 rounded-md`)}
          onClick={() => handleSubmit()}
          disabled={disabled}
        >
          CREATE
        </button>
        
      </div>

    </div>
  );
}
