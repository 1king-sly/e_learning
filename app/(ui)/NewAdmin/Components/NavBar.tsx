import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from '@/public/images/logo.png'

export default function NavBar() {
  return (
    <>
        <div className='flex flex-col-3 bg-gray-300 sm:px-4 lg:px-8 items-center shadow-lg justify-around w-full h-full px-1'>
        <div className='sm:w-1/4  flex justify-start'>
          <Link href='/NewAdmin/Dashboard'>
            <Image src={logo} alt='logo' className='w-20 h-20 py-3 cursor-pointer'></Image>
          </Link>
        </div>
        <div className='flex-1 flex justify-center   md:text-lg lg:text-xl text-sky-400 text-xs'> 
            <h1 className='font-serif  md:text-lg lg:text-2xl'>MOI FORCES ACADEMY MOMBASA</h1>
        </div>
        <div className='flex justify-end max-[420px]:hidden md:text-lg lg:text-xl text-xs'>
            <h1>Admin</h1>
        <div className='pl-5'>
        <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="currentColor" d="M4 20V4h8.02v1H5v14h7.02v1zm12.462-4.462l-.702-.719l2.319-2.319H9.192v-1h8.887l-2.32-2.32l.703-.718L20 12z"/></svg>
        </div>
        </div>
    </div>
    </>
  )
}
