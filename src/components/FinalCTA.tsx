import { PartyPopper, Phone } from 'lucide-react';

export function FinalCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#FAF7F2] to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <PartyPopper className="w-20 h-20 text-[#C94F4F] mx-auto mb-6" />

        <h2 className="text-4xl md:text-5xl font-bold text-[#7A1E1E] mb-6">
          Don't Miss This Chance to Reunite!
        </h2>

        <p className="text-xl text-[#333333] mb-8 max-w-2xl mx-auto">
          Life gets busy, but some moments are worth making time for. This is your chance to reconnect with the people who made your college days unforgettable.
        </p>

        <div className="bg-gradient-to-r from-[#7A1E1E] to-[#5A1616] rounded-2xl p-8 md:p-12 mb-8 text-white">
          <p className="text-2xl md:text-3xl font-bold mb-6">
            December 14, 2025 • Hyderabad
          </p>
          <p className="text-lg mb-8 text-white/90">
            Registration closes December 1st – Don't wait until it's too late!
          </p>

          <a
            href="https://forms.gle/ZHJSfwVnBAdVAncY6"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-12 py-5 bg-[#C94F4F] hover:bg-[#D9B47C] text-white hover:text-[#7A1E1E] font-bold rounded-full text-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl mb-6"
          >
            Yes! Count Me In – Register Now
          </a>

          <p className="text-sm text-white/80">
            100% Free Registration • No Hidden Charges
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-[#333333]">
          <Phone className="w-5 h-5 text-[#C94F4F]" />
          <p>
            Have questions?{' '}
            <a
              href="#contact"
              className="font-semibold text-[#C94F4F] hover:text-[#7A1E1E] transition-colors"
            >
              Contact Dr. NSN Lakshmipathi Raju
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
