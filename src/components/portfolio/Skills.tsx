import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  Monitor, 
  Server, 
  Cloud, 
  Database, 
  Settings,
  GitBranch,
  Brain,
  Zap
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages & Frameworks",
      icon: Code,
      skills: ["Java", "Scala", "Python", "C++", "JavaScript", "React", "Spring Boot"],
      color: "text-primary"
    },
    {
      title: "Frontend & UX",
      icon: Monitor,
      skills: ["React", "Data Visualization", "Human-Centered Design", "UI/UX Design", "WCAG 2.1 Accessibility"],
      color: "text-accent"
    },
    {
      title: "Backend & Query Engines",
      icon: Server,
      skills: ["Query Compilation", "Multi-query Optimization", "Streaming Evaluation", "REST APIs"],
      color: "text-primary"
    },
    {
      title: "Distributed Systems & Data",
      icon: Database,
      skills: ["Apache Spark", "Distributed Processing", "Incremental Evaluation"],
      color: "text-accent"
    },
    {
      title: "Cloud & Platforms",
      icon: Cloud,
      skills: ["AWS (EC2, S3, Lambda, RDS)", "Docker", "Kubernetes"],
      color: "text-primary"
    },
    {
      title: "AI & Productivity Tools",
      icon: Brain,
      skills: ["Cursor", "Claude", "ChatGPT", "AI-assisted Development", "AI Code Review", "Pair Programming"],
      color: "text-accent"
    },
    {
      title: "Development Practices",
      icon: GitBranch,
      skills: ["Agile/Scrum", "Test-Driven Development (TDD)", "CI/CD", "On-call Rotation", "Cross-functional Collaboration"],
      color: "text-primary"
    },
    {
      title: "Systems & Performance",
      icon: Zap,
      skills: ["Distributed Query Engines", "Debugging", "Performance Engineering", "High-availability Systems", "Linux"],
      color: "text-accent"
    }
  ];

  return (
    <section id="skills" className="section-padding bg-card/30">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Technical Skills</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for building high-performance distributed systems and data platforms.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
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
                  <CardTitle className="text-lg leading-tight">{category.title}</CardTitle>
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