import { Button } from "./ui/button";

export const Hero = () => {
  return (
    <div className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-primary-light via-primary to-primary-dark text-white px-4">
      <div className="absolute inset-0 bg-black/30" />
      <div className="container relative z-10 mx-auto text-center space-y-8 animate-fade-in">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Leading from the Front
        </h1>
        <p className="text-xl md:text-2xl max-w-2xl mx-auto">
          Godwin Mshila: A strong voice for teachers' rights and welfare in Kwale County
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-accent hover:bg-accent-light text-white">
            Join the Movement
          </Button>
          <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white">
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
};