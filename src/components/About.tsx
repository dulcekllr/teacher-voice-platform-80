import { Card } from "./ui/card";
import PortfolioImage from "../img/portfolio.jpeg"

export const About = () => {
  return (
    <section className="py-20 bg-white" id="about">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
          About Godwin Mshila
        </h2>
        
        {/* Image and Info side by side */}
        <div className="flex flex-col md:flex-row gap-8 mb-12">
          <div className="md:w-1/2">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <img
                src={PortfolioImage}
                alt="Godwin Mshila"
                className="object-cover w-full h-full justify-center hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
          
          <div className="md:w-1/2 space-y-4">
            <p className="text-lg leading-relaxed text-gray-700">
              As an aspiring KUPPET Executive Secretary, Godwin Mshila has emerged as a beacon of hope
              for reform and justice in the teaching profession. His unwavering commitment to
              teachers' welfare and rights has made him the voice of change in Kwale County.
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              Through initiatives like the Godwin Mshila Foundation, he has demonstrated his
              dedication to empowering teachers and creating positive change in the education sector.
            </p>
          </div>
        </div>

        {/* Cards grid below */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="p-6 bg-secondary hover:shadow-lg transition-shadow">
            <h3 className="font-bold text-xl mb-2 text-primary">Vision</h3>
            <p className="text-gray-600">A united, empowered teaching fraternity in Kwale County</p>
          </Card>
          <Card className="p-6 bg-secondary hover:shadow-lg transition-shadow">
            <h3 className="font-bold text-xl mb-2 text-primary">Mission</h3>
            <p className="text-gray-600">Advocating for teachers' rights and professional growth</p>
          </Card>
          <Card className="p-6 bg-secondary hover:shadow-lg transition-shadow">
            <h3 className="font-bold text-xl mb-2 text-primary">Values</h3>
            <p className="text-gray-600">Integrity, Transparency, and Servant Leadership</p>
          </Card>
          <Card className="p-6 bg-secondary hover:shadow-lg transition-shadow">
            <h3 className="font-bold text-xl mb-2 text-primary">Experience</h3>
            <p className="text-gray-600">Years of dedicated service in education leadership</p>
          </Card>
        </div>
      </div>
    </section>
  );
};
