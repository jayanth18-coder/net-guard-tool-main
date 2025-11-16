import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Shield } from "lucide-react";

const About = () => (
  <div className="min-h-screen flex flex-col bg-gradient-to-br from-violet-50 via-indigo-50 to-white">
    <Header />

    <main className="flex-1">
      {/* Header Section */}
      <section className="py-20">
        <div className="container mx-auto flex flex-col items-center justify-center">
          {/* Icon & Title */}
          <div className="mb-4">
            <div className="bg-gradient-to-br from-primary to-accent rounded-full w-16 h-16 flex items-center justify-center shadow-lg">
              <Shield className="h-8 w-8 text-white" />
            </div>
          </div>
          <h1 className="text-5xl font-extrabold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2 text-center">
            About IP Address Tracker
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mt-3 text-center max-w-xl font-medium">
            Your trusted companion for online privacy and security analysis
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="relative py-10">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center gap-14">
          {/* Left: mission card */}
          <div className="max-w-xl w-full bg-white/90 rounded-2xl shadow-xl border border-primary/10 p-8">
            <h2 className="text-3xl font-bold mb-6 text-primary">Our Mission</h2>
            <p className="text-md text-gray-700 mb-5 leading-relaxed">
              IP Address Tracker was created as an educational project to help users understand their online privacy footprint.
              In today's digital age, it's crucial to know what information you're sharing when you browse the internet.
            </p>
            <ul className="pl-5 mb-5 space-y-3 text-gray-600 list-disc">
              <li>
                <span className="font-semibold text-primary">Instant insights</span> into your IP address, location, ISP, and browser details
              </li>
              <li>
                <span className="font-semibold text-accent">Make informed decisions</span> about your online privacy and security
              </li>
              <li>
                <span className="font-semibold text-secondary">Tools for everyone</span> — because privacy is a fundamental right
              </li>
            </ul>
            <p className="text-md text-gray-700">
              We believe everyone should have access to clear, actionable privacy information so they can protect their digital identity with confidence.
            </p>
          </div>
          {/* Right: values */}
          <div className="max-w-sm w-full bg-gradient-to-br from-primary/10 via-accent/5 to-background/50 rounded-2xl shadow-md border p-6 flex flex-col items-center">
            <h3 className="text-xl font-bold mb-3 text-center text-primary/70">
              Core Values
            </h3>
            <ul className="space-y-3 text-md text-gray-700">
              <li>
                <span className="font-semibold text-primary">Transparency</span> – Our algorithms and privacy tools are open and honest
              </li>
              <li>
                <span className="font-semibold text-secondary">Education</span> – Empower users to learn, act, and stay safe online
              </li>
              <li>
                <span className="font-semibold text-accent">Accessibility</span> – Our platform is free for all, always
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10">
        <div className="container mx-auto text-center">
          <h3 className="text-xl font-semibold mb-3 text-primary">Want to see your privacy footprint?</h3>
          <a
            href="/tools"
            className="inline-block bg-primary px-6 py-3 rounded-full font-bold text-white shadow-lg transition hover:scale-105 hover:bg-accent"
          >
            Explore Privacy Tools
          </a>
        </div>
      </section>
    </main>

    <Footer />
  </div>
);

export default About;
