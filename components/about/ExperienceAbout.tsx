const ExperienceAbout = () => {
  return (
    <section className="py-24 bg-zinc-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
            Η Εμπειρία μας
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Κατασκευάζουμε όμορφες πισίνες που είναι φτιαγμένες για να
            διαρκέσουν. Από την αντικατάσταση υπάρχουσας έως την κατασκευή μιας
            ολοκαίνουργιας, είμαστε δίπλα σας.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Card 1 */}
          <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group">
            <div className="w-14 h-14 bg-purple-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#056ec9] transition-colors duration-300">
              <svg
                className="w-7 h-7 text-[#0762BD] group-hover:text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">
              10+ Χρόνια Εμπειρίας
            </h3>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              Με πάνω από μια δεκαετία στον χώρο, έχουμε κατασκευάσει και
              συντηρήσει εκατοντάδες έργα σε όλη την Ελλάδα.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group">
            <div className="w-14 h-14 bg-purple-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#056ec9] transition-colors duration-300">
              <svg
                className="w-7 h-7 text-[#0762BD] group-hover:text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">
              Εξειδικευμένη Ομάδα
            </h3>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              Οι επαγγελματίες μας είναι αφοσιωμένοι στην παροχή υψηλής
              ποιότητας υπηρεσιών και στην απόλυτη ικανοποίησή σας.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group">
            <div className="w-14 h-14 bg-purple-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#056ec9] transition-colors duration-300">
              <svg
                className="w-7 h-7 text-[#0762BD] group-hover:text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">
              Προσαρμοσμένες Λύσεις
            </h3>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              Κάθε πελάτης είναι μοναδικός. Προσφέρουμε λύσεις που
              ανταποκρίνονται στις δικές σας ανάγκες και προτιμήσεις.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceAbout;
