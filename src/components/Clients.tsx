import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const techCompanies = [
  { name: 'Microsoft', logo: 'assets/logo1.svg' },
  { name: 'Google', logo: 'assets/logo2.svg' },
  { name: 'Apple', logo: 'assets/logo3.svg' },
  { name: 'Amazon', logo: 'assets/logo9.svg' },
  { name: 'Meta', logo: 'assets/logo5.svg' },
  { name: 'IBM', logo: 'assets/logo6.svg' },
  { name: 'Intel', logo: 'assets/logo7.svg' },
  { name: 'Oracle', logo: 'assets/logo8.svg' },
  { name: 'Salesforce', logo: 'assets/logo9.svg' },
  { name: 'Adobe', logo: 'assets/logo10.svg' }
];

const Clients = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const logos = gsap.utils.toArray('.logo-slide');
      
      // Create infinite scrolling animation
      gsap.to(logos, {
        xPercent: -100 * (logos.length / 2),
        ease: "none",
        duration: 20,
        repeat: -1,
        scrollTrigger: {
          trigger: scrollRef.current,
          start: "top center",
          end: "bottom center",
          toggleActions: "play pause resume pause"
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="clients" className="py-32 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-8">
            <span className="inline-block w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></span>
            <span className="text-indigo-400 text-sm font-medium tracking-wider">TRUSTED PARTNERS</span>
          </div>
          <h2 className="text-4xl font-bold text-white sm:text-5xl mt-2 mb-4">
            Trusted by Leading
            <span className="block mt-2 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Global Brands
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We've partnered with innovative companies across industries to deliver exceptional digital solutions
          </p>
        </div>

        <div ref={scrollRef} className="relative w-full overflow-hidden">
          <div className="flex gap-8 logo-container">
            {[...techCompanies, ...techCompanies].map((company, index) => (
              <div
                key={index}
                className="logo-slide flex-shrink-0 w-48 h-24 bg-gray-900/80 backdrop-blur-sm rounded-xl border border-white/10 flex items-center justify-center p-4 hover:border-white/20 transition-all duration-300"
              >
                <img
                  src={company.logo}
                  alt={company.name}
                  className="max-w-full max-h-full object-contain filter invert"
                  style={{ opacity: 0.7 }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
