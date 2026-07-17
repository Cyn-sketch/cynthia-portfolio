import React from 'react';
import Magnet from '../components/Magnet';
import FadeIn from '../components/FadeIn';
import ContactButton from '../components/ContactButton';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex flex-col justify-between overflow-x-clip bg-[#0C0C0C]">
      
      {/* 1. Navbar */}
      <FadeIn 
        delay={0} 
        y={-20} 
        tag="nav" 
        className="w-full flex justify-between items-center px-6 md:px-10 pt-6 md:pt-8 z-20"
      >
        {["About", "Services", "Projects", "Contact"].map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className="text-[#D7E2EA] font-medium uppercase tracking-wider transition-opacity duration-200 hover:opacity-70 text-sm md:text-lg lg:text-[1.4rem]"
          >
            {link}
          </a>
        ))}
      </FadeIn>

      {/* 2. Headline area (Centered, top aligned) */}
      <div className="flex-grow flex justify-center items-start pt-[15vh] sm:pt-20 md:pt-24 px-6 md:px-10 z-10 select-none">
        <FadeIn 
          delay={0.15} 
          y={40} 
          className="w-full flex flex-col items-center gap-2 sm:gap-3"
        >
          <span className="text-[12px] sm:text-xs md:text-sm font-semibold uppercase tracking-[0.25em] text-[#D7E2EA]/50 text-center">
            SOCIAL MEDIA • WEBSITES • AI AUTOMATION
          </span>
          <h1 className="hero-heading font-black uppercase tracking-tight leading-none text-center sm:whitespace-nowrap w-full text-[11.5vw] sm:text-[11vw] md:text-[12vw] lg:text-[13vw]">
            Hi, i&apos;m zubeda
          </h1>
        </FadeIn>
      </div>

      {/* 3. Hero Portrait (Foreground Layer, absolute centered) */}
      <FadeIn
        delay={0.6}
        y={30}
        className="absolute left-1/2 -translate-x-1/2 z-10 w-[240px] sm:w-[320px] md:w-[400px] lg:w-[480px] 
          top-[48%] -translate-y-1/2 
          sm:top-auto sm:translate-y-0 sm:bottom-4"
      >
        <Magnet
          padding={150}
          strength={3}
          activeTransition="transform 0.3s ease-out"
          inactiveTransition="transform 0.6s ease-in-out"
          className="w-full h-full flex justify-center items-center"
        >
          <img
            src="/zubeda3d.png"
            alt="Zubeda 3D Creator Portrait"
            className="w-full h-auto object-contain select-none pointer-events-none drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
            draggable={false}
            fetchPriority="high"
            decoding="async"
          />
        </Magnet>
      </FadeIn>

      {/* 4. Bottom Bar */}
      <div className="w-full flex justify-between items-end px-6 md:px-10 pb-7 sm:pb-8 md:pb-10 z-20">
        {/* Left Text */}
        <FadeIn delay={0.35} y={20} tag="div" className="flex">
          <p 
            className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[190px] sm:max-w-[260px] md:max-w-[320px]"
            style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
          >
            Every project begins with one question: Will anyone remember this? Anything less isn&apos;t ready.
          </p>
        </FadeIn>
        {/* Right Contact Button */}
        <FadeIn delay={0.5} y={20}>
          <ContactButton onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} />
        </FadeIn>
      </div>
      
    </section>
  );
};

export default HeroSection;
