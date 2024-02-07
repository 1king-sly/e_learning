import React from 'react'
import {TrashIcon, PencilIcon} from '@heroicons/react/24/outline'
import Link from 'next/link'

export default function ExamCard() {
  return (
    <>
        <div className=' px-20 py-3 max-[425px]:p-2  '>
        <table className=' w-full'>
            <tbody className='  flex-col mt-4 gap-3 flex'>
                <tr className='min-[426px]:justify-around  flex bg-gray-100 py-2 justify-between w-full pr-2 items-center rounded-lg'>
                    <td className='max-[425px]:w-3/5 max-[375px]:w-4/6 max-[320px]:w-3/5 w-1/3 truncate '>Exam Title</td>
                    <td className='w-1/3 max-[425px]:hidden' >21/01/2024</td>                    
                        <Link href={''} key={''}>
                            <td className='w-1/12' >
                            <button className='bg-sky-300 p-2 text-white text-sm lg:rounded-md rounded-full '>
                                <div>
                                <PencilIcon className=' h-3 w-3 md:w-4 md:h-4 lg:hidden'/>
                                <p className='hidden lg:block text-xs'>Edit</p>
                                </div>
                                </button>
                            </td>
                            </Link>
                            <td className='w-1/12' >
                            <>
                            <form action={''} className='bg-rose-500 p-2 text-white text-sm lg:rounded-md w-full flex items-center justify-center rounded-full'>
                                <input type="text" hidden value={''} name='projectId' />
                                <button>
                                <div>
                                    <TrashIcon className='h-3 w-3 md:w-4 md:h-4 lg:hidden'/>
                                    <p className='hidden lg:block text-xs'>
                                    Delete
                                    </p>
                                </div>                                
                                </button>
                            </form>                  
                            </>
                        </td>                
                    </tr> 
                </tbody>
            </table>    
        </div>
    </>
  )
}







{/*<td className='w-1/12' >
<>
<div className='w-full flex gap-0.5 justify-center bg-gray-300 p-2 lg:rounded-md rounded-full '>
<ClockIcon className='h-3 w-3 md:w-4 md:h-4 lg:hidden'/>
<p className='hidden lg:block text-xs'>
      PENDING
      </p>
       </div>
</>
<>
     <div className='w-full flex gap-0.5 justify-center bg-green-300 p-2 lg:rounded-md
    rounded-full'>
      <CheckCircleIcon className='h-3 w-3 md:w-4 md:h-4 lg:hidden'/>
 
    <p className='text-xs hidden lg:block '>
      ACCEPTED</p>
       </div>
    </>
    <>
    <div className='w-full flex  bg-rose-500 p-2 justify-center lg:rounded-md
    rounded-full  '>
      <ExclamationTriangleIcon className='h-3 w-3 md:w-4 md:h-4 lg:hidden'/>

    <p className='text-xs hidden lg:block '>
      REJECTED</p>
  
       </div>
    </>
    </td> */}