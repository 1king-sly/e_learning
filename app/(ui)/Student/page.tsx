'use client'
import React from 'react'
import { usePathname } from 'next/navigation'

export default function StudentPage() {
  const pathName = usePathname()
  return (
    <div>{pathName}</div>
  )
}
