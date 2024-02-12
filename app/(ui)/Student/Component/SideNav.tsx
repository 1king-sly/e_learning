import React from 'react'
import Link from 'next/link'
import { ArrowRightEndOnRectangleIcon } from '@heroicons/react/24/outline'

export default function SideNav() {
  return (
    <>
        <div className='p-8 pl-10 h-screen  w-4/5 hidden sm:block md:flex-none md:justify-center lg:justify-start md:p-2 md:px-3 gap-2 items-center'>
        <div className='md:text-sm '>
          {/* <ul><> */}
            <div className='flex my-3 hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-center lg:justify-start md:p-2 md:px-3 gap-2 rounded-md w-full h-12'>
              <Link href="/Student/Dashboard"  className='inline-flex items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="currentColor" d="M13.5 9V4H20v5zM4 12V4h6.5v8zm9.5 8v-8H20v8zM4 20v-5h6.5v5zm1-9h4.5V5H5zm9.5 8H19v-6h-4.5zm0-11H19V5h-4.5zM5 19h4.5v-3H5zm4.5-3"/></svg>
                <h1 className='mx-2 hidden lg:block'>Dashboard</h1>
              </Link></div>
            <div className='flex my-3 hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-center lg:justify-start md:p-2 md:px-3 gap-2 rounded-md w-full h-12'>
              <Link href="/Student/Exams"  className='inline-flex items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 48 48"><g fill="currentColor"><path d="M20 15a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2h-8a1 1 0 0 1-1-1m1 3a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2zm-1 10a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2h-8a1 1 0 0 1-1-1m1 3a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2z"/><path fill-rule="evenodd" d="M10 27a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1zm2 1v3h3v-3z" clip-rule="evenodd"/><path d="M17.707 15.707a1 1 0 0 0-1.414-1.414L13 17.586l-1.293-1.293a1 1 0 0 0-1.414 1.414L13 20.414z"/><path fill-rule="evenodd" d="M10 6a4 4 0 0 0-4 4v28a4 4 0 0 0 4 4h20a4 4 0 0 0 4-4V10a4 4 0 0 0-4-4zm-2 4a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2v28a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2zm28 6a3 3 0 1 1 6 0v20.303l-3 4.5l-3-4.5zm3-1a1 1 0 0 0-1 1v2h2v-2a1 1 0 0 0-1-1m0 22.197l-1-1.5V20h2v15.697z" clip-rule="evenodd"/></g></svg>
                <h1 className='mx-2 hidden lg:block'>Exams</h1>
              </Link></div>
            <div className='flex my-3 hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-center lg:justify-start md:p-2 md:px-3 gap-2 rounded-md w-full h-12'>
              <Link href="/Student/Notes"  className='inline-flex items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="currentColor" d="M7 0h16v20H5V0zm14 18V2H7v16zM9 4h10v2H9zm10 4H9v2h10zM9 12h7v2H9zm10 10H3V4H1v20h18z"/></svg>
                <h1 className='mx-2 hidden lg:block'>Notes</h1>
              </Link></div>
            <div className='flex my-3 hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-center lg:justify-start md:p-2 md:px-3 gap-2 rounded-md w-full h-12'>
              <Link href="/Student/Assignment"  className='inline-flex items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 16 16"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.75 1.75h10.5v12.5H2.75zm3 6h4.5m-4.5 3h2.5m-2.5-6h4.5"/></svg>
                <h1 className='mx-2 hidden lg:block'>Assignment</h1>
              </Link></div>
              <div className='flex my-3 hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-center lg:justify-start md:p-2 md:px-3 gap-2 rounded-md w-full h-12'>
              <Link href="/Student/Profile"  className='inline-flex items-center'>
              <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2"/><path d="M4.271 18.346S6.5 15.5 12 15.5s7.73 2.846 7.73 2.846M12 12a3 3 0 1 0 0-6a3 3 0 0 0 0 6"/></g></svg>
                <h1 className='mx-2 hidden lg:block'>Profile</h1>
              </Link></div>
            <div className='flex my-3 hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-center lg:justify-start md:p-2 md:px-3 gap-2 rounded-md w-full h-12'>
              <Link href="/"  className='inline-flex items-center'>
                <ArrowRightEndOnRectangleIcon className='w-6 max-[425px]:w-4'/>
                <h1 className='mx-2 hidden lg:block'>Logout</h1>
              </Link></div>
              {/* </> */}
          {/* </ul> */}
        </div>
    </div>
    </>
  )
}
