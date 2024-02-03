import React from 'react'
import SearchBar from '../../Component/SearchBar'
import Notes from '../../Component/Notes'

export default function NotesPage() {
  return (
    <div>
        <div className='mx-20 mt-10'>
            <h1 className='text-4xl font-serif font-bold'>Notes</h1>
        </div>
        <SearchBar></SearchBar>
        
        <Notes></Notes> 
        <Notes></Notes> 
        <Notes></Notes> 
    </div>
  )
}
