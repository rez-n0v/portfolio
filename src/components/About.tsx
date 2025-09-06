const About = () => {
  return (
    <section id="about" className="py-20 section-bg">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient">
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                I'm a passionate software engineer with 2+ years of experience
                building scalable systems, data pipelines, and innovative
                solutions at leading companies like Walmart Global Tech and
                Studio Management HF. My journey began with a B.Tech in Computer
                Science Engineering from Birla Institute of Technology, Mesra
                (CGPA: 8.25).
              </p>

              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                I specialize in building robust backend systems, data pipelines,
                and microservices architecture. My expertise spans from
                performance optimization (achieving 700% throughput
                improvements) to ML/AI integration, with a strong focus on
                scalable, distributed systems.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-card rounded-lg border">
                  <div className="text-2xl font-bold text-primary mb-2">2+</div>
                  <div className="text-sm text-muted-foreground">
                    Years Experience
                  </div>
                </div>
                <div className="text-center p-4 bg-card rounded-lg border">
                  <div className="text-2xl font-bold text-primary mb-2">2</div>
                  <div className="text-sm text-muted-foreground">
                    Awards Won
                  </div>
                </div>
              </div>
            </div>

            <div className="animate-slide-in-right">
              <div className="bg-card p-8 rounded-lg border card-glow smooth-transition">
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  What I Do
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span className="text-muted-foreground">
                      Backend systems and data pipeline development
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span className="text-muted-foreground">
                      Microservices architecture and distributed systems
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span className="text-muted-foreground">
                      Machine Learning and NLP integration
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span className="text-muted-foreground">
                      Performance optimization and scalability
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span className="text-muted-foreground">
                      Cloud platforms and DevOps automation
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
