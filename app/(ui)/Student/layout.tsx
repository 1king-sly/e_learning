import React from 'react'
<<<<<<< HEAD
import SideNav from './Component/SideNav'
import NavBar from './Component/NavBar'

export default async function StudentLayout({
    children,
}:{
    children: React.ReactNode
}) {
  return (
    <>
    <div className='m-0 w-screen h-screen flex flex-col overflow-hidden gap-1'>
      <div className='w-full shadow-md h-[10vh]'>
        <NavBar></NavBar>
      </div>
      <div className='w-full  max-h-full h-full flex flex-row'>
        <div className='h-full overflow-hidden w-[15vw]   bg-sky-500  flex'>
          <SideNav></SideNav>
        </div>
      <div className='h-full overflow-y-auto w-full bg-gray-200 overflow-x-clip'>
        {children}
      </div>
      </div>
    </div>

    </>
=======

export default function layout() {
  return (
    <div>layout</div>
>>>>>>> 326b669353f12cfbabcd17e8a3478ba4a89a77f5
  )
}
