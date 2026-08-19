import Button from '@/components/Button'
import React from 'react'

const WhoWeWorkWithSection = () => {
  return (
    <section className='lg:px-60 px-12 lg:py-48 py-6 bg-secondary'>
         <h1 className='font-bold text-primary text-4xl md:text-5xl'>Who We work With</h1>
        <div className='grid lg:grid-cols-3 gap-6 lg:gap-x-48 py-12'>
<div className='space-y-4'>
    <h2 className='font-medium text-gray-100 text-3xl lg:text-4xl '>
        Start Ups
    </h2>
    <p className='text-gray text-lg'>
        You have an idea. We help you turn it into a brand and product ready for the market.
    </p>
</div>
<div className='space-y-4'>
    <h2 className='font-medium text-gray-100 text-3xl lg:text-4xl '>
        Growing Businesses
    </h2>
    <p className='text-gray text-lg'>
       Your business has evolved. We help your brand and digital experience evolve with it.
    </p>
</div>
<div className='space-y-4'>
    <h2 className='font-medium text-gray-100 text-3xl lg:text-4xl '>
        Established 
Brands
    </h2>
    <p className='text-gray text-lg'>
        You need a stronger identity, a better digital experience, or a new product. We help you build what's next.

    </p>
</div>
       
        </div>
          <Button variant='primaryblue'>See other brands worked with</Button>
    </section>
  )
}

export default WhoWeWorkWithSection