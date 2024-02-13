'use server'
import React from 'react'
import SearchBar from '@/app/(ui)/Student/Component/SearchBar'
import { fetchTeachers } from '@/app/lib/actions';
import ProfilePic from '@/public/images/ProfilePic.jpeg'
import Image from 'next/image'
import Link from 'next/link';
import AddTeacher from '../../Components/AddTeacher';

export default async function TeacherPage({searchParams}:{searchParams:string}) {

  const params = new URLSearchParams(searchParams);
  const q = params.get('query') || '';
  const teachers = await fetchTeachers(q)
  return (
    <>  
        <AddTeacher></AddTeacher>
        {/* <div className='flex flex-row justify-between'>
            <div className='mx-20 mt-10'>
                <h1 className='text-4xl font-serif font-bold'>Teachers</h1>
            </div>
            <div className='mt-10 mx-20 cursor-pointer'>
                <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 24 24"><path fill="currentColor" d="M11.5 12.5H6v-1h5.5V6h1v5.5H18v1h-5.5V18h-1z"/></svg>
            </div>
        </div> */}
        
        <SearchBar placeholder='search'></SearchBar>
        
        <div className='grid grid-cols-4 gap-3 mx-20'>
          
          {teachers?.map((teacher)=>(
            <Link href={`/NewAdmin/Teachers/${teacher.id}`}  key={teacher.id}>
      <div className='my-10 shadow-lg bg-gray-100 w-full h-[35vh] rounded-xl text-center text-lg'>
             <Image src={ProfilePic} alt={'Profile Pic'} className='rounded-full h-20 w-20 mx-auto p-2'></Image>
             <h1 className='p-2 text-sm'>{teacher.firstName + " " + teacher.secondName}</h1>
             <h1 className='p-2 text-sm'>
              {teacher.email}
             </h1>
             <h1 className='p-2 text-sm'>0711 111 111</h1>
         </div>
            
            </Link>
           
          ))}
       
        </div>
    </>
  )
}
