import { Button } from "@/components/ui/button";
import { Calendar, Clock } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

interface Blog {
  _id: string;
  title: string;
  content: string;
  image?: string;
  createdAt?: string;
  images?: string[];
  readTime?: string;
}

interface BlogDetailProps {
  blog: Blog | null;
  onBack: () => void;
}

const BlogDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); // ✅ useNavigate hook



  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await fetch(`https://portfolio-website-5xgj.onrender.com/api/blogs/${id}`);
        if (!res.ok) throw new Error("Failed to fetch blog");
        const data: Blog = await res.json();
        setBlog(data);
      } catch (err) {
        console.error("Error fetching blog:", err);
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchBlog();
  }, [id]);
  if (loading) return <p className="text-center mt-20">Loading blog...</p>;
  if (!blog) return <p className="text-center mt-10">Blog not found</p>;


  return (
    <div className="max-w-3xl mx-auto py-10 px-4">

      <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
      <div className="flex items-center gap-6 text-muted-foreground mb-6">
        <div className="flex items-center">
          <Calendar className="h-4 w-4 mr-1" />
          {blog.createdAt
            ? new Date(blog.createdAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })
            : "No Date"}
        </div>
        <div className="flex items-center">
          <Clock className="h-4 w-4 mr-1" />
          {blog.readTime || "5 min read"}
        </div>
      </div>

      {/* Blog Images Gallery */}
      {blog.images && blog.images.length > 0 && (
        <img
          src={blog.images[0]} // cover image
          alt={blog.title}
          className="w-full h-64 object-cover rounded-lg mb-6"
        />
      )}

      {/* Show More Images Button */}
      {blog.images && blog.images.length > 1 && (
        <Button
          variant="outline"
          className="mb-6"
          onClick={() => navigate(`/gallery?blogId=${blog._id}`)}
        >
          Show More Images →
        </Button>
      )}

      <p className="text-lg leading-relaxedc pt-2 pb-10">{blog.content}</p>
      <Button variant="ghost" onClick={() =>navigate("/#blog")} className="px-2 py-1 text-xs font-medium  bg-primary/30 border border-primary/20">
        ← Back to Blogs
      </Button>
    </div>
  );
};

export default BlogDetail;
