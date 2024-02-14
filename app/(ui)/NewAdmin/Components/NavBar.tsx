'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from '@/public/images/logo.png'
import { useSession } from 'next-auth/react'


export default function NavBar() {
  const user = useSession()

  return (
    <>
      <div className='flex flex-col-3 sm:px-4 lg:px-8 items-center shadow-lg justify-between w-full h-full px-1'>
        <div className='gap-4 ml-10'>
          <Link href='/NewAdmin/Dashboard'>
            <Image src={logo} alt='logo' className='w-20 h-20 py-3 cursor-pointer'></Image>
          </Link>
        </div>
        <div className='w-1/3'> 
            <h1 className='font-serif  md:text-lg lg:text-2xl'>MOI FORCES ACADEMY MOMBASA</h1>
        </div>
        <div className='flex justify-end max-[420px]:hidden md:text-lg lg:text-xl text-xs'>{user.data?.firstName || 'User'} </div>
    </div>
    </>
  )
}
