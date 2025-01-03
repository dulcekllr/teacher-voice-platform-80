import { Card } from "./ui/card";

export const About = () => {
  return (
    <section className="py-20 bg-white" id="about">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
          About Godwin Mshila
        </h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 animate-slide-up">
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
          <div className="grid grid-cols-2 gap-4">
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
      </div>
    </section>
  );
};