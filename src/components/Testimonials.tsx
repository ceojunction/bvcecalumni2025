import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Rajesh Kumar',
    batch: 'CSE 2008',
    photo: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
    quote: 'The last alumni meet was incredible! Reconnecting with friends after years felt like no time had passed. Looking forward to 2025!',
  },
  {
    name: 'Priya Sharma',
    batch: 'ECE 2012',
    photo: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400',
    quote: 'BECOSASO events bring back the best memories. The nostalgia, laughter, and friendships make it worth traveling from anywhere!',
  },
  {
    name: 'Anil Reddy',
    batch: 'Mech 2005',
    photo: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
    quote: 'These reunions remind me why BVC days were the best. Can\'t wait to meet everyone again and create new memories!',
  },
];

export function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#7A1E1E] mb-4">
            What Alumni Say
          </h2>
          <p className="text-lg text-[#333333]">
            Hear from fellow BVCians about their reunion experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-[#FAF7F2] p-8 rounded-2xl relative hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="absolute top-6 right-6 w-12 h-12 bg-[#D9B47C] rounded-full flex items-center justify-center opacity-20">
                <Quote className="w-6 h-6 text-[#7A1E1E]" />
              </div>

              <div className="flex items-center gap-4 mb-6">
                <img
                  src={testimonial.photo}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover border-4 border-[#D9B47C]"
                />
                <div>
                  <h3 className="font-bold text-[#7A1E1E] text-lg">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-[#333333]">{testimonial.batch}</p>
                </div>
              </div>

              <p className="text-[#333333] leading-relaxed italic">
                "{testimonial.quote}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
