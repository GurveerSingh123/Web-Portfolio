import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin, Github, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ContactProps {
  handleContactSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
}

const Contact: React.FC<ContactProps> = ({ handleContactSubmit }) => {
  const { toast } = useToast();

  return (
    <section id="contact" className="py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-foreground mb-6">Get In Touch</h2>
        <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Let's collaborate on exciting AI/ML projects and data-driven solutions
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        <div className="space-y-8">
          <Card className="shadow-card hover:shadow-glow transition-all duration-300">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-6 text-foreground">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-gradient-primary p-3 rounded-full">
                    <Mail className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">Email</h4>
                    <a
                      href="mailto:gurveersinghpassi@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      gurveersinghpassi@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-gradient-secondary p-3 rounded-full">
                    <Phone className="h-5 w-5 text-secondary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">Phone</h4>
                    <a href="tel:+919577392000" className="text-muted-foreground hover:text-primary transition-colors">
                      +91 9577392000
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-gradient-primary p-3 rounded-full">
                    <Linkedin className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">LinkedIn</h4>
                    <a href="https://www.linkedin.com/in/gurveer-singh-847b37312" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                      linkedin.com/in/gurveer-singh-847b37312
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-gradient-secondary p-3 rounded-full">
                    <Github className="h-5 w-5 text-secondary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">GitHub</h4>
                    <a href="https://github.com/GurveerSingh123" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                      github.com/GurveerSingh123
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="shadow-card hover:shadow-glow transition-all duration-300">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-foreground">Send a Message</CardTitle>
          </CardHeader>
          <CardContent>
            <form method="POST" id="contact-form" className="space-y-6" onSubmit={handleContactSubmit}>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name
                  </label>
                  <Input id="name" name="user_name" required />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <Input id="email" name="user_email" type="email" required />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                  Subject
                </label>
                <Input id="subject" name="subject" required />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <Textarea id="message" name="message" rows={5} required />
              </div>
              <Button type="submit" variant="hero" size="hero" className="w-full">
                <Send className="h-5 w-5" />
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
