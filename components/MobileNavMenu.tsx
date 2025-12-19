'use client'

import { useUtilityStore } from '@/lib/zustand/store';
import { CloseButton } from './Buttons';
import Logo from './Logo';
import { NavbarLinks } from '@/const';
import { AngleDownIcon, AngleUpIcon } from '@/icons';
import { useState } from 'react';

const MobileNavMenu = () => {
  const { isMenuOpen } = useUtilityStore();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  
  const handleNavClick = (navLabel: string) => {
    setOpenDropdown(openDropdown === navLabel ? null : navLabel);
  };

  return (
    <div className={`
      fixed w-full
      top-0 right-0 z-80
      transition duration-300 ease-in-out
      ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
    `}>
      <div className="flex items-center">
        {/* overlay */}
        <div className="hidden lg:block w-2/3 h-screen bg-black/50"></div>
        <div className="w-full lg:w-1/2 h-screen bg-white text-black">
          <div className="p-5 md:p-10">
            <div className="w-full mb-10 flex items-center justify-between">
              <Logo />
              <CloseButton />
            </div>

            <ul className="w-full flex flex-col gap-5">
              {NavbarLinks.map((item) => (
                <li key={item.label} className='w-full'>
                  <button 
                    className='w-full flex items-center justify-between'
                    onClick={() => handleNavClick(item.label)}
                    aria-expanded={openDropdown === item.label}
                  >
                    <span className="align-left text-[.7rem] md:text-[1rem] font-semibold uppercase">{item.label}</span>
                    {openDropdown === item.label ? (
                      <AngleUpIcon size={20} color='black' />
                    ) : (
                      <AngleDownIcon size={20} color='black' />
                    )}
                  </button>

                  {/* submenu */}
                  <div className="">
                    <ul className={`
                      w-full flex flex-col gap-2 md:gap-4 overflow-hidden
                      transition-all duration-300 ease-in-out
                      ${openDropdown === item.label ? 'max-h-96 mt-3' : 'max-h-0'}
                    `}>
                      {item.sublinks.map((sublink) => (
                        <li key={sublink.label}>
                          <a 
                            href={sublink.link} 
                            className='
                              text-[.7rem] md:text-[.9rem] block py-2 px-3
                              hover:bg-gray-100 transition-colors duration-200 uppercase
                              rounded-md
                            '
                          >
                            {sublink.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MobileNavMenu