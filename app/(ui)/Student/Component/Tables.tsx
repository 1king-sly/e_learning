import React from 'react'
import {TrashIcon} from '@heroicons/react/24/outline'

export default function Tables() {
  return (
    <>
        <div className='px-20 pb-1 max-[425px]:px-2'>
            <table className='w-full'>
                <tbody className='flex-col mt-4 flex'>
                    <tr className='min-[426px]:justify-around flex bg-gray-100 py-2 w-full pr-2 items-center rounded-lg'>
                        <td className='pl-5 max-[425px]:w-3/5 max-[375px]:w-4/6 max-[320px]:w-3/5'>Paper1</td>
                        <td className='w-full flex gap-0.5 justify-end p-2 lg:rounded-md rounded-full'></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </>
  )
}
