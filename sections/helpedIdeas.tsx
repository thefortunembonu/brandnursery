import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Button from '@/components/Button'

const HelpedIdeas = () => {


    const ideas = ['/images/a.png','/images/b.png','/images/c.png','/images/d.png','/images/e.png','/images/f.png','/images/g.png','/images/h.png', '/images/i.png','/images/j.png' ]
  return (
    <section id='helpedideas' className='md:px-24 xl:px-60 lg:py-24 py-6 bg-primary'>

          <h1 className='font-bold text-gray-100 text-4xl md:text-5xl'>Ideas We Have Built and Grown</h1>

<div className = 'mt-8 lg:mt-16 overflow-hidden shadow-lg rounded-lg '>
          <div className='flex w-max animate-scroll lg:gap-12'>
{ [...ideas,...ideas,...ideas].map((idea, index) => (
  <div className="flex h-72 lg:h-100 w-100 shrink-0" key={index} >
    <Image src={idea} alt='idea' width={500} height={500} className='lg:min-h-24 lg:max-h-100 min-h-80 max-h-100  min-w-40 max-w-48 lg:min-w-100 lg:max-w-40  object-contain'/>
  </div>
))}
</div>



</div>
     <div className=" mt-6 text-center
     ">
      <Link href={'/portfolio'}>
<Button variant='secondary'>See our portfolio</Button>
</Link></div>   




      
    </section>
  )
}

export default HelpedIdeas