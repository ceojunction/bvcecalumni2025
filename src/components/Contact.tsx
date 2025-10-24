import { Phone, Mail, User } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#7A1E1E] mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-[#333333]">
            Have questions? Our alumni coordinator is here to help
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-[#7A1E1E] to-[#5A1616] rounded-2xl p-8 md:p-12 text-white shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-[#D9B47C]">
                  Alumni Coordinator
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#D9B47C] rounded-lg flex items-center justify-center flex-shrink-0">
                      <User className="w-6 h-6 text-[#7A1E1E]" />
                    </div>
                    <div>
                      <p className="font-semibold text-lg mb-1">
                        Dr. NSN Lakshmipathi Raju
                      </p>
                      <p className="text-white/80">Alumni Coordinator</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#D9B47C] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-[#7A1E1E]" />
                    </div>
                    <div>
                      <p className="text-white/80 text-sm mb-1">Phone</p>
                      <a
                        href="tel:+919866469639"
                        className="font-semibold text-lg hover:text-[#D9B47C] transition-colors"
                      >
                        +91 98664 69639
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#D9B47C] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-[#7A1E1E]" />
                    </div>
                    <div>
                      <p className="text-white/80 text-sm mb-1">Email</p>
                      <a
                        href="mailto:alumni.bvce@bvcgroup.in"
                        className="font-semibold text-lg hover:text-[#D9B47C] transition-colors break-all"
                      >
                        alumni.bvce@bvcgroup.in
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h4 className="font-bold text-xl mb-4 text-[#D9B47C]">
                  Quick Response Guarantee
                </h4>
                <p className="text-white/90 leading-relaxed mb-4">
                  We understand you may have questions about the event. Our team is committed to responding to all inquiries within 24 hours.
                </p>
                <p className="text-white/90 leading-relaxed">
                  Whether it's about registration, accommodation, travel, or any other aspect of the event, feel free to reach out. We're here to ensure your reunion experience is memorable!
                </p>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-white/20 text-center">
              <p className="text-white/80">
                For urgent queries, please call directly. For general inquiries, email is preferred.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
