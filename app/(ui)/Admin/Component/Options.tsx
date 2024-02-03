'use server'
import React from 'react'
import { fetchAllClusters } from '@/app/lib/actions';

export default async function Options({value,handleChange,disabled}:{
  value:string,disabled:boolean,handleChange?:(event: React.ChangeEvent<HTMLTextAreaElement | HTMLSelectElement | HTMLInputElement>)=>void
}) {

    const clusters = await fetchAllClusters()

  return (
    <>

<select
        name='category'
        className='bg-white outline-sky-400 px-2 py-1 rounded-md w-80 text-gray-800 text-sm'
        required
        title='category'
        value={value}
        onChange={handleChange}
        disabled={disabled}
        
      >
        <option disabled value=''>
          Choose Cluster
        </option>
        {clusters && clusters.length > 0 ? (
          clusters.map((cluster) => (
            <option key={cluster.id} value={cluster.title}>
              {cluster.title}
            </option>
          ))
        ) : (
          <option value='' disabled>
            No clusters available
          </option>
        )} 

</select>

    </>
  )
}
