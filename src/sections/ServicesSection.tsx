import React from 'react';
import FadeIn from '../components/FadeIn';

interface ServiceItem {
  number: string;
  name: string;
  description: string;
}

const servicesList: ServiceItem[] = [
  {
    number: "01",
    name: "Social Media Strategy",
    description: "Crafting content strategies, managing platforms, and building engaged communities that transform followers into loyal customers."
  },
  {
    number: "02",
    name: "Performance Marketing",
    description: "Scaling businesses through high-performing Meta campaigns, audience targeting, and performance marketing backed by real data."
  },
  {
    number: "03",
    name: "Website Development",
    description: "Building modern websites and landing pages that combine compelling design, seamless user experience, and conversion-focused functionality."
  },
  {
    number: "04",
    name: "AI Automation",
    description: "Developing intelligent workflows, AI agents, and business automations that eliminate repetitive tasks, improve efficiency, and help businesses scale smarter."
  },
  {
    number: "05",
    name: "Brand Strategy & Creative",
    description: "Creating memorable brand identities, visual systems, and creative assets that help businesses stand out and build lasting connections with their audience."
  }
];

export const ServicesSection: React.FC = () => {
  return (
    <section 
      id="services"
      className="bg-[#FFFFFF] text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 z-10 relative"
    >
      <div className="max-w-5xl mx-auto w-full">
        {/* Section Heading */}
        <div className="mb-16 sm:mb-20 md:mb-28 text-center overflow-hidden">
          <FadeIn delay={0} y={40}>
            <h2 
              className="font-black uppercase text-[#0C0C0C] leading-none"
              style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
            >
              Services
            </h2>
          </FadeIn>
        </div>

        {/* Services List */}
        <div className="flex flex-col w-full border-t border-[rgba(12,12,12,0.15)]">
          {servicesList.map((service, index) => {
            return (
              <FadeIn 
                key={service.number} 
                delay={index * 0.1} 
                y={30}
                className="w-full"
              >
                <div 
                  className="flex flex-row items-start gap-4 sm:gap-8 md:gap-12 py-8 sm:py-10 md:py-12 border-b border-[rgba(12,12,12,0.15)]"
                >
                  {/* Left Column: Number */}
                  <span 
                    className="font-black text-[#0C0C0C] leading-none select-none w-20 sm:w-28 md:w-36 flex-shrink-0"
                    style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
                  >
                    {service.number}
                  </span>

                  {/* Right Column: Name & Description Stacked */}
                  <div className="flex flex-col flex-grow pt-2 sm:pt-4 md:pt-6">
                    <h3 
                      className="font-semibold uppercase text-[#0C0C0C] leading-none mb-2 sm:mb-3"
                      style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                    >
                      {service.name}
                    </h3>
                    <p 
                      className="font-light leading-relaxed text-[#0C0C0C] opacity-60 max-w-2xl"
                      style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}
                    >
                      {service.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
