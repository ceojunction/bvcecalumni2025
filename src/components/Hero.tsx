import { Calendar, MapPin, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { CountdownTimer } from './CountdownTimer';

export function Hero() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[url('/Hero%20Background.png')] bg-cover bg-center bg-no-repeat"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#7A1E1E]/95 via-[#8B2828]/90 to-[#5A1616]/95"></div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(217,180,124,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(201,79,79,0.1),transparent_50%)]"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 py-20 md:py-32">
        <div className="text-center lg:text-left flex flex-col items-center lg:items-start space-y-6 sm:space-y-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={scaleIn}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#D9B47C] to-[#C9A968] rounded-full shadow-lg"
          >
            <Sparkles className="w-4 h-4 text-[#7A1E1E]" />
            <h1 className="text-[#7A1E1E] font-bold text-xs sm:text-sm md:text-base tracking-wide">
              YOU ARE CORDIALLY INVITED!
            </h1>
            <Sparkles className="w-4 h-4 text-[#7A1E1E]" />
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="space-y-3 sm:space-y-4"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-tight tracking-tight">
              BECOSASO
              <span className="block bg-gradient-to-r from-[#D9B47C] via-[#F5E6C8] to-[#D9B47C] bg-clip-text text-transparent mt-1 sm:mt-2">
                Alumni Meet 2025
              </span>
            </h2>

            <div className="flex items-center justify-center lg:justify-start gap-2 sm:gap-3 text-[#FAF7F2]">
              <div className="h-px w-8 sm:w-12 bg-gradient-to-r from-transparent to-[#D9B47C]"></div>
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light tracking-wider">
                Reconnect • Relive • Rejoice
              </p>
              <div className="h-px w-8 sm:w-12 bg-gradient-to-l from-transparent to-[#D9B47C]"></div>
            </div>
          </motion.div>

          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-base sm:text-lg md:text-xl text-[#FAF7F2]/95 max-w-2xl leading-relaxed"
          >
            A grand get-together to reconnect and relive cherished memories with unlimited fun, friendship, and nostalgia.
          </motion.p>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 pt-2 sm:pt-4 w-full sm:w-auto"
          >
            <div className="group flex items-center gap-3 bg-white/20 backdrop-blur-md px-4 sm:px-6 py-3 sm:py-4 rounded-2xl border border-white/30 hover:bg-white/30 transition-all duration-300">
              <div className="bg-[#D9B47C] p-2 rounded-lg flex-shrink-0">
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-[#7A1E1E]" />
              </div>
              <div className="text-left">
                <p className="text-xs text-white/70 font-medium">Date</p>
                <p className="text-sm sm:text-base text-white font-bold">December 14, 2025</p>
              </div>
            </div>

            <div className="group flex items-center gap-3 bg-white/20 backdrop-blur-md px-4 sm:px-6 py-3 sm:py-4 rounded-2xl border border-white/30 hover:bg-white/30 transition-all duration-300">
              <div className="bg-[#D9B47C] p-2 rounded-lg flex-shrink-0">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-[#7A1E1E]" />
              </div>
              <div className="text-left">
                <p className="text-xs text-white/70 font-medium">Venue</p>
                <p className="text-sm sm:text-base text-white font-bold">Hyderabad, Telangana</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            className="pt-4 sm:pt-6 w-full flex justify-center lg:justify-start"
          >
            <CountdownTimer targetDate="2025-12-14T00:00:00" />
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start pt-6 sm:pt-8 w-full sm:w-auto"
          >
            <a
              href="https://forms.gle/ZHJSfwVnBAdVAncY6"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 bg-gradient-to-r from-[#C94F4F] to-[#B13F3F] hover:from-[#D9B47C] hover:to-[#C9A968] text-white hover:text-[#7A1E1E] font-bold rounded-full text-base sm:text-lg md:text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-[#D9B47C]/50 text-center"
            >
              <span className="relative z-10">Register Now – It's FREE!</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#D9B47C] to-[#C9A968] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>

            <a
              href="#event-info"
              className="px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white font-bold rounded-full text-base sm:text-lg md:text-xl transition-all duration-300 border-2 border-white/40 hover:border-[#D9B47C] hover:shadow-lg text-center"
            >
              View Event Details
            </a>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
            className="pt-4 sm:pt-8"
          >
            <p className="text-[#D9B47C] text-xs sm:text-sm md:text-base font-semibold animate-pulse">
              Registration Closes: December 1, 2025
            </p>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 sm:h-40 bg-gradient-to-t from-[#FAF7F2] via-[#FAF7F2]/50 to-transparent"></div>

      <div className="absolute top-20 left-4 sm:left-10 w-24 h-24 sm:w-32 sm:h-32 bg-[#D9B47C]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-4 sm:right-10 w-32 h-32 sm:w-40 sm:h-40 bg-[#C94F4F]/10 rounded-full blur-3xl"></div>
    </section>
  );
}
