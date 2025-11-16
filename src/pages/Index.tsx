import Header from "@/components/Header";
import Footer from "@/components/Footer";
import IPInfoCard from "@/components/IPInfoCard";
import PrivacyScore from "@/components/PrivacyScore";
import IPTracker from "@/components/IPTracker";
import { Button } from "@/components/ui/button";
import { Shield, Eye, Lock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-privacy.jpg";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src={heroImage}
              alt="Privacy and Security"
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-background" />
          </div>
          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <Shield className="h-4 w-4" />
                Privacy Analysis Tool
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Discover Your Digital Footprint
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Analyze your online privacy in real-time. See what information websites can detect about you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link to="/tools">
                    Explore Privacy Tools
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/about">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Information Section */}
        <section className="py-16 bg-muted/30">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Your Current Information</h2>
              <p className="text-muted-foreground">
                This is what websites can detect about you right now
              </p>
            </div>
            <div className="max-w-5xl mx-auto space-y-8">
              {/* Show user's current IP info first */}
              <IPInfoCard />
              
              {/* Two-column layout: IP Tracker and Privacy Score */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <IPTracker />
                <PrivacyScore />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Why Privacy Matters</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Understanding your digital footprint is the first step to protecting your online privacy
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center p-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <Eye className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Know What's Visible</h3>
                <p className="text-muted-foreground">
                  Understand what information websites and trackers can see about you
                </p>
              </div>
              <div className="text-center p-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-secondary to-primary flex items-center justify-center">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Protect Your Identity</h3>
                <p className="text-muted-foreground">
                  Learn how to minimize your digital footprint and stay anonymous online
                </p>
              </div>
              <div className="text-center p-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-accent to-secondary flex items-center justify-center">
                  <Lock className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Stay Secure</h3>
                <p className="text-muted-foreground">
                  Get recommendations to improve your online security and privacy
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Take Control?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Explore our suite of privacy tools and learn how to protect yourself online
              </p>
              <Button size="lg" asChild>
                <Link to="/tools">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
