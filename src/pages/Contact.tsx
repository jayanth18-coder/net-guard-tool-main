import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageSquare, Github } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const SUBJECT_OPTIONS = [
  { value: "", label: "Select a subject" },
  { value: "Support", label: "Support" },
  { value: "Feedback", label: "Feedback" },
  { value: "Partnership", label: "Partnership" },
  { value: "Press", label: "Press" },
  { value: "Other", label: "Other" },
];

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "Mail Your Queries",
      link: "https://mail.google.com/mail/u/0/#inbox",
    },
    {
      icon: MessageSquare,
      title: "Community",
      content: "Join our Discord",
      link: "https://canary.discord.com/login",
    },
    {
      icon: Github,
      title: "GitHub",
      content: "View Source Code",
      link: "https://github.com/jayanth18-coder/net-guard-tool.git",
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
                Get in Touch
              </h1>
              <p className="text-lg text-muted-foreground">
                Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card className="shadow-lg">
                  <CardContent className="pt-6">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label htmlFor="name" className="text-sm font-medium">
                            Name
                          </label>
                          <Input
                            id="name"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder="Your name"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="email" className="text-sm font-medium">
                            Email
                          </label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="Enter Your Email"
                            required
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="subject" className="text-sm font-medium">
                          Subject
                        </label>
                        <select
                          id="subject"
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          required
                          className="block w-full rounded-lg border border-gray-200 px-3 py-2 text-gray-700 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/40 bg-white"
                        >
                          {SUBJECT_OPTIONS.map(option => (
                            <option key={option.value} value={option.value}>{option.label}</option>
                          ))}
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium">
                          Message
                        </label>
                        <Textarea
                          id="message"
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="Your message..."
                          rows={6}
                          required
                        />
                      </div>
                      <Button type="submit" className="w-full">
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Info */}
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="rounded-lg bg-gradient-to-br from-primary to-accent p-3">
                          <info.icon className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">{info.title}</h3>
                          <a
                            href={info.link}
                            className="text-sm text-muted-foreground hover:text-primary transition-colors"
                          >
                            {info.content}
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}

                <Card className="shadow-lg bg-gradient-to-br from-primary/10 to-accent/10">
                  <CardContent className="pt-6">
                    <h3 className="font-semibold mb-2">Response Time</h3>
                    <p className="text-sm text-muted-foreground">
                      We typically respond within 24-48 hours during business days.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
