import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Navigation } from "@/components/Navigation";
import { CompetitiveProgramming } from "@/components/CompetitiveProgramming";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <CompetitiveProgramming />
      <Projects />
      <Contact />
    </div>
  );
};

export default Index;