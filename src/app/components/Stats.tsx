export default function Stats() {
  const stats = [
    { value: '10K+', label: 'Professionals Trained For Exceptional Career Success' },
    { value: '200+', label: 'Sessions Delivered With Unmatched Learning Excellence' },
    { value: '5K+', label: 'Active Learners Engaged In Dynamic Courses' }
  ];

  return (
    <section id="stats" className="bg-white py-20 scroll-mt-20">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        
        {/* Section Heading */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-[#0F172A] text-center mb-2">
            Our <span className="text-[#2563EB]">Track Record</span>
          </h2>
          <p className="text-lg text-center text-[#0F172A]">
            The Numbers Behind <span className="text-[#2563EB]">Our Success</span>
          </p>
        </div>

        {/* Stats Row */}
        <div className="flex flex-col md:flex-row justify-center items-center md:items-start max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className={`flex flex-col items-center flex-1 w-full py-8 md:py-0
                ${index !== stats.length - 1 ? 'border-b md:border-b-0 md:border-r border-gray-200' : ''}
              `}
            >
              <div className="bg-[#DBEAFE] text-[#2563EB] rounded-full px-8 py-3 mb-4">
                <span className="text-4xl font-bold leading-none">{stat.value}</span>
              </div>
              <p className="text-[#0F172A] text-center text-sm max-w-[180px] font-medium leading-relaxed">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
