import Link from "next/link";
import Image from "next/image";

const OurCommitmentCta = () => {
  return (
    <section className="py-24 bg-white w-full">
      <div className="container mx-auto px-6">
        <div className="relative overflow-hidden rounded-3xl bg-[#0762BD] px-8 py-12 md:px-16 md:py-20 shadow-2xl text-white">
          <Image
            src="/sunny-hotel-blue-reflection-holiday.jpg"
            alt={`Mak Pool Project`}
            fill
            className="object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50" />

          {/* Διακοσμητικά στοιχεία στο background */}
                    <div className="absolute top-0 right-0 -mt-20 -mr-20 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
                    <div className="absolute bottom-0 left-0 -mb-20 -ml-20 h-80 w-80 rounded-full bg-black/10 blur-3xl" />

          <div className="relative z-10 flex flex-col items-center text-center gap-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Η Δέσμευσή μας
            </h2>
            <p className="text-white-100 text-lg md:text-xl font-medium opacity-90 max-w-3xl">
              Το να ξεπερνάτε τις προσδοκίες σας ξεκινάει από εμάς! Η Mak Pool
              διαθέτει τη γνώση, την εμπειρία και τη δέσμευση που απαιτούνται
              για να μετατρέψει το όνειρό σας σε πραγματικότητα.
              Επικεντρωνόμαστε στην παροχή της υψηλότερης ποιότητας κατασκευής
              και υλικών για να διασφαλίσουμε ότι όλοι οι πελάτες μας είναι
              απόλυτα ικανοποιημένοι με τα αποτελέσματα των έργων τους.
            </p>
            <p className="text-white-100 text-lg md:text-xl font-medium opacity-90 max-w-3xl mt-4">
              Θα μας άρεσε πολύ η ευκαιρία να σας παρέχουμε μια εξατομικευμένη
              εκτίμηση για το επόμενο έργο σας στην πισίνα, γι&apos; αυτό
              επικοινωνήστε μαζί μας σήμερα.
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-block bg-white text-[#0762BD] hover:bg-zinc-100 px-10 py-5 rounded-full font-bold text-lg transition-all shadow-lg hover:scale-105 active:scale-95"
              >
                Ζητήστε Εκτίμηση Τώρα
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurCommitmentCta;
