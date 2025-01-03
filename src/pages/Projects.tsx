import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";

const projects = [
  {
    id: "teacher-training",
    title: "Teacher Training Programs",
    description: "Professional development initiatives for educators in Kwale County",
    date: "2024",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
  },
  {
    id: "student-leadership",
    title: "Student Leadership Development",
    description: "Mentorship and training programs for student leaders",
    date: "2024",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
  },
  {
    id: "community-engagement",
    title: "Community Engagement",
    description: "Building bridges between schools and local communities",
    date: "2024",
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b"
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-primary mb-12">Our Projects</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Link to={`/projects/${project.id}`} key={project.id}>
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-primary">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <span className="text-sm text-gray-500">{project.date}</span>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;