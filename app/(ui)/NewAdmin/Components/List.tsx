import React from 'react'

export default function List() {
  return (
    <>
        <div>
            <div className='mx-20'>
            <h1 className='text-2xl font-serif font-bold'>Students list</h1>
            </div>
            <div className='mx-20 justify-around'>
                <table>
                    <tr className=''>
                        <td className=''>Name</td>
                        <td>Form</td>
                        <td>Status</td>
                        <td>Username</td>
                    </tr>


                </table>
            </div>
        </div>
    </>
  )
}
