import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen hero-gradient flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-6 text-center animate-fade-in">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient">
            Alex Johnson
          </h1>
          <h2 className="text-2xl md:text-3xl text-secondary-foreground mb-8 font-light">
            Full Stack Software Engineer
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Crafting exceptional digital experiences with modern technologies. 
            Passionate about clean code, user experience, and innovative solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              onClick={scrollToProjects}
              variant="default" 
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 smooth-transition"
            >
              View My Work
              <ArrowDown className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              onClick={scrollToContact}
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground smooth-transition"
            >
              Get In Touch
            </Button>
          </div>

          <div className="flex justify-center space-x-6">
            <a 
              href="https://github.com" 
              className="text-muted-foreground hover:text-primary smooth-transition hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-6 w-6" />
            </a>
            <a 
              href="https://linkedin.com" 
              className="text-muted-foreground hover:text-primary smooth-transition hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a 
              href="mailto:alex@example.com" 
              className="text-muted-foreground hover:text-primary smooth-transition hover:scale-110"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <ArrowDown className="h-6 w-6 text-primary" />
      </div>
    </section>
  );
};

export default Hero;