import { Calendar, MapPin, Sparkles } from 'lucide-react';
import { CountdownTimer } from './CountdownTimer';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[url('/Hero%20Background.png')] bg-cover bg-center"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#7A1E1E]/95 via-[#8B2828]/85 to-[#5A1616]/90"></div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(217,180,124,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(201,79,79,0.1),transparent_50%)]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <div className="animate-fade-in space-y-8">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#D9B47C] to-[#C9A968] rounded-full shadow-lg">
            <Sparkles className="w-4 h-4 text-[#7A1E1E]" />
            <p className="text-[#7A1E1E] font-bold text-sm sm:text-base tracking-wide">
              YOU ARE CORDIALLY INVITED
            </p>
            <Sparkles className="w-4 h-4 text-[#7A1E1E]" />
          </div>

          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl md:text-8xl font-extrabold text-white leading-tight tracking-tight">
              BECOSASO
              <span className="block bg-gradient-to-r from-[#D9B47C] via-[#F5E6C8] to-[#D9B47C] bg-clip-text text-transparent mt-2">
                Alumni Meet 2025
              </span>
            </h1>

            <div className="flex items-center justify-center gap-3 text-[#FAF7F2]">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#D9B47C]"></div>
              <p className="text-2xl sm:text-3xl md:text-4xl font-light tracking-wider">
                Reconnect • Relive • Rejoice
              </p>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#D9B47C]"></div>
            </div>
          </div>

          <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            A grand reunion to reconnect with old friends, relive cherished college memories,
            and create new bonds in the city of pearls.
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <div className="group flex items-center gap-3 bg-white/20 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/30 hover:bg-white/30 transition-all duration-300">
              <div className="bg-[#D9B47C] p-2 rounded-lg">
                <Calendar className="w-5 h-5 text-[#7A1E1E]" />
              </div>
              <div className="text-left">
                <p className="text-xs text-white/70 font-medium">Date</p>
                <p className="text-white font-bold">December 14, 2025</p>
              </div>
            </div>

            <div className="group flex items-center gap-3 bg-white/20 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/30 hover:bg-white/30 transition-all duration-300">
              <div className="bg-[#D9B47C] p-2 rounded-lg">
                <MapPin className="w-5 h-5 text-[#7A1E1E]" />
              </div>
              <div className="text-left">
                <p className="text-xs text-white/70 font-medium">Venue</p>
                <p className="text-white font-bold">Hyderabad, Telangana</p>
              </div>
            </div>
          </div>

          <div className="pt-6">
            <CountdownTimer targetDate="2025-12-14T00:00:00" />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <a
              href="https://forms.gle/ZHJSfwVnBAdVAncY6"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-10 py-5 bg-gradient-to-r from-[#C94F4F] to-[#B13F3F] hover:from-[#D9B47C] hover:to-[#C9A968] text-white hover:text-[#7A1E1E] font-bold rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-[#D9B47C]/50"
            >
              <span className="relative z-10">Register Now – It's FREE!</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#D9B47C] to-[#C9A968] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>

            <a
              href="#event-info"
              className="px-10 py-5 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white font-bold rounded-full text-lg transition-all duration-300 border-2 border-white/40 hover:border-[#D9B47C] hover:shadow-lg"
            >
              View Event Details
            </a>
          </div>

          <div className="pt-8">
            <p className="text-[#D9B47C] text-sm font-semibold animate-pulse">
              Registration Closes: December 1, 2025
            </p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#FAF7F2] via-[#FAF7F2]/50 to-transparent"></div>

      <div className="absolute top-20 left-10 w-32 h-32 bg-[#D9B47C]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#C94F4F]/10 rounded-full blur-3xl"></div>
    </section>
  );
}
