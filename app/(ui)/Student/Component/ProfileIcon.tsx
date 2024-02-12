import React from 'react'
import Image from 'next/image'
import Profile from '@/public/images/Profile.jpg'

export default function ProfileIcon() {
  return (
    <>
        <div className='mx-auto'>
          <Image src={Profile} alt='Profile Image' className='h-24 w-24 rounded-full mx-auto'></Image>
          
        </div>
    </>
  )
}
