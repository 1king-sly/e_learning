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
            <div className='mx-20'>
                <table className='w-full'>
                    <tbody className='flex flex-col w-full gap-3'>
                        {students?.map((student)=>(

                <tr className='bg-gray-100 bg-opacity-65' key={student.id} >
                             <td className='w-1/4 pl-5 pr-32'>{student.firstName}</td>
                             <td className='w-1/4 px-32'>{student.registrationNumber}</td>
                             <td className='w-1/4 px-32'>{student.email} </td>
                             
                             <div className='flex flex-row w-full  justify-between my-2'>
                                <Link href={`/NewAdmin/Student/${student.id}`}>
                                    <button className='bg-sky-300 p-2 text-white text-sm lg:rounded-md rounded-full  w-[8vw] mx-3'>
                                    <div>
                                        <EyeIcon className=' h-3 w-3 md:w-4 md:h-4 lg:hidden'/>
                                        <p className='hidden lg:block text-xs'>
                                        View

                                        </p>
                                    </div>
                                    </button>
                                </Link>

                                <form action={deleteSingleUser} className='w-[8vw]'>
              <input type="text" title='userId' name='userId' className='hidden ' value={student.id}/>
              <button className='bg-rose-500 p-2 text-white text-sm lg:rounded-md w-full flex items-center justify-center rounded-full mx-3' type='submit'>
                <div>
                  <TrashIcon className='h-3 w-3 md:w-4 md:h-4 lg:hidden'/>
                  <p className='hidden lg:block text-xs'>
                  Delete
                  </p>
                </div>
            </button>

              </form>
                            </div>
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
