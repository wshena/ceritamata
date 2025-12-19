import React from 'react'
import ContentContainer from './container/ContentContainer'
import { NavbarLinks } from '@/const'
import Logo from './Logo'

const Footer = () => {
  return (
    <footer className="w-full px py-10 xl:py-15">
      <ContentContainer>
        <nav className="flex flex-col gap-7">
          <ul className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-5 lg:gap-10">
            {NavbarLinks.map((item) => (
              <li key={item.label} className='flex flex-col gap-1'>
                <span className='font-semibold capitalize mb-2 pb-2 border-b border-b-gray-800'>{item.label}</span>
                <ul className='flex flex-col gap-3'>
                  {item.sublinks && item.sublinks.map((sublink) => (
                    <li key={sublink.label}>
                      <a
                        href={sublink.link}
                        className="capitalize text-sm text-gray-600 hover:text-gray-900"
                      >
                        {sublink.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>

          <span className="block w-full h-px bg-gray-300"></span>

          <div className="w-full flex flex-col md:flex-row md:items-center justify-between gap-5 md:gap-0">
            <div className="flex items-center gap-5">
              <Logo />
              <span className="text-sm text-gray-600">© 2024 Cerita Mata. All rights reserved.</span>
            </div>
            <div className="flex items-center gap-5">
              <a href="#" className="text-sm text-gray-600 hover:text-gray-900">Privacy Policy</a>
              <a href="#" className="text-sm text-gray-600 hover:text-gray-900">Terms of Service</a>
            </div>
          </div>
        </nav>
      </ContentContainer>
    </footer>
  )
}

export default Footer