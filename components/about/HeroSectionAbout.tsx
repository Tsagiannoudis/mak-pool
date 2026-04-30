"use client";

import Image from "next/image";
import Link from "next/link";


const HeroSectionAbout = () => {
 
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Slider */}
      <div className="absolute inset-0 z-0">
            <Image
              src={"/heroHome3.jpg"}
              alt={`Mak Pool Project`}
              fill
              className="object-cover"
            />
            {/* Overlay για αντίθεση */}
            <div className="absolute inset-0 bg-black/40" />
          </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block py-2 px-6 rounded-full bg-white/10 backdrop-blur-md text-white text-sm font-semibold mb-8 uppercase tracking-widest border border-white/20">
            Η Ιστορία μας
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-[1.1] tracking-tight">
            Ποιοι είμαστε & <br />
            <span className="text-[#56B1E9] drop-shadow-sm">Το Όραμά μας</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-12 leading-relaxed max-w-2xl mx-auto font-medium">
            Ολοκληρωμένες λύσεις κατασκευής, διακόσμησης και συντήρησης πισίνας. 
            Η τεχνογνωσία συναντά την υψηλή αισθητική.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link
              href="/contact"
              className="bg-[#56B1E9] hover:bg-[#0762BD] text-white px-10 py-5 rounded-full font-bold transition-all shadow-2xl hover:scale-105 active:scale-95"
            >
              Ξεκινήστε το έργο σας
            </Link>
            <Link
              href="/services"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/30 px-10 py-5 rounded-full font-bold transition-all hover:scale-105 active:scale-95"
            >
              Δείτε τις υπηρεσίες
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSectionAbout;
