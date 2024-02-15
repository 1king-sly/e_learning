import React from 'react'

export default function SingleStudent() {
  return (
    <>
        <div className='text-center mx-80 my-10 text-xl justify'>
            <div className='flex flex-row gap-3 justify-between'>
                <h1 className='my-5 font-semibold'>Name:</h1>
                <h1 className='my-5 w-[15vw] bg-gray-100 px-2 py-1 rounded-md'>Clarence Laria Kurere</h1>
            </div>
            <div className='flex flex-row gap-3 justify-between'>
                <h1 className='my-5 font-semibold'>Admission Number:</h1>
                <h1 className='my-5 w-[15vw] bg-gray-100 px-2 py-1 rounded-md'>5055</h1>
            </div>
            <div className='flex flex-row gap-3 justify-between'>
                <h1 className='my-5 font-semibold'>Age:</h1>
                <h1 className='my-5 w-[15vw] bg-gray-100 px-2 py-1 rounded-md'>20 years</h1>
            </div>
            <div className='flex flex-row gap-3 justify-between'>
                <h1 className='my-5 font-semibold'>Form:</h1>
                <h1 className='my-5 w-[15vw] bg-gray-100 px-2 py-1 rounded-md'>4</h1>
            </div>            
        </div>
    </>
    )
}
