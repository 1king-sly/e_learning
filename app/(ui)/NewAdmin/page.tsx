'use client'
import React from 'react'
import { usePathname } from 'next/navigation'

export default function page() {
    const pathname = usePathname()
    return (
        <div>{pathname}</div>
  )
}
