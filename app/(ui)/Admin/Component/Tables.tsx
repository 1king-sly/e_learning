'use server'
import React from 'react';
import { getServerSession } from 'next-auth';
import { fetchUserCreatedExamsDashboard } from '@/app/lib/actions';
import Link from 'next/link';
import { authOptions } from '@/utils/authUptions';

export default async function Tables() {
  const session = await getServerSession(authOptions)
  const userId = session?.id
  const datas = await fetchUserCreatedExamsDashboard(userId);

  return (
    <>
       <div className=' pt-0 px-10 pb-20 max-[425px]:p-1  '>
       {datas && datas.length > 0 ? (
          <table className='w-full'>
            <tbody className='flex-col mt-4 gap-3 flex'>
              {datas.map((data) => (
                <Link href={`/NewAdmin/Exams/${data.id}`} key={data.id}>
                  <tr className='min-[426px]:justify-around  flex bg-gray-100 py-2 w-full pr-2 items-center max-[425px]:gap-6'>
                    <td className='w-1/3 truncate'>{data.title}</td>
                    <td className='w-1/3 max-[425px]:hidden'>{data.createdAt.toLocaleDateString()}</td>
                    
                  </tr>
                </Link>
              ))}
            </tbody>
          </table>
        ) : (
            <div className='w-full h-full flex items-center justify-center'>
          <p>No Exams available</p>
          </div>
        )}
    </div>
    </>
  );
}
