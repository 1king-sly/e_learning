import React from 'react'

export default function List() {
  return (
    <>
        <div>
            <div className='px-20'>
            <h1 className='text-2xl font-serif font-bold'>Student's list</h1>
            </div>
            <div className='mx-20'>
                <table className='w-full'>
                    <tbody className='flex flex-col w-full gap-3'>
                        <tr className='text-lg font-semibold place-items-center justify-evenly'>
                            <td className='w-1/4 pl-5 pr-32'>Name</td>
                            <td className='w-1/4 px-32'>Form</td>
                            <td className='w-1/4 px-32'>Status</td>
                            <td className='w-1/4 pl-32 pr-5'>Username</td>
                        </tr>
                        <tr className='bg-gray-100 bg-opacity-65'>
                            <td className='w-1/4 pl-5 pr-32'>Clarence Laria Kurere</td>
                            <td className='w-1/4 px-32'>4</td>
                            <td className='w-1/4 px-32'>Active</td>
                            <td className='w-1/4 pl-32 pr-5'>CLAREK</td>
                        </tr>
                        <tr className='bg-gray-100 bg-opacity-65'>
                            <td className='w-1/4 pl-5 pr-32'>Byrone Kingsly</td>
                            <td className='w-1/4 px-32'>4</td>
                            <td className='w-1/4 px-32'>Active</td>
                            <td className='w-1/4 pl-32 pr-5'>BYKINGLSY</td>
                        </tr>
                        <tr className='bg-gray-100 bg-opacity-65'>
                            <td className='w-1/4 pl-5 pr-32'>Valencia Neema Nabiswa</td>
                            <td className='w-1/4 px-32'>4</td>
                            <td className='w-1/4 px-32'>Active</td>
                            <td className='w-1/4 pl-32 pr-5'>VALNEEMA</td>
                        </tr>                        
                    </tbody>
                </table>
            </div>
        </div>
    </>
  )
}
