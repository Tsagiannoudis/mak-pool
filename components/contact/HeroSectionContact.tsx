import Image from "next/image";

const ContactHero = () => {
  return (
    <section className="relative h-[40vh] md:h-[80vh] w-full flex items-center justify-center overflow-hidden">
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
      <div className="relative z-10 text-center px-6">
        <h1 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tight">
          Επικοινωνήστε <span className="text-[#56B1E9]">Μαζί μας</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto font-medium">
          Είμαστε εδώ για να απαντήσουμε σε κάθε σας ερώτηση και να σχεδιάσουμε μαζί τον επόμενο επίγειο παράδεισό σας.
        </p>
      </div>
    </section>
  );
};

export default ContactHero;