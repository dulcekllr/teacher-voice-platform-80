import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/components/AuthProvider";

const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { session } = useAuth();

  // If we're on the "new" route, render the new post form
  if (id === "new") {
    if (!session) {
      navigate("/login");
      return null;
    }
    return <div>New Post Form Coming Soon</div>;
  }

  // Otherwise, fetch and display the blog post
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
    enabled: !!id && id !== "new",
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {post ? (
        <article className="prose lg:prose-xl mx-auto">
          <h1>{post.title}</h1>
          <div className="flex justify-between items-center text-gray-500">
            <span>By {post.profiles?.username}</span>
            <span>{new Date(post.created_at).toLocaleDateString()}</span>
          </div>
          {post.image_url && (
            <img
              src={post.image_url}
              alt={post.title}
              className="w-full h-64 object-cover rounded-lg my-6"
            />
          )}
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </article>
      ) : (
        <div>Post not found</div>
      )}
    </div>
  );
};

export default BlogPost;