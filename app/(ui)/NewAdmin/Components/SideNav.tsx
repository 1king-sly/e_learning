'use client'
import React from 'react'
import Link from 'next/link'
import { ArrowRightEndOnRectangleIcon, CheckIcon } from '@heroicons/react/24/outline'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import { signOut } from 'next-auth/react'

export default function SideNav() {
  const pathName = usePathname();

  return (
    <>
        <div className='p-8 pl-10 h-screen  w-4/5 hidden sm:block md:flex-none md:justify-center lg:justify-start md:p-2 md:px-3 gap-2 items-center'>
        <div className='md:text-sm '>
          
            <div className={clsx(`flex my-3 hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-center lg:justify-start md:p-2 md:px-3 gap-2 rounded-md w-full h-12`,{'bg-sky-100 text-blue-600': pathName === '/NewAdmin/Dashboard'})}>
              <Link href="/NewAdmin/Dashboard"  className='inline-flex items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="currentColor" d="M13.5 9V4H20v5zM4 12V4h6.5v8zm9.5 8v-8H20v8zM4 20v-5h6.5v5zm1-9h4.5V5H5zm9.5 8H19v-6h-4.5zm0-11H19V5h-4.5zM5 19h4.5v-3H5zm4.5-3"/></svg>
                <h1 className='mx-2 hidden lg:block'>Dashboard</h1>
              </Link></div>
            <div className={clsx(`flex my-3 hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-center lg:justify-start md:p-2 md:px-3 gap-2 rounded-md w-full h-12`,{'bg-sky-100 text-blue-600': pathName === '/NewAdmin/Student'})}>
              <Link href="/NewAdmin/Student"  className='inline-flex items-center'>
              <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 256 256"><path fill="currentColor" d="m225.27 60.21l-96-32a4 4 0 0 0-2.54 0l-96 32A4 4 0 0 0 28 64v80a4 4 0 0 0 8 0V69.55l43.88 14.63a60 60 0 0 0 24.54 91c-20.86 5.74-39 19.13-51.77 38.65a4 4 0 0 0 6.7 4.36C75.17 193.92 100.2 180 128 180s52.83 13.92 68.65 38.18a4 4 0 0 0 6.7-4.36c-12.72-19.52-30.91-32.91-51.77-38.65a60 60 0 0 0 24.54-91l49.15-16.39a4 4 0 0 0 0-7.58ZM180 120a52 52 0 1 1-92.07-33.14l38.8 12.93a3.95 3.95 0 0 0 2.54 0l38.8-12.93A51.85 51.85 0 0 1 180 120m-52-28.22L44.65 64L128 36.22L211.35 64Z"/></svg>
                <h1 className='mx-2 hidden lg:block'>Students</h1>
              </Link></div>
            <div className={clsx(`flex my-3 hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-center lg:justify-start md:p-2 md:px-3 gap-2 rounded-md w-full h-12`,{'bg-sky-100 text-blue-600': pathName === '/NewAdmin/Teachers'})}>
              <Link href="/NewAdmin/Teachers"  className='inline-flex items-center'>
              <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 256 256"><path fill="currentColor" d="M216 44H40a12 12 0 0 0-12 12v144a12 12 0 0 0 12 12h13.39a4 4 0 0 0 3.61-2.29a52 52 0 0 1 94 0a4 4 0 0 0 3.61 2.29H216a12 12 0 0 0 12-12V56a12 12 0 0 0-12-12m4 156a4 4 0 0 1-4 4h-58.92a60.38 60.38 0 0 0-34.68-29.07a36 36 0 1 0-36.8 0A60.38 60.38 0 0 0 50.92 204H40a4 4 0 0 1-4-4V56a4 4 0 0 1 4-4h176a4 4 0 0 1 4 4Zm-116-28a28 28 0 1 1 28-28a28 28 0 0 1-28 28m92-92v96a4 4 0 0 1-4 4h-16a4 4 0 0 1 0-8h12V84H68v12a4 4 0 0 1-8 0V80a4 4 0 0 1 4-4h128a4 4 0 0 1 4 4"/></svg>
                <h1 className='mx-2 hidden lg:block'>Teachers</h1>
              </Link></div>
            {/* <div className={clsx(`flex my-3 hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-center lg:justify-start md:p-2 md:px-3 gap-2 rounded-md w-full h-12`,{'bg-sky-100 text-blue-600': pathName === '/NewAdmin/Dashboard'})}>
              <Link href="/NewAdmin/Exams"  className='inline-flex items-center'>
              <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 48 48"><g fill="currentColor"><path d="M20 15a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2h-8a1 1 0 0 1-1-1m1 3a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2zm-1 10a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2h-8a1 1 0 0 1-1-1m1 3a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2z"/><path fill-rule="evenodd" d="M10 27a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1zm2 1v3h3v-3z" clip-rule="evenodd"/><path d="M17.707 15.707a1 1 0 0 0-1.414-1.414L13 17.586l-1.293-1.293a1 1 0 0 0-1.414 1.414L13 20.414z"/><path fill-rule="evenodd" d="M10 6a4 4 0 0 0-4 4v28a4 4 0 0 0 4 4h20a4 4 0 0 0 4-4V10a4 4 0 0 0-4-4zm-2 4a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2v28a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2zm28 6a3 3 0 1 1 6 0v20.303l-3 4.5l-3-4.5zm3-1a1 1 0 0 0-1 1v2h2v-2a1 1 0 0 0-1-1m0 22.197l-1-1.5V20h2v15.697z" clip-rule="evenodd"/></g></svg>
                <h1 className='mx-2 hidden lg:block'>Exams</h1>
              </Link></div> */}
              <div className={clsx(`flex my-3 hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-center lg:justify-start md:p-2 md:px-3 gap-2 rounded-md w-full h-12`,{'bg-sky-100 text-blue-600': pathName === '/NewAdmin/Cluster'})}>
              <Link href="/NewAdmin/Cluster"  className='inline-flex items-center'>
                <CheckIcon className='w-6 max-[425px]:w-4'/>
                <h1 className='ml-2 hidden lg:block text-sm'>Cluster</h1>
              </Link></div>
            <div className={clsx(`flex my-3 hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-center lg:justify-start md:p-2 md:px-3 gap-2 rounded-md w-full h-12`,{'bg-sky-100 text-blue-600': pathName === '/NewAdmin/Profile'})}>
              <Link href="/NewAdmin/Profile"  className='inline-flex items-center'>
              <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2"/><path d="M4.271 18.346S6.5 15.5 12 15.5s7.73 2.846 7.73 2.846M12 12a3 3 0 1 0 0-6a3 3 0 0 0 0 6"/></g></svg>
                <h1 className='mx-2 hidden lg:block'>Profile</h1>
              </Link></div>
            <div className={clsx(`flex my-3 hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-center lg:justify-start md:p-2 md:px-3 gap-2 rounded-md w-full h-12`,{'bg-sky-100 text-blue-600': pathName === '#'})}>
              <Link href="#"  className='inline-flex items-center'>
                <ArrowRightEndOnRectangleIcon className='w-6 max-[425px]:w-4'/>
                <h1 className='mx-2 hidden lg:block' onClick={() => signOut()}>Logout</h1>
              </Link></div>
        </div>
    </div>
    </>
  )
}
