import { Github, Mail, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card/50">
      <div className="container-max">
        <div className="py-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <div className="text-xl font-bold text-gradient mb-2">
                Bhavani Shanker Anumalla
              </div>
              <p className="text-muted-foreground">
                Software Engineer & Cloud-Native Architect
              </p>
            </div>

            <div className="flex items-center gap-6">
              <a
                href="mailto:bhavanishanker.anumalla@example.com"
                className="p-3 bg-card rounded-lg border border-border/50 smooth-transition hover:border-primary/30 hover:scale-110"
                aria-label="Email"
              >
                <Mail className="h-5 w-5 text-primary" />
              </a>
              <a
                href="https://github.com/bhavanishankera7"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-card rounded-lg border border-border/50 smooth-transition hover:border-primary/30 hover:scale-110"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5 text-primary" />
              </a>
            </div>
          </div>
        </div>

        <div className="py-6 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>
              © {new Date().getFullYear()} Bhavani Shanker Anumalla. All rights reserved.
            </p>
            <p className="flex items-center gap-1">
              Built with <Heart className="h-4 w-4 text-red-500" /> using React & TypeScript
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;