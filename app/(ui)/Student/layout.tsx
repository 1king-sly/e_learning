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
    <div>
      <div className='pb-1'>
        <NavBar></NavBar>
      </div>
      <div className='h-screen pb-0'>
        <SideNav></SideNav>
      </div>
      <section>{children}</section>
    </div>

    </>
  )
}
