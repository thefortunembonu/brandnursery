
"use client"
import StartProjectModal from "@/components/startProjectModal";
import HelpedIdeas from "@/sections/helpedIdeas";
import HeroSection from "@/sections/heroSection";
import IntroSection from "@/sections/introSection";
import ServicesSection from "@/sections/servicesSection";
import WhoWeWorkWithSection from "@/sections/whoWeWorkWithSection";
import {motion} from 'framer-motion'
import { Stardos_Stencil } from "next/font/google";

export default function Home() {
  return (
    <motion.div 
    variants={{
      hidden: {opacity: 0, y: -100},
      show: {opacity: 1, y: 0},
    }}
  
  initial="hidden"
  animate="show"
 transition={{duration: 0.5}}>
     <HeroSection/>
     <IntroSection/>
     <ServicesSection/>
     <WhoWeWorkWithSection/>
     <HelpedIdeas/>
     
    </motion.div>
  );
}
