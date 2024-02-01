import React from 'react';
import Link from 'next/link';

export default function SideNav() {
  return (
    <div className='p-8 pl-10 h-screen bg-gray-50 w-1/5 font-semibold hidden sm:block hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3 gap-2 '>
        <h1 className='text-3xl'>E LEARNING </h1>
        <div className='cursor-pointer'>
        <ul>
          <div className='flex my-5 hover:'>
             <Link href="/"  className='inline-flex items-center'>
        <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="currentColor" d="M13.5 9V4H20v5zM4 12V4h6.5v8zm9.5 8v-8H20v8zM4 20v-5h6.5v5zm1-9h4.5V5H5zm9.5 8H19v-6h-4.5zm0-11H19V5h-4.5zM5 19h4.5v-3H5zm4.5-3"/></svg>
          <li className='ml-5 hidden md:block'>Dashboard</li>
          </Link></div>
          <div className='flex my-5 hover:'>
           <Link href="/"  className='inline-flex items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 512 512"><path fill="currentColor" d="M18.906 18.06v369.23C112.4 252.618 269.43 157.82 430.37 133.76L228.42 18.06zM325.72 179.327C200.38 223.948 86.405 311.052 18.157 422.568v33.602c113.074-111.488 277-176.38 434.373-175.25L325.72 179.326zm25.56 128.682c-125.218 21.642-246.974 83.6-333.124 174.812v10.297h58.916c113.9-65.58 251.166-95.325 379.492-80.814L351.28 308.008zm-2.253 120.96c-80.122 5.884-160.432 27.957-232.61 64.15h266.42z"/></svg>
          <li className='ml-5 hidden md:block'>Exams</li>
          </Link></div>
          <div className='flex my-5'>
           <Link href="/"  className='inline-flex items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="currentColor" d="M7 0h16v20H5V0zm14 18V2H7v16zM9 4h10v2H9zm10 4H9v2h10zM9 12h7v2H9zm10 10H3V4H1v20h18z"/></svg>
          <li className='ml-5 hidden md:block'>Notes</li>
          </Link></div>
          <div className='flex my-5'>
           <Link href="/"  className='inline-flex items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 16 16"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.75 1.75h10.5v12.5H2.75zm3 6h4.5m-4.5 3h2.5m-2.5-6h4.5"/></svg>
          <li className='ml-5 hidden md:block'>Assignment</li>
          </Link></div>
          <div className='flex my-5'>
           <Link href="/"  className='inline-flex items-center'><svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="currentColor" d="M4 19v-2h2v-7q0-2.075 1.25-3.687T10.5 4.2v-.7q0-.625.438-1.062T12 2q.625 0 1.063.438T13.5 3.5v.7q2 .5 3.25 2.113T18 10v7h2v2zm8 3q-.825 0-1.412-.587T10 20h4q0 .825-.587 1.413T12 22m-4-5h8v-7q0-1.65-1.175-2.825T12 6q-1.65 0-2.825 1.175T8 10z"/></svg>
          <li className='ml-5 hidden md:block'>Notifications</li>
          </Link></div>
          <div className='flex my-5'>
           <Link href="/"  className='inline-flex items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2"/><path d="M4.271 18.346S6.5 15.5 12 15.5s7.73 2.846 7.73 2.846M12 12a3 3 0 1 0 0-6a3 3 0 0 0 0 6"/></g></svg>
          <li className='ml-5 hidden md:block'>Profile Page</li>
          </Link></div>
          <div className='flex my-5'>
           <Link href="/"  className='inline-flex items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="currentColor" d="m10.135 21l-.362-2.892q-.479-.145-1.035-.454q-.557-.31-.948-.664l-2.667 1.135l-1.865-3.25l2.305-1.738q-.044-.272-.073-.56q-.028-.287-.028-.558q0-.252.028-.53t.073-.626L3.258 9.125l1.865-3.212L7.771 7.03q.448-.373.97-.673q.52-.3 1.013-.464L10.134 3h3.731l.362 2.912q.575.201 1.016.463q.442.262.909.654l2.725-1.116l1.865 3.212l-2.382 1.796q.082.31.092.568q.01.26.01.511q0 .233-.02.491q-.019.259-.088.626l2.344 1.758l-1.865 3.25l-2.681-1.154q-.467.392-.94.673q-.474.281-.985.444L13.865 21zM11 20h1.956l.369-2.708q.756-.2 1.36-.549q.605-.349 1.232-.956l2.495 1.063l.994-1.7l-2.189-1.644q.125-.427.166-.786q.04-.358.04-.72q0-.38-.04-.72q-.04-.34-.166-.747l2.227-1.683l-.994-1.7l-2.552 1.07q-.454-.499-1.193-.934t-1.4-.578L13 4h-1.994l-.312 2.688q-.756.162-1.39.52q-.633.36-1.26.986L5.55 7.15l-.994 1.7l2.169 1.62q-.125.336-.175.73q-.05.394-.05.82q0 .38.05.755t.156.73l-2.15 1.645l.994 1.7l2.475-1.05q.588.594 1.222.953t1.428.559zm.973-5.5q1.046 0 1.773-.727q.727-.727.727-1.773q0-1.046-.727-1.773q-.727-.727-1.773-.727q-1.052 0-1.776.727T9.473 12q0 1.046.724 1.773q.724.727 1.776.727M12 12"/></svg>
          <li className='ml-5 hidden md:block'>Settings</li>
          </Link></div>
        </ul>
        </div>
    </div>
  )
}
