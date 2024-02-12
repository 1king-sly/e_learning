import React from 'react'
import Assignment from '../../Component/Assignment'

export default function page() {
  return (
    <>
        <div>
            <div className='mx-20 mt-10'>
                <h1 className='text-4xl font-serif font-bold'>Assignments</h1>
            </div>
            <Assignment></Assignment>
            <Assignment></Assignment>
            <Assignment></Assignment>

        </div>
    </>
  )
}
