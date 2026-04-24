export default function Testimonials() {
  const testimonials = [
    {
      quote: "Accredian transformed how our engineering team approaches problem-solving. The CAT assessment was eye-opening.",
      name: "Priya S.",
      company: "HCL Technologies",
      initials: "PS"
    },
    {
      quote: "The custom learning path designed for our analysts delivered measurable ROI within the first quarter.",
      name: "Rahul M.",
      company: "Reliance Industries",
      initials: "RM"
    },
    {
      quote: "Flexible, expert-led, and deeply relevant to our industry. Our teams loved every session.",
      name: "Anjali K.",
      company: "IBM India",
      initials: "AK"
    }
  ];

  return (
    <section id="testimonials" className="bg-white py-20 scroll-mt-20">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#0F172A] mb-3">
            What Our <span className="text-[#2563EB]">Clients Say</span>
          </h2>
          <p className="text-[#64748B] text-lg">
            Real results from real enterprise teams
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-[#F8FAFC] border border-gray-100 rounded-2xl p-6 hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="text-yellow-400 text-lg mb-3 tracking-widest leading-none">
                  ★★★★★
                </div>
                <p className="text-[#0F172A] text-sm leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#DBEAFE] flex items-center justify-center text-[#2563EB] font-bold text-sm flex-shrink-0">
                  {testimonial.initials}
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold text-[#0F172A] text-sm leading-tight">
                    {testimonial.name}
                  </span>
                  <span className="text-[#64748B] text-xs">
                    {testimonial.company}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
