'use server'
import { countStudents, countTeachers,countAll } from '@/app/lib/actions'
import React from 'react'

export default async function Stats() {
  const students = await countStudents()
  const teachers = await countTeachers()
  const all = await countAll()
  return (
    <>
      <div className=''>
        <div className="px-4 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="grid gap-10 row-gap-8 lg:grid-cols-3">
            <div>
              <div className="flex">
                <h6 className="mr-2 text-4xl font-bold md:text-5xl text-deep-purple-accent-400">
                 {all || 0}
                </h6>
                <div className="flex items-center justify-center rounded-full bg-teal-accent-400 w-7 h-7">
                  <svg className="text-teal-900 w-7 h-7" stroke="currentColor" viewBox="0 0 52 52">
                    <polygon stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                  </svg>
                </div>
              </div>
              <p className="mb-2 font-bold md:text-lg">Total Users</p>
              
            </div>
            <div>
              <div className="flex">
                <h6 className="mr-2 text-4xl font-bold md:text-5xl text-deep-purple-accent-400">
                 {teachers || 0}
                </h6>
                <div className="flex items-center justify-center rounded-full bg-teal-accent-400 w-7 h-7">
                  <svg className="text-teal-900 w-7 h-7" stroke="currentColor" viewBox="0 0 52 52">
                    <polygon stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                  </svg>
                </div>
              </div>
              <p className="mb-2 font-bold md:text-lg">Teachers</p>
              
            </div>
            <div>
              <div className="flex">
                <h6 className="mr-2 text-4xl font-bold md:text-5xl text-deep-purple-accent-400">
                 {students || 0}
                </h6>
                <div className="flex items-center justify-center rounded-full bg-teal-accent-400 w-7 h-7">
                  <svg className="text-teal-900 w-7 h-7" stroke="currentColor" viewBox="0 0 52 52">
                    <polygon stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                  </svg>
                </div>
              </div>
              <p className="mb-2 font-bold md:text-lg">Students</p>
              
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
