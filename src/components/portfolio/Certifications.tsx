import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Award, ExternalLink } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      title: "AWS Certified Professional - DevOps Engineer",
      issuer: "Amazon Web Services",
      level: "Professional",
      color: "text-orange-400"
    },
    {
      title: "AWS Certified Associate - Developer",
      issuer: "Amazon Web Services", 
      level: "Associate",
      color: "text-blue-400"
    },
    {
      title: "AWS Certified Data Engineer – Associate",
      issuer: "Amazon Web Services",
      level: "Associate", 
      color: "text-green-400"
    }
  ];

  return (
    <section id="certifications" className="section-padding">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Certifications</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Professional cloud certifications demonstrating expertise in AWS technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {certifications.map((cert, index) => (
            <Card 
              key={index}
              className="card-gradient border border-border/50 smooth-transition hover:border-primary/30 hover:scale-105"
            >
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Award className={`h-8 w-8 ${cert.color}`} />
                  </div>
                </div>
                <CardTitle className="text-lg leading-tight">
                  {cert.title}
                </CardTitle>
                <p className="text-muted-foreground text-sm">{cert.issuer}</p>
              </CardHeader>
              <CardContent className="text-center">
                <Badge variant="outline" className="text-xs">
                  {cert.level}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Card className="card-gradient border border-border/50 p-8 max-w-2xl mx-auto">
            <div className="space-y-4">
              <Award className="h-16 w-16 text-primary mx-auto" />
              <h3 className="text-2xl font-semibold">Verify Certifications</h3>
              <p className="text-muted-foreground">
                View and verify all my professional certifications on Credly.
              </p>
              <Button size="lg" className="glow-effect" asChild>
                <a 
                  href="https://www.credly.com/users/bhavani-shanker-anumalla/badges#credly" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="mr-2 h-5 w-5" />
                  View on Credly
                </a>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Certifications;