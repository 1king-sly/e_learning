'use server'
import React from 'react'
import { fetchSingleCluster } from '@/app/lib/actions';
import Link from 'next/link';

export default async function TeachersExam(/*{ params,searchParams }: { params: { id: string },searchParams:string} */) {
    // const search = new URLSearchParams(searchParams);
    // const q = search.get('query') || '';
    // const clusterId = params.id;
    // const datas = await fetchSingleCluster(clusterId,q);

  return (
    <>
        <div>
            
            {/* {datas && datas.exams && datas.exams.length > 0 ? ( */}
          <table className='w-full'>
            <tbody className='flex-col mt-4 gap-3 flex'>
              {/* {datas.exams.map((exam: any) => ( */}
                <Link href='NewAdmin/Exams/${exam.id}' /*key={exam.id}*/>
                  <tr className='min-[426px]:justify-around  flex bg-gray-100 py-2 w-full pr-2 items-center max-[425px]:gap-6'>
                    <td className='w-1/3 truncate'>Exam Title</td>
                    <td className='w-1/3 max-[425px]:hidden'>01/22/2024{/*{new Date(exam.createdAt).toLocaleDateString()}*/}</td>
                  </tr>
                </Link>
              {/* ))} */}
            </tbody>
          </table>
        {/* ) : (
          <div className='w-full h-full flex items-center justify-center'>
            <p>No Exams available</p>
          </div>
        )} */}
      </div>
        
    </>
  )
}
