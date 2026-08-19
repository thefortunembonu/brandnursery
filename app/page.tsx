import HelpedIdeas from "@/sections/helpedIdeas";
import HeroSection from "@/sections/heroSection";
import IntroSection from "@/sections/introSection";
import ServicesSection from "@/sections/servicesSection";
import WhoWeWorkWithSection from "@/sections/whoWeWorkWithSection";
import Image from "next/image";

export default function Home() {
  return (
    <div>
     <HeroSection/>
     <IntroSection/>
     <ServicesSection/>
     <WhoWeWorkWithSection/>
     <HelpedIdeas/>
    </div>
  );
}
