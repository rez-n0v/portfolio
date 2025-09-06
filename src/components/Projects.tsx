import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import dashboardImage from "@/assets/project-dashboard.jpg";
import ecommerceImage from "@/assets/project-ecommerce.jpg";
import mobileImage from "@/assets/project-mobile.jpg";

const Projects = () => {
  const projects = [
    {
      title: "Analytics Dashboard",
      description:
        "A comprehensive analytics platform with real-time data visualization, custom reporting, and team collaboration features. Built with React, D3.js, and Node.js.",
      image: dashboardImage,
      technologies: ["React", "TypeScript", "D3.js", "Node.js", "PostgreSQL"],
      githubUrl: "https://github.com",
      liveUrl: "https://demo.com",
      featured: true,
    },
    {
      title: "E-Commerce Platform",
      description:
        "Full-featured e-commerce solution with payment integration, inventory management, and admin dashboard. Optimized for performance and scalability.",
      image: ecommerceImage,
      technologies: ["Next.js", "Stripe", "Prisma", "Tailwind CSS", "Vercel"],
      githubUrl: "https://github.com",
      liveUrl: "https://demo.com",
      featured: true,
    },
    {
      title: "Task Management App",
      description:
        "Collaborative task management application with real-time updates, team workspaces, and productivity analytics. Cross-platform mobile and web app.",
      image: mobileImage,
      technologies: ["React Native", "Firebase", "Redux", "TypeScript"],
      githubUrl: "https://github.com",
      liveUrl: "https://demo.com",
      featured: false,
    },
  ];

  return (
    <section id="projects" className="py-20 section-bg">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient">
            Featured Projects
          </h2>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {projects
              .filter(p => p.featured)
              .map((project, index) => (
                <Card
                  key={project.title}
                  className="overflow-hidden bg-card border card-glow smooth-transition animate-slide-in-left"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover smooth-transition hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3 text-foreground">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map(tech => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="border-primary/20 text-primary"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex gap-3">
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className="border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground"
                      >
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </a>
                      </Button>
                      <Button
                        size="sm"
                        asChild
                        className="bg-primary text-primary-foreground hover:bg-primary/90"
                      >
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>

          <div className="grid md:grid-cols-1 gap-8">
            {projects
              .filter(p => !p.featured)
              .map((project, index) => (
                <Card
                  key={project.title}
                  className="overflow-hidden bg-card border card-glow smooth-transition animate-fade-in"
                  style={{ animationDelay: `${(index + 2) * 0.2}s` }}
                >
                  <div className="grid md:grid-cols-2 gap-0">
                    <div className="aspect-video md:aspect-auto overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover smooth-transition hover:scale-105"
                      />
                    </div>
                    <CardContent className="p-6 flex flex-col justify-center">
                      <h3 className="text-xl font-semibold mb-3 text-foreground">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map(tech => (
                          <Badge
                            key={tech}
                            variant="outline"
                            className="border-primary/20 text-primary"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex gap-3">
                        <Button
                          variant="outline"
                          size="sm"
                          asChild
                          className="border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground"
                        >
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github className="h-4 w-4 mr-2" />
                            Code
                          </a>
                        </Button>
                        <Button
                          size="sm"
                          asChild
                          className="bg-primary text-primary-foreground hover:bg-primary/90"
                        >
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Live Demo
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-6">
              Want to see more of my work?
            </p>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-4 w-4 mr-2" />
                View All Projects on GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
