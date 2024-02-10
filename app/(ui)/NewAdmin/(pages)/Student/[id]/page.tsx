import React from 'react'
import ProfileIcon from '../../../Components/ProfileIcon'
import SingleStudent from '../../../Components/SingleStudent'

export default function SingleStudentPage({params}: {params: {id:string}}) {
  return (
    <>
        <div className='my-10'>
        <ProfileIcon></ProfileIcon>
        </div>
        <SingleStudent></SingleStudent>
    </>
    )
}
