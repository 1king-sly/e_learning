'use server'
import React from 'react'
import SearchBar from '@/app/(ui)/Student/Component/SearchBar'
import { fetchTeachers,deleteSingleUser } from '@/app/lib/actions';
import ProfilePic from '@/public/images/ProfilePic.jpeg'
import Image from 'next/image'
import Link from 'next/link';
import AddTeacher from '../../Components/AddTeacher';
import { TrashIcon, EyeIcon } from '@heroicons/react/24/outline';

export default async function TeacherPage({searchParams}:{searchParams:string}) {

  const params = new URLSearchParams(searchParams);
  const q = params.get('query') || '';
  const teachers = await fetchTeachers(q)
  return (
    <>  
        <AddTeacher></AddTeacher>
        
        
        <SearchBar placeholder='search'></SearchBar>
        
        <div className='grid lg:grid-cols-4 gap-3 mx-20 md:grid-cols-2 sm:grid-cols-1 pb-20'>
          
          {teachers?.map((teacher)=>(
      <div className='my-10 shadow-lg bg-gray-100 w-full h-[35vh] rounded-xl text-center text-lg' key={teacher.id}>
             <Image src={teacher.image || ProfilePic} alt={'Profile Pic'} className='rounded-full h-20 w-20 mx-auto p-2' width={100}   height={100}></Image>
             <h1 className='p-2 text-sm'>{teacher.firstName + " " + teacher.secondName}</h1>
             <h1 className='p-2 text-sm'>
              {teacher.email}
             </h1>
             <h1 className='p-2 text-sm'>{teacher?.registrationNumber} </h1>


             <div className='flex flex-row w-full  justify-between'>
              <Link href={`/Admin/Teachers/${teacher.registrationNumber}`}  key={teacher.id}>
                <button className='bg-sky-300 p-2 text-white text-sm lg:rounded-md rounded-full  w-[6vw] flex mx-3 items-center justify-center'>
                  <div>
                    <EyeIcon className=' h-3 w-3 md:w-4 md:h-4 lg:hidden'/>
                    <p className='hidden lg:block text-xs'>
                      View

                    </p>
                  </div>
                </button>
              </Link>
              <div>
              <form action={deleteSingleUser} className=''>
              <input type="text" title='userId' name='userId' className='hidden ' value={teacher.id}/>
              <button className='bg-rose-500 p-2 text-white text-sm lg:rounded-md w-[6vw] flex items-center justify-center rounded-full mx-3' type='submit'>
                <div>
                  <TrashIcon className='h-3 w-3 md:w-4 md:h-4 lg:hidden'/>
                  <p className='hidden lg:block text-xs'>
                  Delete
                  </p>
                </div>
            </button>

              </form>
              </div>
          </div>
         </div>
            
             
         
                       
          ))}
       
        </div>
        {/* <div className='grid lg:grid-cols-4 gap-3 mx-20 md:grid-cols-2 sm:grid-cols-1'>
          
      <div className='my-10 shadow-lg bg-gray-100 w-full h-[35vh] rounded-xl text-center text-lg' key={'teacher.id'}>
             <Image src={ProfilePic} alt={'Profile Pic'} className='rounded-full h-20 w-20 mx-auto p-2' width={100}   height={100}></Image>
             <h1 className='p-2 text-sm'>Teachers Name</h1>
             <h1 className='p-2 text-sm'>
              email.com
             </h1>
             <h1 className='p-2 text-sm'>44334 </h1>

             <div className='flex flex-row w-full  justify-evenly'>
              <Link href='{`/NewAdmin/Teachers/${teacher.id}`}  key={teacher.id}'>
                <button className='bg-sky-300 p-2 text-white text-sm lg:rounded-md rounded-full  w-[6vw] flex mx-3 items-center justify-center '>
                  <div>
                    <EyeIcon className=' h-3 w-3 md:w-4 md:h-4 lg:hidden'/>
                    <p className='hidden lg:block text-xs'>
                      View

                    </p>
                  </div>
                </button>
              </Link>
              <div>
              <form action={deleteSingleUser} className=''>
              <input type="text" title='userId' name='userId' className='hidden ' value={'teacher.id'}/>
              <button className='bg-rose-500 p-2 text-white text-sm lg:rounded-md w-[6vw] flex items-center justify-center rounded-full mx-3' type='submit'>
                <div>
                  <TrashIcon className='h-3 w-3 md:w-4 md:h-4 lg:hidden'/>
                  <p className='hidden lg:block text-xs'>
                  Delete
                  </p>
                </div>
            </button>

              </form>
              </div>
          </div>
         </div>
         </div> */}
          
    </>
  )
}