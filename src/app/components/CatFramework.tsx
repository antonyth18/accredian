import { Lightbulb, Rocket, Wrench } from "lucide-react";
import { motion } from "motion/react";

const steps = [
  {
    id: 1,
    title: "Concept",
    description: "Master the theoretical foundations and core principles of the field.",
    icon: Lightbulb,
  },
  {
    id: 2,
    title: "Application",
    description: "Apply concepts in real-world scenarios through hands-on projects.",
    icon: Rocket,
  },
  {
    id: 3,
    title: "Tools",
    description: "Leverage industry-standard frameworks to accelerate workflows.",
    icon: Wrench,
  },
];

export default function CatFramework() {
  return (
    <section id="cat" className="bg-[#F8FAFC] py-20 md:py-28 scroll-mt-16 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 relative">
        <motion.div
           initial={{ opacity: 0, y: -20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.6 }}
           className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-4">
            The <span className="text-[#2563EB]">CAT Framework</span>
          </h2>
          <p className="text-[#64748B] text-lg md:text-xl">
            Our Proven Approach to Learning Excellence
          </p>
        </motion.div>

        {/* Graphics Container */}
        <div className="relative max-w-5xl mx-auto">
          {/* Background SVG Wave connector (desktop only) */}
          <div className="hidden md:block absolute top-[128px] left-[128px] right-[128px] h-[100px] -translate-y-1/2 z-0">
             <svg 
               className="w-full h-full overflow-visible opacity-50" 
               viewBox="0 0 100 100" 
               preserveAspectRatio="none"
             >
               <path 
                 d="M 0 50 Q 25 200, 50 50 T 100 50" 
                 stroke="#2563EB" 
                 strokeWidth="2" 
                 fill="none" 
                 strokeDasharray="6 6"
                 vectorEffect="non-scaling-stroke"
               />
             </svg>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-12 md:gap-4 relative z-10 w-full mb-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="w-64 h-64 bg-white rounded-full border-4 border-white shadow-xl hover:border-[#2563EB]/20 transition-all duration-500 ease-out flex flex-col items-center justify-center p-8 text-center group relative cursor-pointer hover:scale-105 z-10"
                >
                  {/* Subtle inner blue border aesthetic matching the 'thin blue border' requirement */}
                  <div className="absolute inset-2 border border-blue-100 rounded-full group-hover:border-blue-300 transition-colors duration-500 z-0"></div>

                  <div className="w-16 h-16 bg-blue-50/80 rounded-full flex items-center justify-center text-[#2563EB] mb-4 group-hover:bg-[#2563EB] group-hover:text-white transition-colors duration-500 z-10">
                    <Icon size={26} strokeWidth={2.5} />
                  </div>
                  <h3 className="font-bold text-[#0F172A] text-[18px] mb-2 z-10">{step.title}</h3>
                  <p className="text-[#64748B] text-xs leading-relaxed max-w-[130px] mx-auto z-10">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
