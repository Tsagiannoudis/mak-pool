import HeroSection from "@/components/home/HeroSection";
import ServicesSectionGrid from "@/components/home/ServicesSectionGrid";
import ServicesSectionGrid2 from "@/components/home/ServicesSectionGrid2";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import CtaHomeSection from "@/components/home/CtaHomeSection"

import Gallery from "@/components/home/Gallery";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">   
        <HeroSection />
        {/* <ServicesSectionGrid /> */}
        <ServicesSectionGrid2 />
        <WhyChooseUs />
        <Gallery />
        <CtaHomeSection />
    </div>
  );
}
