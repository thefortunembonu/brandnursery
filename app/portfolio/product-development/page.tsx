'use client'
import PortfolioContainer from '@/components/portfolioContainer'
import PortfolioNav from '@/components/PortfolioNav'
import React from 'react'
import {motion} from 'framer-motion'
const productdev = () => {
    const Items = [
  {
    link: 'https://fortunembonu.vercel.app',
    title: 'Portfolio Website For Fortune Forrena',
     tags: ['NextJS', 'TailwindCSS',],
    img: '/images/productdev/1.png',
     description:'This is a bespoke web design and development package for Forrena. It was built using NextJS, Tailwind and other modern libraries. '
  },
  {
    title: 'Website Design For Brandnursery',
     link: 'https://brandnurseryhq.vercel.app',
     tags: ['NextJS', 'TailwindCSS', ],
    img: '/images/productdev/2.png',
     description:'A website development for a startup called Brandnursery. It also features a portfolio to showcase some of their works.'
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

export default productdev