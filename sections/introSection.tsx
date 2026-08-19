import Button from '@/components/Button'
import React from 'react'

const IntroSection = () => {
  return (
    <section id='intro' className='bg-primary lg:px-60 px-12 lg:py-24 py-6 text-center lg:text-start '>

        <h1 className='font-bold text-secondary text-4xl md:text-5xl'>Introduction</h1>
        <div className='max-w-200 space-y-6 my-6 '>
            <h2 className='text-gray-100 font-medium  text-3xl '>
                Every great product starts with an idea!
            </h2>
            <p className='text-secondary text-lg'>
                At  Brandnursery, we bring strategy, identity, design, and technology together to help ideas grow into businesses people can see, understand, and use.
            </p>
            <p className='text-secondary text-lg'>
We don't just make things look good.
We build what makes them matter.</p>
        </div>

        <Button variant='secondary'>Explore Our Work</Button>

        <div className='text-gray-100 text-center md:flex  md:justify-between gap-6 py-6 lg:py-16'>
            <div className='my-4'><p className='font-extrabold text-6xl lg:text-7xl'>100+</p> <p className='uppercase text-xs lg:text-sm tracking-widest'>Brands Developed</p> </div>

            <div className='my-4'><p className='font-extrabold text-6xl lg:text-7xl'>230+</p> <p className='uppercase text-xs lg:text-sm tracking-widest'>Products built</p> </div>

            <div className='my-4'><p className='font-extrabold text-6xl lg:text-7xl'>1000+</p> <p className='uppercase text-xs lg:text-sm tracking-widest'>Ideas actualized</p> </div>

            <div className='my-4'><p className='font-extrabold text-6xl lg:text-7xl'>1M+</p> <p className='uppercase text-xs lg:text-sm tracking-widest'>Lives Transformed</p> </div>
        </div>
    </section>
  )
}

export default IntroSection