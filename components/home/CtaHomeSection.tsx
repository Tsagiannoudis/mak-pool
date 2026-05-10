import Link from "next/link";
import Image from "next/image";


const CtaHomeSection = () => {
    return (
        <section className="py-24 bg-white w-full">
            <div className="container mx-auto px-6">
                <div className="relative overflow-hidden rounded-3xl bg-[#0762BD] px-8 py-12 md:px-16 md:py-20 shadow-2xl">
                              <Image
                                src="/clear-blue-water-pool-through-sunlight-water-background.jpg"
                                alt={`Mak Pool Project`}
                                fill
                                className="object-cover"
                              />
                    
                              {/* Overlay */}
                              <div className="absolute inset-0 bg-black/20" />
                    {/* Διακοσμητικά στοιχεία στο background */}
                    <div className="absolute top-0 right-0 -mt-20 -mr-20 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
                    <div className="absolute bottom-0 left-0 -mb-20 -ml-20 h-80 w-80 rounded-full bg-black/10 blur-3xl" />

                    <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
                        <div className="max-w-2xl text-center lg:text-left">
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                                Χρειάζεστε κατασκευή, καθαρισμό ή συντήρηση πισίνας;
                            </h2>
                            <p className="text-purple-100 text-lg md:text-xl font-medium opacity-90">
                                Με την πολυετή εμπειρία μας, θα σας βοηθήσουμε να επιλέξετε την ιδανική λύση για τις ανάγκες της πισίνας σας.
                            </p>
                        </div>
                        <div className="flex-shrink-0 w-full lg:w-auto text-center">
                            <Link 
                                href="/contact" 
                                className="inline-block bg-[#7342A5] text-white hover:bg-zinc-100 hover:text-[#7342A5] px-10 py-5 rounded-full font-bold text-lg transition-all shadow-lg hover:scale-105 active:scale-95"
                            >
                                Επικοινωνήστε τώρα
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CtaHomeSection;