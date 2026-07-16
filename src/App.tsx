import HeroSection from './sections/HeroSection';
import MarqueeSection from './sections/MarqueeSection';
import AboutSection from './sections/AboutSection';
import ServicesSection from './sections/ServicesSection';
import ProjectsSection from './sections/ProjectsSection';

function App() {
  return (
    <div className="relative bg-[#0C0C0C] min-h-screen text-[#D7E2EA] overflow-x-clip">
      {/* SECTION ORDER: Hero, Marquee, About, Services, Projects */}
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
    </div>
  );
}

export default App;
