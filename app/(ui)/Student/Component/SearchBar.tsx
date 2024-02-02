import React from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/16/solid'

export default function SearchBar() {
  return (
    <div className='relative mx-20 my-5'>
    <input type="text" placeholder="Search" className='w-full p-2 border-2 rounded-lg pr-10'/>
    <MagnifyingGlassIcon className='h-5 w-5 md:h-6 md:w-6 lg:w-7 lg:h-7 absolute top-2 right-2 cursor-pointer'></MagnifyingGlassIcon>
    </div>
  )
}
