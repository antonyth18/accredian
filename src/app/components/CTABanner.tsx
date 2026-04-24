import { Headphones } from 'lucide-react';

export default function CTABanner({ onContact }: { onContact?: () => void }) {
  return (
    <div className="max-w-[1440px] mx-auto w-full">
      <section className="bg-[#2563EB] rounded-2xl mx-4 md:mx-12 my-8 py-8 md:py-10 px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Left Side */}
          <div className="flex flex-col md:flex-row items-center text-center md:text-left gap-4 md:gap-6 flex-1">
            <div className="w-16 h-16 bg-white rounded-2xl flex-shrink-0 flex items-center justify-center shadow-sm">
              <Headphones className="w-8 h-8 text-[#2563EB]" />
            </div>
            <div>
              <h3 className="text-white text-[20px] md:text-[24px] font-bold leading-tight">
                Want to Learn More About Our Training Solutions?
              </h3>
              <p className="text-white/80 text-[14px] md:text-[16px] mt-2 md:mt-1">
                Get Expert Guidance for Your Team's Success!
              </p>
            </div>
          </div>

          {/* Right Side */}
          <button onClick={onContact} className="w-full md:w-auto border-2 border-white text-white bg-transparent px-8 py-3 rounded-lg hover:bg-white hover:text-[#2563EB] transition-colors text-[16px] font-semibold flex items-center justify-center flex-shrink-0">
            Contact Us &gt;
          </button>
          
        </div>
      </section>
    </div>
  );
}
