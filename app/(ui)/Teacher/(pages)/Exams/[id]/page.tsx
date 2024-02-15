'use server'
import React from 'react';
import {  fetchSingleExam } from '@/app/lib/actions';
import DocumentViewer from '@/app/(ui)/DocumentViewer';
import NotFound from './not-found';


export default async function Page({ params }: { params: { id: string } }) {  
    const id = params.id
    
    
    const exam = await fetchSingleExam(id)
    if(!exam){
        return <NotFound/>
    }

  return (
    <>
       <div className='w-full h-full flex items-center justify-center '>
        <DocumentViewer cloudinaryDocumentUrl={exam.file}></DocumentViewer>   

    </div>
    </>
  );
}