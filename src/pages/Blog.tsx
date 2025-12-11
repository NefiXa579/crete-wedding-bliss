import Layout from "@/components/layout/Layout";
import BlogCard from "@/components/ui/BlogCard";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";
import { BookOpen, Lightbulb, Calculator, Camera } from "lucide-react";

import blogGuide from "@/assets/blog-wedding-guide.jpg";
import venueBeach from "@/assets/venue-beach.jpg";
import venueLuxury from "@/assets/venue-luxury-hotel.jpg";
import venueTraditional from "@/assets/venue-traditional-village.jpg";
import weddingCatering from "@/assets/wedding-catering.jpg";
import weddingDecor from "@/assets/wedding-decor.jpg";

const Blog = () => {
  const articles = [
    {
      title: "How to Legally Get Married in Greece: Step-by-Step Guide",
      excerpt: "Everything international couples need to know about paperwork, requirements, translations, and timelines for a legal wedding in Crete.",
      image: blogGuide,
      date: "December 5, 2024",
      readTime: "10 min read",
      category: "Legal Guide",
      href: "/blog",
    },
    {
      title: "Best Months to Get Married in Crete",
      excerpt: "Discover the ideal wedding season based on weather patterns, tourist crowds, pricing, and the magical Cretan light photographers love.",
      image: venueBeach,
      date: "November 28, 2024",
      readTime: "6 min read",
      category: "Planning Tips",
      href: "/blog",
    },
    {
      title: "Top 10 Photo Spots for Weddings in Crete",
      excerpt: "From the pink sands of Elafonisi to the Venetian harbor of Chania, discover locations that will make your wedding album unforgettable.",
      image: venueTraditional,
      date: "November 20, 2024",
      readTime: "8 min read",
      category: "Inspiration",
      href: "/blog",
    },
    {
      title: "How Much Does a Wedding in Crete Cost? Complete Budget Guide",
      excerpt: "Detailed breakdown of all wedding costs including venues, catering, photography, and more. Real numbers from real Crete weddings.",
      image: weddingCatering,
      date: "November 15, 2024",
      readTime: "12 min read",
      category: "Budget",
      href: "/blog",
    },
    {
      title: "Beach vs. Village Wedding: Which is Right for You?",
      excerpt: "Compare the pros and cons of Crete's most popular wedding settings to find the perfect match for your celebration style.",
      image: venueLuxury,
      date: "November 10, 2024",
      readTime: "7 min read",
      category: "Venues",
      href: "/blog",
    },
    {
      title: "Traditional Cretan Wedding Customs and How to Include Them",
      excerpt: "Discover beautiful local traditions like the Stefana crowns and Kalamatianos dance that can add authentic touches to your celebration.",
      image: venueTraditional,
      date: "November 5, 2024",
      readTime: "6 min read",
      category: "Culture",
      href: "/blog",
    },
    {
      title: "Creating the Perfect Wedding Menu: Cretan Cuisine Guide",
      excerpt: "From fresh seafood to local cheeses and wines, learn how to design a menu that showcases the best of Crete's culinary heritage.",
      image: weddingCatering,
      date: "October 30, 2024",
      readTime: "8 min read",
      category: "Catering",
      href: "/blog",
    },
    {
      title: "What to Wear: Wedding Attire Guide for Crete's Climate",
      excerpt: "Practical advice on fabrics, styles, and accessories that work beautifully in the Mediterranean heat while keeping you comfortable.",
      image: weddingDecor,
      date: "October 25, 2024",
      readTime: "5 min read",
      category: "Style",
      href: "/blog",
    },
    {
      title: "Planning a Destination Wedding: Timeline and Checklist",
      excerpt: "Month-by-month guide for couples planning their Crete wedding from abroad, including what to book when and travel tips.",
      image: blogGuide,
      date: "October 20, 2024",
      readTime: "10 min read",
      category: "Planning",
      href: "/blog",
    },
  ];

  const categories = [
    { icon: BookOpen, title: "Planning Guides", description: "Step-by-step resources" },
    { icon: Lightbulb, title: "Inspiration", description: "Ideas and real weddings" },
    { icon: Calculator, title: "Budget Tips", description: "Cost-saving advice" },
    { icon: Camera, title: "Photo Locations", description: "Best spots in Crete" },
  ];

  const faqs = [
    {
      question: "What documents do I need to get married in Greece?",
      answer: "International couples typically need: valid passports, birth certificates (translated and apostilled), Certificate of No Impediment from your home country, proof of single status or divorce/death certificates if applicable, and passport photos. Requirements vary by nationality—our detailed guides cover specific country requirements.",
    },
    {
      question: "How long does the paperwork process take?",
      answer: "Plan for 4-8 weeks minimum. Documents must be obtained from your home country, officially translated into Greek, and often apostilled. In Greece, there's a publication period of about 8 days before the ceremony can take place. Starting early is essential.",
    },
    {
      question: "What is the best month for a wedding in Crete?",
      answer: "May, June, September, and early October offer ideal conditions: warm weather (25-30°C), less humidity than peak summer, fewer tourists, and often better vendor availability and pricing. July-August are hottest and most crowded but still popular for their guaranteed sunshine.",
    },
    {
      question: "Can we have a legal ceremony in any venue?",
      answer: "Civil ceremonies must be performed by a mayor or authorized official, typically at town halls. However, many beautiful venues can host your reception and a symbolic ceremony. Some couples do the legal paperwork at home and have a beautiful celebration ceremony in Crete.",
    },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-20 md:py-32 bg-gradient-to-b from-secondary/50 to-background">
        <div className="container-wedding">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Wedding Planning Resources
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-foreground">
              Crete Wedding Blog
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              Expert guides, practical tips, and inspiration to help you plan the perfect destination wedding in beautiful Crete, Greece.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 border-b border-border/50">
        <div className="container-wedding">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((item, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-3">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="section-padding">
        <div className="container-wedding">
          <div className="mb-10">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground">
              Latest Articles
            </h2>
            <p className="mt-2 text-muted-foreground">
              In-depth guides and inspiration for every stage of your wedding planning
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, index) => (
              <BlogCard key={index} {...article} />
            ))}
          </div>
        </div>
      </section>

      <FAQSection
        title="Quick Answers"
        subtitle="Common questions from couples planning their Crete destination wedding"
        faqs={faqs}
      />

      <CTASection
        title="Start Your Planning Journey"
        description="Explore our venue guides and vendor directories to bring your Crete wedding vision to life."
        primaryCTA={{ label: "Explore Venues", href: "/venues" }}
        secondaryCTA={{ label: "Find a Planner", href: "/wedding-planners" }}
        variant="romantic"
      />
    </Layout>
  );
};

export default Blog;
