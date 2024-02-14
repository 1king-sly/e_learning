'use server'
import React from 'react';
import { getServerSession } from 'next-auth';
import Image from 'next/image'
import profile from '@/public/images/ProfilePic.jpeg'
import { fetchUser, updateUser } from '@/app/lib/actions';
import {  redirect } from 'next/navigation';

export default async function Page({ params }: { params: { id: string } }) {  
    const userId = params.id
    
    const user = await fetchUser(userId)

  return (
    <>
       <div className='w-full h-full flex items-center justify-center '>
      <div className='shadow-lg rounded-md flex flex-col w-96 h-96  items-center justify-center'>
        <div className=' h-24 flex items-center justify-center  gap-4 px-2'>
          <Image className='h-20 w-20 rounded-full shadow-md' src={ profile} alt='profile'></Image>         
        </div>

        <form action={updateUser}>
        <div className=' gap-3 flex flex-col ' >
          <label >
          <input type="text"  className='bg-white outline-sky-400 px-2 py-1 rounded-md ' placeholder={user?.firstName + " " + user?.secondName} />
          <input type="text"  className='hidden ' value={userId} name='userId' />

          </label>
          <label >
          <input type="text" name='registrationNumber' className='bg-white outline-sky-400 px-2 py-1 rounded-md ' placeholder={user?.registrationNumber}/>

          </label>


          <label >
          <input type="text" name='registrationNumber' className='bg-white outline-sky-400 px-2 py-1 rounded-md ' placeholder='Password'/>

          </label>
             

          <label >
          <input type="text" name='password' className='bg-white outline-sky-400 px-2 py-1 rounded-md ' placeholder={user?.hashedPassword}/>

          </label>
        </div>
        <div className='mt-2 w-[236px] '>
        
        </div>
       
        </form>
       
        
        


      </div>

      

    </div>
    </>
  );
}