import React from 'react'
import Link from 'next/link'

export default function SideNav() {
  return (
    <>
        <div className='p-8 pl-10 h-screen  w-4/5 font-semibold hidden sm:block md:flex-none md:justify-start md:p-2 md:px-3 gap-2 '>
        <h1 className='text-3xl md:text-sm sm:text-xs'>E LEARNING </h1>
        <div className='md:text-sm'>
          <ul>
            <div className='flex my-6'>
              <Link href="/NewAdmin/Dashboard"  className='inline-flex items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="currentColor" d="M13.5 9V4H20v5zM4 12V4h6.5v8zm9.5 8v-8H20v8zM4 20v-5h6.5v5zm1-9h4.5V5H5zm9.5 8H19v-6h-4.5zm0-11H19V5h-4.5zM5 19h4.5v-3H5zm4.5-3"/></svg>
                <li className='ml-5 hidden md:block'>Dashboard</li>
              </Link></div>
            <div className='flex my-6'>
              <Link href="/NewAdmin/Student"  className='inline-flex items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 256 256"><path fill="currentColor" d="m226.53 56.41l-96-32a8 8 0 0 0-5.06 0l-96 32A8 8 0 0 0 24 64v80a8 8 0 0 0 16 0V75.1l33.59 11.19a64 64 0 0 0 20.65 88.05c-18 7.06-33.56 19.83-44.94 37.29a8 8 0 1 0 13.4 8.74C77.77 197.25 101.57 184 128 184s50.23 13.25 65.3 36.37a8 8 0 0 0 13.4-8.74c-11.38-17.46-27-30.23-44.94-37.29a64 64 0 0 0 20.65-88l44.12-14.7a8 8 0 0 0 0-15.18ZM176 120a48 48 0 1 1-86.65-28.45l36.12 12a8 8 0 0 0 5.06 0l36.12-12A47.89 47.89 0 0 1 176 120m-48-32.43L57.3 64L128 40.43L198.7 64Z"/></svg>
                <li className='ml-5 hidden md:block'>Student</li>
              </Link></div>
            <div className='flex my-6'>
              <Link href="/"  className='inline-flex items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" width="1.88em" height="1.5em" viewBox="0 0 640 512"><path fill="currentColor" d="M208 352c-2.39 0-4.78.35-7.06 1.09C187.98 357.3 174.35 360 160 360c-14.35 0-27.98-2.7-40.95-6.91c-2.28-.74-4.66-1.09-7.05-1.09C49.94 352-.33 402.48 0 464.62C.14 490.88 21.73 512 48 512h224c26.27 0 47.86-21.12 48-47.38c.33-62.14-49.94-112.62-112-112.62m-48-32c53.02 0 96-42.98 96-96s-42.98-96-96-96s-96 42.98-96 96s42.98 96 96 96M592 0H208c-26.47 0-48 22.25-48 49.59V96c23.42 0 45.1 6.78 64 17.8V64h352v288h-64v-64H384v64h-76.24c19.1 16.69 33.12 38.73 39.69 64H592c26.47 0 48-22.25 48-49.59V49.59C640 22.25 618.47 0 592 0"/></svg>
                <li className='ml-5 hidden md:block'>Teachers</li>
              </Link></div>
            <div className='flex my-6'>
              <Link href="/"  className='inline-flex items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 2048 2048"><path fill="currentColor" d="M1728 896q24 0 47 8t42 21t33 33t24 42q5 14 20 52t35 88t40 105t38 103t29 82t12 42q0 27-19 45t-45 19H832q-26 0-45-18t-19-46q0-12 8-38t20-56t23-57t17-41H448q-26 0-45-18t-19-46q0-12 8-38t20-56t23-57t17-41H64q-26 0-45-18T0 960q0-8 11-42t29-82t39-103t40-106t34-88t21-53q17-45 57-73t89-29h640q24 0 47 8t42 21t33 33t24 42l58 152h180q24 0 47 8t42 21t33 33t24 42l58 152zm-1228 0l58-154q17-45 57-73t89-29h323l-41-109q-2-6-10-12t-16-7H320q-7 0-15 6t-10 12L156 896zm384 256l58-154q17-45 57-73t89-29h323l-41-109q-2-6-10-12t-16-7H704q-7 0-15 6t-10 12q-35 92-69 183t-70 183zm1008 256l-138-365q-2-6-10-12t-16-7h-640q-7 0-15 6t-10 12l-42 110l-48 128q-24 64-49 128z"/></svg>
                <li className='ml-5 hidden md:block'>Sections</li>
              </Link></div>
            <div className='flex my-6'>
              <Link href="/"  className='inline-flex items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="currentColor" d="M4 19v-2h2v-7q0-2.075 1.25-3.687T10.5 4.2v-.7q0-.625.438-1.062T12 2q.625 0 1.063.438T13.5 3.5v.7q2 .5 3.25 2.113T18 10v7h2v2zm8 3q-.825 0-1.412-.587T10 20h4q0 .825-.587 1.413T12 22m-4-5h8v-7q0-1.65-1.175-2.825T12 6q-1.65 0-2.825 1.175T8 10z"/></svg>
                <li className='ml-5 hidden md:block'>Exams</li>
              </Link></div>
            <div className='flex my-6'>
              <Link href="/"  className='inline-flex items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="currentColor" d="M9 3v15h3V3zm3 2l4 13l3-1l-4-13zM5 5v13h3V5zM3 19v2h18v-2z"/></svg>
                <li className='ml-5 hidden md:block'>Subjects</li>
              </Link></div>
            <div className='flex my-6'>
              <Link href="/"  className='inline-flex items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="currentColor" d="m10.135 21l-.362-2.892q-.479-.145-1.035-.454q-.557-.31-.948-.664l-2.667 1.135l-1.865-3.25l2.305-1.738q-.044-.272-.073-.56q-.028-.287-.028-.558q0-.252.028-.53t.073-.626L3.258 9.125l1.865-3.212L7.771 7.03q.448-.373.97-.673q.52-.3 1.013-.464L10.134 3h3.731l.362 2.912q.575.201 1.016.463q.442.262.909.654l2.725-1.116l1.865 3.212l-2.382 1.796q.082.31.092.568q.01.26.01.511q0 .233-.02.491q-.019.259-.088.626l2.344 1.758l-1.865 3.25l-2.681-1.154q-.467.392-.94.673q-.474.281-.985.444L13.865 21zM11 20h1.956l.369-2.708q.756-.2 1.36-.549q.605-.349 1.232-.956l2.495 1.063l.994-1.7l-2.189-1.644q.125-.427.166-.786q.04-.358.04-.72q0-.38-.04-.72q-.04-.34-.166-.747l2.227-1.683l-.994-1.7l-2.552 1.07q-.454-.499-1.193-.934t-1.4-.578L13 4h-1.994l-.312 2.688q-.756.162-1.39.52q-.633.36-1.26.986L5.55 7.15l-.994 1.7l2.169 1.62q-.125.336-.175.73q-.05.394-.05.82q0 .38.05.755t.156.73l-2.15 1.645l.994 1.7l2.475-1.05q.588.594 1.222.953t1.428.559zm.973-5.5q1.046 0 1.773-.727q.727-.727.727-1.773q0-1.046-.727-1.773q-.727-.727-1.773-.727q-1.052 0-1.776.727T9.473 12q0 1.046.724 1.773q.724.727 1.776.727M12 12"/></svg>
                <li className='ml-5 hidden md:block'>Settings</li>
              </Link></div>
          </ul>
        </div>
    </div>
    </>
  )
}
