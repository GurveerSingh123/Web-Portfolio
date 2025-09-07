import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SkillCard } from "@/components/SkillCard";
import { ProjectCard } from "@/components/ProjectCard";
import { ServiceCard } from "@/components/ServiceCard";
import { useToast } from "@/hooks/use-toast";
import React, { useState, useEffect } from "react";


import BlogDetail from "@/components/BlogDetail";

import Gallery from "@/components/Gallery";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";

import Footer from "@/components/Footer";
import gurveerProfile from "@/assets/gurveer-profile.jpg";
import {
  Download,
  Mail,
  Phone,
  Linkedin,
  Github,
  Brain,
  Database,
  BarChart3,
  Code,
  PieChart,
  TrendingUp,
  Shield,
  Cpu,
  Send,
  MapPin,
  User,
  Briefcase,
  GraduationCap,
  Home,
  BookOpen,
  Image,
  Calendar
} from "lucide-react";



const Portfolio = () => {
  const [selectedBlog, setSelectedBlog] = useState<any>(null);
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("home");
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    if (window.location.hash === "#blog") {
      setActiveTab("blog");
    }
    if (window.location.hash === "#gallery") {
      setActiveTab("gallery");
    }
    if (window.location.hash === "#contact") {
      setActiveTab("contact");
    }
  }, []);

  const handleContactSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbzNa8co_CQpYQyeRHLSuO5-UypP85lZhWm3nJgMyNSDYfxojryXAWozvybMjKTRVsJTdg/exec", {
        method: "POST",
        body: formData
      });

      if (response.ok) {
        toast({
          title: "Message Sent!",
          description: "Thank you for reaching out. I'll get back to you soon."
        });
        form.reset(); // clear form fields
      } else {
        toast({
          title: "Error!",
          description: "Something went wrong. Please try again later."
        });
      }
    } catch (error) {
      toast({
        title: "Error!",
        description: "Something went wrong. Please try again later."
      });
      console.error(error);
    }

  };

  const skills = [
    {
      icon: Code,
      title: "Programming Languages",
      description: "C, C++, Python for building robust applications and algorithms"
    },
    {
      icon: Database,
      title: "Data Analysis",
      description: "Extracting insights from complex datasets using advanced techniques"
    },
    {
      icon: Brain,
      title: "Machine Learning",
      description: "Building predictive models and AI solutions for real-world problems"
    },
    {
      icon: BarChart3,
      title: "Power BI",
      description: "Creating interactive dashboards and business intelligence solutions"
    },
    {
      icon: PieChart,
      title: "Feature Engineering",
      description: "Optimizing data features for improved model performance"
    },
    {
      icon: TrendingUp,
      title: "EDA & Visualization",
      description: "Exploratory data analysis and compelling data visualizations"
    }
  ];

  const services = [
    {
      icon: Database,
      title: "Data Analysis",
      description: "Transform raw data into actionable insights using modern analytical tools and techniques.",
      features: [
        "Statistical Analysis & Reporting",
        "Data Cleaning & Preprocessing",
        "Interactive Dashboard Creation",
        "Business Intelligence Solutions"
      ]
    },
    {
      icon: Brain,
      title: "ML Model Training",
      description: "Build and deploy machine learning models to solve complex business problems.",
      features: [
        "Predictive Modeling",
        "Classification & Regression",
        "Model Optimization & Tuning",
        "Performance Evaluation"
      ]
    },
    {
      icon: Cpu,
      title: "AI Consultation",
      description: "Strategic guidance on implementing AI solutions for your business needs.",
      features: [
        "AI Strategy Development",
        "Technology Assessment",
        "Implementation Planning",
        "Best Practices Guidance"
      ]
    }
  ];

  const projects = [
    {
      title: "Customer Churn Prediction",
      description: "Developed a comprehensive machine learning solution to predict customer retention using Logistic Regression and Random Forest algorithms. Achieved 94% accuracy in identifying at-risk customers.",
      technologies: ["Python", "Scikit-learn", "Pandas", "Matplotlib", "Logistic Regression", "Random Forest"],
      githubUrl: "https://github.com/GurveerSingh123/Customer-churn-prediction-ML"
    },
    {
      title: "Fraud Detection System",
      description: "Built an advanced anomaly detection system to identify fraudulent transactions in real-time. Implemented multiple ML algorithms to minimize false positives while maintaining high detection rates.",
      technologies: ["Python", "Anomaly Detection", "Feature Engineering", "Data Visualization"],
      githubUrl: "https://github.com/GurveerSingh123/Fraud-Detection"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/20">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center py-4">
            <h1 className="text-2xl font-bold text-foreground mr-8">Gurveer Singh</h1>
          </div>
        </div>
      </header>

      {/* Main Content with Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="home" className="flex items-center gap-2">
              <Home className="h-4 w-4" />
              Home
            </TabsTrigger>
            <TabsTrigger value="blog" className="flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              Blog
            </TabsTrigger>
            <TabsTrigger value="gallery" className="flex items-center gap-2">
              <Image className="h-4 w-4" />
              Image Gallery
            </TabsTrigger>
            <TabsTrigger value="contact" className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              Contact
            </TabsTrigger>
          </TabsList>

          {/* Home Tab */}
          <TabsContent value="home" className="space-y-20" >
            {/* Hero Section */}
            <section className="relative py-20 bg-gradient-hero rounded-lg">
              <div className="max-w-6xl mx-auto px-8">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                  <div className="flex-1 text-center lg:text-left animate-fade-in-up">
                    <div className="mb-6">
                      <span className="text-primary font-medium text-lg">👋 Hello, I'm</span>
                    </div>
                    <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                      Gurveer Singh
                    </h1>
                    <div className="text-2xl lg:text-3xl text-muted-foreground mb-6 font-medium">
                      AI/ML Enthusiast • Data Analyst • Machine Learning Developer
                    </div>
                    <p className="text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed">
                      Passionate about Artificial Intelligence & Machine Learning — transforming data into meaningful insights and building intelligent solutions for tomorrow's challenges.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                      <Button variant="hero" size="hero" className="animate-scale-in" onClick={() => setActiveTab("contact")} >
                        <Mail className="h-5 w-5" />
                        Contact Me
                      </Button>
                      <Button variant="accent" size="hero" className="animate-scale-in">
                        <Download className="h-5 w-5" />
                        Download CV
                      </Button>
                    </div>
                  </div>
                  <div className="flex-shrink-0 animate-fade-in">
                    <div className="relative">
                      <div className="w-72 h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden shadow-glow border-4 border-primary/20">
                        <img
                          src={gurveerProfile}
                          alt="Gurveer Singh - AI/ML Enthusiast"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute -z-10 inset-0 bg-gradient-primary rounded-full blur-xl opacity-30 animate-glow"></div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-20 scroll-mt-0">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-foreground mb-6">About Me</h2>
                <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6 animate-fade-in-up">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    I'm a passionate Computer Science student in my 3rd year of B.Tech, specializing in Artificial Intelligence and Machine Learning. My journey in tech is driven by curiosity and the desire to solve complex problems through intelligent data-driven solutions.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    With hands-on experience in predictive modeling, deep learning, and data analysis, I've completed a comprehensive 45-day internship and various online certifications. I believe in the transformative power of AI to create meaningful impact across industries.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    My expertise spans from traditional machine learning algorithms to modern deep learning frameworks, with a strong foundation in statistical analysis and feature engineering.
                  </p>
                </div>

                <Card className="shadow-card hover:shadow-glow transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      <div className="flex items-center gap-4">
                        <div className="bg-gradient-primary p-3 rounded-full">
                          <User className="h-6 w-6 text-primary-foreground" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground">Personal Info</h3>
                          <p className="text-muted-foreground">3rd Year B.Tech CSE Student</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-4">
                        <div className="bg-gradient-secondary p-3 rounded-full">
                          <Briefcase className="h-6 w-6 text-secondary-foreground" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground">Experience</h3>
                          <p className="text-muted-foreground">45-day Internship + Certifications</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-4">
                        <div className="bg-gradient-primary p-3 rounded-full">
                          <GraduationCap className="h-6 w-6 text-primary-foreground" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground">Education</h3>
                          <p className="text-muted-foreground">Computer Science Engineering</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>


            {/* Leadership & Roles Section */}
            <section className="py-20">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-foreground mb-6">Leadership & Roles</h2>
                <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Leading teams and driving innovation at Guru Nanak Dev Engineering College, Ludhiana
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                <Card className="shadow-card hover:scale-105 hover:shadow-glow transition-all duration-300 animate-fade-in-up">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="bg-gradient-primary p-3 rounded-full">
                        <Code className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl text-foreground">Technical Head</CardTitle>
                        <a
                          href="https://www.instagram.com/cmlgndec"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary font-medium hover:underline hover:text-blue-600 transition-colors duration-200">
                          CML Club
                        </a>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      Leading technical initiatives and fostering innovation in machine learning and computer science at one of Punjab's premier engineering institutions.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-foreground">Leading technical projects and research initiatives</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-foreground">Conducting workshops on ML, AI, and programming</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-foreground">Managing and maintaining club website and resources</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-foreground">Coordinating technical teams and mentoring members</p>
                      </div>
                    </div>
                    <div className="mt-6 pt-6 border-t border-border">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        <span>Guru Nanak Dev Engineering College, Ludhiana</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-card hover:scale-105 hover:shadow-glow transition-all duration-300 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="bg-gradient-secondary p-3 rounded-full">
                        <Calendar className="h-6 w-6 text-secondary-foreground" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl text-foreground">Event Management Head</CardTitle>
                        <a
                          href="https://fmcrs.gndec.ac.in/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-secondary font-medium hover:underline hover:text-blue-600 transition-colors duration-200"                        >
                          FMCRS Club
                        </a>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      Orchestrating large-scale college events and creating memorable experiences for the student community through strategic planning and flawless execution.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-foreground">Organizing and executing major college events and festivals</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-foreground">Managing complex logistics and vendor coordination</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-foreground">Leading diverse teams and ensuring smooth operations</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-foreground">Ensuring seamless event execution and participant satisfaction</p>
                      </div>
                    </div>
                    <div className="mt-6 pt-6 border-t border-border">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        <span>Guru Nanak Dev Engineering College, Ludhiana</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Skills Section */}
            <section id="skills" className="py-20 bg-muted/30 rounded-lg">
              <div className="px-8">
                <div className="text-center mb-16">
                  <h2 className="text-4xl font-bold text-foreground mb-6">Technical Skills</h2>
                  <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    A comprehensive toolkit for modern AI/ML development and data analysis
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {skills.map((skill, index) => (
                    <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                      <SkillCard {...skill} />
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Services Section */}
            <section className="py-20">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-foreground mb-6">Services</h2>
                <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Leveraging AI and data science to deliver impactful solutions
                </p>
              </div>

              <div className="grid lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                  <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
                    <ServiceCard {...service} />
                  </div>
                ))}
              </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="py-20 bg-muted/30 rounded-lg">
              <div className="px-8">
                <div className="text-center mb-16">
                  <h2 className="text-4xl font-bold text-foreground mb-6">Featured Projects</h2>
                  <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    Real-world applications of machine learning and data analysis
                  </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                  {projects.map((project, index) => (
                    <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
                      <ProjectCard {...project} />
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </TabsContent>

          {/* Blog Tab */}
          <TabsContent
            value="blog"
            forceMount
            className={`transition-all duration-500 ${activeTab === "blog" ? "block" : "hidden"
              }`}
          >
            <div className="animate-fade-in-up">
              <Blog onReadMore={(blog) => (window.location.href = `/blog/${blog._id}`)} />
            </div>
          </TabsContent>

          {/* Gallery Tab */}
          <TabsContent
            value="gallery"
            forceMount
            className={`transition-all duration-500 ${activeTab === "gallery" ? "block" : "hidden"
              }`}
          >
            <div className="animate-fade-in-up">
              <Gallery />
            </div>
          </TabsContent>

          {/* Contact Tab */}
          <TabsContent
            value="contact"
            forceMount
            className={`transition-all duration-500 ${activeTab === "contact" ? "block" : "hidden"
              }`}
          >
            <div className="animate-fade-in-up">
              <Contact handleContactSubmit={handleContactSubmit} />
            </div>
          </TabsContent>


        </Tabs>
      </div>

      {/* Footer */}
      <Footer setActiveTab={setActiveTab} />
    </div>
  );
};

export default Portfolio;