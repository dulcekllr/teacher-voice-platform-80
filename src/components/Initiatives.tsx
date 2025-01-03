import { Card } from "./ui/card";
import { CheckCircle } from "lucide-react";

const initiatives = [
  {
    title: "Teacher Training Programs",
    description: "Comprehensive professional development opportunities for educators",
  },
  {
    title: "Student Leadership",
    description: "Empowering future leaders through mentorship and training",
  },
  {
    title: "Community Engagement",
    description: "Building strong partnerships between schools and communities",
  },
  {
    title: "Teacher Welfare",
    description: "Advocating for better working conditions and benefits",
  },
];

export const Initiatives = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
          Key Initiatives
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {initiatives.map((initiative, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow animate-slide-up">
              <CheckCircle className="h-8 w-8 text-accent mb-4" />
              <h3 className="font-bold text-xl mb-2 text-primary">{initiative.title}</h3>
              <p className="text-gray-600">{initiative.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};