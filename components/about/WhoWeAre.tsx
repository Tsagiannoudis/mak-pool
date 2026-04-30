import Image from "next/image";

const WhoWeAre = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 relative">
            <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/gallery1.jpg"
                alt="Ποιοι Είμαστε - Mak Pool"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-[#8a34c4] text-white p-8 rounded-2xl hidden md:block shadow-xl">
              <p className="text-4xl font-bold">10+</p>
              <p className="text-sm uppercase tracking-wider">
                Χρόνια Εμπειρίας
              </p>
            </div>
          </div>
          <div className="lg:w-1/2">
            <span className="text-[#8a34c4] font-bold uppercase tracking-widest text-sm mb-4 block">
              Η Εταιρεία μας
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-8 leading-tight">
              Σχετικά με μάς
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Η Mak Pool είναι μια εταιρεία κατασκευής και συντήρησης που
              ειδικεύεται στην κατασκευή πισινών. H έδρα της εταιρείας βρίσκεται
              στην Άθυτο Χαλκιδικής και εξυπηρετούμε όλη την Βόρεια Ελλάδα.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Η ομάδα των ειδικών μας δημιουργεί την απόλυτη εμπειρία κολύμβησης
              για τους πελάτες μας, είτε πρόκειται για μια σύνθετη όαση στην
              πίσω αυλή είτε για μια απλή αλλά κομψή επίγεια πισίνα.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
