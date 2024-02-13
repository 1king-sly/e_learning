'use server'
import React from 'react'
import { FolderIcon } from '@heroicons/react/24/outline'
import { fetchStudentExamClusters } from '@/app/lib/actions'


export default async function Folder({searchParams}:{searchParams:string}) {


  const params = new URLSearchParams(searchParams);
  const q = params.get('query') || '';
  const exams = await fetchStudentExamClusters(q)
  return (
  <>
    <div>
        <div className='pl-20 grid grid-cols-4 gap-4 p-5'>
         { exams?.map((exam)=>(
            <div className='' key={exam.id}>
            <FolderIcon className='h-5 w-5 md:h-6 md:w-6 lg:w-40 lg:h-40'></FolderIcon>
            <h1 className='ml-8 text-lg '>{exam.title} </h1>
            </div>
         ))}   
        </div>
    </div>
  </>  
  )
}
