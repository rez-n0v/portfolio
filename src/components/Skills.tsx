import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Java", "Python", "JavaScript", "HTML", "CSS", "TypeScript"],
    },
    {
      title: "Frameworks & Libraries",
      skills: [
        "NodeJS",
        "ReactJS",
        "Spring Boot",
        "FastAPI",
        "Express",
        "MLOps",
      ],
    },
    {
      title: "Databases & Storage",
      skills: [
        "MongoDB",
        "Redis",
        "Memcache",
        "SQL",
        "ElasticSearch",
        "Snowflake",
      ],
    },
    {
      title: "Cloud & DevOps",
      skills: [
        "Microsoft Azure",
        "Google Cloud Platform",
        "Docker",
        "Kubernetes",
        "Git",
        "Apache Kafka",
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient">
            Skills & Technologies
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={category.title}
                className="animate-fade-in bg-card p-6 rounded-lg border card-glow smooth-transition"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-xl font-semibold mb-4 text-primary">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map(skill => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="bg-secondary/50 text-secondary-foreground hover:bg-secondary smooth-transition"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              I'm always eager to learn new technologies and stay up-to-date
              with industry trends. Currently exploring advanced ML/AI
              integration, distributed systems optimization, and modern data
              engineering practices.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
