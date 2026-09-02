'use client'
import PortfolioComponent from '@/components/portfolioComponent'
import PortfolioContainer from '@/components/portfolioContainer'
import PortfolioNav from '@/components/PortfolioNav'
import React from 'react'
import {motion} from 'framer-motion'
const Graphics = () => {


    const Items = [
  {
    title: 'Content Strategy For Kora Fashion',
     tags: ['Photoshop', 'Illustrator', 'Figma'],
    img: '/images/contentstrategy/1.jpg',
     description:'Kora Fashion House is a fashion company located in the city of Owerri. They handle diverse fashion services.'
  },
  {
    title: 'Content Strategy For Kora Fashion',
     tags: ['Photoshop', 'Illustrator',],
    img: '/images/contentstrategy/2.jpg',
     description:'Kora Fashion House is a fashion company located in the city of Owerri. They handle diverse fashion services.'
  },
  {
    title: 'Content Strategy For Kora Fashion',
      tags: ['Photoshop', 'Illustrator'],
   img: '/images/contentstrategy/3.jpg',
       description:'Kora Fashion House is a fashion company located in the city of Owerri. They handle diverse fashion services.'
  },
  {
    title: 'Content Strategy For Kora Fashion',
      tags: ['Photoshop', 'Illustrator'],
   img: '/images/contentstrategy/4.jpg',
       description:'Kora Fashion House is a fashion company located in the city of Owerri. They handle diverse fashion services.'
  },

  {
    title: 'Content Strategy For Rijaa Restaurant ',
      tags: ['Photoshop', 'Illustrator'],
   img: '/images/contentstrategy/5.jpg',
       description:'This is an online flyer for a food and restaurant business.'
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


export default Graphics