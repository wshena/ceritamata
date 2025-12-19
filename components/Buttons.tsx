'use client'

import { CloseIcon, MenuIcon, SearchIcon } from '@/icons'
import { useUtilityStore } from '@/lib/zustand/store'
import React from 'react'

export const IconButton = ({label, icon, style, handleClick, isLink, url}:IconButtonProps) => {
  return (
    <>
    {isLink ? (
      <a href={url} className={`flex items-center gap-3 px-5 py-3 rounded-lg ${style}`}>
        {label}
        {icon}
      </a>
    ) : (
      <button type="button" onClick={handleClick} className={`flex items-center gap-3 px-5 py-3 rounded-lg ${style}`}>
        {label}
        {icon}
      </button>
    )}
    </>
  )
}

export const SearchButton = ({ariaLabel, handleClick, isScrolled}:{ariaLabel:string, handleClick:() => void, isScrolled:boolean}) => {
  return (
    <button lang='en' type='button' aria-label={ariaLabel} onClick={handleClick} className='cursor-pointer'>
      <SearchIcon size={20} color='' style={`${isScrolled ? 'text-black' : 'text-white'}`} />
    </button>
  )
}

export const MenuButton = ({isScrolled}:{isScrolled:boolean}) => {
  const {toggleMenu} = useUtilityStore();

  return (
    <button type="button" onClick={toggleMenu} className='block xl:hidden cursor-pointer'>
      <MenuIcon size={20} color='' style={`${isScrolled ? 'text-black' : 'text-white'}`} />
    </button>
  )
}

export const CloseButton = () => {
  const {closeMenu} = useUtilityStore();

  return (
    <button type="button" onClick={closeMenu} className='block xl:hidden cursor-pointer'>
      <CloseIcon size={20} color='black' />
    </button>
  )
}