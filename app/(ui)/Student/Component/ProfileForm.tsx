import React from 'react'

export default function ProfileForm() {
  return (
    <>
        <div className='text-xl'>
            <div className='flex justify-center gap-10 my-6'>
                <h1 className='mr-10'>Full Name</h1>
                <input type='text' placeholder='Full Name'/>
            </div>
            <div className='flex justify-center gap-24 my-6'>
                <h1 className='mr-10'>Age</h1>
                <input type='text' placeholder='Age'/>
            </div>
            <div className='flex justify-center gap-10 my-6'>
                <h1 className='mr-1'>Adm Number</h1>
                <input type='text' placeholder='Adm Number'/>
            </div>
            <div className='flex justify-center gap-10 my-6'>
                <h1 className='mr-20'>Email</h1>
                <input type='text' placeholder='Email'/>
            </div>
            <div className='flex justify-center gap-9 my-6'>
                <h1 className='mr-20'>Gender</h1>
                <input type='radio' name='Gender' value='Male'></input>
                <label>Male</label>
                <input type='radio' name='Gender' value='Female'></input>
                <label>Female</label>
            </div>
            <div className='flex justify-center'>
                <button type='submit' className='mx-20 border-2 border-black px-4 rounded-lg'>Save</button>
                <button type='submit' className='mx-20 border-2 border-black px-4 rounded-lg'>Cancel</button>
            </div>
        </div>
    </>
  )
}
