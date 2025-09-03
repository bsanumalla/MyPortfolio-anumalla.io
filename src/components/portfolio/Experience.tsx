import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Software Development Engineer II",
      company: "Patagonia Health",
      period: "Jul 2024 – May 2025",
      location: "Cary, NC",
      achievements: [
        "Designed React/JavaScript dashboards adopted by 5.2K+ healthcare professionals, enabling real-time analytics and self-service insights.",
        "Built a Java/Scala query engine with novel compilation algorithms, cutting segmentation latency to under 97ms across complex workloads.", 
        "Accelerated feature delivery by 41% through AI-assisted workflows (Cursor, Claude, ChatGPT) with automated review, documentation, and refactoring.",
        "Optimized algorithm runtimes by 63% via AI-powered query compilation, directly improving healthcare data accessibility.",
        "Established a comprehensive testing framework (unit, integration, e2e), sustaining 99.98% production uptime.",
        "Partnered with product managers and designers to translate requirements into scalable features, reducing rework by 18%.",
        "Mentored junior developers on performance debugging and AI-first coding practices, raising team-wide productivity.",
        "Pioneered cross-team adoption of AI-driven engineering workflows, setting new benchmarks for cycle time and innovation."
      ],
      current: true
    },
    {
      title: "Software Development Engineer",
      company: "Wipro",
      period: "Sep 2020 – Aug 2022",
      location: "Hyderabad, IN",
      achievements: [
        "Designed scalable REST APIs and React-based analytics interfaces serving thousands of enterprise users with high reliability.",
        "Built Spark-based distributed pipelines, improving computation efficiency by 37% through optimized query compilation.",
        "Developed containerized microservices under evolving requirements, accelerating deployment timelines by 29%.",
        "Created streaming evaluation engines for real-time queries, ensuring consistent performance in distributed environments.",
        "Automated testing via TDD and CI/CD, sustaining 99.9% uptime in production systems.",
        "Coordinated with product teams to align engineering solutions with customer requirements, reducing backlog items by 15%.",
        "Optimized debugging processes across distributed applications, cutting resolution times by 22%.",
        "Enhanced Cognizant's analytics offerings by delivering resilient, scalable distributed data solutions."
      ],
      current: false
    },
    {
      title: "Software Development Engineer",
      company: "Cognizant Technologies",
      period: "Dec 2019 – Sep 2020",
      location: "Hyderabad, IN",
      achievements: [
        "Designed scalable REST APIs and React-based analytics interfaces serving thousands of enterprise users with high reliability.",
        "Built Spark-based distributed data pipelines, improving computation efficiency by 37% through optimized query compilation.",
        "Developed containerized microservices under evolving requirements, accelerating deployment timelines by 29%.",
        "Created real-time streaming evaluation engines for distributed queries, ensuring performance consistency at scale.",
        "Automated testing via TDD and CI/CD, sustaining 99.9% production uptime in enterprise systems.",
        "Strengthened Cognizant's analytics offerings through scalable, resilient distributed data solutions."
      ],
      current: false
    }
  ];

  return (
    <section id="experience" className="section-padding">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Professional Experience</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Building high-performance systems and driving measurable business outcomes through innovative engineering solutions.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="card-gradient border border-border/50 smooth-transition hover:border-primary/30">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <CardTitle className="text-xl">{exp.title}</CardTitle>
                      {exp.current && (
                        <Badge variant="default" className="text-xs">
                          Current
                        </Badge>
                      )}
                    </div>
                    <h3 className="text-lg font-semibold text-primary">{exp.company}</h3>
                  </div>
                  <div className="flex flex-col md:items-end gap-2">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span className="text-sm">{exp.location}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {exp.achievements.map((achievement, achievementIndex) => (
                    <li key={achievementIndex} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground leading-relaxed">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;