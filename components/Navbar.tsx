import React from 'react'
import ContentContainer from './container/ContentContainer'

const Navbar = () => {
  return (
    <header className="w-full">
      <ContentContainer>
        <nav className="flex items-center justify-between">
          <h1 className="font-bold text-[32px]">CERITAMATA</h1>
          <ul className="flex items-center gap-4">
            <h1>hello</h1>
          </ul>
        </nav>
      </ContentContainer>
    </header>    
  )
}

export default Navbar