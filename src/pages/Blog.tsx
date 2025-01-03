import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Plus, Share2 } from "lucide-react";
import { useAuth } from "@/components/AuthProvider";
import { useToast } from "@/hooks/use-toast";

const Blog = () => {
  const { session } = useAuth();
  const { toast } = useToast();

  const { data: posts, isLoading } = useQuery({
    queryKey: ['blog-posts'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('blog_posts')
        .select(`
          *,
          profiles:author_id (username)
        `)
        .order('created_at', { ascending: false });

      if (error) throw error;
      return data;
    },
  });

  const sharePost = (post: any) => {
    const url = `${window.location.origin}/blog/${post.id}`;
    
    // WhatsApp sharing
    const whatsappShare = () => {
      const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(`Check out this post: ${post.title} - ${url}`)}`;
      window.open(whatsappUrl, '_blank');
    };

    // Facebook sharing
    const facebookShare = () => {
      const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
      window.open(facebookUrl, '_blank');
    };

    toast({
      title: "Share this post",
      description: (
        <div className="flex gap-2">
          <Button onClick={whatsappShare} variant="outline" size="sm">
            WhatsApp
          </Button>
          <Button onClick={facebookShare} variant="outline" size="sm">
            Facebook
          </Button>
        </div>
      ),
    });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen py-20">
        <div className="container mx-auto px-4">
          <div className="animate-pulse space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-48 bg-gray-200 rounded-lg" />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-4xl font-bold text-primary">Latest Updates</h1>
          {session && (
            <Link to="/blog/new">
              <Button>
                <Plus className="mr-2" />
                New Post
              </Button>
            </Link>
          )}
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts?.map((post) => (
            <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                {post.image_url && (
                  <div className="relative h-48">
                    <img
                      src={post.image_url}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-2 right-2"
                  onClick={(e) => {
                    e.preventDefault();
                    sharePost(post);
                  }}
                >
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>
              <Link to={`/blog/${post.id}`}>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-primary">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">
                      By {post.profiles?.username}
                    </span>
                    <span className="text-sm text-gray-500">
                      {new Date(post.created_at).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;