import { useParams, Link, Navigate } from "react-router-dom";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { blogPosts } from "@/data/blogPosts";
import { Button } from "@/components/ui/button";
import CTASection from "@/components/CTASection";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", { 
      year: "numeric", 
      month: "long", 
      day: "numeric" 
    });
  };

  // Convert markdown-style content to JSX
  const renderContent = (content: string) => {
    const lines = content.trim().split("\n");
    const elements: JSX.Element[] = [];
    let currentList: string[] = [];
    let key = 0;

    const flushList = () => {
      if (currentList.length > 0) {
        elements.push(
          <ul key={`list-${key++}`} className="space-y-2 mb-6 ml-6">
            {currentList.map((item, i) => (
              <li key={i} className="list-disc text-foreground/90">{item}</li>
            ))}
          </ul>
        );
        currentList = [];
      }
    };

    lines.forEach((line, index) => {
      if (line.startsWith("## ")) {
        flushList();
        elements.push(
          <h2 key={`h2-${key++}`} className="font-playfair text-2xl md:text-3xl font-semibold text-foreground mt-8 mb-4">
            {line.replace("## ", "")}
          </h2>
        );
      } else if (line.startsWith("- ")) {
        currentList.push(line.replace("- ", ""));
      } else if (line.trim() === "") {
        flushList();
      } else if (line.trim()) {
        flushList();
        elements.push(
          <p key={`p-${key++}`} className="font-poppins text-foreground/90 leading-relaxed mb-4">
            {line}
          </p>
        );
      }
    });

    flushList();
    return elements;
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <article className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-3xl">
          {/* Back Button */}
          <Link to="/blog" className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors mb-8 font-poppins">
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          {/* Post Header */}
          <div className="mb-8">
            <div className="inline-block bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-poppins font-medium mb-4">
              {post.category}
            </div>
            <h1 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted-foreground font-poppins">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <time dateTime={post.date}>{formatDate(post.date)}</time>
              </div>
              <span>•</span>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>

          {/* Post Content */}
          <div className="prose prose-lg max-w-none">
            {renderContent(post.content)}
          </div>
        </div>
      </article>

      {/* CTA Section */}
      <CTASection />

      <Footer />
    </div>
  );
};

export default BlogPost;
