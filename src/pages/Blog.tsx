import { Card } from "@/components/ui/card";

const posts = [
  {
    title: "Leading from the Front",
    excerpt: "Godwin Mshila's vision for transforming KUPPET leadership",
    date: "March 15, 2024",
  },
  {
    title: "Teachers' Welfare First",
    excerpt: "New initiatives to support and empower educators",
    date: "March 10, 2024",
  },
  {
    title: "Building Better Schools",
    excerpt: "Community engagement and educational development",
    date: "March 5, 2024",
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-primary mb-12">Latest Updates</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-2 text-primary">{post.title}</h3>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <span className="text-sm text-gray-500">{post.date}</span>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;