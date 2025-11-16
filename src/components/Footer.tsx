import { Link } from "react-router-dom";
import { Shield, Mail, Github, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="rounded-lg bg-gradient-to-br from-primary to-accent p-2">
                <Shield className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-lg font-bold">IP Address Tracker</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Your privacy matters. Analyze and protect your online presence with our comprehensive tools.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/tools" className="text-muted-foreground hover:text-primary transition-colors">
                  Privacy Tools
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-muted-foreground hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <div className="flex gap-3">
              <a
                href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <Mail className="h-4 w-4" />
              </a>
              <a
                href="https://github.com/jayanth18-coder/net-guard-tool"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href="https://x.com/?lang=en"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; 2025 IP Address Tracker. Built for educational purposes. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
