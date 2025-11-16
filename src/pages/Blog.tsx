import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";
import React, { useEffect, useState } from "react";

// Replace with your NewsAPI key or use another service if you like
const NEWS_API_KEY = "1e02ea0cb738417cbeafb6408fa38b19";

function fetchRandomBlogs(setBlogs, setLoading) {
  setLoading(true);

  // Optionally randomize both the keyword and page, for best variety:
  const tags = [
    "technology",
    "network",
    "cybersecurity",
    "internet",
    "AI",
    "cloud",
    "software",
    "privacy",
    "security"
  ];
  const chosenTag = tags[Math.floor(Math.random() * tags.length)];
  const randomPage = Math.floor(Math.random() * 5) + 1;

  fetch(`https://newsapi.org/v2/everything?q=${chosenTag}&sortBy=publishedAt&language=en&pageSize=6&page=${randomPage}&apiKey=${NEWS_API_KEY}`)
    .then(r => r.json())
    .then(data => {
      setBlogs(data.articles || []);
      setLoading(false);
    })
    .catch(() => {
      setBlogs([]);
      setLoading(false);
    });
}

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRandomBlogs(setBlogs, setLoading);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-violet-50 via-indigo-50 to-white">
      <Header />

      <main className="flex-1 container mx-auto py-14">
        <section className="mb-8 text-center">
          <h1 className="text-4xl font-extrabold mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Privacy & Security Blog</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Fresh blog topics from around the web each time you visit!
          </p>
        </section>

        {loading ? (
          <div className="text-center text-lg text-primary">Loading blog posts...</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.length === 0 && (
              <div className="text-center col-span-full text-gray-500">
                No blogs found. Try refreshing again.
              </div>
            )}
            {blogs.map((blog, i) => (
              <div key={i} className="bg-white rounded-xl shadow-md border border-gray-100 p-6 flex flex-col justify-between min-h-[260px]">
                <div>
                  <div className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-primary/10 text-primary mb-3">
                    {blog.source?.name || "Blog"}
                  </div>
                  <h2 className="text-xl font-bold mb-1 text-gray-800">{blog.title}</h2>
                  <p className="text-muted-foreground mb-2">{blog.description}</p>
                </div>
                <div className="mt-2 flex items-center justify-between text-sm text-gray-500">
                  <span className="flex items-center gap-1">
                    <span>📅</span>{blog.publishedAt?.slice(0,10)}
                  </span>
                  <a
                    href={blog.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center font-semibold text-primary hover:underline transition group"
                  >
                    Read More
                    <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
