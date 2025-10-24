import { Users, Globe, Briefcase, GraduationCap } from 'lucide-react';

const stats = [
  { icon: Users, value: '10,000+', label: 'Alumni Worldwide' },
  { icon: Globe, value: '50+', label: 'Countries' },
  { icon: Briefcase, value: '500+', label: 'Entrepreneurs' },
  { icon: GraduationCap, value: '40+', label: 'Years of Legacy' },
];

export function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-[#7A1E1E] to-[#5A1616] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About BECOSASO
          </h2>
          <div className="w-24 h-1 bg-[#D9B47C] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold mb-6 text-[#D9B47C]">
              BVC Engineering College Old Students Association
            </h3>
            <div className="space-y-4 text-lg text-white/90">
              <p>
                BECOSASO is the official alumni association of BVC Engineering College, established to maintain the bond between the institution and its graduates. We are a vibrant community of professionals, entrepreneurs, and leaders spread across the globe.
              </p>
              <p>
                Our association serves as a platform for networking, knowledge sharing, and giving back to our alma mater. Through various initiatives, we support current students, organize reunions, and foster professional connections among alumni.
              </p>
              <p className="font-semibold text-[#D9B47C]">
                "Once a BVCian, Always a BVCian"
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="w-12 h-12 bg-[#D9B47C] rounded-lg flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-[#7A1E1E]" />
                </div>
                <div className="text-3xl font-bold text-[#D9B47C] mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-white/80">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
          <h3 className="text-2xl font-bold mb-4 text-[#D9B47C]">Our Mission</h3>
          <p className="text-lg text-white/90">
            To strengthen the alumni network, foster lifelong connections, support the growth of BVC Engineering College, and create opportunities for professional and personal development among our members. We believe in the power of our community to inspire, support, and elevate each other.
          </p>
        </div>
      </div>
    </section>
  );
}
