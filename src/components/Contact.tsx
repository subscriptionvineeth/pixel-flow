import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Send, User, Mail, MessageSquare, MapPin, Phone, Clock } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const contactInfo = [
  {
    icon: MapPin,
    title: 'Visit Us',
    details: ['123 Innovation Drive', 'Tech Valley, TV 12345', 'United States']
  },
  {
    icon: Phone,
    title: 'Call Us',
    details: ['+1 (555) 123-4567', '+1 (555) 987-6543']
  },
  {
    icon: Clock,
    title: 'Business Hours',
    details: ['Monday - Friday: 9am - 6pm', 'Saturday: 10am - 4pm', 'Sunday: Closed']
  }
];

const Contact = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.contact-info', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top center+=100',
          toggleActions: 'play none none reverse'
        },
        x: -50,
        opacity: 0,
        duration: 1,
        ease: 'power4.out'
      });

      gsap.from('.contact-form', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top center+=100',
          toggleActions: 'play none none reverse'
        },
        x: 50,
        opacity: 0,
        duration: 1,
        ease: 'power4.out'
      });

      gsap.from('.info-card', {
        scrollTrigger: {
          trigger: '.contact-info',
          start: 'top center+=100',
          toggleActions: 'play none none reverse'
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power4.out'
      });

      gsap.from('.form-field', {
        scrollTrigger: {
          trigger: '.contact-form',
          start: 'top center+=100',
          toggleActions: 'play none none reverse'
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power4.out'
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="contact" className="py-32 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-8">
            <span className="inline-block w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></span>
            <span className="text-indigo-400 text-sm font-medium tracking-wider">GET IN TOUCH</span>
          </div>
          <h2 className="text-4xl font-bold text-white sm:text-5xl mt-2 mb-4">
            Start Your Next Project
          </h2>
          <p className="text-xl text-gray-400">
            Ready to transform your digital presence? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="contact-info space-y-8">
            <div className="bg-gray-900/80 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <div key={index} className="info-card group mb-8 last:mb-0">
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 p-0.5">
                          <div className="w-full h-full flex items-center justify-center bg-gray-900 rounded-[10px]">
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-indigo-400 transition-colors duration-300">
                          {info.title}
                        </h3>
                        <div className="space-y-2">
                          {info.details.map((detail, idx) => (
                            <p key={idx} className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Contact Form */}
          <form className="contact-form bg-gray-900/80 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
            <div className="form-field mb-6">
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                Name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  id="name"
                  className="block w-full pl-12 pr-4 py-3 rounded-lg border-gray-600 bg-gray-800/50 text-white placeholder-gray-400 focus:border-indigo-500 focus:ring focus:ring-indigo-500/20 transition-all duration-300"
                  placeholder="Your name"
                />
              </div>
            </div>

            <div className="form-field mb-6">
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="email"
                  id="email"
                  className="block w-full pl-12 pr-4 py-3 rounded-lg border-gray-600 bg-gray-800/50 text-white placeholder-gray-400 focus:border-indigo-500 focus:ring focus:ring-indigo-500/20 transition-all duration-300"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div className="form-field mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Message
              </label>
              <div className="relative">
                <div className="absolute top-3 left-4">
                  <MessageSquare className="h-5 w-5 text-gray-400" />
                </div>
                <textarea
                  id="message"
                  rows={4}
                  className="block w-full pl-12 pr-4 py-3 rounded-lg border-gray-600 bg-gray-800/50 text-white placeholder-gray-400 focus:border-indigo-500 focus:ring focus:ring-indigo-500/20 transition-all duration-300"
                  placeholder="Your message"
                ></textarea>
              </div>
            </div>

            <div className="form-field">
              <button
                type="submit"
                className="w-full flex justify-center items-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-lg font-medium text-lg transition-all hover:scale-105"
              >
                Send Message
                <Send className="ml-2 -mr-1 h-5 w-5" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;