'use client'
import Button from '@/components/Button'
import React, { useState } from 'react'
import {motion} from 'framer-motion'
import StartProjectModal from '@/components/startProjectModal'
import { AnimatePresence } from 'motion/react'


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
const Footer = () => {
    const [showModal, setShowModal] = useState(false)
  return (
    <motion.section
   
   variants={container}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true, amount: 0.2 }} id='footer' className='lg:px-60 px-6 py-24 bg-[#000027] text-center'>
        <motion.div variants={child} className='space-y-6 '>
<h1 className='font-bold text-secondary text-4xl md:text-5xl'>Have an idea to grow?</h1>

        <p className='text-gray-100/60'>Whether you're starting something new, rebuilding something existing, or creating what's next, we'd love to hear about it.</p>
        <p className='text-gray-100/60'>Tell us what you are building.</p>
        <Button  onClick={()=>setShowModal(true)} variant='primary'>Start a Project</Button>
        </motion.div>

        <div className='grid grid-cols-2 md:grid-cols-3 gap-8 py-8 text-start md:text-center'>
<motion.div variants={child}>
    <h1 className='font-medium text-2xl lg:text-3xl pb-4 text-secondary'>Explore</h1>
    <span className='text-gray-100/60 space-y-2 lg:space-y-4'>
         <p className='cursor-pointer hover:text-secondary'>Work</p>
    <p className='cursor-pointer hover:text-secondary'>Services</p>
    <p className='cursor-pointer hover:text-secondary'>About</p>
    <p className='cursor-pointer hover:text-secondary'>Contact</p>
    </span>
   
</motion.div>
<motion.div variants={child}>
    <h1 className='font-medium text-2xl lg:text-3xl pb-4  text-secondary'>Services</h1>
    <span className='text-gray-100/60 space-y-2 lg:space-y-4'>
    <p>Brand Strategy</p>
    <p>Visual Design</p>
    <p>Product Design</p>
    <p>Software Development</p>
   
    </span>
    
    
</motion.div>
<motion.div variants={child}>
      <h1 className='font-medium text-2xl lg:text-3xl pb-4  text-secondary'>Connect</h1>
     <div className='flex flex-col text-gray-100/60 space-y-2 lg:space-y-4'>
       
    <a href="https://web.facebook.com/profile.php?id=61574913773793"
        target="_blank"
        rel="noopener noreferrer" className='cursor-pointer hover:text-secondary'>Facebook</a>
    <a href="https://wa.me/message/UVFBBJ6UQABQF1"
        target="_blank"
        rel="noopener noreferrer" className='cursor-pointer hover:text-secondary'>WhatsApp</a>

    <a href="https://x.com/brandnurseryhq"
        target="_blank"
        rel="noopener noreferrer" className='cursor-pointer hover:text-secondary'>X (fka Twitter)</a>

     </div>

</motion.div>
        </div>
<hr className='border-0.5 border-gray-50/20'/>
        <div>
           
            <div>
<svg className='mx-auto opacity-60 my-3' xmlns="http://www.w3.org/2000/svg"
 width="200" height="40" viewBox="0 0 600.000000 108.000000"
 preserveAspectRatio="xMidYMid meet">
