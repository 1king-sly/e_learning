import React from 'react'
import Link from 'next/link'

export default function ClusterCard() {
  return (
    <>
        {/* <div className='grid grid-cols-4 gap-3 mx-20'> */}
        <div>
            <Link href='/NewAdmin/Cluster/id'>
            <div className='my-10 shadow-lg bg-gray-100 w-full h-[25vh] rounded-xl text-center text-lg'>
                <h1 className='py-5 px-2'>Cluster Title</h1>
                <h1 className='py-5 px-2'>Author's Name</h1>
            </div>
            </Link>
        </div>
        {/* </div> */}
    </>
    )
}
