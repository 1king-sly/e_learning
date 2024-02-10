'use server'
import { authOptions } from '@/utils/authUptions'
import { getServerSession } from 'next-auth'
import React from 'react'

export default async function ProfileForm() {

    const user = await getServerSession(authOptions)
  return (
    <>
        <div className='text-xl'>
            <div className='flex justify-center gap-10 my-6'>
                <h1 className='mr-10'>Full Name</h1>
                <input type='text' placeholder='Full Name'
                value={user?.firstName + " " + user?.secondName}/>
            </div>
            <div className='flex justify-center gap-24 my-6'>
                <h1 className='mr-10'>Age</h1>
                <input type='text' placeholder='Age'/>
            </div>
            <div className='flex justify-center gap-10 my-6'>
                <h1 className='mr-1'>Adm Number</h1>
                <input type='text' placeholder='Adm Number'
                value={user?.registrationNumber}/>
            </div>
            <div className='flex justify-center gap-10 my-6'>
                <h1 className='mr-20'>Email</h1>
                <input type='text' placeholder='Email' value={user?.email}/>
            </div>
            <div className='flex justify-center gap-9 my-6'>
                <h1 className='mr-20'>Gender</h1>
                <input type='radio' name='Gender' value='Male' title='gender'></input>
                <label>Male</label>
                <input type='radio' name='Gender' value='Female' title='gender'></input>
                <label>Female</label>
            </div>
            <div className='flex justify-center'>
                <button type='submit' className='mx-20 border-2 border-black px-4 rounded-lg'>Save</button>
                <button type='submit' className='mx-20 border-2 border-black px-4 rounded-lg'>Cancel</button>
            </div>
        </div>
    </>
  )
}
