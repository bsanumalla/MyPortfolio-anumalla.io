import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Software Engineer II",
      company: "Patagonia Health",
      period: "2022–Present",
      location: "Wichita Falls, TX",
      achievements: [
        "Architected Java-based microservices handling 10M+ daily API requests",
        "Led 50TB+ data migration from SQL to NoSQL",
        "Built CI/CD pipelines, reducing deployment time by 70%"
      ],
      current: true
    },
    {
      title: "Software Developer",
      company: "Wipro",
      period: "2019–2022",
      location: "Remote",
      achievements: [
        "Built event-driven microservices using Kafka/RabbitMQ",
        "Improved UX by 35% with React.js & Redux redesign",
        "Implemented scalable cloud solutions on AWS"
      ],
      current: false
    },
    {
      title: "Software Engineer",
      company: "Cognizant Technologies",
      period: "2016–2019",
      location: "India",
      achievements: [
        "Migrated legacy monoliths to Dockerized microservices",
        "Instituted TDD and optimized high-throughput DB performance",
        "Collaborated with cross-functional teams on enterprise solutions"
      ],
      current: false
    }
  ];

  return (
    <section id="experience" className="section-padding">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Experience</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A journey through building scalable systems and leading technical initiatives.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background hidden md:block"></div>
                
                <div className="md:ml-20">
                  <Card className={`card-gradient border smooth-transition hover:border-primary/30 ${exp.current ? 'border-primary/50 glow-effect' : 'border-border/50'}`}>
                    <CardContent className="p-8">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-semibold mb-1">{exp.title}</h3>
                          <h4 className="text-xl text-primary font-medium">{exp.company}</h4>
                        </div>
                        {exp.current && (
                          <Badge variant="secondary" className="self-start lg:self-center mt-2 lg:mt-0">
                            Current
                          </Badge>
                        )}
                      </div>

                      <div className="flex flex-col sm:flex-row gap-4 mb-6 text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>

                      <ul className="space-y-3">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-muted-foreground">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;