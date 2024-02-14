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
        
        
        <SearchBar placeholder='search'></SearchBar>
        
        <div className='grid grid-cols-4 gap-3 mx-20'>
          
          {teachers?.map((teacher)=>(
            <Link href={`/NewAdmin/Teachers/${teacher.id}`}  key={teacher.id}>
      <div className='my-10 shadow-lg bg-gray-100 w-full h-[35vh] rounded-xl text-center text-lg'>
             <Image src={teacher.image || ProfilePic} alt={'Profile Pic'} className='rounded-full h-20 w-20 mx-auto p-2' width={100}   height={100}></Image>
             <h1 className='p-2 text-sm'>{teacher.firstName + " " + teacher.secondName}</h1>
             <h1 className='p-2 text-sm'>
              {teacher.email}
             </h1>
             <h1 className='p-2 text-sm'>{teacher?.registrationNumber} </h1>
         </div>
            
            </Link>
           
          ))}
       
        </div>
    </>
  )
}
