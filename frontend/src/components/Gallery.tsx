import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

interface Blog {
  _id: string;
  title: string;
  images?: string[];
  createdAt?: string;
}

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const blogId = searchParams.get("blogId");

  useEffect(() => {
    const fetchBlogs = async () => {
    try {
      const res = await fetch("https://portfolio-website-5xgj.onrender.com/api/blogs");
      if (!res.ok) throw new Error("Failed to fetch blogs");
      const data: Blog[] = await res.json();

      // ✅ Sort blogs newest → oldest
      const sorted = data.sort(
        (a, b) => new Date(b.createdAt!).getTime() - new Date(a.createdAt!).getTime()
      );

      setBlogs(sorted);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    } finally {
      setLoading(false);
    }
  };

    

    fetchBlogs();
  }, []);

  if (loading) return <p className="text-center mt-20">Loading gallery...</p>;

  let images: string[] = [];
  let heading = "Image Gallery";
  const blog = blogId ? blogs.find((b) => b._id === blogId) : null;


  if (blogId) {
    const blog = blogs.find((b) => b._id === blogId);
    if (blog) {
      images = blog.images || [];
      heading = `${blog.title} - Image Gallery`;
    }
  } else {
    images = blogs.flatMap((blog) => blog.images || []);
  }

  return (
    <div className="max-w-6xl mx-auto py-20 px-4 text-center">
      <h2 className="text-4xl font-bold text-foreground mb-6">{heading}</h2>
      <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>

      {blogId && blog && (
        <button
          onClick={() => navigate(`/blog/${blog._id}`)}
          className="mb-6 px-4 py-2 rounded-lg bg-primary text-white hover:bg-primary/80 transition"
        >
          ← Back to Blog
        </button>
      )}



{images.length > 0 ? (
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
    {blogId && blog ? (
      // ✅ Single blog images
      images.map((img, idx) => (
        <div
          key={idx}
          className="rounded-lg shadow-card hover:scale-105 hover:shadow-glow transition-all duration-300 overflow-hidden bg-white"
        >
          <img
            src={img}
            alt={`${blog.title} - image ${idx + 1}`}
            onClick={() => setSelectedImage(img)}
            className="w-full h-60 object-cover cursor-pointer"
          />
          {/* Blog Title */}
          <div className="p-4 text-left">
            <h3 className="text-lg font-bold text-gray-900">{blog.title}</h3>
          </div>
        </div>
      ))
    ) : (
      // ✅ All blogs images
      blogs.flatMap((b) =>
        (b.images || []).map((img, idx) => (
          <div
            key={`${b._id}-${idx}`}
            className="rounded-lg shadow-card hover:scale-105 hover:shadow-glow transition-all duration-300 overflow-hidden bg-white"
          >
            <img
              src={img}
              alt={`${b.title} - image ${idx + 1}`}
              onClick={() => setSelectedImage(img)}
              className="w-full h-60 object-cover cursor-pointer"
            />
            {/* Blog Title */}
            <div className="p-4 text-left">
              <h3 className="text-lg text-gray-900">{b.title}</h3>
            </div>
          </div>
        ))
      )
    )}
  </div>
) : (
  <p className="text-gray-500">No images available 📷</p>
)}


      {/* ✅ Fullscreen modal goes here */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Fullscreen"
            className="max-w-full max-h-full object-contain rounded-lg shadow-lg"
          />

          <button
          className="absolute top-6 right-6 text-white text-3xl"
          onClick={() => setSelectedImage(null)}>
            ✕
          </button>
        </div>
      )}
    </div>
  );
};

export default Gallery;
