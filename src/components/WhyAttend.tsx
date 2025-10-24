import { Users, MapPinned, Sparkles, TrendingUp } from 'lucide-react';

const reasons = [
  {
    icon: Users,
    title: 'Reconnect with Old Friends',
    description: 'Meet your batchmates and relive the golden days of college life together.',
  },
  {
    icon: MapPinned,
    title: 'Happening Hyderabad',
    description: 'Experience the vibrant city of Hyderabad with its rich culture and connectivity.',
  },
  {
    icon: Sparkles,
    title: 'Fun & Nostalgia Unlimited',
    description: 'Enjoy entertainment, memories, and moments that will last a lifetime.',
  },
  {
    icon: TrendingUp,
    title: 'Network & Grow',
    description: 'Connect with successful alumni and explore new opportunities together.',
  },
];

export function WhyAttend() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#7A1E1E] mb-4">
            Why You Can't Miss This Reunion
          </h2>
          <p className="text-lg text-[#333333] max-w-2xl mx-auto">
            This is more than just a meet – it's a celebration of friendships, memories, and the journey we've all shared.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group bg-[#FAF7F2] p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-[#D9B47C]"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#7A1E1E] to-[#C94F4F] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <reason.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#7A1E1E] mb-3">
                {reason.title}
              </h3>
              <p className="text-[#333333]">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
