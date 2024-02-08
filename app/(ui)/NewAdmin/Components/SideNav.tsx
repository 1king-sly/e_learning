import React from 'react'
import Link from 'next/link'

export default function SideNav() {
  return (
    <>
        <div className='p-8 pl-10 h-screen  w-4/5 font-semibold hidden sm:block md:flex-none md:justify-start md:p-2 md:px-3 gap-2 items-center'>
        <h1 className='text-3xl md:text-sm sm:text-xs pt-2 px-4 hidden lg:block'>E LEARNING </h1>
        <div className='md:text-sm '>
          <ul>
            <div className='flex my-3 hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3 gap-2 rounded-md w-full h-12'>
              <Link href="/NewAdmin/Dashboard"  className='inline-flex items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="currentColor" d="M13.5 9V4H20v5zM4 12V4h6.5v8zm9.5 8v-8H20v8zM4 20v-5h6.5v5zm1-9h4.5V5H5zm9.5 8H19v-6h-4.5zm0-11H19V5h-4.5zM5 19h4.5v-3H5zm4.5-3"/></svg>
                <li className='ml-5 hidden lg:block'>Dashboard</li>
              </Link></div>
            <div className='flex my-3 hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3 gap-2 rounded-md w-full h-12'>
              <Link href="/NewAdmin/Student"  className='inline-flex items-center'>
              <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 256 256"><path fill="currentColor" d="m225.27 60.21l-96-32a4 4 0 0 0-2.54 0l-96 32A4 4 0 0 0 28 64v80a4 4 0 0 0 8 0V69.55l43.88 14.63a60 60 0 0 0 24.54 91c-20.86 5.74-39 19.13-51.77 38.65a4 4 0 0 0 6.7 4.36C75.17 193.92 100.2 180 128 180s52.83 13.92 68.65 38.18a4 4 0 0 0 6.7-4.36c-12.72-19.52-30.91-32.91-51.77-38.65a60 60 0 0 0 24.54-91l49.15-16.39a4 4 0 0 0 0-7.58ZM180 120a52 52 0 1 1-92.07-33.14l38.8 12.93a3.95 3.95 0 0 0 2.54 0l38.8-12.93A51.85 51.85 0 0 1 180 120m-52-28.22L44.65 64L128 36.22L211.35 64Z"/></svg>
                <li className='ml-5 hidden lg:block'>Student</li>
              </Link></div>
            <div className='flex my-3 hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3 gap-2 rounded-md w-full h-12'>
              <Link href="/NewAdmin/Teachers"  className='inline-flex items-center'>
              <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 256 256"><path fill="currentColor" d="M216 44H40a12 12 0 0 0-12 12v144a12 12 0 0 0 12 12h13.39a4 4 0 0 0 3.61-2.29a52 52 0 0 1 94 0a4 4 0 0 0 3.61 2.29H216a12 12 0 0 0 12-12V56a12 12 0 0 0-12-12m4 156a4 4 0 0 1-4 4h-58.92a60.38 60.38 0 0 0-34.68-29.07a36 36 0 1 0-36.8 0A60.38 60.38 0 0 0 50.92 204H40a4 4 0 0 1-4-4V56a4 4 0 0 1 4-4h176a4 4 0 0 1 4 4Zm-116-28a28 28 0 1 1 28-28a28 28 0 0 1-28 28m92-92v96a4 4 0 0 1-4 4h-16a4 4 0 0 1 0-8h12V84H68v12a4 4 0 0 1-8 0V80a4 4 0 0 1 4-4h128a4 4 0 0 1 4 4"/></svg>
                <li className='ml-5 hidden lg:block'>Teachers</li>
              </Link></div>
            <div className='flex my-3 hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3 gap-2 rounded-md w-full h-12'>
              <Link href="/"  className='inline-flex items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 2048 2048"><path fill="currentColor" d="M1728 896q24 0 47 8t42 21t33 33t24 42q5 14 20 52t35 88t40 105t38 103t29 82t12 42q0 27-19 45t-45 19H832q-26 0-45-18t-19-46q0-12 8-38t20-56t23-57t17-41H448q-26 0-45-18t-19-46q0-12 8-38t20-56t23-57t17-41H64q-26 0-45-18T0 960q0-8 11-42t29-82t39-103t40-106t34-88t21-53q17-45 57-73t89-29h640q24 0 47 8t42 21t33 33t24 42l58 152h180q24 0 47 8t42 21t33 33t24 42l58 152zm-1228 0l58-154q17-45 57-73t89-29h323l-41-109q-2-6-10-12t-16-7H320q-7 0-15 6t-10 12L156 896zm384 256l58-154q17-45 57-73t89-29h323l-41-109q-2-6-10-12t-16-7H704q-7 0-15 6t-10 12q-35 92-69 183t-70 183zm1008 256l-138-365q-2-6-10-12t-16-7h-640q-7 0-15 6t-10 12l-42 110l-48 128q-24 64-49 128z"/></svg>
                <li className='ml-5 hidden lg:block'>Sections</li>
              </Link></div>
            <div className='flex my-3 hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3 gap-2 rounded-md w-full h-12'>
              <Link href="/NewAdmin/Exams"  className='inline-flex items-center'>
              <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 48 48"><g fill="currentColor"><path d="M20 15a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2h-8a1 1 0 0 1-1-1m1 3a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2zm-1 10a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2h-8a1 1 0 0 1-1-1m1 3a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2z"/><path fill-rule="evenodd" d="M10 27a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1zm2 1v3h3v-3z" clip-rule="evenodd"/><path d="M17.707 15.707a1 1 0 0 0-1.414-1.414L13 17.586l-1.293-1.293a1 1 0 0 0-1.414 1.414L13 20.414z"/><path fill-rule="evenodd" d="M10 6a4 4 0 0 0-4 4v28a4 4 0 0 0 4 4h20a4 4 0 0 0 4-4V10a4 4 0 0 0-4-4zm-2 4a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2v28a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2zm28 6a3 3 0 1 1 6 0v20.303l-3 4.5l-3-4.5zm3-1a1 1 0 0 0-1 1v2h2v-2a1 1 0 0 0-1-1m0 22.197l-1-1.5V20h2v15.697z" clip-rule="evenodd"/></g></svg>
                <li className='ml-5 hidden lg:block'>Exams</li>
              </Link></div>
            <div className='flex my-3 hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3 gap-2 rounded-md w-full h-12'>
              <Link href="/"  className='inline-flex items-center'>
              <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 48 48"><rect width="8.759" height="36.737" x="19.796" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1.302" ry="1.302"/><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><rect width="6.569" height="27.553" x="31.798" y="14.741" rx=".976" ry=".976" transform="rotate(-10 35.083 28.517)"/><path d="m30.324 19.582l2.143-.378"/></g><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.796 38.027h8.759m-8.759-2.536h8.759m-8.758-2.309h8.758"/><rect width="31.385" height="7.056" x="-2.222" y="23.017" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1.302" ry="1.302" transform="rotate(-79.865 13.47 26.545)"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m11.636 17.055l6.467 1.154"/></svg>
                <li className='ml-5 hidden lg:block'>Subjects</li>
              </Link></div>
            <div className='flex my-3 hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3 gap-2 rounded-md w-full h-12'>
              <Link href="/"  className='inline-flex items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="currentColor" d="m10.135 21l-.362-2.892q-.479-.145-1.035-.454q-.557-.31-.948-.664l-2.667 1.135l-1.865-3.25l2.305-1.738q-.044-.272-.073-.56q-.028-.287-.028-.558q0-.252.028-.53t.073-.626L3.258 9.125l1.865-3.212L7.771 7.03q.448-.373.97-.673q.52-.3 1.013-.464L10.134 3h3.731l.362 2.912q.575.201 1.016.463q.442.262.909.654l2.725-1.116l1.865 3.212l-2.382 1.796q.082.31.092.568q.01.26.01.511q0 .233-.02.491q-.019.259-.088.626l2.344 1.758l-1.865 3.25l-2.681-1.154q-.467.392-.94.673q-.474.281-.985.444L13.865 21zM11 20h1.956l.369-2.708q.756-.2 1.36-.549q.605-.349 1.232-.956l2.495 1.063l.994-1.7l-2.189-1.644q.125-.427.166-.786q.04-.358.04-.72q0-.38-.04-.72q-.04-.34-.166-.747l2.227-1.683l-.994-1.7l-2.552 1.07q-.454-.499-1.193-.934t-1.4-.578L13 4h-1.994l-.312 2.688q-.756.162-1.39.52q-.633.36-1.26.986L5.55 7.15l-.994 1.7l2.169 1.62q-.125.336-.175.73q-.05.394-.05.82q0 .38.05.755t.156.73l-2.15 1.645l.994 1.7l2.475-1.05q.588.594 1.222.953t1.428.559zm.973-5.5q1.046 0 1.773-.727q.727-.727.727-1.773q0-1.046-.727-1.773q-.727-.727-1.773-.727q-1.052 0-1.776.727T9.473 12q0 1.046.724 1.773q.724.727 1.776.727M12 12"/></svg>
                <li className='ml-5 hidden lg:block'>Settings</li>
              </Link></div>
          </ul>
        </div>
    </div>
    </>
  )
}
