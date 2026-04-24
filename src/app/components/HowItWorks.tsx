export default function HowItWorks() {
  const steps = [
    {
      id: 1,
      title: 'Enquire',
      description: 'Tell us about your team size, goals and training needs'
    },
    {
      id: 2,
      title: 'Assessment',
      description: 'We run a CAT to identify skill gaps in your workforce'
    },
    {
      id: 3,
      title: 'Custom Plan',
      description: 'Our experts design a tailored learning roadmap'
    },
    {
      id: 4,
      title: 'Train & Grow',
      description: 'Execute the program and track measurable results'
    }
  ];

  return (
    <section id="how-it-works" className="bg-white py-20 scroll-mt-20">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Heading Block */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#0F172A] mb-3">
            How It <span className="text-[#2563EB]">Works</span>
          </h2>
          <p className="text-[#64748B] text-lg">
            Your journey to a high-performance team in 4 simple steps
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-6 relative">
          {steps.map((step, index) => (
            <div key={step.id} className="relative flex flex-col items-center text-center group">
              {/* Connecting Line */}
              {index !== steps.length - 1 && (
                <div className="hidden lg:block absolute top-[23px] left-[50%] w-full border-t-2 border-dashed border-[#DBEAFE] -z-10" />
              )}
              
              {/* Number Circle */}
              <div className="bg-[#2563EB] text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl mb-4 relative z-10 shadow-sm">
                {step.id}
              </div>
              
              {/* Title & Description */}
              <h3 className="text-[#0F172A] font-semibold text-lg mb-2">
                {step.title}
              </h3>
              <p className="text-[#64748B] text-sm max-w-[180px] mx-auto">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
