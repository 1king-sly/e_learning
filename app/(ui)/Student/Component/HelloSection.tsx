'use client'
import { useSession } from 'next-auth/react'
import React from 'react'

function HelloSection() {

  const user = useSession()
  return (
    <div className='p-10 m-20 flex bg-gray-100 rounded-3xl w-1/4'>
        <div className='font-serif'>
        <h1 className='text-2xl'>Greetings,</h1>
        <h1 className='text-3xl'>{user.data?.firstName || 'User'}</h1>
        </div>
    </div>
  )
}

export default HelloSection