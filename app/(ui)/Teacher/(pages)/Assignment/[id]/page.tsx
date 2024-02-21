'use server'
import React from 'react';
import {  fetchSingleCluster } from '@/app/lib/actions';
import SearchBar from '@/app/(ui)/Student/Component/SearchBar';
import Link from 'next/link';
import CreateExam from '../../../Component/CreateExam';




export default async function Page({ params,searchParams }: { params: { id: string },searchParams:string }) {  
    const search = new URLSearchParams(searchParams);
    const q = search.get('query') || '';
  const clusterId = params.id;
  const datas = await fetchSingleCluster(clusterId,q);
  

  return (
    <>
     <div className='p-10 pb-40 max-[425px]:p-1'>
     <CreateExam label={'Assignments'} clusterId={clusterId}/>
      <SearchBar placeholder='Search'/>
        <div className='mx-20'>
        {datas && datas.exams && datas.exams.length > 0 ? (
          <table className='w-full'>
            <tbody className='flex-col mt-4 gap-3 flex'>
              {datas.exams.map((exam) => (
                <Link href={`/Teacher/View/${exam.id}`} key={exam.id}>
                  <tr className='min-[426px]:justify-around  flex bg-gray-100 py-2 w-full pr-2 items-center max-[425px]:gap-6' key={exam.id}>
                    <td className='w-1/3 truncate'>{exam.title}</td>
                    <td className='w-1/3 max-[425px]:hidden'>{new Date(exam.createdAt).toLocaleDateString()}</td>
                  </tr>
                </Link>
              ))}
            </tbody>
          </table> 
        ) : (
          <div className='w-full h-full flex items-center justify-center'>
            <p>No Exams available</p>
          </div>
        )}</div>
      </div>  

    </>
  );
}