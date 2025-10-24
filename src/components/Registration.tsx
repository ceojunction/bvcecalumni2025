import { CheckCircle2, MousePointerClick, FileCheck, Mail } from 'lucide-react';
import { CountdownTimer } from './CountdownTimer';

const benefits = [
  'Free registration for all alumni',
  'Access to all event activities and sessions',
  'Networking opportunities with fellow alumni',
  'Complimentary refreshments and lunch',
  'Exclusive alumni merchandise',
  'Photo and video coverage of the event',
];

const steps = [
  {
    icon: MousePointerClick,
    title: 'Click Register Now',
    description: 'Click the button below to open the registration form',
  },
  {
    icon: FileCheck,
    title: 'Fill Out the Form',
    description: 'Provide your details in the simple Google Form',
  },
  {
    icon: Mail,
    title: 'Get Confirmation',
    description: 'Receive confirmation email with event details',
  },
];

export function Registration() {
  return (
    <section id="register" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#7A1E1E] mb-4">
            Secure Your Spot – Registration is FREE!
          </h2>
          <p className="text-lg text-[#333333] max-w-2xl mx-auto">
            Don't miss this opportunity to reconnect with your batchmates. Registration takes less than 2 minutes!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="relative inline-block mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-[#7A1E1E] to-[#C94F4F] rounded-full flex items-center justify-center">
                  <step.icon className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#D9B47C] rounded-full flex items-center justify-center text-[#7A1E1E] font-bold">
                  {index + 1}
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#7A1E1E] mb-2">
                {step.title}
              </h3>
              <p className="text-[#333333]">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-[#FAF7F2] to-white p-8 md:p-12 rounded-2xl shadow-xl mb-12">
          <h3 className="text-2xl font-bold text-[#7A1E1E] mb-6 text-center">
            What You Get When You Register
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#C94F4F] flex-shrink-0 mt-1" />
                <span className="text-[#333333]">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mb-8">
          <div className="inline-block mb-6 px-6 py-3 bg-[#FAF7F2] rounded-full border-2 border-[#C94F4F]">
            <p className="text-[#333333] font-semibold flex items-center gap-3">
              Registration closes in
              <CountdownTimer targetDate="2025-12-01T23:59:59" compact />
            </p>
          </div>
        </div>

        <div className="text-center">
          <a
            href="https://forms.gle/ZHJSfwVnBAdVAncY6"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-12 py-5 bg-gradient-to-r from-[#C94F4F] to-[#7A1E1E] hover:from-[#D9B47C] hover:to-[#C94F4F] text-white font-bold rounded-full text-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
          >
            Register for BECOSASO Alumni Meet 2025 – FREE!
          </a>
          <p className="mt-4 text-[#333333]">
            No payment required • Takes less than 2 minutes
          </p>
        </div>
      </div>
    </section>
  );
}
