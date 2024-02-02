'use server'
import React from 'react'
import Image from 'next/image'
import logo from '@/public/images/logo.png'
// import { getServerSession } from 'next-auth'
// import { fetchUser } from '@/app/lib/actions'
import { redirect } from 'next/navigation'

export default async  function Header() {


  // const session = await getServerSession()
  // if(!session){
  //   redirect('/')
  // }
  // const email = session.user.email


  // const data =await fetchUser(email)


  // if(!data){
  //   return null
  // }
  return (
    <div className='w-full h-full flex items-center justify-around px-1 sm:px-4 lg:px-8 '>
      <div className='sm:w-1/4  flex justify-start   '>
        {/* <Image src={logo} alt='logo' className=' object-cover h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 lg:h-16 lg:w-16'></Image> */}
      <a href='/'>
            <Image src={logo} alt='logo' className='w-20 h-20 py-3 cursor-pointer'></Image>
      </a>
      </div>
      <div className='flex-1 flex justify-center   md:text-lg lg:text-xl text-sky-400 text-xs'>
      MOI FORCES ACADEMY MOMBASA
      </div>
      <div className='w-1/4 flex justify-end max-[420px]:hidden md:text-lg lg:text-xl text-xs'><span className='text-sky-400'> Admin </span> </div>
    </div>
  )
}
