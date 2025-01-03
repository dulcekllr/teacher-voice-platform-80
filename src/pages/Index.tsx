import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Initiatives } from "@/components/Initiatives";
import { Contact } from "@/components/Contact";
import { Gallery } from "@/components/Gallery";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Gallery />
      <Initiatives />
      <Contact />
    </div>
  );
};

export default Index;