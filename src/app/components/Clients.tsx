export default function Clients() {
  const clients = [
    'Reliance Industries',
    'HCL',
    'IBM',
    'CRIF',
    'ADP',
    'Bayer'
  ];

  return (
    <section id="clients" className="bg-white py-16 scroll-mt-20">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        
        {/* Heading Block */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#0F172A] mb-3">
            Our Proven <span className="text-[#2563EB]">Partnerships</span>
          </h2>
          <p className="text-lg text-[#0F172A]">
            Successful Collaborations With the <span className="text-[#2563EB]">Industry's Best</span>
          </p>
        </div>

        {/* Logo Container */}
        <div className="grid grid-cols-3 gap-4 md:flex md:flex-row md:justify-between md:items-center lg:gap-8">
          {clients.map((client, index) => (
            <div
              key={index}
              className="bg-white border border-gray-100 rounded-xl p-2 md:p-6 h-24 flex w-full items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
            >
              <span className="text-[#9CA3AF] font-semibold text-center text-sm md:text-base">{client}</span>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
