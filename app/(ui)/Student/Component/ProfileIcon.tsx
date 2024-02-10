import React from 'react'
import { UserCircleIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Profile from '@/public/images/Profile.jpg'

export default function ProfileIcon() {
  return (
    <>
        <div className='mx-auto'>
          <Image src={Profile} alt='Profile Image' className='h-24 w-24 rounded-full mx-auto'></Image>
          {/* <UserCircleIcon className='h-52 w-52 mx-auto'></UserCircleIcon> */}
        </div>
    </>
  )
}
