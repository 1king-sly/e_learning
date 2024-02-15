'use client'
import React from 'react'
import Link from 'next/link'
import { ArrowRightEndOnRectangleIcon, CheckIcon } from '@heroicons/react/24/outline'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import { signOut } from 'next-auth/react'
import NavItem from './NavItem'

export default function SideNav() {
  const pathName = usePathname();

  return (
    <>
       <div className='p-8 pl-10 h-screen w-4/5 hidden sm:block md:flex-none md:justify-center lg:justify-start md:p-2 md:px-3 gap-2 items-center'>
      <div className='md:text-sm'>
        <NavItem pathName={pathName} href="/NewAdmin/Dashboard" icon={<svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="currentColor" d="M13.5 9V4H20v5zM4 12V4h6.5v8zm9.5 8v-8H20v8zM4 20v-5h6.5v5zm1-9h4.5V5H5zm9.5 8H19v-6h-4.5zm0-11H19V5h-4.5zM5 19h4.5v-3H5zm4.5-3"/></svg>} label="Dashboard" />
        <NavItem pathName={pathName} href="/NewAdmin/Student" icon={<svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 256 256"><path fill="currentColor" d="m225.27 60.21l-96-32a4 4 0 0 0-2.54 0l-96 32A4 4 0 0 0 28 64v80a4 4 0 0 0 8 0V69.55l43.88 14.63a60 60 0 0 0 24.54 91c-20.86 5.74-39 19.13-51.77 38.65a4 4 0 0 0 6.7 4.36C75.17 193.92 100.2 180 128 180s52.83 13.92 68.65 38.18a4 4 0 0 0 6.7-4.36c-12.72-19.52-30.91-32.91-51.77-38.65a60 60 0 0 0 24.54-91l49.15-16.39a4 4 0 0 0 0-7.58ZM180 120a52 52 0 1 1-92.07-33.14l38.8 12.93a3.95 3.95 0 0 0 2.54 0l38.8-12.93A51.85 51.85 0 0 1 180 120m-52-28.22L44.65 64L128 36.22L211.35 64Z"/></svg>} label="Students" />
        <NavItem pathName={pathName} href="/NewAdmin/Teachers" icon={<svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 256 256"><path fill="currentColor" d="M216 44H40a12 12 0 0 0-12 12v144a12 12 0 0 0 12 12h13.39a4 4 0 0 0 3.61-2.29a52 52 0 0 1 94 0a4 4 0 0 0 3.61 2.29H216a12 12 0 0 0 12-12V56a12 12 0 0 0-12-12m4 156a4 4 0 0 1-4 4h-58.92a60.38 60.38 0 0 0-34.68-29.07a36 36 0 1 0-36.8 0A60.38 60.38 0 0 0 50.92 204H40a4 4 0 0 1-4-4V56a4 4 0 0 1 4-4h176a4 4 0 0 1 4 4Zm-116-28a28 28 0 1 1 28-28a28 28 0 0 1-28 28m92-92v96a4 4 0 0 1-4 4h-16a4 4 0 0 1 0-8h12V84H68v12a4 4 0 0 1-8 0V80a4 4 0 0 1 4-4h128a4 4 0 0 1 4 4"/></svg>} label="Teachers" />
        <NavItem pathName={pathName} href="/NewAdmin/Cluster" icon={<CheckIcon className='w-6 max-[425px]:w-4'/>} label="Cluster" />
        <NavItem pathName={pathName} href="/NewAdmin/Profile" icon={<svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2"/><path d="M4.271 18.346S6.5 15.5 12 15.5s7.73 2.846 7.73 2.846M12 12a3 3 0 1 0 0-6a3 3 0 0 0 0 6"/></g></svg>} label="Profile" />
        <NavItem pathName={pathName} href="#" icon={<ArrowRightEndOnRectangleIcon className='w-6 max-[425px]:w-4'/>} label="Logout" onClick={signOut} />
      </div>
    </div>
    </>
  )
}
