import React from 'react'
import logo from '@/public/images/logo.png'
import Image from 'next/image'
function NavBar() {
  return (
    <div className='flex flex-col-3 bg-gray-100'>
        <div className='w-1/3 ml-10'>
            <a href='/'>
            <Image src={logo} alt='logo' className='w-20 h-20 py-3 cursor-pointer'></Image>
            </a>
        </div>
        <div className='w-1/3'> 
            <h1 className='text-3xl font-serif'>MOI FORCES ACADEMY MOMBASA</h1>
        </div>
    </div>
  )
}

export default NavBar