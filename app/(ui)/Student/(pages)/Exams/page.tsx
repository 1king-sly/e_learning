import React from 'react'
import SearchBar from '../../Component/SearchBar'
import Folder from '../../Component/Folder'

export default function ExamsPage() {
  return (
    <>
        <div>
            <div className='mx-20 mt-10'>
                <h1 className='text-4xl font-serif font-bold'>Exams</h1>
            </div>
            <SearchBar placeholder='Search'></SearchBar>

            <Folder></Folder>
        </div>
    </>
  )
}
