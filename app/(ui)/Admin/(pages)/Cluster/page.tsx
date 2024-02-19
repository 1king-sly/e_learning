'use server'
import React from 'react'
import Link from 'next/link'
import SearchBar from '@/app/(ui)/Student/Component/SearchBar';
import { fetchAllClusters ,deleteSingleCluster} from '@/app/lib/actions'
import { TrashIcon, EyeIcon } from '@heroicons/react/24/outline';
import CreateCluster from '../../Components/CreateCluster';

export default async function page({searchParams}:{searchParams:string}) {

  const params = new URLSearchParams(searchParams);
  const q = params.get('query') || '';
  const clusters = await fetchAllClusters(q)
  
  return (
    <>
    <div className='p-10 pb-40 max-[425px]:p-1'>
      <CreateCluster></CreateCluster>

        <SearchBar placeholder='Search'/>

        <div className='grid grid-cols-3 gap-3 mx-20'>
          {clusters?.map((cluster)=>(
                <div className='my-10 shadow-lg bg-gray-100 w-full h-[25vh] rounded-xl text-center text-lg' key={cluster.id}>
               <h1 className='py-5 px-2'>
                {cluster.title}
               </h1>
               <h1 className='py-5 px-2'>
                {cluster.author?.firstName + " "+ cluster.author?.secondName}
               </h1>

               <div className='flex flex-row w-full justify-evenly'>
               <Link href={`/Admin/Cluster/${cluster.title}`} >
                <button className='bg-sky-300 p-2 text-white text-sm lg:rounded-md rounded-full  w-[8vw] flex items-center justify-center'>
                  <div>
                    <EyeIcon className=' h-3 w-3 md:w-4 md:h-4 lg:hidden'/>
                    <p className='hidden lg:block text-xs'>
                      View

                    </p>
                  </div>
                </button>
              </Link>

              
              <form action={deleteSingleCluster} className=''>
              <input type="text" title='clusterId' name='clusterId' className='hidden ' value={cluster.id}/>
              <button className='bg-rose-500 p-2 text-white text-sm lg:rounded-md w-[8vw] flex items-center justify-center rounded-full' type='submit'>
                <div>
                  <TrashIcon className='h-3 w-3 md:w-4 md:h-4 lg:hidden'/>
                  <p className='hidden lg:block text-xs'>
                  Delete
                  </p>
                </div>
            </button>

              </form>

             
            </div>
            
           </div>
             
          ))}
       
        </div></div>
    </>
  )
}
  