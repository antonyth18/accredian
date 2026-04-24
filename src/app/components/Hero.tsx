import { Check } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export default function Hero({ onEnquire }: { onEnquire?: () => void }) {
  return (
    <section className="bg-[#F8FAFC] py-10 md:py-20 px-6 md:px-12">
      <div className="max-w-[1440px] mx-auto bg-white/60 backdrop-blur-sm rounded-[24px] shadow-sm border border-slate-100 p-8 md:p-12 lg:p-16 flex flex-col md:flex-row items-center gap-12">
        
        {/* Left Column */}
        <div className="w-full md:w-1/2">
          <h1 className="text-[40px] md:text-[56px] font-bold leading-tight text-[#0F172A] mb-4">
            Next-Gen <span className="text-[#2563EB]">Expertise</span><br className="hidden md:block" />
            For Your <span className="text-[#2563EB]">Enterprise</span>
          </h1>
          
          <p className="text-[#64748B] text-[18px] mb-8">
            Cultivate high-performance teams through expert learning.
          </p>
          
          <div className="flex flex-row flex-wrap xl:flex-nowrap gap-4 md:gap-6 mb-10">
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-green-500 flex-shrink-0" strokeWidth={3} />
              <span className="text-[#0F172A] font-medium whitespace-nowrap">Tailored Solutions</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-green-500 flex-shrink-0" strokeWidth={3} />
              <span className="text-[#0F172A] font-medium whitespace-nowrap">Industry Insights</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-green-500 flex-shrink-0" strokeWidth={3} />
              <span className="text-[#0F172A] font-medium whitespace-nowrap">Expert Guidance</span>
            </div>
          </div>

          <button onClick={onEnquire} className="bg-[#2563EB] text-white px-8 py-3 rounded-lg hover:bg-[#1d4ed8] transition-colors font-medium">
            Enquire Now
          </button>
        </div>

        {/* Right Column */}
        <div className="w-full md:w-1/2 bg-[#EFF6FF] rounded-2xl h-[340px] md:h-[460px] p-3 md:p-6 flex items-center justify-center">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1681164315051-add1906a9b07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxzb3V0aCUyMGFzaWFuJTIwcHJvZmVzc2lvbmFscyUyMGxhcHRvcCUyMHRyYWluaW5nJTIwY29ycG9yYXRlfGVufDF8fHx8MTc3NzAzMzI3Nnww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Professional training session"
            className="w-full h-full object-cover rounded-2xl shadow-sm"
          />
        </div>

      </div>
    </section>
  );
}
