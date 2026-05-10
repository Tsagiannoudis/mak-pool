import Image from "next/image";

const PoolCare = () => {
  return (
    <section className="py-16 md:py-24 bg-[#F9F9F9]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          <div className="lg:w-1/2">
            {/* <span className="text-[#0762BD] font-bold uppercase tracking-widest text-sm mb-4 block">
              Σταδια για
            </span> */}
            <span className="text-black font-bold uppercase tracking-widest text-xs md:text-sm mb-4 block">
                Καθαρό Νερό, Ξέγνοιαστες Στιγμές
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#0762BD] mb-6 md:mb-8 leading-tight">
              Συντήρηση Πισίνας
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6 text-left lg:text-justify">
              Η MakPool προσφέρει μια ολοκληρωμένη γκάμα εγκεκριμένων χημικών προϊόντων
              και σύγχρονων μηχανημάτων για την άριστη επεξεργασία του νερού της πισίνας σας.
              Από τη φίλτρανση και την απολύμανση, μέχρι την απαλκαλίωση και την αφαλάτωση,
              διασφαλίζουμε κρυστάλλινο και υγιεινό νερό, πάντα σε προσιτές τιμές.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed text-left lg:text-justify">
              Πέρα από τα προϊόντα, παρέχουμε εξειδικευμένες υπηρεσίες συντήρησης πισίνας,
              ώστε να παραμένει σε άριστη κατάσταση καθ&apos; όλη τη διάρκεια του χρόνου.
              Η έμπειρη ομάδα μας είναι έτοιμη να καλύψει κάθε ανάγκη, από τον τακτικό
              καθαρισμό και την επιθεώρηση, έως την επισκευή και την αντικατάσταση
              εξαρτημάτων, προσφέροντάς σας απόλυτη ηρεμία.
            </p>
          </div>

          <div className="w-full lg:w-1/2 relative">
            <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/carePool.jpg"
                alt="Συντήρηση Πισίνας - Mak Pool"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-4 right-4 md:-bottom-6 md:-right-6 bg-[#056ec9] text-white p-5 md:p-8 rounded-2xl shadow-xl">
              <p className="text-2xl font-bold text-right">10+</p>
              <p className="text-sm uppercase tracking-wider">
                Χρόνια Εμπειρίας
              </p>
            </div>
          </div>
        
        </div>
      </div>
    </section>
  );
};

export default PoolCare;
