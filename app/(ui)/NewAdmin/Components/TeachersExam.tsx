'use server'
import React from 'react'
import { fetchUserCreatedExamsDashboard } from '@/app/lib/actions';
import Link from 'next/link';

export default async function TeachersExam(/*{params}: {params: {userId:string}}*/) {
    // const userId = params.userId;

    // const userExam = await fetchUserCreatedExamsDashboard(userId)
  return (
    <>
        <div>
            
          <table className='w-full'>
            <tbody className='flex-col mt-4 gap-3 flex'>
                <Link href='NewAdmin/Exams/${exam.id}'>
                  <tr className='min-[426px]:justify-around  flex bg-gray-100 py-2 w-full pr-2 items-center max-[425px]:gap-6'>
                    <td className='w-1/3 truncate'>Exam Title</td>
                    <td className='w-1/3 max-[425px]:hidden'>01/22/2024{/*{new Date(exam.createdAt).toLocaleDateString()}*/}</td>
                  </tr>
                </Link>
            </tbody>
          </table>
      </div>
        
    </>
  )
}
