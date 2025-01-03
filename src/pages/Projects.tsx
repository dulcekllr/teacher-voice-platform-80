import { Card } from "@/components/ui/card";

const projects = [
  {
    title: "Teacher Training Programs",
    description: "Professional development initiatives for educators in Kwale County",
    date: "2024",
  },
  {
    title: "Student Leadership Development",
    description: "Mentorship and training programs for student leaders",
    date: "2024",
  },
  {
    title: "Community Engagement",
    description: "Building bridges between schools and local communities",
    date: "2024",
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-primary mb-12">Our Projects</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-2 text-primary">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <span className="text-sm text-gray-500">{project.date}</span>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;