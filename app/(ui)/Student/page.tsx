<<<<<<< HEAD
'use client'
import React from 'react'
import { usePathname } from 'next/navigation'

export default function StudentPage() {
  const pathName = usePathname()
  return (
    <div>{pathName}</div>
=======
import React from 'react'

export default function pages() {
  return (
    <div>pages</div>
>>>>>>> 326b669353f12cfbabcd17e8a3478ba4a89a77f5
  )
}
