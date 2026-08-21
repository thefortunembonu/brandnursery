import PortfolioContainer from '@/components/portfolioContainer'
import PortfolioNav from '@/components/PortfolioNav'
import React from 'react'

const branding = () => {const Items = [
  {
    title: 'Logo Design for Dvyne Foods',
     tags: ['Photoshop', 'Illustrator'],
    img: '/images/branding/1.jpg',
     description:'Dyvne Foods is a brand invested in making nutritious and healthy snacks.'
  },
  {
    title: 'Logo Design for Luxrishop',
     tags: ['Photoshop', 'Illustrator',],
    img: '/images/branding/5.jpg',
     description:'A Logo for a brand that deals on luxury wears.'
  },
  {
    title: 'Logo For BigFish Interiors',
      tags: ['Photoshop', 'Illustrator'],
   img: '/images/branding/6.jpg',
       description:'This logo design is for an interior decoration firm based in Lagos.'
  },
  {
    title: 'Logo for Logic Fitness',
      tags: ['Photoshop', 'Illustrator'],
   img: '/images/branding/3.jpg',
       description:'This mark is for an Abuja based fitness coach.'
  },

  {
    title: 'TFFX Logo ',
      tags: ['Photoshop', 'Illustrator'],
   img: '/images/branding/4.jpg',
       description:'TFFX stands for The Forrena Effect. It is a media business based in Lagos'
  },

  {
    title: 'Logo for MREL',
      tags: ['Photoshop', 'Illustrator'],
   img: '/images/branding/7.jpg',
       description:'MREL is a solar power system installation and sales company domiciled in Lagos.'
  },

]
  return (
    <div className=' px-6 pt-28 pb-4 '>
      <PortfolioNav/>

 <PortfolioContainer items={Items}/>
       

   </div>
  )
   
}

export default branding