'use client'
import { useSession } from 'next-auth/react'
import React from 'react'

function HelloSection() {

  const user = useSession()
  return (
    <div className='p-10 m-20 flex bg-gray-100 rounded-3xl w-1/2'>
        <div className='font-serif'>
        <h1 className='text-2xl'>Greetings,</h1>
        <h1 className='text-3xl'>{user.data?.firstName}</h1>
        </div>
        <div className='ml-auto mr-20 bg-red-500'>
            <h1>Representation</h1>
        </div>
    </div>
  )
}

export default HelloSection