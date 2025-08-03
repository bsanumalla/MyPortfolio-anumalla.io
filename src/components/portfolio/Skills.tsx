import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  Monitor, 
  Server, 
  Cloud, 
  Database, 
  Settings,
  GitBranch
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: Code,
      skills: ["Java", "JavaScript/TypeScript", "Python", "SQL", "C++", "Rust"],
      color: "text-primary"
    },
    {
      title: "Frontend",
      icon: Monitor,
      skills: ["React", "AngularJS", "HTML5", "CSS3", "Redux"],
      color: "text-accent"
    },
    {
      title: "Backend",
      icon: Server,
      skills: ["Spring Boot", "Node.js", "REST APIs", "Microservices"],
      color: "text-primary"
    },
    {
      title: "Cloud",
      icon: Cloud,
      skills: ["AWS (EC2, Lambda, S3)", "Azure (CosmosDB, DevOps)", "CloudFormation"],
      color: "text-accent"
    },
    {
      title: "Databases",
      icon: Database,
      skills: ["PostgreSQL", "Oracle", "MongoDB", "CosmosDB", "ElasticSearch"],
      color: "text-primary"
    },
    {
      title: "DevOps",
      icon: Settings,
      skills: ["Docker", "Kubernetes", "Jenkins", "Terraform", "Git"],
      color: "text-accent"
    },
    {
      title: "Patterns",
      icon: GitBranch,
      skills: ["Event Streaming (Kafka/RabbitMQ)", "TDD", "Distributed Systems"],
      color: "text-primary"
    }
  ];

  return (
    <section id="skills" className="section-padding bg-card/30">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Skills & Technologies</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={index} 
                className="card-gradient border border-border/50 smooth-transition hover:border-primary/30 hover:scale-105"
              >
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <IconComponent className={`h-8 w-8 ${category.color}`} />
                    </div>
                  </div>
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex} 
                        variant="secondary" 
                        className="text-xs smooth-transition hover:bg-primary/20"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;