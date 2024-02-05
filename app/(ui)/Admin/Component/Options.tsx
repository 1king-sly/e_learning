'use server'
import React from 'react'
import { fetchAllClusters } from '@/app/lib/actions';

export default async function Options() {

    const clusters = await fetchAllClusters()

  return (
    <>
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


    </>
  )
}
