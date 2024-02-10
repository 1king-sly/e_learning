'use server'
import React from 'react'
import SearchBar from '@/app/(ui)/Student/Component/SearchBar'
import List from '../../Components/List'

import Link from 'next/link'

import { fetchStudents } from '@/app/lib/actions'

export default async function StudentPage({searchParams}:{searchParams:string}) {
    const params = new URLSearchParams(searchParams);
    const q = params.get('query') || '';
    const students = await fetchStudents(q)
   


  return (
    <>
        <div>
            <div className='flex flex-row justify-between'>
            <div className='mx-20 mt-10'>
                <h1 className='text-4xl font-serif font-bold'>Students</h1>
            </div>
            <Link href='/NewAdmin/Students'>
            <div className='mt-10 mx-20 cursor-pointer'>
                <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 24 24"><path fill="currentColor" d="M11.5 12.5H6v-1h5.5V6h1v5.5H18v1h-5.5V18h-1z"/></svg>
            </div></Link>
            </div>
            
            <SearchBar></SearchBar>


            <div>
            <div className='mx-20'>
                <table className='w-full'>
                    <tbody className='flex flex-col w-full gap-3'>
                        {students?.map((student)=>(
                             <tr className='bg-gray-100 bg-opacity-65' key={student.id}>
                             <td className='w-1/4 pl-5 pr-32'>{student.firstName}</td>
                             <td className='w-1/4 px-32'>{student.registrationNumber}</td>
                             <td className='w-1/4 px-32'>{student.email} </td>
                             
                         </tr>
                        ))}
                                         
                    </tbody>
                </table>
            </div>
        </div>

        </div>
    </>
    )
}
