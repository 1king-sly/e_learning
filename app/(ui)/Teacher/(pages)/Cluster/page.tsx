'use server'
import React from 'react'
import Link from 'next/link'
import SearchBar from '@/app/(ui)/Teacher/Component/SearchBar'
import { fetchAllClusters ,deleteSingleCluster} from '@/app/lib/actions'
import { TrashIcon, EyeIcon } from '@heroicons/react/24/outline';

export default async function page({searchParams}:{searchParams:string}) {

  const params = new URLSearchParams(searchParams);
  const q = params.get('query') || '';
  const clusters = await fetchAllClusters(q)
  
  return (
    <>
    <div className='p-10 pb-40 max-[425px]:p-1'>

        <SearchBar placeholder='Search'/>

        <div className='grid grid-cols-3 gap-3 mx-20'>
          {clusters?.map((cluster)=>(

        <Link href={`/Teacher/Cluster/${cluster.id}`} key={cluster.id} >
                    <div className='my-10 shadow-lg bg-gray-100 w-full h-[25vh] rounded-xl text-center text-lg' key={cluster.id}>
                  <h1 className='py-5 px-2 truncate'>
                    {cluster.title}
                  </h1>
                  <h1 className='py-5 px-2'>
                    {cluster.author?.firstName + " "+ cluster.author?.secondName}
                  </h1> 
              </div>  
        </Link>
                    
             
          ))}
       
        </div></div>
    </>
  )
}
  