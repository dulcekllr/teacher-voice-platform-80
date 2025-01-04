import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";

import PartnershipImage from "../img/building-partnerships-for-education.jpeg"
import ConnectingImage from "../img/connecting-with-teachers.jpeg"
import FightingImage from "../img/fight-for-rights.jpeg"
import leadingImage from "../img/leading-with-vision.jpeg"

const posts = [
  {
    id: "leading-from-front",
    title: "Leading from the Front",
    excerpt: "Godwin Mshila's vision for transforming KUPPET leadership",
    date: "March 15, 2024",
    image: PartnershipImage
  },
  {
    id: "teachers-welfare",
    title: "Teachers' Welfare First",
    excerpt: "New initiatives to support and empower educators",
    date: "March 10, 2024",
    image: ConnectingImage
  },
  {
    id: "better-schools",
    title: "Building Better Schools",
    excerpt: "Community engagement and educational development",
    date: "March 5, 2024",
    image: FightingImage
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-primary mb-12">Latest Updates</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link to={`/blog/${post.id}`} key={post.id}>
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-primary">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <span className="text-sm text-gray-500">{post.date}</span>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
