import { Card, CardContent } from "@/components/ui/card";
import { Image, Brain, GraduationCap, Code, Briefcase, BarChart3 } from "lucide-react";

const Gallery = () => {
  return (
    <div className="text-center py-20">
      <Image className="h-16 w-16 mx-auto mb-6 text-muted-foreground" />
      <h2 className="text-4xl font-bold text-foreground mb-6">Image Gallery</h2>
      <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
      <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
        A visual journey through my projects, achievements, and learning experiences
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {[
          { icon: Image, title: "Project Screenshots" },
          { icon: BarChart3, title: "Data Visualizations" },
          { icon: Brain, title: "ML Model Results" },
          { icon: GraduationCap, title: "Certificates" },
          { icon: Code, title: "Code Snippets" },
          { icon: Briefcase, title: "Workspace" }
        ].map((item, idx) => (
          <Card
            key={idx}
            className="aspect-square overflow-hidden shadow-card hover:shadow-glow transition-all duration-300"
          >
            <CardContent className={`p-0 h-full flex items-center justify-center bg-gradient-${idx % 2 === 0 ? "primary" : "secondary"}`}>
              <div className={`text-center text-${idx % 2 === 0 ? "primary" : "secondary"}-foreground`}>
                <item.icon className="h-12 w-12 mx-auto mb-4" />
                <p className="text-sm">{item.title}</p>
                <p className="text-xs opacity-80">Coming Soon</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
