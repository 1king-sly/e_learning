'use server'
import React from 'react'
import Link from 'next/link'
import SearchBar from '@/app/(ui)/Student/Component/SearchBar';
import { fetchAllClusters } from '@/app/lib/actions'
import CreateCluster from '../Components/CreateCluster';

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
            <Link href={`/NewAdmin/Cluster/${cluster.id}`}  key={cluster.id}>
                <div className='my-10 shadow-lg bg-gray-100 w-full h-[25vh] rounded-xl text-center text-lg'>
               <h1 className='py-5 px-2'>
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
  