import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, User } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="section-padding bg-card/30">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Passionate about building robust, maintainable systems that drive measurable business outcomes.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <User className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Professional Background</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Bhavani Shanker Anumalla is a Software Engineer with 5+ years of experience 
                  building scalable enterprise systems and distributed microservices. He currently 
                  serves as Software Engineer II at Patagonia Health, where he leads high-impact 
                  initiatives like 50TB+ data migrations and CI/CD optimizations. Bhavani is 
                  passionate about building robust, maintainable systems that drive measurable 
                  business outcomes.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-accent/10 rounded-lg">
                <GraduationCap className="h-6 w-6 text-accent" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-6">Education</h3>
                <div className="space-y-6">
                  <Card className="card-gradient border border-border/50 smooth-transition hover:border-primary/30">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold">M.S. in Computer Science</h4>
                        <span className="text-sm text-muted-foreground">May 2024</span>
                      </div>
                      <p className="text-muted-foreground">University of the Cumberlands</p>
                    </CardContent>
                  </Card>

                  <Card className="card-gradient border border-border/50 smooth-transition hover:border-primary/30">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold">B.Tech in Information Technology</h4>
                        <span className="text-sm text-muted-foreground">June 2016</span>
                      </div>
                      <p className="text-muted-foreground">JB Institute of Engineering and Technology</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;