import React from 'react'
import Link from 'next/link'
import ClusterCard from '../Components/ClusterCard'

export default function page() {
  return (
    <>
        <div className='flex flex-row justify-between'>
            <div className='mx-20 mt-10'>
                <h1 className='text-4xl font-serif font-bold'>Clusters</h1>
            </div>
            <Link href='/NewAdmin/Cluster/CreateCluster'>
            <div className='mt-10 mx-20 cursor-pointer'>
                <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 24 24"><path fill="currentColor" d="M11.5 12.5H6v-1h5.5V6h1v5.5H18v1h-5.5V18h-1z"/></svg>
            </div></Link>
        </div>
        <div className='grid grid-cols-4 gap-3 mx-20'>
        <ClusterCard></ClusterCard>
        <ClusterCard></ClusterCard>
        <ClusterCard></ClusterCard>
        <ClusterCard></ClusterCard>
        <ClusterCard></ClusterCard>
        <ClusterCard></ClusterCard>
        <ClusterCard></ClusterCard>
        <ClusterCard></ClusterCard>
        </div>
    </>
  )
}
