import { useParams } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

import PartnershipImage from "../img/building-partnerships-for-education.jpeg"
import ConnectingImage from "../img/connecting-with-teachers.jpeg"
import FightingImage from "../img/fight-for-rights.jpeg"
import leadingImage from "../img/leading-with-vision.jpeg"

const projects = {
  "teacher-training": {
    title: "Teacher Training Programs",
    description: "Professional development initiatives for educators in Kwale County",
    date: "2024",
    fullDescription: "Our comprehensive teacher training programs focus on enhancing pedagogical skills, technology integration, and professional development. Through workshops, seminars, and hands-on training sessions, we empower educators to excel in their roles and adapt to modern teaching methods.",
    image: PartnershipImage,
    gallery: [
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
    ]
  },
  "student-leadership": {
    title: "Student Leadership Development",
    description: "Mentorship and training programs for student leaders",
    date: "2024",
    fullDescription: "Our student leadership initiative aims to nurture the next generation of leaders through structured mentorship programs, leadership workshops, and practical experience in school governance. We believe in empowering students to become effective leaders in their communities.",
    image: ConnectingImage,
    gallery: [
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      "https://images.unsplash.com/photo-1518770660439-4636190af475",
      "https://images.unsplash.com/photo-1501854140801-50d01698950b"
    ]
  },
  "community-engagement": {
    title: "Community Engagement",
    description: "Building bridges between schools and local communities",
    date: "2024",
    fullDescription: "Through our community engagement programs, we create meaningful connections between schools and their surrounding communities. This initiative focuses on collaborative projects, community service, and educational partnerships that benefit both teachers and local residents.",
    image: FightingImage,
    gallery: [
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
    ]
  }
};

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects[id as keyof typeof projects];

  if (!project) {
    return <div className="container mx-auto px-4 py-20">Project not found</div>;
  }

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <Card className="overflow-hidden">
          <div className="relative w-full h-[400px]">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6">
            <h1 className="text-4xl font-bold text-primary mb-4">{project.title}</h1>
            <p className="text-gray-600 mb-8">{project.fullDescription}</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {project.gallery.map((image, index) => (
                <div key={index} className="relative">
                  <AspectRatio ratio={16 / 9}>
                    <img
                      src={image}
                      alt={`${project.title} gallery image ${index + 1}`}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </AspectRatio>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ProjectDetail;
