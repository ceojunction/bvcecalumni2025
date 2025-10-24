import { Calendar, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#333333] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-[#D9B47C] mb-4">
              BECOSASO Alumni Meet 2025
            </h3>
            <div className="space-y-3 text-white/80">
              <div className="flex items-start gap-3">
                <Calendar className="w-5 h-5 text-[#C94F4F] flex-shrink-0 mt-0.5" />
                <span>December 14, 2025</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#C94F4F] flex-shrink-0 mt-0.5" />
                <span>Hyderabad, Telangana</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-[#D9B47C] mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://forms.gle/ZHJSfwVnBAdVAncY6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-[#D9B47C] transition-colors"
                >
                  Register Now
                </a>
              </li>
              <li>
                <a href="#faq" className="text-white/80 hover:text-[#D9B47C] transition-colors">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/80 hover:text-[#D9B47C] transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-white/80 hover:text-[#D9B47C] transition-colors">
                  Photo Gallery
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-[#D9B47C] mb-4">Contact Info</h3>
            <div className="space-y-3 text-white/80">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#C94F4F] flex-shrink-0 mt-0.5" />
                <a href="tel:+919866469639" className="hover:text-[#D9B47C] transition-colors">
                  +91 98664 69639
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#C94F4F] flex-shrink-0 mt-0.5" />
                <a
                  href="mailto:alumni.bvce@bvcgroup.in"
                  className="hover:text-[#D9B47C] transition-colors break-all"
                >
                  alumni.bvce@bvcgroup.in
                </a>
              </div>
              <p className="text-sm">Dr. NSN Lakshmipathi Raju</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
            <p>
              {currentYear} BECOSASO - BVC Engineering College Old Students Association. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-[#D9B47C] transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-[#D9B47C] transition-colors">
                Terms
              </a>
              <a href="#" className="hover:text-[#D9B47C] transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
