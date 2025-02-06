import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.about-image', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top center+=100',
          toggleActions: 'play none none reverse'
        },
        x: -100,
        opacity: 0,
        duration: 1,
        ease: 'power4.out'
      });

      gsap.from('.about-content', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top center+=100',
          toggleActions: 'play none none reverse'
        },
        x: 100,
        opacity: 0,
        duration: 1,
        ease: 'power4.out'
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="py-32 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="about-image">
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2070&q=80"
                alt="Team working together"
                className="w-full rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
            </div>
          </div>
          <div className="about-content text-white">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-8">
              <span className="inline-block w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></span>
              <span className="text-indigo-400 text-sm font-medium tracking-wider">ABOUT US</span>
            </div>
            <h2 className="text-4xl font-bold mt-2 mb-6 leading-tight">
              We're a Team of Digital
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400 block">
                Innovation Experts
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              With over a decade of experience, we've helped businesses transform their digital presence and achieve remarkable growth. Our approach combines creativity with technical expertise to deliver solutions that not only look great but drive real business results.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div className="p-6 bg-gray-900/80 backdrop-blur-sm rounded-2xl border border-white/10">
                <h3 className="text-5xl font-bold text-indigo-400 mb-2">250+</h3>
                <p className="text-gray-400">Projects Completed</p>
              </div>
              <div className="p-6 bg-gray-900/80 backdrop-blur-sm rounded-2xl border border-white/10">
                <h3 className="text-5xl font-bold text-indigo-400 mb-2">95%</h3>
                <p className="text-gray-400">Client Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;