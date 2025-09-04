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
                <h3 className="text-xl font-semibold mb-4">Professional Summary</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I am a results-driven software development engineer with 4+ years of experience designing distributed systems, 
                  building high-performance query engines, and delivering intuitive data visualization platforms. My expertise spans 
                  Java, Scala, Python, React, and Apache Spark, with proven success in reducing query latency by 60%+, scaling systems 
                  to millions of data points, and sustaining 99.9%+ uptime. I thrive in fast-paced product environments, leveraging 
                  AI-assisted development to cut delivery timelines by over 40% while maintaining enterprise-grade quality. Recognized 
                  for combining performance engineering with human-centered design, I create solutions that drive adoption, improve 
                  accessibility, and empower thousands of daily users. My goal is to contribute to product growth at scale by aligning 
                  deep technical innovation with measurable business outcomes.
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
                        <h4 className="font-semibold">M.S. Information Technology</h4>
                        <span className="text-sm text-muted-foreground">May 2024</span>
                      </div>
                      <p className="text-muted-foreground">University of the Cumberlands</p>
                      <p className="text-xs text-muted-foreground mt-1">Williamsburg, KY</p>
                      <p className="text-xs text-muted-foreground mt-1">
                        Relevant Coursework: Distributed Systems, Algorithms & Data Structures, Human-Computer Interaction, 
                        Query Optimization, Performance Engineering
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="card-gradient border border-border/50 smooth-transition hover:border-primary/30">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold">B.Tech. Information Technology</h4>
                        <span className="text-sm text-muted-foreground">May 2018</span>
                      </div>
                      <p className="text-muted-foreground">Jawaharlal Nehru Technological University</p>
                      <p className="text-xs text-muted-foreground mt-1">Telangana, IN</p>
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