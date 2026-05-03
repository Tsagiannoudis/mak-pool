import Link from "next/link";
import Image from "next/image";

const HeroSectionServices = () => {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center py-24 overflow-hidden">
      <Image
        src="/heroservices.jpg"
        alt="Υπηρεσίες Mak Pool"
        className="object-cover"
        fill
        priority
      />
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 container mx-auto px-6 text-center mt-20">
        <div className="max-w-4xl mx-auto w-full">
          <span className="inline-block py-2 px-6 rounded-full bg-white/10 backdrop-blur-md text-white text-sm font-semibold mb-8 uppercase tracking-widest border border-white/20">
            Οι δουλειές μας
          </span>
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-black text-white mb-8 leading-[1.1] tracking-tight">
            Κάθε έργο είναι <br />
            <span className="text-[#56B1E9] drop-shadow-sm">
              μοναδικό
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-12 leading-relaxed max-w-2xl mx-auto font-medium">
            Ολοκληρωμένες λύσεις κατασκευής, διακόσμησης και συντήρησης
            πισίνας. Η τεχνογνωσία συναντά την υψηλή αισθητική.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link
              href="/contact"
              className="bg-[#56B1E9] hover:bg-[#064e96] text-white px-10 py-5 rounded-full font-bold transition-all shadow-2xl hover:scale-105 active:scale-95"
            >
              Ξεκινήστε το έργο σας
            </Link>
            <Link
              href="/about"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/30 px-10 py-5 rounded-full font-bold transition-all hover:scale-105 active:scale-95"
            >
              Σχετικά με εμάς
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSectionServices;