<g transform="translate(0.000000,108.000000) scale(0.100000,-0.100000)"
fill="#ffffff" stroke="none">
<path d="M2496 1064 c-53 -19 -54 -18 0 -55 l48 -32 -40 -14 c-21 -7 -45 -16
-53 -18 -24 -9 65 -91 134 -124 65 -32 154 -47 210 -37 39 8 41 17 29 108 l-6
45 -47 -5 c-94 -9 -186 40 -213 114 -6 19 -14 34 -18 33 -3 0 -23 -7 -44 -15z"/>
<path d="M5 550 l0 -340 68 0 67 0 0 53 0 52 19 -30 c97 -157 342 -114 396 69
82 275 -162 503 -348 327 l-39 -36 4 123 3 122 -85 0 -85 0 0 -340z m335 35
c81 -42 81 -198 0 -240 -86 -45 -170 15 -170 120 0 103 86 164 170 120z"/>
<path d="M2418 758 l5 -103 -41 37 c-97 87 -259 51 -327 -73 -45 -82 -45 -228
1 -309 79 -141 286 -164 369 -42 l25 37 0 -48 0 -47 70 0 70 0 0 263 0 264
-41 19 c-23 10 -61 37 -86 61 -24 24 -45 43 -46 43 -2 0 -1 -46 1 -102z m-58
-173 c68 -35 86 -156 33 -215 -76 -84 -203 -26 -203 92 0 100 89 165 170 123z"/>
<path d="M1710 729 c-37 -15 -61 -40 -81 -84 l-19 -40 0 58 c0 47 -3 57 -17
57 -10 0 -42 3 -70 6 l-53 7 0 -262 0 -261 60 -2 c33 -1 72 -2 86 -2 l27 -1
-2 157 c-3 184 6 213 65 224 27 5 42 2 62 -13 l27 -20 3 -177 2 -176 85 0 85
0 0 183 c-1 238 -10 276 -83 331 -31 23 -136 32 -177 15z"/>
<path d="M2863 720 c-32 -16 -48 -34 -68 -73 l-25 -51 0 57 0 57 -49 0 c-27 0
-56 3 -65 6 -14 6 -16 -21 -16 -250 l0 -256 85 0 85 0 0 165 c0 187 10 215 80
215 70 0 80 -28 80 -217 l0 -168 86 3 86 4 -4 191 c-4 217 -16 263 -79 308
-48 34 -139 38 -196 9z"/>
<path d="M4207 728 c-84 -23 -139 -115 -117 -197 20 -77 77 -112 205 -126 135
-16 146 -95 14 -95 -32 0 -47 7 -71 30 -27 28 -35 30 -100 30 l-71 0 6 -35
c14 -84 90 -135 213 -143 169 -11 273 61 262 180 -9 92 -72 141 -204 159 -98
13 -128 35 -95 68 32 32 86 28 121 -9 26 -28 33 -30 99 -30 39 0 71 3 71 8 -1
122 -169 203 -333 160z"/>
<path d="M4709 712 c-159 -82 -188 -318 -56 -447 130 -127 358 -90 422 68 l15
37 -78 0 c-65 0 -82 -3 -96 -19 -39 -43 -134 -31 -170 20 -33 48 -29 49 170
49 l187 0 -7 65 c-17 165 -109 254 -262 255 -59 0 -81 -5 -125 -28z m165 -112
c23 -8 66 -62 66 -82 0 -5 -47 -8 -105 -8 -84 0 -105 3 -105 14 0 22 48 74 73
79 38 7 45 7 71 -3z"/>
<path d="M878 718 c-44 -12 -96 -66 -105 -109 -12 -64 -25 -40 -18 35 l7 76
-71 0 -71 0 0 -260 0 -260 85 0 85 0 0 145 c0 192 24 235 130 235 l30 0 0 75
c0 83 1 82 -72 63z"/>
<path d="M1038 723 l-47 -4 2 -70 2 -70 119 2 c127 2 146 -5 146 -53 0 -16
-10 -18 -82 -18 -159 0 -229 -43 -235 -146 -8 -117 62 -178 196 -172 73 3 74
4 112 47 l39 44 0 -42 0 -41 68 0 67 0 -5 197 c-6 223 -11 244 -78 288 -60 40
-146 50 -304 38z m222 -333 c0 -73 -71 -114 -128 -74 -15 10 -22 25 -22 49 0
46 29 65 97 65 l53 0 0 -40z"/>
<path d="M3200 548 c1 -295 31 -353 185 -353 85 0 115 16 152 81 l23 39 0 -52
0 -53 65 0 65 0 0 258 0 259 -85 1 -85 1 0 -174 0 -174 -26 -20 c-34 -27 -64
-27 -98 0 l-26 20 0 175 0 174 -85 0 -85 0 0 -182z"/>
<path d="M3750 469 l0 -259 69 0 c38 0 76 -3 85 -6 14 -5 16 11 16 138 0 186
21 238 94 238 9 0 20 16 27 43 6 23 22 57 35 75 l25 32 -43 0 c-70 0 -108 -27
-146 -101 l-33 -64 3 79 3 79 -67 2 -68 2 0 -258z"/>
<path d="M5150 471 l0 -259 75 -4 c42 -2 80 -1 85 0 6 2 10 64 10 150 0 200
11 219 134 225 l49 2 34 -115 c19 -63 43 -145 54 -182 l20 -68 54 0 c46 0 55
-3 55 -18 0 -45 -24 -57 -109 -57 l-81 0 0 -74 0 -74 101 6 c116 7 162 25 196
75 17 25 156 558 167 637 0 5 -34 9 -79 10 l-79 0 -40 -187 c-22 -105 -44
-188 -51 -188 -6 0 -33 84 -61 188 l-51 187 -108 3 c-150 4 -185 -14 -225
-114 l-20 -49 2 80 3 80 -68 3 -67 3 0 -260z"/>
</g>
</svg>
            </div>


            


            <p className='text-gray-100/60 pt-1'>&copy; {new Date().getFullYear()} Brandnursery. All rights reserved.</p>
        </div>
        
     <AnimatePresence >
{showModal && <StartProjectModal setShowModal={setShowModal}/>}
     </AnimatePresence>
        
        </motion.section>
  )
}

export default Footer