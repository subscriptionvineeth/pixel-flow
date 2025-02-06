import React, { useEffect, useRef } from 'react';
import { Code, Palette, Globe, Megaphone } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: <Code size={40} />,
    title: 'Web Development',
    description: 'Custom web applications built with the latest technologies and best practices.',
    gradient: 'from-blue-500 to-indigo-500'
  },
  {
    icon: <Palette size={40} />,
    title: 'UI/UX Design',
    description: 'Beautiful, intuitive designs that enhance user experience and engagement.',
    gradient: 'from-indigo-500 to-purple-500'
  },
  {
    icon: <Globe size={40} />,
    title: 'Digital Strategy',
    description: 'Strategic planning and consulting to achieve your digital transformation goals.',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    icon: <Megaphone size={40} />,
    title: 'Digital Marketing',
    description: 'Data-driven marketing campaigns that deliver measurable results.',
    gradient: 'from-pink-500 to-rose-500'
  }
];

const Services = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate section title
      gsap.from('.services-title', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top center+=100',
          toggleActions: 'play none none reverse'
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power4.out'
      });

      // Animate service cards with stagger
      gsap.from('.service-card', {
        scrollTrigger: {
          trigger: '.services-grid',
          start: 'top center+=100',
          toggleActions: 'play none none reverse'
        },
        y: 100,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power4.out'
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="services" className="relative py-32 bg-black overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="services-title text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-8">
            <span className="inline-block w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></span>
            <span className="text-indigo-400 text-sm font-medium tracking-wider">OUR EXPERTISE</span>
          </div>
          <h2 className="text-4xl font-bold text-white sm:text-5xl mt-2 mb-4 leading-tight">
            Transforming Ideas Into
            <span className="block mt-2 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Digital Reality
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We offer comprehensive digital solutions to help your business thrive in the modern digital landscape
          </p>
        </div>

        <div className="services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card group relative"
            >
              {/* Card background with gradient border */}
              <div className="absolute inset-0.5 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur rounded-2xl"></div>
              
              {/* Card content */}
              <div className="relative bg-gray-900/80 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-colors duration-300">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r ${service.gradient} p-0.5 mb-6`}>
                  <div className="w-full h-full flex items-center justify-center bg-gray-900 rounded-[10px]">
                    <div className="text-white">{service.icon}</div>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-purple-400 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;