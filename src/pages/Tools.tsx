import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Zap, Shield, Lock, Eye, Fingerprint, Globe } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Tools = () => {
  const navigate = useNavigate();

  const tools = [
  {
    icon: Zap,
    title: "Speed Test",
    description: "Test your internet connection speed",
    action: "Start Test",
    color: "from-accent to-primary",
  },
  {
    icon: Lock,
    title: "Password Strength",
    description: "Test the security of your passwords",
    action: "Test Password",
    color: "from-secondary to-primary",
  },
  {
    icon: Shield,
    title: "VPN Checker",
    description: "Verify if your VPN connection is working properly",
    action: "Check VPN",
    color: "from-primary to-accent",
  },
  {
    icon: Eye,
    title: "Tracker Detector",
    description: "Identify tracking scripts on websites",
    action: "Scan Website",
    color: "from-accent to-secondary",
  },
  {
    icon: Fingerprint,
    title: "Browser Fingerprint",
    description: "Check your browser's unique fingerprint",
    action: "View Fingerprint",
    color: "from-primary to-secondary",
  },
  {
    icon: Globe,
    title: "DNS Leak Test",
    description: "Ensure your DNS queries are not leaking",
    action: "Test DNS",
    color: "from-secondary to-accent",
  },
];


  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-muted/50 to-background">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Privacy Tools
              </h1>
              <p className="text-lg text-muted-foreground">
                Comprehensive suite of tools to analyze and protect your online privacy
              </p>
            </div>
          </div>
        </section>
        {/* Tools Grid */}
        <section className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tools.map((tool, index) => (
                <Card key={index} className="shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${tool.color} flex items-center justify-center mb-4`}>
                      <tool.icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle>{tool.title}</CardTitle>
                    <CardDescription>{tool.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                   <Button
  className="w-full"
  onClick={() => {
    if (tool.title === "Speed Test") {
      navigate("/SpeedTest");
    }
    if (tool.title === "Password Strength") {
      navigate("/PasswordStrength");
    }
    if (tool.title === "VPN Checker") {
      navigate("/VPNChecker");
    }
    if (tool.title === "DNS Leak Test") {
      navigate("/DNSLeakTest");
    }
    if (tool.title === "Tracker Detector") {
      navigate("/TrackerDetector");
    }
    if (tool.title === "Browser Fingerprint") {
      navigate("/BrowserFingerprint");
    }
    // ...add other navigation logic for other tool cards here
  }}
>
  {tool.action}
</Button>

                    
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        {/* Coming Soon Section */}
        <section className="py-16 bg-muted/30">
          <div className="container">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">More Tools Coming Soon</h2>
              <p className="text-muted-foreground mb-6">
                We're constantly developing new privacy tools to help you stay secure online.
                Check back regularly for updates!
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Tools;
