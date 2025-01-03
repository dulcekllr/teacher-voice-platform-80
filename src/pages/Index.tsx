import { Hero } from "@/components/Hero";
import { Initiatives } from "@/components/Initiatives";
import { Contact } from "@/components/Contact";
import { Gallery } from "@/components/Gallery";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Gallery />
      <Initiatives />
      <Contact />
    </div>
  );
};

export default Index;