import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'Is registration really free?',
    answer: 'Yes, absolutely! Registration for the BECOSASO Alumni Meet 2025 is completely free. We want to make it easy for all alumni to attend and reconnect.',
  },
  {
    question: 'Can I bring my family members?',
    answer: 'Yes, you can bring your family members. Please mention the number of accompanying guests during registration so we can make appropriate arrangements.',
  },
  {
    question: 'Will accommodation be provided?',
    answer: 'We will share a list of recommended hotels near the venue with special rates for alumni. However, accommodation booking and expenses will need to be arranged by attendees.',
  },
  {
    question: 'What is the deadline for registration?',
    answer: 'Registration must be completed by December 1, 2025, to ensure we have accurate headcount for arrangements. Early registration is encouraged!',
  },
  {
    question: 'What activities are planned for the event?',
    answer: 'The event will include networking sessions, campus memory sharing, entertainment programs, cultural activities, lunch, and plenty of opportunities to reconnect with your batchmates.',
  },
  {
    question: 'How will I receive event updates?',
    answer: 'After registration, you will receive a confirmation email. All subsequent updates, including venue details and schedule, will be sent via email and WhatsApp.',
  },
  {
    question: 'Can I register on the event day?',
    answer: 'While we prefer pre-registration for better planning, walk-in registrations may be accommodated based on capacity. However, pre-registered alumni will get priority for all activities.',
  },
  {
    question: 'Is there a dress code?',
    answer: 'Smart casual attire is recommended. Feel comfortable and ready to have fun! Some alumni choose to wear college t-shirts or colors to show their BVC pride.',
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gradient-to-br from-[#FAF7F2] to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#7A1E1E] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-[#333333]">
            Got questions? We've got answers!
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-[#FAF7F2] transition-colors duration-300"
              >
                <span className="font-semibold text-[#7A1E1E] text-lg pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-6 h-6 text-[#C94F4F] flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`px-6 overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'py-5 max-h-96' : 'max-h-0'
                }`}
              >
                <p className="text-[#333333] leading-relaxed border-t border-[#FAF7F2] pt-5">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-[#333333] mb-4">
            Still have questions? We're here to help!
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-[#C94F4F] hover:bg-[#7A1E1E] text-white font-semibold rounded-full transition-all duration-300"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
