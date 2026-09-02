'use client'
import PortfolioComponent from '@/components/portfolioComponent'
import PortfolioContainer from '@/components/portfolioContainer'
import PortfolioNav from '@/components/PortfolioNav'
import React from 'react'
import {motion} from 'framer-motion'
const Graphics = () => {


    const Items = [
  {
    title: 'Flyer for Logic Tech Store',
     tags: ['Photoshop', 'Illustrator', 'Figma'],
    img: '/images/graphics/12.jpg',
     description:'This is a bespoke branding package for Logic Tech Store, a techstore based in Abuja. It includes a logo,and a flyer.'
  },
  {
    title: 'Social Media Flyer',
     tags: ['Photoshop', 'Illustrator',],
    img: '/images/graphics/5.jpeg',
     description:'A flyer design for Dvyne Foods. A local business that produces and distributes snacks and food products.'
  },
  {
    title: 'Prettiprint Flyer',
      tags: ['Photoshop', 'Illustrator'],
   img: '/images/graphics/6.jpg',
       description:'Prettiprint is a business that deals specifically in the production of high-quality, premium-quality, and premium-priced printed products.'
  },
  {
    title: 'Flyer for B-MAX Concepts',
      tags: ['Photoshop', 'Illustrator'],
   img: '/images/graphics/9.jpg',
       description:'B-MAX Concepts is a media company located in the city of Owerri. They handle diverse media services.'
  },

  {
    title: 'Flyer for Forrena Digital Agency ',
      tags: ['Photoshop', 'Illustrator'],
   img: '/images/graphics/11.jpg',
       description:'This is an online flyer for a business that offers digital media services.'
  },

  {
    title: 'Flyer for Playroom By Wild',
      tags: ['Photoshop', 'Illustrator'],
   img: '/images/graphics/4.jpg',
       description:'Playroom by wild is an online shop for adults to sort out their intimate needs and sexual wellness.'
  },
    {
    title: 'Flyer for Brandnursery',
      tags: ['Photoshop', 'Illustrator'],
   img: '/images/graphics/1.jpg',
       description:'Brandnursery is a branding agency that helps businesses establish themselves, evolve, or become something bigger.'
  },
    {
    title: 'Flyer for Brandnursery',
      tags: ['Photoshop', 'Illustrator'],
   img: '/images/graphics/14.jpg',
       description:'Brandnursery is a branding agency that helps businesses establish themselves, evolve, or become something bigger.'
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