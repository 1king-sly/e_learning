import React from 'react'
import ProfileForm from '../../Components/ProfileForm'
import ProfileIcon from '../../Components/ProfileIcon'

export default function ProfilePage() {
  return (
        <>
            <div>
                <div className='mx-20 mt-10'>
                    <h1 className='text-4xl font-serif font-bold'>Profile Page</h1>
                </div>
                <ProfileIcon></ProfileIcon>

                <ProfileForm></ProfileForm>
            </div>
        </>
    )
}
