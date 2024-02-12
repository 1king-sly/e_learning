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

        <div className='grid grid-cols-4 gap-3 mx-20'>
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
        {/* <div className='flex flex-row justify-between'>
            <div className='mx-20 mt-10'>
                <h1 className='text-4xl font-serif font-bold'>Clusters</h1>
            </div>
            <Link href='/NewAdmin/Cluster/CreateCluster'>
            <div className='mt-10 mx-20 cursor-pointer'>
                <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 24 24"><path fill="currentColor" d="M11.5 12.5H6v-1h5.5V6h1v5.5H18v1h-5.5V18h-1z"/></svg>
            </div></Link>
        </div> */} 