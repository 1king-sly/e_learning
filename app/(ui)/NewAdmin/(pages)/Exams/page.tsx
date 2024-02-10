import React from 'react'
import SearchBar from '@/app/(ui)/Student/Component/SearchBar'
import ExamCard from '../../Components/ExamCard'
import Link from 'next/link'

export default function ExamsPage() {
  return (
    <>
        <div>
            <div className='flex flex-row justify-between'>
                <div className='mx-20 mt-10'>
                    <h1 className='text-4xl font-serif font-bold'>Exams</h1>
                </div>
                <div className='mt-10 mx-20 cursor-pointer'>
                    <Link href='/NewAdmin/Exams/Create'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 24 24"><path fill="currentColor" d="M11.5 12.5H6v-1h5.5V6h1v5.5H18v1h-5.5V18h-1z"/></svg>
                    </Link>
                </div>
            </div>
            
            <SearchBar></SearchBar>

            <ExamCard></ExamCard>
            <ExamCard></ExamCard>
            <ExamCard></ExamCard>

        </div>
    </>
  )
}
