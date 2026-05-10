import Image from "next/image";
import Link from "next/link";


const ContactHero = () => {
  return (
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/heroHome2.jpg"
          alt="Επικοινωνία - Mak Pool"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 mt-30">
        <h1 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
          Επικοινωνήστε <span className="text-[#56B1E9]">Μαζί μας</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto font-medium">
          Είμαστε εδώ για να απαντήσουμε σε κάθε σας ερώτηση και να σχεδιάσουμε μαζί τον επόμενο επίγειο παράδεισό σας.
        </p>

        <div className="flex flex-wrap justify-center gap-6 mt-10">
            <Link
              href="/services"
              className="bg-[#056ec9] hover:bg-[#0762BD] text-white px-10 py-5 rounded-full font-bold transition-all shadow-2xl hover:scale-105 active:scale-95"
            >
              Δείτε τις υπηρεσίες
            </Link>
            <Link
              href="/about"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/30 px-10 py-5 rounded-full font-bold transition-all hover:scale-105 active:scale-95"
            >
              Σχετικα με μάς
            </Link>
          </div>

      </div>

    </section>
  );
};

export default ContactHero;