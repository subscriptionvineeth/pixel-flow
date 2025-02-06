import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CTA = () => {
	const sectionRef = useRef<HTMLElement>(null);
	const headlineRef = useRef<HTMLHeadingElement>(null);
	const subtextRef = useRef<HTMLParagraphElement>(null);
	const buttonRef = useRef<HTMLButtonElement>(null);

	useEffect(() => {
		const ctx = gsap.context(() => {
			// Initial section animation
			gsap.from(sectionRef.current, {
				opacity: 0,
				scale: 0.95,
				duration: 1,
				scrollTrigger: {
					trigger: sectionRef.current,
					start: 'top center+=100',
					toggleActions: 'play none none reverse'
				}
			});

			// Staggered text animations
			gsap.from([headlineRef.current, subtextRef.current], {
				y: 50,
				opacity: 0,
				duration: 1,
				stagger: 0.2,
				ease: 'power3.out',
				scrollTrigger: {
					trigger: sectionRef.current,
					start: 'top center+=100',
					toggleActions: 'play none none reverse'
				}
			});

			// Button animation
			gsap.from(buttonRef.current, {
				opacity: 0,
				y: 20,
				duration: 0.8,
				delay: 0.4,
				scrollTrigger: {
					trigger: sectionRef.current,
					start: 'top center+=100',
					toggleActions: 'play none none reverse'
				}
			});

			// Animate gradient blobs
			gsap.to('.gradient-blob', {
				x: 'random(-100, 100)',
				y: 'random(-100, 100)',
				scale: 'random(0.8, 1.2)',
				duration: 'random(10, 20)',
				repeat: -1,
				yoyo: true,
				ease: 'sine.inOut',
				stagger: {
					amount: 2,
					from: 'random'
				}
			});
		}, sectionRef);

		return () => ctx.revert();
	}, []);

	const scrollToContact = () => {
		const contactSection = document.getElementById('contact');
		if (contactSection) {
			contactSection.scrollIntoView({ behavior: 'smooth' });
		}
	};

	return (
		<section
			ref={sectionRef}
			className="py-32 relative overflow-hidden"
		>
			{/* Video Background */}
			<video
				autoPlay
				muted
				loop
				playsInline
				className="absolute inset-0 w-full h-full object-cover"
				style={{ filter: 'brightness(0.7)' }}
			>
				<source 
					src="assets/color.mp4"
					type="video/mp4" 
				/>
				Your browser does not support the video tag.
			</video>





			{/* Dark Overlay with gradient */}
			<div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black/50"></div>

			{/* Gradient Blobs with adjusted opacity */}
			<div className="absolute inset-0 overflow-hidden">
				<div className="gradient-blob absolute w-[500px] h-[500px] rounded-full bg-gradient-to-r from-indigo-500/10 to-purple-500/10 blur-3xl -top-48 -left-48" />
				<div className="gradient-blob absolute w-[500px] h-[500px] rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 blur-3xl -bottom-48 -right-48" />
				<div className="gradient-blob absolute w-[500px] h-[500px] rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 blur-3xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
			</div>

			{/* Grid Pattern */}
			<div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:32px]" />

			{/* Content */}
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
				<div className="text-center">
					<h2
						ref={headlineRef}
						className="text-4xl md:text-5xl font-bold text-white mb-6"
					>
						Let's Bring Your Vision to Life!
					</h2>
					<p
						ref={subtextRef}
						className="text-xl text-gray-400 max-w-2xl mx-auto mb-10"
					>
						We craft exceptional digital experiences. Ready to start your project?
					</p>
					<button
						ref={buttonRef}
						onClick={scrollToContact}
						className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-full font-semibold text-lg 
						hover:scale-105 hover:shadow-[0_0_20px_rgba(99,102,241,0.3)] transition-all duration-300 
						active:scale-95"
					>
						Start Your Project
					</button>
				</div>
			</div>
		</section>
	);
};

export default CTA;