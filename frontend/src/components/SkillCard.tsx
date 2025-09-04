import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface SkillCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const SkillCard = ({ icon: Icon, title, description }: SkillCardProps) => {
  return (
    <Card className="group hover:scale-105 transition-all duration-300 shadow-card hover:shadow-glow bg-gradient-to-br from-background to-accent/20 border-border/50">
      <CardContent className="p-6 text-center">
        <div className="mb-4 flex justify-center">
          <div className="rounded-full bg-gradient-primary p-4 group-hover:animate-glow">
            <Icon className="h-8 w-8 text-primary-foreground" />
          </div>
        </div>
        <h3 className="text-lg font-semibold mb-2 text-foreground">{title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  );
};