import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Initiatives } from "@/components/Initiatives";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Initiatives />
      <Contact />
    </div>
  );
};

export default Index;