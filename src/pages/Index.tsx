import { Link } from "react-router-dom";
import { ArrowRight, Heart, MapPin, Star, Calendar, Users } from "lucide-react";
import Layout from "@/components/layout/Layout";
import CategoryCard from "@/components/ui/CategoryCard";
import VenueCard from "@/components/ui/VenueCard";
import BlogCard from "@/components/ui/BlogCard";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";

import heroImage from "@/assets/hero-beach-wedding.jpg";
import venueBeach from "@/assets/venue-beach.jpg";
import venueLuxury from "@/assets/venue-luxury-hotel.jpg";
import venueTraditional from "@/assets/venue-traditional-village.jpg";
import weddingDresses from "@/assets/wedding-dresses.jpg";
import weddingDecor from "@/assets/wedding-decor.jpg";
import weddingCatering from "@/assets/wedding-catering.jpg";
import weddingPlanners from "@/assets/wedding-planners.jpg";
import blogGuide from "@/assets/blog-wedding-guide.jpg";

const Index = () => {
  const venueCategories = [
    {
      title: "Beach Weddings",
      description: "Say 'I do' with your toes in the sand and the Aegean Sea as your backdrop",
      image: venueBeach,
      href: "/venues/beach",
      count: 15,
    },
    {
      title: "Luxury Hotel Venues",
      description: "5-star resorts and private villas for an opulent celebration",
      image: venueLuxury,
      href: "/venues/luxury-hotels",
      count: 12,
    },
    {
      title: "Traditional Villages",
      description: "Rustic chapels and charming stone houses in mountain villages",
      image: venueTraditional,
      href: "/venues/traditional",
      count: 18,
    },
  ];

  const serviceCategories = [
    {
      title: "Wedding Dresses",
      description: "Boutiques and ateliers with the perfect gown for your special day",
      image: weddingDresses,
      href: "/wedding-dresses",
      count: 10,
    },
    {
      title: "Decor & Rentals",
      description: "Wedding arches, chairs, lighting, and beautiful table setups",
      image: weddingDecor,
      href: "/decor-rentals",
      count: 8,
    },
    {
      title: "Catering",
      description: "Mediterranean cuisine and gourmet dining experiences",
      image: weddingCatering,
      href: "/catering",
      count: 14,
    },
    {
      title: "Wedding Planners",
      description: "Expert planners to bring your dream wedding to life",
      image: weddingPlanners,
      href: "/wedding-planners",
      count: 9,
    },
  ];

  const featuredVenues = [
    {
      id: "1",
      name: "Elounda Beach Luxury Resort",
      location: "Elounda",
      image: venueLuxury,
      category: "Luxury Hotel",
      capacity: "20-200 guests",
      rating: 4.9,
      description: "An iconic 5-star resort offering breathtaking sea views, private beaches, and world-class amenities for unforgettable weddings.",
      href: "/venues/luxury-hotels",
    },
    {
      id: "2",
      name: "Balos Beach",
      location: "Kissamos",
      image: venueBeach,
      category: "Beach",
      capacity: "30-150 guests",
      rating: 4.8,
      description: "One of the most beautiful beaches in the world, featuring turquoise lagoons and pink sand perfect for sunset ceremonies.",
      href: "/venues/beach",
    },
    {
      id: "3",
      name: "Archanes Village Chapel",
      location: "Archanes",
      image: venueTraditional,
      category: "Traditional",
      capacity: "20-80 guests",
      rating: 4.7,
      description: "A picturesque stone chapel surrounded by vineyards in an authentic Cretan village with incredible mountain views.",
      href: "/venues/traditional",
    },
  ];

  const blogPosts = [
    {
      title: "How to Legally Get Married in Greece: Complete Guide",
      excerpt: "Everything you need to know about paperwork, requirements, and timelines for your destination wedding in Crete.",
      image: blogGuide,
      date: "December 5, 2024",
      readTime: "8 min read",
      category: "Planning",
      href: "/blog",
    },
    {
      title: "Best Months to Get Married in Crete",
      excerpt: "Discover the ideal season for your Crete wedding based on weather, crowds, and pricing.",
      image: venueBeach,
      date: "November 28, 2024",
      readTime: "5 min read",
      category: "Tips",
      href: "/blog",
    },
    {
      title: "Top 10 Photo Spots for Weddings in Crete",
      excerpt: "Stunning locations that will make your wedding album absolutely breathtaking.",
      image: venueTraditional,
      date: "November 20, 2024",
      readTime: "6 min read",
      category: "Inspiration",
      href: "/blog",
    },
  ];

  const homeFaqs = [
    {
      question: "Why choose Crete for a destination wedding?",
      answer: "Crete offers the perfect blend of stunning Mediterranean landscapes, rich cultural heritage, world-class hospitality, and excellent value. From pristine beaches to charming mountain villages, you'll find venues that create unforgettable memories. Plus, Greece's favorable weather means reliable sunshine for outdoor celebrations.",
    },
    {
      question: "How far in advance should we book our Crete wedding?",
      answer: "We recommend booking your venue 12-18 months in advance, especially for popular summer dates (May-September). This gives you time to secure your preferred vendors and handle the necessary paperwork for a legal wedding in Greece.",
    },
    {
      question: "What is the average cost of a wedding in Crete?",
      answer: "Wedding costs in Crete vary widely based on your choices. An intimate beach ceremony might start around €5,000-€10,000, while a luxury resort wedding for 100+ guests can range from €20,000-€50,000+. Our vendor listings include pricing information to help you plan your budget.",
    },
    {
      question: "Can foreigners legally marry in Crete?",
      answer: "Yes! Greece welcomes destination weddings from international couples. You'll need specific documents including birth certificates, passports, and a Certificate of No Impediment. The process typically takes 1-2 weeks, and our planning guides walk you through every step.",
    },
  ];

  const stats = [
    { value: "200+", label: "Verified Venues" },
    { value: "50+", label: "Wedding Planners" },
    { value: "300", label: "Sunny Days/Year" },
    { value: "100%", label: "Romantic" },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Beautiful beach wedding ceremony in Crete at sunset"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/40 via-foreground/20 to-foreground/60" />
        </div>
        
        <div className="relative z-10 container-wedding text-center">
          <div className="max-w-4xl mx-auto animate-fade-in-up">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-background/20 backdrop-blur-sm rounded-full text-background/90 text-sm font-medium mb-6">
              <Heart className="w-4 h-4 fill-current" />
              Your Dream Wedding Awaits
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-semibold text-background leading-tight">
              Say "I Do" in <br />
              <span className="text-champagne">Beautiful Crete</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-background/90 max-w-2xl mx-auto leading-relaxed">
              Discover stunning venues, expert planners, and everything you need for your perfect Mediterranean destination wedding in Greece's largest island.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
              <Link
                to="/venues"
                className="inline-flex items-center gap-2 px-8 py-4 bg-champagne text-foreground rounded-full font-medium hover:bg-champagne/90 transition-all shadow-glow"
              >
                Explore Venues
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/wedding-planners"
                className="inline-flex items-center gap-2 px-8 py-4 bg-background/20 backdrop-blur-sm text-background border border-background/30 rounded-full font-medium hover:bg-background/30 transition-all"
              >
                Find a Planner
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-6 h-10 border-2 border-background/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-background/70 rounded-full" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-card border-b border-border/50">
        <div className="container-wedding">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-serif font-bold text-primary">{stat.value}</div>
                <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Venue Categories */}
      <section className="section-padding">
        <div className="container-wedding">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-foreground">
              Find Your Perfect Venue
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              From golden beaches to mountain chapels, Crete offers breathtaking settings for every wedding style
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {venueCategories.map((category) => (
              <CategoryCard key={category.href} {...category} />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/venues" className="btn-outline-romantic">
              View All Venues
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Venues */}
      <section className="section-padding bg-muted/30">
        <div className="container-wedding">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground">
                Featured Wedding Venues
              </h2>
              <p className="mt-2 text-muted-foreground">
                Hand-picked locations loved by couples from around the world
              </p>
            </div>
            <Link to="/venues" className="link-romantic font-medium">
              View all venues →
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredVenues.map((venue) => (
              <VenueCard key={venue.id} {...venue} />
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding">
        <div className="container-wedding">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-foreground">
              Everything You Need
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Comprehensive directories of trusted wedding vendors throughout Crete
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceCategories.map((category) => (
              <CategoryCard key={category.href} {...category} />
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="section-padding bg-secondary/30">
        <div className="container-wedding">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground">
                Planning Resources
              </h2>
              <p className="mt-2 text-muted-foreground">
                Expert guides and inspiration for your Crete wedding journey
              </p>
            </div>
            <Link to="/blog" className="link-romantic font-medium">
              Read all articles →
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post, index) => (
              <BlogCard key={index} {...post} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection
        title="Questions About Crete Weddings?"
        subtitle="Find answers to the most common questions from couples planning their destination wedding"
        faqs={homeFaqs}
      />

      {/* CTA Section */}
      <CTASection
        title="Start Planning Your Dream Wedding"
        description="Browse our curated collection of venues, vendors, and resources to bring your Crete wedding vision to life."
        primaryCTA={{ label: "Explore Venues", href: "/venues" }}
        secondaryCTA={{ label: "Find a Planner", href: "/wedding-planners" }}
        variant="romantic"
      />
    </Layout>
  );
};

export default Index;
