import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set('.hero-button-container', {
        opacity: 0,
        y: 20
      });

      const tl = gsap.timeline({
        defaults: { ease: 'power3.out' }
      });

      // Text animations
      tl.from('.hero-title', {
        y: 30,
        opacity: 0,
        duration: 0.8
      })
      .from('.hero-description', {
        y: 20,
        opacity: 0,
        duration: 0.8
      }, '-=0.4')
      .to('.hero-button-container', {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'back.out(1.2)',
        clearProps: 'all'
      })
      .from('.scroll-indicator', {
        y: 20,
        opacity: 0,
        duration: 0.5
      }, '-=0.2');

      // Floating shapes
      gsap.to('.floating-shape', {
        y: -20,
        duration: 2,
        ease: 'power1.inOut',
        yoyo: true,
        repeat: -1
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);














  return (
    <div
      ref={heroRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="floating-shape absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="floating-shape absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2" style={{ animationDelay: '-1s' }}></div>
      </div>

        {/* Main content */}
        <div className="hero-content relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto" style={{ paddingBottom: '8rem' }}>
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-8">
          <span className="inline-block w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></span>
          <span className="text-indigo-400 text-sm font-medium tracking-wider">
            CRAFTING DIGITAL EXPERIENCES
          </span>
        </div>

        <h1 className="hero-title text-5xl sm:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight ">
          We Create
          <span className="block mt-2 pb-5 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          Digital Magic
          </span>
        </h1>

        <p className="hero-description text-xl sm:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          Transform your brand with cutting-edge design and technology solutions
          that elevate your digital presence to new heights.
        </p>

        <div className="hero-button-container flex flex-col sm:flex-row items-center justify-center gap-6 relative z-10 mb-24">
            <button className="hero-button-primary group px-8 py-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-full font-medium text-lg text-white flex items-center gap-3 transform transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(79,70,229,0.5)]">
              <span>Start Your Journey</span>
              <ArrowRight className="w-5 h-5 transform transition-transform group-hover:translate-x-1" />
            </button>
            
            <button className="hero-button-secondary group px-8 py-4 rounded-full font-medium text-lg text-white flex items-center gap-3 relative">
              <div className="absolute inset-0 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 transition-colors duration-300 group-hover:border-white/20 group-hover:bg-white/10"></div>
              <div className="relative flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <Play className="w-4 h-4 text-white fill-current" />
                </div>
                <span>Watch Showreel</span>
              </div>
            </button>

        </div>


        {/* Scroll indicator */}
        <div className="scroll-indicator absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2" style={{ bottom: '6rem' }}>
          <span className="text-white/60 text-sm">Scroll to explore</span>
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start p-1">
          <div className="w-1 h-2 bg-white/60 rounded-full animate-bounce mx-auto"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;