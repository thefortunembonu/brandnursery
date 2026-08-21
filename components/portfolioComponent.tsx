'use client'
import Image from 'next/image'
import { useState } from 'react'
import { FaLink } from 'react-icons/fa';
import { FiLink } from 'react-icons/fi';

interface PortfolioComponentProps {
    title: string;
    img: string;
    link?: string;
    description: string;
    tags: string[];
}

const PortfolioComponent = ({title, img, tags, description, link}: PortfolioComponentProps) => {

    
    const [showDetails, setShowDetails] = useState(false)
  return (
    <div onMouseEnter={()=>{setShowDetails(true)}} onMouseLeave={()=>{setShowDetails(false)}} 
    onClick={()=>setShowDetails(prev=>!prev)}
    
className='relative min-w-80 lg:w-100 min-h-88 lg:h-96 hover:scale-102 transition rounded-2xl shadow-sm '>
        

        {link && <div className='absolute top-8 hover:scale-90 hover:text-gray-100 animate-pulse cursor-pointer transition right-8 text-xl text-blue-500 bg-gray-800 rounded-full px-2 py-2  '> <a target='_blank' href={link} className=""><FaLink /></a></div>}
 <Image src={img} width={500} height={500} alt='logo' className='object-cover rounded-2xl w-full h-full'/>
      
     <div className={` 
        
         ${showDetails ? 'absolute' : 'hidden'} transition
         bottom-0 px-6 pb-4 pt-2 w-full rounded-2xl bg-linear-to-t from-gray-950 via-gray-950 to-gray-800/10`}>
<p className="text-gray-100/90 font-medium text-xl pb-2">{title}</p>
<p className='text-gray-100/80 leading-5 text-sm'>{description}</p>

<div className='flex items-center'> 
    <h3 className='text-gray-100 text-sm'>Tools :</h3>
<div className='flex flex-wrap gap-2 py-2 px-4 '>
{tags.map((tag, idx)=> {return<div key={idx} className='font-bold uppercase text-[8px] py-2 px-2 bg-gray-100/90 rounded-sm text-gray hover:bg-gray-100/70'>{tag}</div>})}
</div>

</div>
     </div>

    </div>
  )
}

export default PortfolioComponent