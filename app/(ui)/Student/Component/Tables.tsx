'use server'
import React from 'react'
import {TrashIcon} from '@heroicons/react/24/outline'
import { fetchStudentRecentExams } from '@/app/lib/actions'

export default async function Tables() {

    const exams = await fetchStudentRecentExams()
  return (
    <>
        <div className='px-20 pb-1 max-[425px]:px-2'>
            <table className='w-full'>
                <tbody className='flex-col mt-4 flex gap-3'>
                    {exams?.map((exam)=>(
                        <tr className='min-[426px]:justify-between flex bg-gray-100 py-2 w-full pr-2 items-center rounded-lg  ' key={exam.exam.id}>
                        <td className='pl-5 max-[425px]:w-3/5 max-[375px]:w-4/6 max-[320px]:w-3/5'>{exam.exam.title}</td>
                    </tr>
                    ))}
                    
                </tbody>
            </table>
        </div>
    </>
  )
}
