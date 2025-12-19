import Navbar from '@/components/Navbar'
import React from 'react'

interface layoutProps {
  children: React.ReactNode
}

const layout = ({ children }: layoutProps) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  )
}

export default layout