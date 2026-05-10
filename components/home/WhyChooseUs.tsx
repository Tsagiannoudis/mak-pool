import Image from "next/image";

const WhyChooseUs = () => {
    const features = [
        {
            title: "10+ Χρόνια Εμπειρίας",
            description: "Πολυετής εξειδίκευση στην κατασκευή και συντήρηση πισίνας, εγγυώμενοι το καλύτερο δυνατό αποτέλεσμα.",
            icon: (
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            )
        },
        {
            title: "Άμεση Εξυπηρέτηση",
            description: "Με έδρα την Άθυτο Χαλκιδικής, βρισκόμαστε δίπλα σας άμεσα για κάθε ανάγκη στην ευρύτερη περιοχή και σε όλη την Βόρεια Ελλάδα.",
            icon: (
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            )
        },
        {
            title: "Γρήγορη Ανταπόκριση",
            description: "Αντιλαμβανόμαστε την κρισιμότητα των εργασιών συντήρησης και ανταποκρινόμαστε άμεσα στα αιτήματά σας.",
            icon: (
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            )
        }
    ];

    return (
        <section className="relative py-16 md:py-24 w-full overflow-hidden">
            <Image
                src="/chair-background-hotel-summer-sky.jpg"
                alt="Mak Pool Project"
                fill
                className="object-cover"
            />

            {/* Σκούρο Overlay για να φαίνονται τα γράμματα */}
            <div className="absolute inset-0 bg-black/55" />

            <div className="relative z-10 container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Γιατί να επιλέξετε εμάς;
                    </h2>
                    <p className="text-gray-200 text-lg">
                        Η πολυετής εμπειρία μας και η αγάπη για το αντικείμενο μας καθιστούν τον ιδανικό συνεργάτη για την πισίνα σας.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                    {features.map((feature, index) => (
                        <div key={index} className="group flex flex-col items-center text-center p-8 rounded-2xl hover:bg-white/5 transition-colors duration-300">
                            <div className="w-16 h-16 bg-[#056ec9] rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-200 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">
                                {feature.title}
                            </h3>
                            <p className="text-gray-300 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;