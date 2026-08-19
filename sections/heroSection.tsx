import React from 'react'
import Image from 'next/image'
import Button from '@/components/Button'
import {motion} from 'framer-motion'

const HeroSection = () => {
  return (
    <section id='home' className='relative  px-6 lg:px-60 lg:py-24 py-6' >
        
        
        <Image src={'/images/bg.jpg'} fill alt={'hero_img'}
        priority
        className='object-cover absolute -z-10 animate-pulse blur-xs'/>
<div className='grid grid-cols-1 md:grid-cols-2 text-center lg:text-start lg:gap-4 z-10 '>
    <div 
   
    
    
    className='lg:max-w-150  lg:space-y-10'>
        <h1 className='font-extrabold text-6xl lg:text-8xl mt-36'>
            from Idea <p className='text-secondary'>to Identity</p>
          <p>to Product</p>
        </h1>

        <p className="text-gray text-base md:text-xl tracking-tight mt-4 "> We turn ambitious ideas into brands people recognize and products people use.</p>

        <div className='my-4 flex gap-4 lg:justify-start justify-center w-full'>
            <Button variant='primary' loading={false}>Start a project</Button>
            <Button variant='secondary'>Explore Our Work</Button>
        </div>
    </div>
    <div>
        <Image src={'/images/hero.png'}
        alt={'hero_image'}
        width={5000}
        height={5000}
        className='object-cover w-full py-12'/>
    </div>
</div>
    </section>
  )
}

export default HeroSection