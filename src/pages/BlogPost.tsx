import { useParams, useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Share2, Edit, Trash } from "lucide-react";
import { useAuth } from "@/components/AuthProvider";
import { useToast } from "@/hooks/use-toast";

const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { session } = useAuth();
  const { toast } = useToast();

  const { data: post, isLoading } = useQuery({
    queryKey: ['blog-post', id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('blog_posts')
        .select(`
          *,
          profiles:author_id (username)
        `)
        .eq('id', id)
        .single();

      if (error) throw error;
      return data;
    },
  });

  const sharePost = () => {
    const url = window.location.href;
    
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

  const deletePost = async () => {
    const { error } = await supabase
      .from('blog_posts')
      .delete()
      .eq('id', id);

    if (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to delete post",
      });
      return;
    }

    toast({
      title: "Success",
      description: "Post deleted successfully",
    });
    navigate('/blog');
  };

  if (isLoading) {
    return (
      <div className="min-h-screen py-20">
        <div className="container mx-auto px-4">
          <div className="animate-pulse space-y-4">
            <div className="h-[400px] bg-gray-200 rounded-lg" />
            <div className="h-8 bg-gray-200 rounded w-3/4" />
            <div className="h-4 bg-gray-200 rounded w-1/4" />
            <div className="h-40 bg-gray-200 rounded" />
          </div>
        </div>
      </div>
    );
  }

  if (!post) {
    return <div className="container mx-auto px-4 py-20">Post not found</div>;
  }

  const isAuthor = session?.user?.id === post.author_id;

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <Card className="overflow-hidden">
          {post.image_url && (
            <div className="relative w-full h-[400px]">
              <img
                src={post.image_url}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}
          <div className="p-6">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h1 className="text-4xl font-bold text-primary mb-2">{post.title}</h1>
                <div className="flex gap-2 text-gray-500">
                  <span>By {post.profiles?.username}</span>
                  <span>•</span>
                  <span>{new Date(post.created_at).toLocaleDateString()}</span>
                </div>
              </div>
              <div className="flex gap-2">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={sharePost}
                >
                  <Share2 className="h-4 w-4" />
                </Button>
                {isAuthor && (
                  <>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => navigate(`/blog/${id}/edit`)}
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={deletePost}
                    >
                      <Trash className="h-4 w-4" />
                    </Button>
                  </>
                )}
              </div>
            </div>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed whitespace-pre-wrap">
              {post.content}
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default BlogPost;