import Image from "next/image";

const Construction = () => {
  return (
   <section className="py-16 md:py-24 bg-[#F9F9F9]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="lg:w-1/2">
            <span className="text-black font-bold uppercase tracking-widest text-xs md:text-sm mb-4 block">
              Από το Όνειρο στην Υλοποίηση
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#0762BD] mb-6 md:mb-8 leading-tight">
              Κατασκευή πισίνας
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6 text-left lg:text-justify">
              Δεν είστε σίγουροι για το είδος της κατασκευής πισίνας που πρέπει να επιλέξετε; Είμαστε εδώ για να σας βοηθήσουμε. Πριν κάνετε το άλμα προς την κατασκευή πισίνας, πρέπει να θέσετε στον εαυτό σας ορισμένες ερωτήσεις. Σκοπεύετε να περνάτε χρόνο με την οικογένεια και τους φίλους σας σε αυτήν; 
            </p>
            <p className="text-lg text-gray-600 leading-relaxed text-left lg:text-justify">
              Θέλετε ένα συγκεκριμένο στυλ ή τύπο κατασκευής; Έχετε αρκετό χώρο για μια μεγάλη πισίνα στην πίσω αυλή; Ειδικευόμαστε σε όλους τους τύπους πισινών και μπορούμε να σας βοηθήσουμε να κατασκευάσετε ακριβώς αυτό που θέλετε!
            </p>
            <ul className="space-y-4 md:space-y-6 mt-8">
              <li className="flex items-start gap-4">
                <div className="mt-1.5 bg-[#56B1E9] p-1 rounded-full flex-shrink-0 shadow-sm">
                  <svg
                    className="w-3 h-3 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={4}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed text-left lg:text-justify">
                  Έρευνα και σχεδιασμός πισίνας, συμπεριλαμβανομένων
                  λεπτομερειών υπερχείλισης, καταρράκτη και skimmer για πισίνες
                  όλων των μεγεθών και σχημάτων
                </p>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1.5 bg-[#56B1E9] p-1 rounded-full flex-shrink-0 shadow-sm">
                  <svg
                    className="w-3 h-3 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={4}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed text-left lg:text-justify">
                  Έρευνα, σχεδιασμός και προμήθεια επιλεγμένων προϊόντων
                  ηλεκτρομηχανολογικού εξοπλισμού υψηλών προδιαγραφών
                </p>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1.5 bg-[#56B1E9] p-1 rounded-full flex-shrink-0 shadow-sm">
                  <svg
                    className="w-3 h-3 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={4}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed text-left lg:text-justify">
                  Επενδύστε την πισίνα με πλακάκια, μωσαϊκό, επένδυση ή χρώμα
                  καλής ποιότητας
                </p>
              </li>
            </ul>
          </div>

          <div className="w-full lg:w-1/2 relative">
            <div className="relative h-[400px] sm:h-[400px] lg:h-[700px] w-full rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/constraction.jpg"
                alt="Κατασκεύη Πισίνας - Mak Pool"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-4 right-4 md:-bottom-6 md:-right-6 bg-[#0762BD] text-white p-5 md:p-8 rounded-2xl shadow-xl">
              <p className="text-2xl md:text-4xl font-bold text-right">2000+</p>
              <p className="text-[10px] md:text-sm uppercase tracking-wider">
                Εργα Πισίνας
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Construction;
