import React from 'react'
import logo from '@/public/images/logo.png'
import Image from 'next/image'
import Link from 'next/link'

function NavBar() {
  return (
    <div className='flex flex-col-3 bg-gray-50 sm:px-4 lg:px-8 items-center '>
        <div className='w-1/3 ml-10'>
          <Link href='/'>
            <Image src={logo} alt='logo' className='w-20 h-20 py-3 cursor-pointer'></Image>
          </Link>
        </div>
        <div className='w-1/3'> 
            <h1 className='font-serif  md:text-lg lg:text-2xl'>MOI FORCES ACADEMY MOMBASA</h1>
        </div>
        <div className='w-1/4 flex justify-end max-[420px]:hidden md:text-lg lg:text-xl text-xs'>Admin</div>
    </div>
  )
}

export default NavBar