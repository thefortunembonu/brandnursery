
'use client'
import Button from '@/components/Button'
import Image from 'next/image'
import {AnimatePresence, motion} from 'framer-motion'
import Link from 'next/link'
import StartProjectModal from '@/components/startProjectModal'
import { useState } from 'react'
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const child = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
    },
  },
}
const ServicesSection = () => {


  const [showModal, setShowModal] = useState(false)
  return (
    <motion.section
   variants={container}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true, amount: 0.2 }}
     
    
    
    
    id='services' className='relative bg-gray-200/70  px-12 md:px-24 xl:px-60 lg:py-24 py-6'>
         <Image src={'/images/bg.jpg'} fill alt={'hero_img'}
                priority
                className='object-cover absolute -z-10 animate-pulse blur-xs'/>
        <div>
        <h1 className='font-bold text-primary text-4xl md:text-5xl'>Services</h1>
        <motion.div variants={child} className='space-y-6 py-6'>
             <h2 className='text-gray-900 font-medium  text-3xl '>
                Brand Design and Development
            </h2>
            <p className='text-gray text-lg'>
               We create strategic brand identities for businesses ready to establish themselves, evolve, or

 become something bigger.
            </p>
            <div className='text-gray text-lg space-y-2'>
<p>Brand Strategy</p>

 <p>Brand Positioning</p>

<p>Naming & Verbal Identity</p>

<p>Logo & Visual Identity</p>

<p>Brand Guidelines</p>

<p> Packaging & Marketing Assets.</p></div>
<Link href={'/portfolio/branding'}>
<Button variant='primary'>Explore Brand Services</Button>
</Link>

        </motion.div>

            <motion.div variants={child} className='space-y-6 py-6'>
             <h2 className='text-gray-900 font-medium  text-3xl '>
                Content Strategy and Development
            </h2>
            <p className='text-gray text-lg'>
              We build strategic content systems that help brands communicate clearly, connect with their audience, and turn attention into meaningful growth.
            </p>
            <div className='text-gray text-lg space-y-2'>
<p>Content Strategy</p>

<p>Social Media Content</p>

<p>Copywriting & Brand Messaging</p>

<p>Content Planning & Calendars</p>

<p>Short-form Video Content</p>

<p>Campaign & Creative Development</p>

<p>Content Production</p>

<p>Content Performance & Optimization</p>
<p> 
MVP Development
</p>

</div>
<Link href={'/portfolio/content-strategy'}>
<Button variant='primary'>Explore Services</Button>
</Link>

        </motion.div>
            


     <AnimatePresence >
{showModal && <StartProjectModal setShowModal={setShowModal}/>}
     </AnimatePresence>
        </div>

     

        

    </motion.section>
  )
}

export default ServicesSection