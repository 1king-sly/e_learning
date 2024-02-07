import React from 'react'
import NavBar from './Components/NavBar'
import SideNav from './Components/SideNav'

export default async function layout({
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
                <div className='h-full overflow-hidden w-[15vw] items-center justify-center bg-sky-500 hidden sm:block' >
                <SideNav></SideNav>
            </div>
            <div className='h-full w-full bg-gray-200 overflow-y-scroll'>{children}
            </div>
            </div>
    
        </div>

    </>
  )
}
