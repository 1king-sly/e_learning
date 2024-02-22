'use server'
import React from 'react'
import ProfileForm from '../../Components/Profile'
import ProfileIcon from '../../Components/ProfileIcon'
import { authOptions } from '@/utils/authUptions'
import { getServerSession } from 'next-auth'

export default async function ProfilePage() {
    const user = await getServerSession(authOptions)
  return (
        <>
            <div className='w-full h-full flex flex-col items-center justify-center'>
                <div className='mx-20 mt-10 max-[425px]:mx-6'>
                    <h1 className='text-4xl font-serif font-bold max-[425px]:text-3xl'>Profile Page</h1>
                </div>
                <ProfileForm user={user}></ProfileForm>
            </div>
        </>
    )
}
