import React from 'react'
import Link from 'next/link'


interface DropDownMenuProps {
    showDropDown?: boolean;}
    
const DropDownMenu = ({ showDropDown}: DropDownMenuProps) => {

    const items = [{
        label: 'Brand Strategy',
        link:'brandstrategy'
    },
    {
      label: 'Brand Identity Design',
      link: '/brand-identity-design'
    },
    {
      label: 'Content Strategy',
      link: '/product-design'
    },
    {
      label: 'Content Development',
      link: '/software-development'
    },
    {
      label: 'Graphics & Visual Design',
      link: '/graphics-visual-design'
    },

]
  return (
    <div 
    
    className={showDropDown ? `shadow-sm bg-gray-200/80 py-4 pl-6 pr-16 rounded-2xl space-y-4 `: 'hidden'}>
        {items.map((item, idx)=> {
            return  <div key={idx} className='font-normal text-sm uppercase text-gray py-2 border-b border-gray/30 cursor-pointer hover:text-primary transition'><Link href={item.link} key={idx}>
 
          {item.label}  
        
            </Link>
            </div>
        })}
      
    </div>
  )
}

export default DropDownMenu