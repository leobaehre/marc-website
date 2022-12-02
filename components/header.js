import Image from 'next/image'

import React, { useState } from 'react'

import { 
  Bars3Icon, 
} from '@heroicons/react/24/solid'

import Logo from '../public/logo.svg'
import Flag from '../public/flag.png'

export default function Header() {

  const [menuOpen, setMenuOpen] = useState(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }

  return (
    <div className="relative z-10 container mx-auto p-2 flex flex-row items-center justify-between ">
        <div className=''>
            <Logo className=""/>
        </div>
        <ul className="hidden md:flex flex-row gap-10 items-center text-white">
          <li className='font-bold'>Home</li>
          <li>Publicaties</li>
          <li>Foto's</li>
          <li>Over Mij</li>
          <li>Contact</li>
          <li><Image src={Flag} alt='flag' width={25} height={25} className=' mt-2'/></li>
        </ul>
        <div className="block md:hidden text-white" onClick={toggleMenu}>
          <Bars3Icon className="h-10 w-10 text-white"/>
        </div>
    </div>
  )
}
