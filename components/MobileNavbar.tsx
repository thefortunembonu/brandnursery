import Link from 'next/link'
import React, { useState } from 'react'
import { IoClose } from 'react-icons/io5'
import Image from 'next/image'
import {AnimatePresence, motion} from 'framer-motion'
import { CiMenuBurger } from 'react-icons/ci'
import { FiChevronDown } from 'react-icons/fi'

interface MobileNavbarProps {
    setShowNav: React.Dispatch<React.SetStateAction<boolean>>
}


const MobileNavbar = ({setShowNav}: MobileNavbarProps) => {

      const items = [
    {
      label: 'Brand Strategy & Identity Design',
      link: '/brand-identity-design'
    },

    {
      label: 'Product Design',
      link: '/product-design'
    },
    {
      label: 'Software Development',
      link: '/software-development'
    },
    {
      label: 'Graphics & Visual Design',
      link: '/graphics-visual-design'
    },
  ]

  const [showItems, setShowItems] = useState(false)

  
  return (
    <motion.div 
    variants={{
      hidden: {opacity: 0, x: 100},
      show: {opacity: 1, x: 0},
    }}
  
  initial="hidden"
  animate="show"
  exit={{opacity: 0, x: 100}}
  transition={{duration: 0.3}}
    
    className='fixed h-screen bg-gray-100/97 backdrop-blur z-50 inset-0 px-6 py-8 mr-12 shadow-2xl rounded-r-2xl'>
 <div className=' relative  '>

   <Link href={'/'} >
   <div className='border-b border-gray-900/60'>
   <Image 
   onClick={()=>setShowNav(prev=>!prev)}
   src={'/images/wordmark.png'} 
    alt={'brand_logo'}
    width={500}
    height={500}
    className='object-contain w-48 pb-12' 
    />
   </div>

   </Link> 
        <nav className=' flex flex-col gap-y-4 pt-12  '>
          <Link href={'/'}>
                     <button  onClick={()=>setShowNav(prev=>!prev)} className='w-full  text-start text-primary py-4 border-b-3 border-gray-900/5 cursor-pointer
                     hover:border-b-3 hover:border-secondary '> Home</button>
                     </Link>
                 <Link href={'/#footer'}>
                      <button  onClick={()=>setShowNav(prev=>!prev)}  className='w-full cursor-pointer text-start text-primary py-4 border-b-3 border-gray-900/5
                     hover:border-b-3 hover:border-secondary '> Contact Us</button>
                     </Link>
                     
                        <button 
                       
                   
                       onClick={()=>setShowItems(prev=>!prev)}
                       
                       className={` flex items-center gap-x-2 w-full group cursor-pointer  text-start text-primary py-4 border-b-3 border-gray-900/5
                     hover:border-b-3 hover:border-secondary ${showItems ? 'font-bold' : 'font-normal'} `}> Services <FiChevronDown className={showItems ? 'rotate-180 transition' : ""}/></button>
                    
<AnimatePresence>
{showItems && <motion.div 
     initial={{ height: 0, opacity: 0 }}
      animate={{ height: 'auto', opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="overflow-hidden">
 {items.map((item, idx)=> {
                        return   <button  key={idx} className='w-full cursor-pointer  text-start text-gray uppercase text-sm pl-6 py-4 border-b border-gray-900/20
                  '> {item.label}</button>
                
                      })}
</motion.div>}
</AnimatePresence>

                     
                       <Link href={'/portfolio'}>  <button  onClick={()=>setShowNav(prev=>!prev)} className='w-full  text-start text-primary py-4 cursor-pointer border-b-3 border-gray-900/5
                     hover:border-b-3 hover:border-secondary '> Portfolio</button>
                      </Link>
        </nav>
        <button onClick={()=>setShowNav(prev=>!prev)} className='absolute top-2 right-3 py-2 px-2 bg-gray-300/50 rounded-sm hover:scale-102 hover:bg-gray-300/80 cursor-pointer shsdow-sm'><IoClose className='text-gray-800 text-xl'/></button>
        
    </div>

    </motion.div>
   
  )
}

export default MobileNavbar
