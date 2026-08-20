import React, { useState } from 'react'
import Image from 'next/image'
import Button from '@/components/Button'
import {AnimatePresence, motion} from 'framer-motion'
import StartProjectModal from '@/components/startProjectModal'
import Link from 'next/link'

const HeroSection = () => {

    const [showModal, setShowModal] = useState(false)
  return (
    <section id='home' className='relative px-6 md:px-24 xl:px-60 lg:py-24 py-6' >
        
        
        <Image src={'/images/bg.jpg'} fill alt={'hero_img'}
        priority
        className='object-cover absolute -z-10 animate-pulse blur-xs'/>
<div className='md:flex items-center text-center lg:text-start lg:gap-4 z-10 '>
    <div 
   
    
    
    className=' lg:max-w-150  lg:space-y-10 '>
        <h1 className='font-extrabold text-6xl text-nowrap md:text-7xl xl:text-8xl mt-36'>
            from Idea <p className='text-secondary'>to Identity</p>
          <p>to Product</p>
        </h1>

        <p className="text-gray text-base md:text-[18px] lg:text-xl tracking-tight mt-4 "> We turn ambitious ideas into brands people recognize and products people use.</p>

        <div className='my-4 flex gap-4 lg:justify-start justify-center w-full'>
            <Button variant='primary' loading={false} onClick={()=>setShowModal(true)}>Start a project</Button>

            <Link href={'/portfolio'}>
             <Button variant='secondary'>Explore Our Work</Button></Link>
           
        </div>
    </div>
    <div className='w-full'>
        <Image src={'/images/hero.png'}
        alt={'hero_image'}
        width={500}
        height={500}
        className='object-contain w-full py-12'/>
    </div>
</div>

     <AnimatePresence >
{showModal && <StartProjectModal setShowModal={setShowModal}/>}
     </AnimatePresence>
    </section>
  )
}

export default HeroSection