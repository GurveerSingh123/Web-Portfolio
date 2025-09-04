import { Mail, Github, Linkedin } from "lucide-react";

type FooterProps = {
  setActiveTab: (tab: string) => void;
};

const Footer = ({ setActiveTab }: FooterProps) => {
  const handleQuickLinkClick = (sectionId: string) => {
    if (sectionId === "contact") {
      setActiveTab("contact");
      setTimeout(() => {
        const section = document.getElementById("contact");
        section?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    } else {
      setActiveTab("home");
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        section?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  };

  return (
    <footer className="bg-gradient-to-r from-purple-50 via-white to-purple-50 text-gray-700 py-10 mt-16">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-10">
        {/* Column 1: About */}
        <div>
          <h2 className="text-xl font-bold text-purple-600">Gurveer Singh</h2>
          <p className="mt-3 text-sm">
            AI/ML Enthusiast passionate about building real-world
            solutions in data science, machine learning, and
            intelligent systems.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-purple-600">Quick Links</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <button onClick={() => handleQuickLinkClick("about")} className="hover:text-purple-500">
                About
              </button>
            </li>
            <li>
              <button onClick={() => handleQuickLinkClick("skills")} className="hover:text-purple-500">
                Skills
              </button>
            </li>
            <li>
              <button onClick={() => handleQuickLinkClick("projects")} className="hover:text-purple-500">
                Projects
              </button>
            </li>
            <li>
              <button onClick={() => handleQuickLinkClick("contact")} className="hover:text-purple-500">
                Contact
              </button>
            </li>
          </ul>
        </div>

        {/* Column 3: Services */}
        <div>
          <h3 className="text-lg font-semibold text-purple-600">Services</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li>Machine Learning Solutions</li>
            <li>Data Analysis & Visualization</li>
            <li>Model Deployment</li>
            <li>AI-powered Applications</li>
          </ul>
        </div>

        {/* Column 4: Connect */}
        <div>
          <h3 className="text-lg font-semibold text-purple-600">Connect</h3>
          <div className="flex space-x-4 mt-3 text-xl">
            <a
              href="mailto:gurveersinghpassi@gmail.com"
              className="hover:text-purple-500"
              aria-label="Email"
            >
              <Mail className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com/in/gurveer-singh-847b37312"
              className="hover:text-purple-500"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="https://github.com/GurveerSingh123"
              className="hover:text-purple-500"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t mt-10 pt-6 text-center text-sm text-gray-500">
        © 2025 Gurveer Singh. Built with passion for AI/ML and data science.
      </div>
    </footer>
  );
};

export default Footer;
