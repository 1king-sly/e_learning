import Link from 'next/link';
import React from 'react'
import clsx from 'clsx'

export default function NavItem({ pathName, href, icon, label, onClick }:{pathName:string,href:string,label:string,icon: React.ReactNode,onClick?: () => void}) {
    const Icon = icon;
    return (
      <div className={clsx(`flex my-3 hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-center lg:justify-start md:p-2 md:px-3 gap-2 rounded-md w-full h-12`,{'bg-sky-100 text-blue-600': pathName === href})}>
        <Link href={href} className='inline-flex items-center'>
          {Icon}
          <h1 className='mx-2 hidden lg:block'>{label}</h1>
        </Link>
      </div>
    );
}
