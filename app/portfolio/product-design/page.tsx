
'use client'
import PortfolioContainer from '@/components/portfolioContainer'
import PortfolioNav from '@/components/PortfolioNav'
import React from 'react'
import {motion} from 'framer-motion'

const productdesign = () => {
    const Items = [
      
  {
    title: 'Mobile App design ',
      tags: ['Figma','Photoshop', ],
   img: '/images/productdesign/1.png',
       description:'Mobile App Design for Smart Home'
  },

  {
    title: 'Onboarding Flow for a Startup Mobile App',
      tags: ['Photoshop', 'Figma'],
   img: '/images/productdesign/2.webp',
       description:'Onboarding Flow for a Startups Mobile App'
  },
    ]
  return (
    <motion.div 
        variants={{
          hidden: {opacity: 0, x: 100},
          show: {opacity: 1, x: 0},
        }}
      
      initial="hidden"
      animate="show"
     transition={{duration: 0.5}} className=' px-6 pt-28 pb-4 '>

 <PortfolioContainer items={Items}/>
       

   </motion.div>
  )
}

export default productdesign