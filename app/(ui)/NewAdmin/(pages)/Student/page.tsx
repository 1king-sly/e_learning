'use server'
import React from 'react'
import SearchBar from '@/app/(ui)/Student/Component/SearchBar'
import AddStudent from '../../Components/AddStudent'
import Link from 'next/link'

import { fetchStudents } from '@/app/lib/actions'

export default async function StudentPage({searchParams}:{searchParams:string}) {
    const params = new URLSearchParams(searchParams);
    const q = params.get('query') || '';
    const students = await fetchStudents(q) 

  return (
    <>
        <div>
            <AddStudent></AddStudent>
          
            
            <SearchBar placeholder='Search'></SearchBar>


            <div>
            <div className='mx-20'>
                <table className='w-full'>
                    <tbody className='flex flex-col w-full gap-3'>
                        {students?.map((student)=>(
                            <Link href={
                                `/NewAdmin/Student/${student.id}`
                                } key={student.id}>

                <tr className='bg-gray-100 bg-opacity-65' >
                             <td className='w-1/4 pl-5 pr-32'>{student.firstName}</td>
                             <td className='w-1/4 px-32'>{student.registrationNumber}</td>
                             <td className='w-1/4 px-32'>{student.email} </td>
                             
                         </tr>
                                </Link>
                            
                        ))}
                                         
                    </tbody>
                </table>
            </div>
        </div>

        </div>
    </>
    )
}
