import React from 'react';
import FadeIn from '../components/FadeIn';
import { Mail, Github, Linkedin, ArrowUp } from 'lucide-react';

interface Project {
  number: string;
  name: string;
  category: string;
  images: string[];
  objectFit?: "cover" | "contain";
  bgColors?: string[];
  padding?: string[];
}

const projectsList: Project[] = [
  {
    number: "01",
    name: "Brands I've Grown",
    category: "Social Media",
    images: [
      "/momo_logo.png",
      "/bellavita_logo.jpg",
      "/eraaya_logo.png",
      "/ans_logo.png",
      "/chinfu_logo.png",
      "/rovecafe_logo.png"
    ],
    objectFit: "contain",
    bgColors: ["bg-black", "bg-black", "bg-white", "bg-[#505050]", "bg-black", "bg-[#E9DBD0]"],
    padding: ["p-3 sm:p-5", "p-8 sm:p-12", "p-6 sm:p-10", "p-4 sm:p-6", "p-4 sm:p-6", "p-4 sm:p-6"]
  },
  {
    number: "02",
    name: "Digital Experiences",
    category: "Web Development",
    images: [
      "/madautomateweb.png",
      "/workweb.png",
      "/spidymaniweb.png"
    ],
    objectFit: "contain",
    bgColors: ["bg-black", "bg-black", "bg-black"],
    padding: ["p-1 sm:p-2", "p-1 sm:p-2", "p-1 sm:p-2"]
  },
  {
    number: "03",
    name: "Smart Workflows",
    category: "AI Automation",
    images: [
      "/cafe_wf.png",
      "/hr_wf.png",
      "/manufacturing_wf.png",
      "/wf.png"
    ],
    objectFit: "cover"
  }
];

