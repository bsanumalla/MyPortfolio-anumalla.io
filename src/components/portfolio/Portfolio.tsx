import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Award, Zap, Brain } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "Adobe Analytics Data Visualization Platform",
      company: "Patagonia Health",
      year: "2024",
      description: "Built a React-based healthcare analytics platform with WCAG 2.1 compliance, ensuring accessibility for diverse user groups. Designed intuitive dashboards to surface insights from complex patient datasets, improving engagement rates by 34%. Enabled 4.9K+ medical professionals to make faster, data-driven decisions, reducing reporting time across teams.",
      technologies: ["React", "JavaScript", "WCAG 2.1", "Healthcare Analytics", "Data Visualization"],
      featured: true,
      icon: Award
    },
    {
      title: "High-Performance Query Engine",
      company: "Wipro",
      year: "2021", 
      description: "Architected a multi-query optimization engine in Java/Scala, introducing streaming evaluation and incremental computation. Reduced query execution time by 61%, enabling real-time segmentation of billions of records. Strengthened enterprise applications by improving SLA compliance and scalability across client systems.",
      technologies: ["Java", "Scala", "Query Optimization", "Distributed Systems", "Performance Engineering"],
      featured: true,
      icon: Zap
    },
    {
      title: "AI-Assisted Development Framework",
      company: "Patagonia Health",
      year: "2024",
      description: "Pioneered an AI-first engineering workflow using Cursor, Claude, and ChatGPT for automated code review and refactoring. Cut delivery timelines by 41% while sustaining high-quality engineering standards. Reduced developer onboarding time and eliminated repetitive tasks, establishing a cross-team model for efficiency.",
      technologies: ["Cursor", "Claude", "ChatGPT", "AI-assisted Development", "Workflow Automation"],
      featured: true,
      icon: Brain
    }
  ];

  return (
    <section id="portfolio" className="section-padding bg-card/30">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Key Achievements & Technical Projects</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Showcasing impactful engineering solutions that drive measurable business outcomes and technical innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <Card 
                key={index}
                className={`card-gradient border smooth-transition hover:scale-105 ${
                  project.featured 
                    ? "border-primary/50 shadow-lg shadow-primary/20" 
                    : "border-border/50 hover:border-primary/30"
                }`}
              >
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      {project.featured && (
                        <Badge variant="default" className="mb-3 text-xs">
                          Featured Project
                        </Badge>
                      )}
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <IconComponent className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <span className="text-xs text-muted-foreground">{project.company} • {project.year}</span>
                        </div>
                      </div>
                      <CardTitle className="text-lg leading-tight">
                        {project.title}
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        variant="secondary" 
                        className="text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Card className="card-gradient border border-border/50 p-8 max-w-2xl mx-auto">
            <div className="space-y-4">
              <Github className="h-16 w-16 text-primary mx-auto" />
              <h3 className="text-2xl font-semibold">More Projects</h3>
              <p className="text-muted-foreground">
                Explore my complete portfolio of distributed systems, performance engineering, and AI-assisted development projects.
              </p>
              <Button size="lg" className="glow-effect" asChild>
                <a 
                  href="https://github.com/bsanumalla" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="mr-2 h-5 w-5" />
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