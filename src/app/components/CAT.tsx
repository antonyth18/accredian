export default function CAT() {
  const features = [
    {
      id: 1,
      title: 'Skill Gap Analysis',
      description: 'Identify missing competencies across your teams instantly'
    },
    {
      id: 2,
      title: 'Custom Assessments',
      description: 'Build role-specific tests tailored to your industry'
    },
    {
      id: 3,
      title: 'Real-time Reports',
      description: 'Get detailed performance dashboards and insights'
    },
    {
      id: 4,
      title: 'Benchmarking',
      description: 'Compare your team against industry standards'
    }
  ];

  return (
    <section id="cat" className="bg-[#F8FAFC] py-20 scroll-mt-20">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        
        {/* Heading Block */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#0F172A] mb-3">
            Corporate <span className="text-[#2563EB]">Assessment Tool</span>
          </h2>
          <p className="text-lg text-[#64748B]">
            Measure, Evaluate & Upskill Your Workforce
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Left: Features List */}
          <div className="flex flex-col space-y-6 md:space-y-8">
            {features.map((feature) => (
              <div key={feature.id} className="flex items-start gap-4">
                <div className="bg-[#2563EB] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                  {feature.id}
                </div>
                <div className="flex flex-col">
                  <h3 className="text-[#0F172A] font-semibold text-base mb-1 leading-tight">
                    {feature.title}
                  </h3>
                  <p className="text-[#64748B] text-sm">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Stat Card */}
          <div className="bg-gradient-to-br from-[#2563EB] to-[#1d4ed8] p-8 md:p-12 text-white rounded-2xl shadow-xl flex flex-col justify-center">
            
            <div className="mb-1">
              <span className="text-6xl md:text-7xl font-bold">85%</span>
            </div>
            <p className="text-white/80 text-sm md:text-base mb-8 max-w-sm">
              Average skill improvement after CAT-based training
            </p>
            
            {/* Divider */}
            <div className="border-t border-white/20 w-full mb-8"></div>
            
            {/* Small Inline Stats */}
            <div className="flex flex-col sm:flex-row justify-between gap-6">
              <div className="flex flex-col">
                <span className="font-bold text-2xl">500+</span>
                <span className="text-white/80 text-sm">Companies</span>
              </div>
              <div className="hidden sm:block border-l border-white/20"></div>
              <div className="flex flex-col">
                <span className="font-bold text-2xl">1M+</span>
                <span className="text-white/80 text-sm">Assessments</span>
              </div>
              <div className="hidden sm:block border-l border-white/20"></div>
              <div className="flex flex-col">
                <span className="font-bold text-2xl">98%</span>
                <span className="text-white/80 text-sm">Accuracy</span>
              </div>
            </div>
            
          </div>

        </div>
      </div>
    </section>
  );
}
