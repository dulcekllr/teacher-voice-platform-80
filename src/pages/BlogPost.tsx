import { useParams } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const posts = {
  "leading-from-front": {
    title: "Leading from the Front",
    excerpt: "Godwin Mshila's vision for transforming KUPPET leadership",
    date: "March 15, 2024",
    content: "As we embark on this journey to transform KUPPET leadership, our vision is clear: to create a union that truly serves its members. Through innovative programs, transparent governance, and unwavering advocacy, we aim to build a stronger, more responsive organization that puts teachers first.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    gallery: [
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
    ]
  },
  "teachers-welfare": {
    title: "Teachers' Welfare First",
    excerpt: "New initiatives to support and empower educators",
    date: "March 10, 2024",
    content: "Our commitment to teachers' welfare goes beyond words. We're implementing comprehensive support systems, including health benefits, professional development opportunities, and financial planning assistance. Every teacher deserves to feel secure and valued in their profession.",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
    gallery: [
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      "https://images.unsplash.com/photo-1518770660439-4636190af475"
    ]
  },
  "better-schools": {
    title: "Building Better Schools",
    excerpt: "Community engagement and educational development",
    date: "March 5, 2024",
    content: "Creating better schools requires a collaborative approach. We're working with communities, parents, and educational stakeholders to improve infrastructure, enhance learning environments, and provide the resources needed for quality education.",
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b",
    gallery: [
      "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
    ]
  }
};

const BlogPost = () => {
  const { id } = useParams();
  const post = posts[id as keyof typeof posts];

  if (!post) {
    return <div className="container mx-auto px-4 py-20">Post not found</div>;
  }

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <Card className="overflow-hidden">
          <div className="relative w-full h-[400px]">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6">
            <h1 className="text-4xl font-bold text-primary mb-2">{post.title}</h1>
            <p className="text-gray-500 mb-6">{post.date}</p>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">{post.content}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {post.gallery.map((image, index) => (
                <div key={index} className="relative">
                  <AspectRatio ratio={16 / 9}>
                    <img
                      src={image}
                      alt={`${post.title} gallery image ${index + 1}`}
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

export default BlogPost;