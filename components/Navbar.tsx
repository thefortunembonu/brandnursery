'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Button from './Button'
import {  FiChevronDown } from 'react-icons/fi'
import DropDownMenu from './DropDownMenu'
import { CiMenuBurger } from 'react-icons/ci'
import MobileNavbar from './MobileNavbar'
import { AnimatePresence } from 'motion/react'


const Navbar = () => {

    const [servicesShowDropDown, setServicesShowDropDown] = useState(false)
    const [showNav, setShowNav] = useState(false)
  

  return (
    <div className='fixed shadow-sm  w-full z-20 backdrop-blur-sm bg-gray-100/90'>
   <nav className='  px-12 py-8 flex items-center justify-between '>
        <Link href={'/'}>
        <Image src={'/images/wordmark.png'} 
        alt={'brand_logo'}
        width={500}
        height={500}
        className='object-contain w-48'
        priority
        />
        </Link>

       
          <ul className=' lg:flex hidden  gap-x-12 items-center font-medium '>
                    <Link href={'/'}>
                     <li className='text-primary py-2 border-b-3 border-gray-100/10
                     hover:border-b-3 hover:border-secondary '> Home</li>
                     </Link>
                      <Link href={'#footer'}>  <li className='text-primary py-2 border-b-3 border-gray-100/10
                     hover:border-b-3 hover:border-secondary '> Contact Us</li>
                      </Link>
                    
                     
     <Link href={'#'}>  <li    
     onMouseEnter={() => setServicesShowDropDown(true)}
    
     className=' relative flex items-center gap-2 text-primary py-2 border-b-3 border-gray-100/10
                     hover:border-b-3 hover:border-secondary
                    ' >Services <FiChevronDown />
                        
                     </li>
                     
                     
                     </Link>

                     
                    
                      <Link href={'/portfolio'}>
 <li className='text-primary py-2 border-b-3 border-gray-100/10
                     hover:border-b-3 hover:border-secondary
                     flex items-center gap-2 ' >Portfolio 
                     </li>
                      
                      </Link>

                </ul>
                <div  onMouseLeave={() => setServicesShowDropDown(false)}
                 className=' absolute top-18 right-5/12 z-40 '>
  <DropDownMenu  showDropDown={servicesShowDropDown}/>
        </div>
      
   
   
 
        <div className='md:block hidden'><Button variant='secondaryblue'>Start a Project</Button></div>
        <div onClick={() => setShowNav(prev=>!prev)} className='md:hidden block px-2 py-2  bg-gray-300/70 rounded-sm  cursor-pointer shadow-sm hover:scale-102'><CiMenuBurger className='text-gray-800 text-xl'/></div>
<AnimatePresence>
{showNav && <MobileNavbar  setShowNav={setShowNav}/>}
</AnimatePresence>
        
    </nav>
    </div>
 
  )
}

export default Navbar