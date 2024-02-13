'use server'
import React from 'react';
import { getServerSession } from 'next-auth';
import Image from 'next/image'
import profile from '@/public/images/ProfilePic.jpeg'
import { fetchUser, updateUser,fetchUserCreatedExams } from '@/app/lib/actions';

import Link from 'next/link';

export default async function Page({ params }: { params: { email: string } }) {  
    const userEmail = params.email
    
    const user = await fetchUser(userEmail)

    const exams = await fetchUserCreatedExams(user?.id)

  return (
    <>
       <div className='w-full h-full flex items-center justify-center '>
        <div className='w-1/3'>
        <div className='shadow-lg rounded-md flex flex-col w-96 h-96  items-center justify-center'>
        <div className=' h-24 flex items-center justify-center  gap-4 px-2'>
          <Image className='h-20 w-20 rounded-full shadow-md' src={ profile} alt='profile'></Image>         
        </div>

        <form action={updateUser}>
        <div className=' gap-3 flex flex-col ' >
          <label >
          <input type="text"  className='bg-white outline-sky-400 px-2 py-1 rounded-md ' placeholder={user?.firstName + " " + user?.secondName} />
          <input type="text"  className='hidden ' value={userEmail} name='userId' />

          </label>
          <label >
          <input type="email" name='email' className='bg-white outline-sky-400 px-2 py-1 rounded-md ' placeholder={user?.email}/>

          </label>
          <label >
          <input type="text" name='registrationNumber' className='bg-white outline-sky-400 px-2 py-1 rounded-md ' placeholder={user?.registrationNumber}/>

          </label>
             

          <label >
          <input type="text" name='password' className='bg-white outline-sky-400 px-2 py-1 rounded-md ' placeholder='password'/>

          </label>
        </div>
        <div className='mt-2 w-[236px] '>
        
        </div>
       
        </form>
      </div>
        </div>

        <div className='flex flex-1 '>
        <div className='shadow-lg rounded-md flex flex-col w-full h-96  '>
        <div className='mx-10'>
          <h1 className='text-md'>Exams By: {user?.firstName + " " + user?.secondName} </h1>
          <div>
          <table className='w-full'>
            <tbody className='flex-col mt-4 gap-3 flex'>
              {exams?.map((exam) => (
                <Link href='NewAdmin/Exams/${exam.id}' key={exam.id}>
                  <tr className='min-[426px]:justify-around  flex bg-gray-100 py-2 w-full pr-2 items-center max-[425px]:gap-6'>
                    <td className='w-1/3 truncate'>{exam.title} </td>
                    <td className='w-1/3 max-[425px]:hidden'>{new Date(exam.createdAt).toLocaleDateString()}</td>
                  </tr>
                </Link>
              ))} 
            </tbody>
          </table>
      </div>

        </div>
      </div>
        </div>     
    </div>
    </>
  );
}