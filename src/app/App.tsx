import { useEffect, useRef, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Clients from './components/Clients';
import AccredianEdge from './components/AccredianEdge';
import CatFramework from './components/CatFramework';
import HowItWorks from './components/HowItWorks';
import FAQs from './components/FAQs';
import Testimonials from './components/Testimonials';
import CTABanner from './components/CTABanner';
import Footer from './components/Footer';
import EnquireModal from './components/EnquireModal';

function FadeInSection({ children }: { children: React.ReactNode }) {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = domRef.current;
    if (!currentRef) return;
    
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.05, rootMargin: '0px 0px -50px 0px' });
    
    observer.observe(currentRef);
    return () => observer.unobserve(currentRef);
  }, []);

  return (
    <div
      ref={domRef}
      className={`transition-all duration-500 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
    >
      {children}
    </div>
  );
}

export default function App() {
  const [isEnquireOpen, setIsEnquireOpen] = useState(false);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="min-h-screen bg-white relative overflow-x-hidden">
      <Navbar onEnquire={() => setIsEnquireOpen(true)} />
      
      <div id="home" className="scroll-mt-20">
        <FadeInSection>
          <Hero onEnquire={() => setIsEnquireOpen(true)} />
        </FadeInSection>
      </div>
      
      <FadeInSection>
        <Stats />
      </FadeInSection>
      
      <FadeInSection>
        <Clients />
      </FadeInSection>
      
      <FadeInSection>
        <AccredianEdge />
      </FadeInSection>

      {/* Frame boundary for custom intersection-built CatFramework is directly controlled inside the component */}
      <CatFramework />

      <FadeInSection>
        <HowItWorks />
      </FadeInSection>

      <FadeInSection>
        <FAQs />
      </FadeInSection>

      <FadeInSection>
        <Testimonials />
      </FadeInSection>
      
      <FadeInSection>
        <CTABanner onContact={() => setIsEnquireOpen(true)} />
      </FadeInSection>
      
      <FadeInSection>
        <Footer onEnquire={() => setIsEnquireOpen(true)} />
      </FadeInSection>

      {/* Floating Action Button (Mobile Only) */}
      <button
        onClick={() => setIsEnquireOpen(true)}
        className="md:hidden fixed bottom-4 right-4 z-50 bg-[#2563EB] text-white px-5 py-3 rounded-full shadow-[0_4px_14px_0_rgba(37,99,235,0.39)] font-medium hover:bg-[#1d4ed8] transition-colors"
      >
        Enquire Now
      </button>

      <EnquireModal isOpen={isEnquireOpen} onClose={() => setIsEnquireOpen(false)} />
    </div>
  );
}