import React from 'react'
import SingleCluster from '../../Components/SingleCluster'

export default function page(params: {params: {id:string}}) {
  return (
    <>
        <div>
            <div className='mx-20 mt-10'>
                <h1 className='text-4xl font-serif font-bold'>Cluster's Name</h1>
            </div>
            <SingleCluster></SingleCluster>
        </div>
    </>
    )
}
