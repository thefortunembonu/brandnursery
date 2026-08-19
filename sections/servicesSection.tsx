import Button from '@/components/Button'
import React from 'react'
import Image from 'next/image'

const ServicesSection = () => {
  return (
    <section className='relative bg-gray-200/70 lg:px-60 px-12 lg:py-24 py-6'>
         <Image src={'/images/bg.jpg'} fill alt={'hero_img'}
                priority
                className='object-cover absolute -z-10 animate-pulse blur-xs'/>
        <div>
        <h1 className='font-bold text-primary text-4xl md:text-5xl'>Services</h1>
        <div className='space-y-6 py-6'>
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

<Button variant='primary'>Explore Brand Services</Button>
        </div>

            <div className='space-y-6 py-6'>
             <h2 className='text-gray-900 font-medium  text-3xl '>
                Product Design and Development
            </h2>
            <p className='text-gray text-lg'>
              From a first MVP to a full-scale digital platform, we combine product strategy, design, and development to build useful digital experiences.
            </p>
            <div className='text-gray text-lg space-y-2'>
<p>  Product Strategy</p>

 <p>UX/UI Design</p>

<p>Web Applications</p>

<p>SaaS Products</p>

<p>E-commerce Platforms</p>

<p> Packaging & Marketing Assets.</p>
<p> 
MVP Development
</p>

</div>

<Button variant='primary'>Explore Product Services</Button>
        </div>
            <div className='space-y-6 py-6'>
             <h2 className='text-gray-900 font-medium  text-3xl '>
                Why Brand + Product?
            </h2>
            <p className='text-gray text-lg'>
             Because your brand and your product shouldn't feel like they came from two different companies. Your identity creates the expectation and your product delivers the experience.
            </p>
               <p className='text-gray text-lg'>
          And we connect the two.
            </p>
               <p className='text-gray text-lg'>
         The way your business looks, communicates and the way it works all working towards the same idea.
            </p>


</div>

<Button variant='primary'>Book a consultation call</Button>
        </div>

     

        

    </section>
  )
}

export default ServicesSection