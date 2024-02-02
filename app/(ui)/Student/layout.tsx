import React from 'react'
import SideNav from './Component/SideNav'
import NavBar from './Component/NavBar'

export default async function StudentLayout({
    children,
}:{
    children: React.ReactNode
}) {
  return (
    <>
        <div className='w-screen h-screen flex flex-col overflow-hidden gap-1 mb-0'>
      <div className='w-full bg-gray-200 shadow-md h-[10vh]'>
        <NavBar></NavBar>
      </div>
      <div className='w-full  max-h-full h-full flex flex-row'>
        <div className='h-full overflow-hidden w-[25vw]   bg-sky-500  flex' >
          <SideNav></SideNav>

        </div>
        <div className='h-full w-full bg-gray-200 overflow-y-scroll'>{children}
        </div>
      </div>
   
    </div>

    </>
  )
}
