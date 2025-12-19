import React from 'react'
import MobileNavMenu from '../MobileNavMenu'

interface Props {
  children?: React.ReactNode
}

const MainContainer = ({ children }: Props) => {
  return (
    <div className="w-full relative overflow-x-hidden">
      <MobileNavMenu />
      {children}
    </div>
  )
}

export default MainContainer