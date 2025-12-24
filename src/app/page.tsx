import Navigation from "@/components/Navigation";
import HomeSection from "@/components/Home";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import ScrollToTop from "@/components/ScrollToTop";
import { WaveDivider, GeometricDivider, DotPattern } from "@/components/svg/SectionDividers";

export default function Home() {
  const currentYear = new Date().getFullYear();

  return (
    <main className="relative">
      <Navigation />
      <div id="home">
        <HomeSection />
      </div>

      <WaveDivider color="purple" />
      <About />

      <GeometricDivider />
      <Skills />

      <WaveDivider color="blue" flip />
      <Projects />

      <DotPattern />
      <Contact />

      {/* Footer */}
      <footer className="py-12 border-t border-white/10 bg-black/50">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <p className="text-gray-400 mb-4">Designed and Developed by Preyash Parikh</p>
            <p className="text-gray-500 text-sm">Copyright © {currentYear} PreyashP.</p>
          </div>
        </div>
      </footer>

      <ScrollToTop />
    </main>
  );
}
