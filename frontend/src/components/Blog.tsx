import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, BookOpen } from "lucide-react";
import { spawn } from "child_process";

interface Blog {
  _id: string;
  title: string;
  content: string;
  images?: string[];
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

const categories = ["All", "AI", "ML", "Deep Learning"];

const Blog = ({ onReadMore }: BlogProps) => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>("All");

  useEffect(() => {
    fetch("https://portfolio-website-5xgj.onrender.com/api/blogs")
      .then((res) => res.json())
      .then((data) =>
        setBlogs(
          data.map((b: Blog) => ({
            ...b,
            category: b.category || "ALL",
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
      : blogs.filter(
        (b) =>
          b.category === activeCategory ||
          (b.tags && b.tags.some((tag) => tag.toLowerCase() === activeCategory.toLowerCase()))
      );


  return (
    <main className="pt-5">

      {/* Category Filter */}
      <section className="pb-8 px-4">
        <div className="container mx-auto max-w-5xl flex flex-wrap items-center justify-center gap-3">
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
        <div className="mx-auto max-w-5xl">
          {filteredBlogs.length === 0 ? (
            <p className="text-center text-muted-foreground">
              No blogs found in this category.
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredBlogs.map((post) => (
                <Card
                  key={post._id}
                  className="relative w-full sm:w-full hover:shadow-glow hover:scale-105 shadow-md transition-all duration-300 group"
                >

                  {/* Top-right tag */}

                  <CardHeader className="pr-3"> {/* adds right padding to avoid overlap */}
                    <div className="flex justify-between items-start">
                      <h3 className="font-bold text-xl mb-2 group-hover:text-purple-600 transition-colors">
                        {post.title}
                      </h3>
                      {post.tags?.length > 0 && (
                        <Badge
                          variant="secondary"
                          className="flex items-center hover:bg-purple-200 justify-center text-xs bg-purple-100 text-purple-800 px-3 py-1 rounded-full leading-none"
                        >
                          {post.tags[0]}
                        </Badge>


                      )}
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {post.content.length > 120
                        ? post.content.slice(0, 120) + "..."
                        : post.content}
                    </p>
                  </CardHeader>

                  <CardContent>
                    <div className="flex items-center justify-between text-sm text-muted-foreground px-1">
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
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => onReadMore(post)}
                      >
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
