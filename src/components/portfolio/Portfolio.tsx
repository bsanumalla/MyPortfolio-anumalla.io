import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "Enterprise Data Migration Platform",
      description: "Led the development of a high-performance data migration system handling 50TB+ data transfer from SQL to NoSQL databases with zero downtime.",
      technologies: ["Java", "Spring Boot", "MongoDB", "PostgreSQL", "AWS"],
      featured: true
    },
    {
      title: "Microservices API Gateway",
      description: "Architected and implemented a scalable API gateway handling 10M+ daily requests with advanced routing, authentication, and monitoring.",
      technologies: ["Java", "Spring Cloud", "Redis", "Docker", "Kubernetes"],
      featured: true
    },
    {
      title: "Real-time Event Processing System",
      description: "Built event-driven microservices using Kafka and RabbitMQ for processing millions of real-time events with guaranteed delivery.",
      technologies: ["Java", "Kafka", "RabbitMQ", "Docker", "AWS"],
      featured: false
    },
    {
      title: "CI/CD Pipeline Optimization",
      description: "Designed and implemented automated CI/CD pipelines reducing deployment time by 70% and increasing release frequency.",
      technologies: ["Jenkins", "Docker", "Terraform", "AWS", "Git"],
      featured: false
    }
  ];

  return (
    <section id="portfolio" className="section-padding">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Featured Work</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Showcasing enterprise-level projects and technical innovations.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className={`card-gradient border smooth-transition hover:border-primary/30 hover:scale-105 ${
                project.featured ? 'lg:col-span-1 border-primary/30 glow-effect' : 'border-border/50'
              }`}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                  {project.featured && (
                    <Badge variant="secondary" className="bg-primary/10 text-primary">
                      Featured
                    </Badge>
                  )}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" disabled>
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Private
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Card className="card-gradient border border-border/50 p-8 max-w-2xl mx-auto">
            <div className="space-y-4">
              <Github className="h-16 w-16 text-primary mx-auto" />
              <h3 className="text-2xl font-semibold">Explore My Code</h3>
              <p className="text-muted-foreground">
                Discover more projects, contributions, and code samples on my GitHub profile.
              </p>
              <Button size="lg" className="glow-effect" asChild>
                <a href="https://github.com/bhavanishankera7" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-5 w-5" />
                  Visit GitHub
                </a>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;