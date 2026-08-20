import Image from 'next/image'
import React from 'react'
import { IoClose } from 'react-icons/io5'
import Button from './Button'
import {motion} from 'framer-motion'

interface StartProjectModalProps {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>
}

const StartProjectModal = ({ setShowModal }: StartProjectModalProps) => {
  return (
    <motion.div
    variants={{
      hidden: {opacity: 0, scale: 0},
      show: {opacity: 1, scale: 1},
    }}
    initial="hidden"
    animate="show"
    exit='hidden'
    
    className="fixed top-1/2 right-1/2 transform -translate-y-1/2 translate-x-1/2 w-4/5 md:w-1/2 h-1/2 bg-gray-100 backdrop-blur z-50 md:px-12 py-12 rounded-4xl shadow ">
      
      <button
        onClick={() => setShowModal(false)}
        className="absolute top-2 right-4 py-2 px-2  text-2xl rounded-lg hover:scale-102 cursor-pointer hover:shadow-sm hover:text-red-500"
      >
        <IoClose />
      </button>
<div className="flex flex-col items-center bg-gray-100 h-full py-2 px-4 rounded-xl justify-center gap-y-4">

      <h1 className="text-2xl font-bold text-center">
        Start a Project
      </h1>
    <p className='text-sm text-gray text-center px-2 md:px-12'>Scan the code below or click the button below to start a project</p>

    <Image src="/images/whatsapp.png" alt="whatsapp" width={500} height={500} className="object-contain w-24" />
      <Button 
      onClick={() => setShowModal(false)}
      variant="primary"> <a
        href="https://wa.me/message/UVFBBJ6UQABQF1"
        target="_blank"
        rel="noopener noreferrer"
      >
       Send a Message
      </a> </Button>

      <p className='text-sm text-gray'>You will be redirected to WhatsApp</p>
</div>
     

     
    </motion.div>
  )
}

export default StartProjectModal