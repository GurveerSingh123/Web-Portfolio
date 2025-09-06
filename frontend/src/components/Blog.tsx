import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, BookOpen } from "lucide-react";

interface Blog {
  _id: string;
  title: string;
  content: string;
  image?: string;
  date?: string;
  category?: string;
  tags?: string[];
  readTime?: string;
  createdAt?: string;
}

interface BlogProps {
  onReadMore: (blog: Blog) => void;
}

const categories = ["All", "AI", "Machine Learning", "Deep Learning"];

const Blog = ({ onReadMore }: BlogProps) => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>("All");

  useEffect(() => {
    fetch("http://localhost:5000/api/blogs")
      .then((res) => res.json())
      .then((data) =>
        setBlogs(
          data.map((b: Blog) => ({
            ...b,
            category: b.category || "AI",
            readTime: b.readTime || "5 min read",
            tags: b.tags && b.tags.length > 0 ? b.tags : ["Tech"],
          }))
        )
      )
      .catch((err) => console.error("Error fetching blogs:", err));
  }, []);

  const filteredBlogs =
    activeCategory === "All"
      ? blogs
      : blogs.filter((b) => b.category === activeCategory);

  return (
    <main className="pt-5">

      {/* Category Filter */}
      <section className="pb-8 px-4">
        <div className="container mx-auto max-w-5xl flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              size="sm"
              className="rounded-full px-4"
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>
      </section>

      {/* Blog Posts */}
      <section className="pb-12 px-4">
        <div className="container mx-auto max-w-5xl">
          {filteredBlogs.length === 0 ? (
            <p className="text-center text-muted-foreground">
              No blogs found in this category.
            </p>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
              {filteredBlogs.map((post) => (
                <Card
                  key={post._id}
                  className="relative shadow-md hover:shadow-lg transition-all duration-300 group"
                >
                  {/* Top-right tag */}
                  {post.tags && post.tags.length > 0 && (
                    <Badge
                      variant="secondary"
                      className="absolute top-4 right-4 text-xs bg-purple-100 text-purple-800 z-10"
                    >
                      {post.tags[0]}
                    </Badge>
                  )}

                  <CardHeader>
                    <h3 className="font-bold text-xl mb-2 group-hover:text-purple-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {post.content.length > 120
                        ? post.content.slice(0, 120) + "..."
                        : post.content}
                    </p>
                  </CardHeader>

                  <CardContent>
                    {/* Remaining tags */}
                    {post.tags && post.tags.length > 1 && (
                      <div className="flex flex-wrap gap-2 mb-3 mt-6">
                        {post.tags.slice(1).map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    )}

                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {post.createdAt
                            ? new Date(post.createdAt).toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "short",
                                day: "numeric",
                              })
                            : "No Date"}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {post.readTime}
                        </div>
                      </div>
                      <Button variant="ghost" size="sm" onClick={() => onReadMore(post)} >
                        Read More →
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default Blog;
