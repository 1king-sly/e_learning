import React from 'react'
import Link from 'next/link'
import { EyeIcon } from '@heroicons/react/24/outline'

export default function SingleCluster() {
  return (
    <>
        <div className=' px-20 pb-5 max-[425px]:p-2 rounded-2xl'>
        <table className=' w-full'>
        <tbody className='  flex-col mt-4 gap-3 flex'>
            <tr className='min-[426px]:justify-around  flex bg-gray-100 py-2 justify-between w-full pr-2 items-center' key={''}>
                    <td className='max-[425px]:w-3/5 max-[375px]:w-4/6 max-[320px]:w-3/5 w-1/3 truncate '>Exam Title/ Cluster Name </td>
                    <td className='w-1/3 max-[425px]:hidden' >Subject</td>
                    <Link href=''>
                    <td className='w-1/12' >
                    <button className='bg-sky-300 p-2 text-white text-sm lg:rounded-md rounded-full '>
                        <div>
                        <EyeIcon className=' h-3 w-3 md:w-4 md:h-4 lg:hidden'/>
                        <p className='hidden lg:block text-xs'>
                            View
                        </p>
                        </div>
                        </button>
                    </td>
                    </Link>
                </tr>
                <tr className='min-[426px]:justify-around  flex bg-gray-100 py-2 justify-between w-full pr-2 items-center' key={''}>
                    <td className='max-[425px]:w-3/5 max-[375px]:w-4/6 max-[320px]:w-3/5 w-1/3 truncate '>Exam Title/ Cluster Name  </td>
                    <td className='w-1/3 max-[425px]:hidden' >Physics</td>
                    <Link href=''>
                    <td className='w-1/12' >
                    <button className='bg-sky-300 p-2 text-white text-sm lg:rounded-md rounded-full '>
                        <div>
                        <EyeIcon className=' h-3 w-3 md:w-4 md:h-4 lg:hidden'/>
                        <p className='hidden lg:block text-xs'>
                            View
                        </p>
                        </div>
                        </button>
                    </td>
                    </Link>
                    </tr>
        </tbody>
        </table>
        </div>
    </>
    )
}
