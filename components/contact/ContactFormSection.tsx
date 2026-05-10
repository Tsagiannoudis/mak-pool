"use client";

const ContactFormSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Contact Info Column */}
          <div className="lg:w-1/3">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-8">Στοιχεία Επικοινωνίας</h2>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center flex-shrink-0 text-[#0762BD]">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Διεύθυνση</h3>
                  <p className="text-gray-600">Άθυτος, Χαλκιδική</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center flex-shrink-0 text-[#0762BD]">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Τηλέφωνο</h3>
                  <p className="text-gray-600">+30 23740 21069</p>
                  <p className="text-gray-600">+30 694 9927121</p>
                  <p className="text-gray-600">+30 697 8844059</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center flex-shrink-0 text-[#0762BD]">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Email</h3>
                  <p className="text-gray-600">athitospool@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:w-2/3">
            <div className="bg-zinc-50 p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-gray-700 ml-1">Ονοματεπώνυμο</label>
                  <input 
                    type="text" 
                    placeholder="π.χ. Ιωάννης Παπαδόπουλος"
                    className="px-6 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0762BD] transition-all"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-gray-700 ml-1">Email</label>
                  <input 
                    type="email" 
                    placeholder="example@mail.com"
                    className="px-6 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0762BD] transition-all"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-gray-700 ml-1">Τηλέφωνο</label>
                  <input 
                    type="tel" 
                    placeholder="69XXXXXXXX"
                    className="px-6 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0762BD] transition-all"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-gray-700 ml-1">Θέμα</label>
                  <select className="px-6 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0762BD] transition-all bg-white appearance-none">
                    <option>Κατασκευή Πισίνας</option>
                    <option>Συντήρηση / Καθαρισμός</option>
                    <option>Ανακαίνιση</option>
                    <option>Άλλο</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2 md:col-span-2">
                  <label className="text-sm font-bold text-gray-700 ml-1">Το μήνυμά σας</label>
                  <textarea 
                    rows={5}
                    placeholder="Πώς μπορούμε να σας βοηθήσουμε;"
                    className="px-6 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0762BD] transition-all"
                  ></textarea>
                </div>
                <div className="md:col-span-2 mt-4">
                  <button 
                    type="submit"
                    className="w-full bg-[#056ec9] hover:bg-[#0a7bec] text-white font-bold py-5 rounded-xl transition-all shadow-lg hover:scale-[1.02] active:scale-95"
                  >
                    Αποστολή Μηνύματος
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;