import PortfolioContainer from '@/components/portfolioContainer'
import PortfolioNav from '@/components/PortfolioNav'
import React from 'react'

const productdev = () => {
    const Items = [
  {
    link: 'www.fortunembonu.vercel.app',
    title: 'Portfolio Website For Fortune Forrena',
     tags: ['NextJS', 'TailwindCSS',],
    img: '/images/productdev/1.png',
     description:'This is a bespoke web design and development package for Forrena. It was built using NextJS, Tailwind and other modern libraries. '
  },
  {
    title: 'Website Design For Brandnursery',
     link: 'www.brandnursery.vercel.app',
     tags: ['NextJS', 'TailwindCSS',  'Figma'],
    img: '/images/productdev/2.png',
     description:'A website development for a startup called Brandnursery. It also features a portfolio to showcase some of their works.'
  },

]
  return (
    <div className=' px-6 pt-28 pb-4 '>
 <PortfolioNav/>
 <PortfolioContainer items={Items}/>
       

   </div>
  )
}

export default productdev