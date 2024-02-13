'use client'
import React, {useState} from 'react'
import clsx from 'clsx'

export default function AddStudent() {
    const [visible,setVisible]= useState(false)

    const toggleVisible = () => {
        setVisible((prev) => !prev)
    }
  return (
    <>
        {/* <div className='w-full flex justify-center'> */}
            <div className='w-full flex justify-between'>
                <div className=' mx-20 mt-10'>
                    <h1 className='text-4xl font-serif font-bold'>Students</h1>
                </div>
                <div className='cursor-pointer mx-20 mt-10' onClick={toggleVisible}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 24 24"><path fill="currentColor" d="M11.5 12.5H6v-1h5.5V6h1v5.5H18v1h-5.5V18h-1z"/></svg>
                </div>
            </div>
        <div className={clsx(`px-20 py-10 flex flex-row gap-2 w-full justify-evenly `, !visible && 'hidden')}>
            <input placeholder='First Name' className='rounded p-2'></input>
            <input placeholder='Second Name' className='rounded p-2'></input>
            <input placeholder='Admission Number' className='rounded p-2'></input>
        {/* </div> */}
        </div>
    </>
    )
}
