import Link from "next/link";
import Image from "next/image";
import NavLinksMainData from "@/data/NavLinksMainData";

const Footer = () => {
 const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#FAFAFA] text-black pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Branding & About */}
          <div className="flex flex-col gap-0">
            <Link href="/" className="inline-block transition-transform hover:scale-105">
              <Image
                src="/mak-Pool-Logo.png"
                alt="makpool logo"
                width={190}
                height={68}
                priority
                className=" " // Μετατρέπει το logo σε λευκό για το dark background
              />
            </Link>
            <p className="text-sm leading-relaxed max-w-xs">
              Η Mak Pool προσφέρει ολοκληρωμένες λύσεις κατασκευής, διακόσμησης και συντήρησης πισίνας με έδρα την Άθυτο Χαλκιδικής.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[#7342A5] font-bold mb-8 uppercase tracking-widest text-xs">Πλοήγηση</h4>
            <ul className="space-y-4">
              {NavLinksMainData.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="hover:text-[#0762BD] transition-colors text-sm flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-[1px] bg-[#0762BD] mr-0 group-hover:mr-2 transition-all"></span>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details & Info */}
          <div>
            <h4 className="text-[#7342A5] font-bold mb-8 uppercase tracking-widest text-xs">Επικοινωνία</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-4">
                <svg className="w-5 h-5 text-[#0762BD] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <Link href="https://maps.app.goo.gl/8NGRWazU1RcHmSqg8" target="_blank" className="hover:text-[#0762BD] transition-colors">
                  Άθυτος, Χαλκιδική, Τ.Κ. 630 77
                </Link>
              </li>
              <li className="flex gap-4">
                <svg className="w-5 h-5 text-[#0762BD] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div className="flex flex-col gap-1">
                  <Link href="tel:+302374021069" className="hover:text-[#21212A] transition-colors">+30 23740 21069</Link>
                  <Link href="tel:+306949927121" className="hover:text-[#21212A] transition-colors">+30 694 9927121</Link>
                  <Link href="tel:+306978844059" className="hover:text-[#21212A] transition-colors">+30 697 8844059</Link>
                </div>
              </li>
              <li className="flex gap-4">
                <svg className="w-5 h-5 text-[#0762BD] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <Link href="mailto:athitospool@gmail.com" className="hover:text-[#0762BD] transition-colors">
                  athitospool@gmail.com
                </Link>
              </li>
            </ul>
          </div>

          {/* Working Hours or Short CTA */}
          <div>
            <h4 className="text-[#7342A5] font-bold mb-8 uppercase tracking-widest text-xs">Ωράριο Λειτουργίας</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex justify-between border-b border-zinc-800 pb-2">
                <span>Δευτέρα - Παρασκευή</span>
                <span className="text-[#21212A]">10:00 - 18:00</span>
              </li>
              <li className="flex justify-between border-b border-zinc-800 pb-2">
                <span>Σάββατο</span>
                <span className="text-[#21212A]">10:00 - 14:00</span>
              </li>
              <li className="flex justify-between">
                <span>Κυριακή</span>
                <span className="text-[#0762BD]">Κλειστά</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-zinc-500">
            © {currentYear} Mak Pool. Με επιφύλαξη παντός δικαιώματος.
            <span className="mx-2">|</span>
            Powered by tSagian Projects
          </p>
          <div className="flex gap-8 text-xs">
            <Link
              href="/privacy"
              className="hover:text-[#0762BD] transition-colors"
            >
              Πολιτική Απορρήτου
            </Link>
            <Link
              href="/terms"
              className="hover:text-[#0762BD] transition-colors"
            >
              Όροι Χρήσης
            </Link>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


 