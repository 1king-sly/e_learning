'use server'
import React from 'react';
import {  fetchSingleExam } from '@/app/lib/actions';
import DocumentViewer from '@/app/(ui)/DocumentViewer';


export default async function Page({ params }: { params: { id: string } }) {  
    const id = params.id
    
    
    const exam = await fetchSingleExam(id)
    if(!exam){
        return null
    }

  return (
    <>
       <div className='w-full h-full flex items-center justify-center '>
        <DocumentViewer cloudinaryDocumentUrl={exam.file}></DocumentViewer>   

    </div>
    </>
  );
}