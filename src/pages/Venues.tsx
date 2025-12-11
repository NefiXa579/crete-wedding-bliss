import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import CategoryCard from "@/components/ui/CategoryCard";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";
import { MapPin, Sun, Heart, Camera } from "lucide-react";

import venueBeach from "@/assets/venue-beach.jpg";
import venueLuxury from "@/assets/venue-luxury-hotel.jpg";
import venueTraditional from "@/assets/venue-traditional-village.jpg";

const Venues = () => {
  const venueCategories = [
    {
      title: "Beach Wedding Locations",
      description: "Sandy beaches, private coves, and stunning sunset spots along Crete's pristine coastline",
      image: venueBeach,
      href: "/venues/beach",
      count: 15,
    },
    {
      title: "Luxury Hotel Venues",
      description: "5-star resorts, private villas, and high-end spaces with world-class amenities",
      image: venueLuxury,
      href: "/venues/luxury-hotels",
      count: 12,
    },
    {
      title: "Traditional Village Venues",
      description: "Rustic stone chapels, charming courtyards, and authentic mountain village settings",
      image: venueTraditional,
      href: "/venues/traditional",
      count: 18,
    },
  ];

  const highlights = [
    {
      icon: Sun,
      title: "300+ Sunny Days",
      description: "Crete enjoys one of the best climates in Europe for outdoor weddings",
    },
    {
      icon: MapPin,
      title: "Diverse Locations",
      description: "From pristine beaches to mountain villages, find your perfect backdrop",
    },
    {
      icon: Heart,
      title: "Romantic Settings",
      description: "Every venue captures the magic of Mediterranean romance",
    },
    {
      icon: Camera,
      title: "Photo Perfect",
      description: "Breathtaking scenery for unforgettable wedding photography",
    },
  ];

  const venueFaqs = [
    {
      question: "What types of wedding venues are available in Crete?",
      answer: "Crete offers an incredible variety of wedding venues including pristine beach locations along the northern and southern coasts, luxury 5-star resorts with panoramic sea views, traditional village chapels and stone houses in the mountains, private villas with pools and gardens, historic Venetian buildings, and olive grove estates. Each setting offers a unique atmosphere for your celebration.",
    },
    {
      question: "What is the best region in Crete for beach weddings?",
      answer: "The most popular regions for beach weddings are Chania (featuring Balos and Elafonisi beaches), Rethymno (known for romantic coves), and Agios Nikolaos/Elounda (offering upscale beachfront venues). The south coast offers more secluded options like Preveli Beach with its palm forest backdrop.",
    },
    {
      question: "Can we have both ceremony and reception at the same venue?",
      answer: "Yes, many venues in Crete offer complete wedding packages that include both ceremony and reception spaces. Luxury resorts and private villas are particularly well-suited for hosting your entire celebration in one location, making logistics easier for you and your guests.",
    },
    {
      question: "Are there venues that accommodate small elopements?",
      answer: "Absolutely! Crete is perfect for intimate ceremonies. Many venues cater specifically to elopements and micro-weddings of 2-20 guests. Private beach coves, boutique hotels, and small village chapels offer romantic settings for couples seeking an intimate celebration.",
    },
    {
      question: "What amenities do luxury hotel venues typically offer?",
      answer: "Luxury hotel venues in Crete typically include on-site accommodation for guests, professional catering and bar services, wedding coordination staff, spa facilities for pre-wedding pampering, multiple ceremony and reception spaces, audio-visual equipment, and often exclusive use options for private celebrations.",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-b from-secondary/50 to-background">
        <div className="container-wedding">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              45+ Stunning Venues
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-foreground">
              Wedding Venues in Crete
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover the perfect setting for your destination wedding, from sun-kissed beaches to charming traditional villages in the heart of Greece.
            </p>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-12 border-b border-border/50">
        <div className="container-wedding">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {highlights.map((item, index) => (
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

      {/* Venue Categories */}
      <section className="section-padding">
        <div className="container-wedding">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground">
              Explore by Venue Type
            </h2>
            <p className="mt-4 text-muted-foreground">
              Each category offers unique experiences tailored to different wedding styles and visions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {venueCategories.map((category) => (
              <CategoryCard key={category.href} {...category} />
            ))}
          </div>
        </div>
      </section>

      {/* SEO Content */}
      <section className="section-padding bg-muted/30">
        <div className="container-wedding">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground text-center mb-8">
              Why Choose Crete for Your Wedding?
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p>
                Crete, the largest of the Greek islands, has emerged as one of the most sought-after 
                destination wedding locations in the Mediterranean. With its unique blend of ancient history, 
                stunning natural beauty, and legendary Greek hospitality, the island offers an unparalleled 
                setting for couples seeking a memorable celebration.
              </p>
              <p>
                The island boasts over 1,000 kilometers of coastline featuring some of Europe's most beautiful 
                beaches. From the famous pink sands of Elafonisi to the turquoise lagoon of Balos, beach wedding 
                venues in Crete provide breathtaking backdrops for sunset ceremonies. The northern coast offers 
                sophisticated resort options, while the south remains more secluded and untouched.
              </p>
              <p>
                Beyond its beaches, Crete's mountainous interior hides charming traditional villages where 
                time seems to stand still. Venues in areas like Archanes, Vamos, and the Lassithi Plateau 
                offer authentic Cretan experiences with stone-built architecture, olive groves, and vineyard views. 
                These settings are perfect for couples seeking a rustic, romantic atmosphere infused with local culture.
              </p>
              <p>
                For those desiring luxury and convenience, Crete's collection of 5-star resorts and boutique 
                hotels rival the best in the world. Properties in Elounda, Chania's old harbor, and along the 
                northern coast offer exclusive wedding packages with professional coordination, gourmet catering, 
                and spa services to pamper you and your guests.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection
        title="Venue Questions Answered"
        subtitle="Common questions about finding and booking wedding venues in Crete"
        faqs={venueFaqs}
      />

      {/* CTA */}
      <CTASection
        title="Need Help Choosing a Venue?"
        description="Our directory of expert wedding planners can help you find and book the perfect location for your celebration."
        primaryCTA={{ label: "Find a Planner", href: "/wedding-planners" }}
        secondaryCTA={{ label: "Browse All Services", href: "/wedding-dresses" }}
      />
    </Layout>
  );
};

export default Venues;