export const ProjectsSection: React.FC = () => {
  return (
    <>
      <section 
        id="projects"
      className="bg-[#0C0C0C] text-[#D7E2EA] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 z-10 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Section Heading */}
        <div className="mb-16 sm:mb-20 md:mb-28 text-center overflow-hidden">
          <FadeIn delay={0} y={40}>
            <h2 
              className="hero-heading font-black uppercase leading-none tracking-tight"
              style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
            >
              Project
            </h2>
          </FadeIn>
        </div>

        {/* Cards Container */}
        <div className="flex flex-col gap-12 sm:gap-16 md:gap-20 pb-20">
          {projectsList.map((project) => (
            <ProjectCard 
              key={project.number} 
              project={project} 
            />
          ))}
        </div>
      </div>
    </section>

    {/* Full Screen Looping Video Section */}
    <section className="w-full relative py-0 my-0 overflow-hidden bg-black aspect-video md:aspect-[21/9] lg:aspect-[2.4/1]">
      <video 
        src="/stv_vid.mov" 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="w-full h-full object-cover"
      />
    </section>

    <section className="bg-[#0C0C0C] text-[#D7E2EA] px-5 sm:px-8 md:px-10 pb-20 sm:pb-24 md:pb-32 z-10 relative overflow-hidden">
      <div className="max-w-6xl mx-auto w-full">
        {/* Footer / Contact Section */}
        <div 
          id="contact" 
          className="pt-16 pb-8 flex flex-col items-center justify-center text-center gap-8 w-full"
        >
          <h3 className="hero-heading text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight">
            Let&apos;s Connect
          </h3>
          <p className="text-[#D7E2EA]/60 max-w-md font-light text-sm sm:text-base leading-relaxed">
            Interested in starting a project or just want to chat? Drop me a message and let&apos;s build something spectacular.
          </p>
          
          {/* Social / Email Links */}
          <div className="flex items-center gap-6 sm:gap-8 mt-2">
            <a 
              href="mailto:zubeda08k@gmail.com" 
              className="p-3 sm:p-4 rounded-full border border-[#D7E2EA]/10 hover:border-[#D7E2EA]/40 text-[#D7E2EA]/75 hover:text-white transition-all duration-300 hover:scale-115"
              aria-label="Email"
            >
              <Mail className="w-5 h-5 sm:w-6 h-6" />
            </a>
            <a 
              href="https://github.com/Cyn-sketch" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 sm:p-4 rounded-full border border-[#D7E2EA]/10 hover:border-[#D7E2EA]/40 text-[#D7E2EA]/75 hover:text-white transition-all duration-300 hover:scale-115"
              aria-label="Github"
            >
              <Github className="w-5 h-5 sm:w-6 h-6" />
            </a>
            <a 
              href="https://www.linkedin.com/in/zubeda-khan0808/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 sm:p-4 rounded-full border border-[#D7E2EA]/10 hover:border-[#D7E2EA]/40 text-[#D7E2EA]/75 hover:text-white transition-all duration-300 hover:scale-115"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 sm:w-6 h-6" />
            </a>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between w-full mt-16 text-xs sm:text-sm text-[#D7E2EA]/40 gap-4 border-t border-[#D7E2EA]/5 pt-8">
            <p>© {new Date().getFullYear()} Zubeda. All rights reserved.</p>
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-2 hover:text-[#D7E2EA] transition-colors group"
            >
              Back to Top 
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
          </div>
        </div>
      </section>
    </>
  );
};

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div 
      className="w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-5 sm:p-7 md:p-8 flex flex-col justify-between gap-6 shadow-[0_15px_30px_rgba(0,0,0,0.3)]"
    >
        {/* Top Row */}
        <div className="flex flex-row items-center gap-4 sm:gap-6 w-full">
          {/* Number */}
          <span 
            className="font-black text-[#D7E2EA] leading-none select-none"
            style={{ fontSize: 'clamp(2.5rem, 8vw, 100px)' }}
          >
            {project.number}
          </span>
          {/* Name and Category Stack */}
          <div className="flex flex-col">
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-[#D7E2EA]/50">
              {project.category}
            </span>
            <h3 className="text-lg sm:text-2xl md:text-3xl font-bold uppercase tracking-wide text-[#D7E2EA]">
              {project.name}
            </h3>
          </div>
        </div>

        {/* Bottom Row: Image Grid */}
        {(() => {
          const fit = project.objectFit || "cover";
          
          if (project.images.length > 3) {
            const isFour = project.images.length === 4;
            const gridClass = isFour ? "grid-cols-2" : "grid-cols-2 md:grid-cols-3";
            
            return (
              <div className="flex flex-col gap-3 w-full">
                <div className={`grid ${gridClass} gap-4 w-full flex-grow items-stretch mt-2`}>
                  {project.images.map((img, i) => {
                    const bg = project.bgColors?.[i] || "bg-[#0C0C0C]";
                    const pad = project.padding?.[i] || "p-0";
                    return (
                      <div 
                        key={i} 
                        className={`overflow-hidden rounded-[20px] sm:rounded-[25px] md:rounded-[30px] border border-[#D7E2EA]/10 shadow-lg flex items-center justify-center ${bg} ${pad}`}
                        style={isFour ? { height: 'clamp(140px, 20vw, 260px)' } : undefined}
                      >
                        <img 
                          src={img} 
                          alt={`${project.name} preview ${i + 1}`} 
                          loading="lazy"
                          decoding="async"
                          className={`w-full h-full ${fit === "contain" ? "object-contain" : "object-cover"} transition-transform duration-700 hover:scale-108`}
                        />
                      </div>
                    );
                  })}
                </div>
                
                {/* Dynamic Subtitle */}
                {project.number === "01" && (
                  <div className="text-right pr-2">
                    <span className="text-xs sm:text-sm font-light italic text-[#D7E2EA]/40 tracking-wider">
                      and many more...
                    </span>
                  </div>
                )}
                {project.number === "03" && (
                  <div className="text-right pr-2">
                    <span className="text-xs sm:text-sm font-light italic text-[#D7E2EA]/40 tracking-wider">
                      you ask more, i&apos;ll build more...
                    </span>
                  </div>
                )}
              </div>
            );
          }
          
          const bg1 = project.bgColors?.[0] || "bg-[#0C0C0C]";
          const bg2 = project.bgColors?.[1] || "bg-[#0C0C0C]";
          const bg3 = project.bgColors?.[2] || "bg-[#0C0C0C]";
          const pad1 = project.padding?.[0] || "p-0";
          const pad2 = project.padding?.[1] || "p-0";
          const pad3 = project.padding?.[2] || "p-0";

          return (
            <div className="flex flex-col gap-3 w-full">
              <div className="grid grid-cols-1 md:grid-cols-[40%_60%] gap-4 w-full flex-grow items-stretch mt-2">
                {/* Col 1: Stacked Images */}
                <div className="flex flex-col gap-4 justify-between">
                  <div 
                    className={`w-full overflow-hidden rounded-[25px] sm:rounded-[35px] md:rounded-[40px] border border-[#D7E2EA]/10 shadow-lg ${bg1} ${pad1}`}
                    style={{ height: 'clamp(130px, 16vw, 230px)' }}
                  >
                    <img 
                      src={project.images[0]} 
                      alt={`${project.name} preview 1`} 
                      loading="lazy"
                      decoding="async"
                      className={`w-full h-full ${fit === "contain" ? "object-contain" : "object-cover"} transition-transform duration-700 hover:scale-108`}
                    />
                  </div>
                  <div 
                    className={`w-full overflow-hidden rounded-[25px] sm:rounded-[35px] md:rounded-[40px] border border-[#D7E2EA]/10 shadow-lg ${bg2} ${pad2}`}
                    style={{ height: 'clamp(160px, 22vw, 340px)' }}
                  >
                    <img 
                      src={project.images[1]} 
                      alt={`${project.name} preview 2`} 
                      loading="lazy"
                      decoding="async"
                      className={`w-full h-full ${fit === "contain" ? "object-contain" : "object-cover"} transition-transform duration-700 hover:scale-108`}
                    />
                  </div>
                </div>

                {/* Col 2: Tall Image */}
                <div className={`overflow-hidden rounded-[25px] sm:rounded-[35px] md:rounded-[40px] border border-[#D7E2EA]/10 shadow-lg min-h-[220px] md:min-h-0 ${bg3} ${pad3}`}>
                  <img 
                    src={project.images[2]} 
                    alt={`${project.name} showcase`} 
                    loading="lazy"
                    decoding="async"
                    className={`w-full h-full ${fit === "contain" ? "object-contain" : "object-cover"} transition-transform duration-700 hover:scale-108`}
                  />
                </div>
              </div>
              
              {/* Dynamic Subtitle */}
              {project.number === "02" && (
                <div className="text-right pr-2">
                  <span className="text-xs sm:text-sm font-light italic text-[#D7E2EA]/40 tracking-wider">
                    got an idea, I can deploy it
                  </span>
                </div>
              )}
            </div>
          );
        })()}
    </div>
  );
};

export default ProjectsSection;
