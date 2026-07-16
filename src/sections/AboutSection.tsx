import React from 'react';
import FadeIn from '../components/FadeIn';
import AnimatedText from '../components/AnimatedText';
import ContactButton from '../components/ContactButton';

export const AboutSection: React.FC = () => {
  return (
    <section 
      id="about" 
      className="relative min-h-screen w-full flex flex-col justify-center items-center px-5 sm:px-8 md:px-10 py-20 bg-[#0C0C0C] overflow-hidden"
    >
      {/* 1. Decorative Corner Assets */}
      
      {/* Top-Left Moon */}
      <FadeIn
        delay={0.1}
        x={-80}
        y={0}
        duration={0.9}
        className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] z-10 w-[120px] sm:w-[160px] md:w-[210px]"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png"
          alt="Moon"
          className="w-full h-auto select-none pointer-events-none drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)] animate-pulse"
          style={{ animationDuration: '4s' }}
          draggable={false}
          loading="lazy"
          decoding="async"
        />
      </FadeIn>

      {/* Bottom-Left 3D Object */}
      <FadeIn
        delay={0.25}
        x={-80}
        y={0}
        duration={0.9}
        className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] z-10 w-[100px] sm:w-[140px] md:w-[180px]"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png"
          alt="Abstract 3D Object"
          className="w-full h-auto select-none pointer-events-none drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)] animate-bounce"
          style={{ animationDuration: '6s' }}
          draggable={false}
          loading="lazy"
          decoding="async"
        />
      </FadeIn>

      {/* Top-Right Lego */}
      <FadeIn
        delay={0.15}
        x={80}
        y={0}
        duration={0.9}
        className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] z-10 w-[120px] sm:w-[160px] md:w-[210px]"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png"
          alt="Lego Block"
          className="w-full h-auto select-none pointer-events-none drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)] animate-pulse"
          style={{ animationDuration: '5s' }}
          draggable={false}
          loading="lazy"
          decoding="async"
        />
      </FadeIn>

      {/* Bottom-Right 3D Group */}
      <FadeIn
        delay={0.3}
        x={80}
        y={0}
        duration={0.9}
        className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] z-10 w-[130px] sm:w-[170px] md:w-[220px]"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png"
          alt="3D Shapes Group"
          className="w-full h-auto select-none pointer-events-none drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)] animate-bounce"
          style={{ animationDuration: '7s' }}
          draggable={false}
          loading="lazy"
          decoding="async"
        />
      </FadeIn>

      {/* 2. Content Stack */}
      <div className="flex flex-col items-center justify-center z-20 text-center max-w-4xl relative">
        {/* Heading */}
        <div className="mb-10 sm:mb-14 md:mb-16 overflow-hidden">
          <FadeIn delay={0} y={40}>
            <h2 
              className="hero-heading font-black uppercase leading-none tracking-tight"
              style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
            >
              About me
            </h2>
          </FadeIn>
        </div>

        {/* Scroll-animated Paragraph */}
        <div className="mb-16 sm:mb-20 md:mb-24 px-4">
          <AnimatedText
            text="Every brand has a story, my job is to make sure people remember it. I specialize in turning ideas into meaningful digital experiences through strategic social media, compelling content, modern websites, and AI-powered automation. With over six years of experience working with brands across multiple industries, I focus on creating marketing that is thoughtful, data-driven, and built for long-term growth. Whether it's growing an online presence, launching a website, or automating repetitive processes, I help businesses work smarter while building stronger connections with their audience."
            className="text-[#D7E2EA] font-medium leading-relaxed max-w-[720px]"
            style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)' } as any}
          />
        </div>

        {/* CTA Button */}
        <FadeIn delay={0.4} y={20}>
          <ContactButton onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} />
        </FadeIn>
      </div>
      
    </section>
  );
};

export default AboutSection;
