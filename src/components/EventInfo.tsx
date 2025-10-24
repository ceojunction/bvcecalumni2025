import { Calendar, MapPin, Plane, Train, Car, Clock } from 'lucide-react';

export function EventInfo() {
  return (
    <section id="event-info" className="py-20 bg-gradient-to-br from-[#FAF7F2] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#7A1E1E] mb-4">
            Event Information
          </h2>
          <p className="text-lg text-[#333333]">
            Mark your calendars and plan your visit to Hyderabad
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-[#7A1E1E]">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#7A1E1E] rounded-lg flex items-center justify-center flex-shrink-0">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#7A1E1E] mb-2">Date & Time</h3>
                <p className="text-lg text-[#333333] mb-2">
                  <strong>Saturday, December 14, 2025</strong>
                </p>
                <p className="text-[#333333]">
                  Full day event with activities from morning to evening
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-[#C94F4F]">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#C94F4F] rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#7A1E1E] mb-2">Venue</h3>
                <p className="text-lg text-[#333333] mb-2">
                  <strong>Hyderabad, Telangana</strong>
                </p>
                <p className="text-[#333333]">
                  Exact venue details will be shared with registered alumni
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-lg mb-8">
          <h3 className="text-2xl font-bold text-[#7A1E1E] mb-6 flex items-center gap-3">
            <MapPin className="w-6 h-6 text-[#C94F4F]" />
            How to Reach Hyderabad
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-[#FAF7F2] rounded-lg flex items-center justify-center flex-shrink-0">
                <Plane className="w-5 h-5 text-[#7A1E1E]" />
              </div>
              <div>
                <h4 className="font-bold text-[#7A1E1E] mb-1">By Air</h4>
                <p className="text-sm text-[#333333]">
                  Rajiv Gandhi International Airport is well-connected to major cities worldwide
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-[#FAF7F2] rounded-lg flex items-center justify-center flex-shrink-0">
                <Train className="w-5 h-5 text-[#7A1E1E]" />
              </div>
              <div>
                <h4 className="font-bold text-[#7A1E1E] mb-1">By Train</h4>
                <p className="text-sm text-[#333333]">
                  Multiple railway stations with excellent connectivity across India
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-[#FAF7F2] rounded-lg flex items-center justify-center flex-shrink-0">
                <Car className="w-5 h-5 text-[#7A1E1E]" />
              </div>
              <div>
                <h4 className="font-bold text-[#7A1E1E] mb-1">By Road</h4>
                <p className="text-sm text-[#333333]">
                  Well-maintained highways connect Hyderabad to neighboring states
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#C94F4F] to-[#7A1E1E] p-8 rounded-2xl text-white text-center">
          <Clock className="w-12 h-12 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-2">Important Deadline</h3>
          <p className="text-xl">
            Register by <strong>December 1, 2025</strong> to secure your spot!
          </p>
        </div>
      </div>
    </section>
  );
}
