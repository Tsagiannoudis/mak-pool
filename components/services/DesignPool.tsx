import Image from "next/image";

const DesignPool = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            {/* <span className="text-[#0762BD] font-bold uppercase tracking-widest text-sm mb-4 block">
              Σταδια για
            </span> */}
            <span className="text-black font-bold uppercase tracking-widest text-sm mb-4 block">
              Αισθητική & Πολυτέλεια: Η Δική σας Όαση
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#0762BD] mb-8 leading-tight">
              Εξοπλισμός & Διακόσμηση
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6 text-justify">
              Η Mak Pool διαθέτει μια πλούσια γκάμα προϊόντων για την αισθητική και λειτουργική αναβάθμιση
              της πισίνας και του περιβάλλοντος χώρου σας. Από υδροκουρτίνες και σιντριβάνια μέχρι
              εξειδικευμένο φωτισμό LED, συστήματα θέρμανσης και υδρομασάζ, δημιουργούμε τον ιδανικό
              χώρο χαλάρωσης και ευεξίας. Μετατρέψτε την πισίνα σας σε έναν επίγειο παράδεισο όπου
              η ηρεμία συναντά τη διασκέδαση.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed text-justify">
              Είτε ονειρεύεστε έναν χώρο με μοντέρνα αρχιτεκτονική, είτε προτιμάτε μια πιο παραδοσιακή 
              προσέγγιση με φυσικά υλικά, η έμπειρη ομάδα μας είναι εδώ για να σας καθοδηγήσει. 
              Επιλέγουμε μαζί τα κατάλληλα στοιχεία διακόσμησης που θα αναδείξουν την αισθητική 
              και θα απογειώσουν τη λειτουργικότητα του δικού σας μοναδικού έργου.
            </p>
          </div>

          <div className="w-full lg:w-1/2 relative">
            <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/diakosmisi.jpg"
                alt="Διακόσμηση Πισίνας - Mak Pool"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-4 right-4 md:-bottom-6 md:-right-6 bg-[#0762BD] text-white p-5 md:p-8 rounded-2xl shadow-xl">
              <p className="text-2xl font-bold text-right">Design</p>
              <p className="text-sm uppercase tracking-wider">
                Υψηλή Αισθητική
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignPool;
