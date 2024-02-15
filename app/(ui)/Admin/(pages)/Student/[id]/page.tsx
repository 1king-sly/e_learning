'use server'
import React from 'react';
import { getServerSession } from 'next-auth';
import Image from 'next/image'
import profile from '@/public/images/ProfilePic.jpeg'
import { fetchUser, updateUser } from '@/app/lib/actions';
import {  redirect } from 'next/navigation';
import NotFound from './not-found';
import ProfileForm from '../../../Component/ProfileForm';

export default async function Page({ params }: { params: { id: string } }) {  
    const userId = params.id
    
    const user = await fetchUser(userId)

    if(!user){
      return <NotFound/>

    }

  return (
    <>
       <div className='w-full h-full flex items-center justify-center '>
      

      <ProfileForm user={user}/>
      

    </div>
    </>
  );
}