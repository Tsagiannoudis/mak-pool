import Image from "next/image";

const PLantRoom = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            {/* <span className="text-[#0762BD] font-bold uppercase tracking-widest text-sm mb-4 block">
              Σταδια για
            </span> */}
            <span className="text-black font-bold uppercase tracking-widest text-sm mb-4 block">
              Η Καρδιά της Ασφαλούς Λειτουργίας
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#0762BD] mb-8 leading-tight">
              Μηχανοστάσιο Πισίνας
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6 text-justify">
              Το μηχανοστάσιο αποτελεί αναμφίβολα το νευραλγικό κέντρο κάθε πισίνας.
              Στην Mak Pool, δίνουμε ύψιστη σημασία στον σχεδιασμό και την εγκατάσταση
              των μηχανολογικών συστημάτων, διασφαλίζοντας την πλήρη συμμόρφωση με
              τους αυστηρότερους διεθνείς κανονισμούς ασφάλειας και λειτουργικότητας.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed text-justify">
              Χρησιμοποιούμε αποκλειστικά υλικά υψηλής ποιότητας και αντοχής, προσφέροντας
              απόλυτη αξιοπιστία και μακροχρόνια απόδοση. Έτσι, εξασφαλίζουμε την
              απρόσκοπτη λειτουργία της πισίνας σας και την ηρεμία που σας αξίζει.
            </p>
            {/* <ul className="space-y-6 mt-8">
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
                <p className="text-lg text-gray-600 leading-relaxed text-justify">
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
                <p className="text-lg text-gray-600 leading-relaxed text-justify">
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
                <p className="text-lg text-gray-600 leading-relaxed text-justify">
                  Επενδύστε την πισίνα με πλακάκια, μωσαϊκό, επένδυση ή χρώμα
                  καλής ποιότητας
                </p>
              </li>
            </ul> */}
          </div>

          <div className="w-full lg:w-1/2 relative">
            <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/plantroom.jpg"
                alt="Μηχανοστάσιο Πισίνας - Mak Pool"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-4 right-4 md:-bottom-6 md:-right-6 bg-[#7342A5] text-white p-5 md:p-8 rounded-2xl shadow-xl">
              <p className="text-2xl font-bold text-right">Υλικά</p>
              <p className="text-sm uppercase tracking-wider">
                Υψηλής Ποιότητας
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PLantRoom;
