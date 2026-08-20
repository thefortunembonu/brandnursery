
'use client'
import Image from 'next/image'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'

const portfolio = () => {


    
      const items = [
    {
      label: 'Branding',
      link: '/brand-identity-design'
    },
    {
      label: 'UI/UX',
      link: '/ui-ux'
    },
    {
      label: 'Product Design',
      link: '/product-design'
    },
    {
      label: 'Web Design',
      link: '/webdesign'
    },
    {
      label: 'Graphics Design',
      link: '/graphicsdesign'
    },
     {
      label: 'Packaging Design',
      link: '/packagingdesign'
    },
  ]

  const packs = [{
    title: 'Brand Identity Design',
    tags: ['Photoshop', 'Illustrator', 'Figma'],
    img: '/images/branding.jpg',
     link: 'branding'
  },
  {
    title: 'Packaging Design',
     tags: ['Photoshop', 'Illustrator', 'Figma'],
    img: '/images/packaging.jpg',
    link: 'packaging-design'
  },
  {
    title: 'Visual Identity Design',
     tags: ['Photoshop', 'Illustrator',],
    img: '/images/product.jpg',
    link: 'product-design'
  },
  {
    title: 'Product Design',
     tags: ['Photoshop', 'Illustrator', 'Figma'],
    img: '/images/uiux.png',
    link: 'ui-ux'
  },
  {
    title: 'Product Development',
     tags: ['Figma', 'Django', 'NextJS'],
    img: '/images/productdev.png',
    link: 'product-development'
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
 transition={{duration: 0.5}}
    
    
    
    className=' pt-26 bg-gray-100'>
        {/* <nav >
            <div className='flex gap-x-1 bg-gray-950/30  py-2 px-2 lg:px-6 overflow-x-scroll lg:overflow-clip '>
                {items.map((item, idx)=> {
                    return  <div key={idx} className='font-medium text-nowrap   bg-gray-900 px-2 text-sm text-gray-100 py-4 rounded-xl  cursor-pointer hover:bg-primary transition hover:border hover:border-gray-100'>
                        {item.label}</div>
                    
                    })}
            </div>
        </nav> */}
        <div className="p-4">


<div className='text-gray-100/80 flex items-center flex-wrap gap-4 md:gap-6  py-4 px-4  rounded-xl md:justify-center lg:justify-start'>
    {packs.map((pack, idx)=> {
      return <Link key={idx} href={`portfolio/${pack.link}`}> <div  className='flex-col w-full h-full min-w-80 lg:w-100 lg:h-80 text-xs text-nowrap bg-gray-300/50 border border-gray/10 shadow-sm rounded-xl hover:scale-102 transition '>
      
<Image src={pack.img} width={500} height={500} alt='logo' className='object-cover rounded-t-xl h-3/4'/>

        
        <div className='flex justify-between h-1/4 flex-col'>
 <h1 className='pl-4 pt-2 border-t text-sm font-medium text-gray border-gray-100/20'>{pack.title}</h1>

 <div className='flex flex-wrap gap-2 py-2 px-4 '>
  {pack.tags.map((tag, idx)=> {return<div key={idx} className='font-bold uppercase text-[8px] py-2 px-2 bg-gray-500/10 rounded-sm text-gray hover:bg-gray-600/15'>{tag}</div>})}
  
 </div>
        </div>
       
      </div></Link>  
    })}
    </div>     
     </div>
    </motion.div>
   
  
  )
}

export default portfolio