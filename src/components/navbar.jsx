'use client'
import React from 'react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import Link from 'next/link'


const Navbar = () => {
  const pathname = usePathname()

  return (
    <nav className='fixed z-50 bg-[#141414]/10 backdrop-blur-md w-full bottom-0 left-0 flex  justify-around items-center py-3 border-t border-white/10'>
      <Link href={'/'} className='flex h-10 justify-between items-center flex-col '>
          <Image
              src={`/icons/${pathname === '/' ? 'homeActive.svg' : 'home.svg'}`}
              width={25}
              height={25}
              className={`${pathname === '/' ? '' : 'opacity-60'}`}
          />
          <p className={`text-[9px] ${pathname === '/' ? 'text-cyan-300' : 'opacity-60'}`}>Inicio</p>
        </Link>
        <Link href={'/tragos'} className='flex h-10 justify-between items-center flex-col '>
          <Image
              src={`/icons/${pathname === '/tragos' ? 'cocktailActive.svg' : 'cocktail.svg'}`}
              width={25}
              height={25}
              className={`${pathname === '/tragos' ? '' : 'opacity-60'} translate-x-[3px]`}
          />
          <p className={`text-[9px] ${pathname === '/tragos' ? 'text-cyan-300' : 'opacity-60'}`}>Tragos</p>
        </Link>
        <Link href={'/carta'} className='flex h-10 justify-between items-center flex-col ' >
          <Image
              src={`/icons/${pathname === '/carta' ? 'cartaActive.svg' : 'carta.svg'}`}
              width={20}
              height={25}
              className={`${pathname === '/carta' ? '' : 'opacity-60'} translate-y-[3px]`}
          />
          <p className={`text-[9px] ${pathname === '/carta' ? 'text-cyan-300' : 'opacity-60'}`}>Comida</p>
        </Link>
        
        
        <Link href={'/sushi'} className='flex h-10 justify-between items-center flex-col ' >
          <Image
              src={`/icons/${pathname === '/sushi' ? 'sushiActive.svg' : 'sushimenu.svg'}`}
              width={25}
              height={25}
              className={`${pathname === '/sushi' ? '' : 'opacity-60'} translate-x-[2px] translate-y-[1px]`}
          />
          <p className={`text-[9px] ${pathname === '/sushi' ? 'text-cyan-300' : 'opacity-60'}`}>Sushi</p>
        </Link>
    </nav>
  )
}

export default Navbar