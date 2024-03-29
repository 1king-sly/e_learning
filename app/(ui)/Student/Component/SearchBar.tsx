'use client'
import React from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/16/solid'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useDebouncedCallback } from 'use-debounce'

export default function SearchBar({placeholder}:{placeholder:string}) {

  const pathname = usePathname()
    const searchParams = useSearchParams()
    const {replace} = useRouter()

    const handleSearch = useDebouncedCallback( (term:string) =>{
    
      const params = new URLSearchParams(searchParams)
      
       if(term){
        params.set('query',term)
       }
       else{
        params.delete('query')
       }
  
       replace(`${pathname}?${params.toString()}`)
  
      },200)
  return (
    <div className='relative mx-20 my-5 max-[425px]:mx-6'>
<input type="text"  name='searchBox'  placeholder={placeholder} className='w-full p-2 border-2 rounded-lg pr-10 outline-sky-300'   onChange={(e)=>{
        handleSearch(e.target.value)
      }}/>
    <MagnifyingGlassIcon className='h-5 w-5 md:h-6 md:w-6 lg:w-7 lg:h-7 absolute top-2 right-2 cursor-pointer'></MagnifyingGlassIcon>
    </div>
  )
}
