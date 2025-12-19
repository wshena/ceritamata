'use client'
import { NavbarLinks } from '@/const'
import ContentContainer from './container/ContentContainer'
import { AngleDownIcon, SearchIcon } from '@/icons'
import { useScroll } from '@/hooks/useScroll'
import Logo from './Logo'
import { MenuButton, SearchButton } from './Buttons'

const Navbar = () => {
  const isScrolled = useScroll(50) // Threshold 50px

  return (
    <header 
      className={`w-full px py-3 xl:py-0 fixed top-0 left-0 z-50 transition-all duration-500 ease-in-out ${
        isScrolled 
          ? 'shadow-lg backdrop-blur-sm bg-white/95' // Efek glassmorphism
          : ''
      }`}
      style={!isScrolled ? {
        background: "linear-gradient(to bottom, rgb(0 0 0 / .3), #fff0)"
    } : {}}>
      <ContentContainer>
        <nav className="flex items-center justify-between">
          <Logo />

          {/* nav */}
          <ul className="hidden xl:flex items-center gap-4">
            {NavbarLinks?.map((item) => (
              <li key={item.label} className='group relative py-5 cursor-pointer text-[.9rem] font-bold capitalize flex items-center gap-3'>
                <p key={item.label} className={`gorup-hover:text-[#333] ${isScrolled ? 'text-black' : 'text-white'}`}>{item.label}</p>
                <AngleDownIcon size={15} color='' style={`${isScrolled ? 'text-black' : 'text-white'}`} />

                {/* sublink */}
                <div className="absolute w-62.5 left-0 rounded-lg bg-white shadow-xl transition-all duration-300 ease-in-out opacity-0 -top-300 group-hover:top-15 group-hover:opacity-100">
                  <ul className="flex flex-col items-start">
                    {item.sublinks?.map((item:{label:string, link:string}) => (
                      <li key={item.label} className='w-full capitalize py-3 px-5 border-b border-b-gray-300 text-[#827d7d] hover:text-black text-[.8rem]'>
                        <a href={item.link}>{item.label}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
          
          <div className="flex items-center gap-4">
            {/* search button */}
            <SearchButton ariaLabel='Cari wisata populer di jogjakarta' handleClick={() => {}} isScrolled={isScrolled} />
            {/* menu button */}
            <MenuButton isScrolled={isScrolled} />
          </div>
        </nav>
      </ContentContainer>
    </header>    
  )
}

export default Navbar