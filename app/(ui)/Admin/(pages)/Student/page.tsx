'use server'
import React from 'react'
import SearchBar from '@/app/(ui)/Student/Component/SearchBar'
import AddStudent from '../../Components/AddStudent'
import Link from 'next/link'
import { TrashIcon, EyeIcon } from '@heroicons/react/24/outline'
import { fetchStudents,deleteSingleUser } from '@/app/lib/actions'

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
            <div className='w-full flex justify-center'>
                <table className='w-full mx-20'>
                    <tbody className='flex flex-col w-full gap-2'>
                        {students?.map((student)=>(

                <       tr className='bg-gray-100 bg-opacity-65 flex w-full md:w-auto sm:w-auto justify-between px-4 md:px-0'  key={student.id} >
                             <td className='w-1/4 lg:pl-5 pr-32 md:pr-0 md:pl-0 md:w-auto'>{student.firstName}</td>
                             <td className='w-1/4 px-32 md:px-0 md:w-auto max-[425px]:hidden'>{student.registrationNumber}</td>
                             <td className='w-1/4 px-32 md:px-0 md:w-auto max-[425px]:hidden'>{student.email} </td>
                             
                            
                                <Link href={`/Admin/Student/${student.registrationNumber}`} key={student.id}>
                                <td className='w-1/12 mx-4 md:mx-0 md:w-auto' >
                                <button className='bg-sky-300 p-2 text-white text-sm lg:rounded-md rounded-full w-[6vw] flex items-center justify-center'>
                                    <div>
                                        <EyeIcon className=' h-3 w-3 md:w-4 md:h-4 lg:hidden'/>
                                        <p className='hidden lg:block text-xs'>
                                        View

                            </p>
                            </div>
                            </button>
                        </td>
                        </Link>
                        <td className='w-1/12 lg:mx-4 md:mx-0 md:w-auto' >
                            <form action={deleteSingleUser} className='bg-rose-500 p-2 text-white text-sm lg:rounded-md w-[6vw] flex items-center justify-center rounded-full'>
                            <input type="text" hidden value={student.id} name='userId' />
                        <button>
                            <div>
                            <TrashIcon className='h-3 w-3 md:w-4 md:h-4 lg:hidden'/>
                            <p className='hidden lg:block text-xs'>
                            Delete
                            </p>
                            </div>
                            
                            </button>
                        </form>
                        </td>
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
