import Layout from "@/components/layout/Layout";
import VenueCard from "@/components/ui/VenueCard";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";
import { Waves, Sunset, Camera, Users } from "lucide-react";

import venueBeach from "@/assets/venue-beach.jpg";
import heroBeach from "@/assets/hero-beach-wedding.jpg";

const BeachVenues = () => {
  const venues = [
    {
      id: "1",
      name: "Balos Beach",
      location: "Kissamos, Chania",
      image: venueBeach,
      category: "Beach",
      capacity: "30-150 guests",
      rating: 4.9,
      description: "One of the world's most beautiful beaches featuring a stunning turquoise lagoon and exotic pink sand. Perfect for magical sunset ceremonies.",
      href: "/venues/beach",
    },
    {
      id: "2",
      name: "Elafonisi Beach",
      location: "Southwest Crete",
      image: heroBeach,
      category: "Beach",
      capacity: "20-100 guests",
      rating: 4.9,
      description: "Famous for its pink-tinged sand and crystal-clear shallow waters. A protected natural reserve offering an otherworldly wedding backdrop.",
      href: "/venues/beach",
    },
    {
      id: "3",
      name: "Falassarna Beach",
      location: "Kissamos, Chania",
      image: venueBeach,
      category: "Beach",
      capacity: "40-200 guests",
      rating: 4.8,
      description: "Award-winning beach known for spectacular sunsets. Wide sandy shores provide ample space for large celebrations.",
      href: "/venues/beach",
    },
    {
      id: "4",
      name: "Preveli Beach",
      location: "Rethymno",
      image: heroBeach,
      category: "Beach",
      capacity: "20-80 guests",
      rating: 4.8,
      description: "Unique setting where a river meets the sea, surrounded by palm trees and cliffs. Ideal for intimate, adventurous couples.",
      href: "/venues/beach",
    },
    {
      id: "5",
      name: "Marathi Beach",
      location: "Chania",
      image: venueBeach,
      category: "Beach",
      capacity: "30-120 guests",
      rating: 4.7,
      description: "Sheltered bay with calm, shallow waters and nearby tavernas. Excellent for families and guests of all ages.",
      href: "/venues/beach",
    },
    {
      id: "6",
      name: "Stavros Beach",
      location: "Akrotiri, Chania",
      image: heroBeach,
      category: "Beach",
      capacity: "25-100 guests",
      rating: 4.7,
      description: "Made famous by the film 'Zorba the Greek'. A scenic bay surrounded by mountains perfect for intimate ceremonies.",
      href: "/venues/beach",
    },
    {
      id: "7",
      name: "Vai Beach",
      location: "Sitia, Lasithi",
      image: venueBeach,
      category: "Beach",
      capacity: "30-150 guests",
      rating: 4.6,
      description: "Home to Europe's largest natural palm forest. An exotic, unique setting that feels truly tropical.",
      href: "/venues/beach",
    },
    {
      id: "8",
      name: "Agios Pavlos Beach",
      location: "Rethymno",
      image: heroBeach,
      category: "Beach",
      capacity: "15-60 guests",
      rating: 4.7,
      description: "Secluded crescent-shaped beach accessible by foot. Perfect for couples seeking privacy and natural beauty.",
      href: "/venues/beach",
    },
  ];

  const highlights = [
    { icon: Waves, title: "Crystal Waters", description: "The clearest Mediterranean waters" },
    { icon: Sunset, title: "Golden Sunsets", description: "Legendary west-facing sunset views" },
    { icon: Camera, title: "Photo Perfect", description: "Stunning natural backdrops" },
    { icon: Users, title: "Flexible Capacity", description: "From elopements to 200+ guests" },
  ];

  const faqs = [
    {
      question: "Do we need permits for a beach wedding in Crete?",
      answer: "Yes, beach weddings in Crete typically require permits from local authorities. The requirements vary depending on the specific beach and whether it's public or private. Most wedding planners handle permit applications as part of their services. Popular beaches like Balos and Elafonisi have specific regulations due to their protected status.",
    },
    {
      question: "What time of year is best for beach weddings in Crete?",
      answer: "The ideal months for beach weddings are May-June and September-October. These periods offer warm weather (25-30°C), calm seas, and fewer tourists than peak summer. July-August can be very hot and crowded, though early morning or sunset ceremonies are still beautiful.",
    },
    {
      question: "Can we have music and dancing on the beach?",
      answer: "This depends on the beach location and local regulations. Some beaches allow amplified music until certain hours, while others restrict it due to environmental protections. Private beach venues at resorts typically have more flexibility. Your wedding planner can advise on specific venue policies.",
    },
    {
      question: "What happens if the weather is bad on our wedding day?",
      answer: "Crete's weather is generally reliable during wedding season, but it's wise to have a backup plan. Many beach venues have nearby indoor options or covered terraces. Wedding insurance can also cover weather-related changes. Most couples opt for a 'Plan B' venue as part of their planning.",
    },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src={venueBeach} alt="Beach wedding in Crete" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 to-foreground/40" />
        </div>
        <div className="container-wedding relative z-10">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-1.5 bg-champagne/90 text-foreground rounded-full text-sm font-medium mb-4">
              15 Beach Locations
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-background">
              Beach Wedding <br />Locations in Crete
            </h1>
            <p className="mt-6 text-lg text-background/90 max-w-xl">
              Say "I do" with the Aegean Sea as your witness. Discover Crete's most stunning beaches for unforgettable sunset ceremonies.
            </p>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-12 bg-card border-b border-border/50">
        <div className="container-wedding">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary mb-2">
                  <item.icon className="w-5 h-5" />
                </div>
                <h3 className="font-medium text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Venue Grid */}
      <section className="section-padding">
        <div className="container-wedding">
          <div className="mb-10">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground">
              Beach Wedding Venues
            </h2>
            <p className="mt-2 text-muted-foreground">
              From famous pink-sand beaches to secluded coves, find your perfect seaside setting
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {venues.map((venue) => (
              <VenueCard key={venue.id} {...venue} />
            ))}
          </div>
        </div>
      </section>

      {/* SEO Content */}
      <section className="section-padding bg-muted/30">
        <div className="container-wedding">
          <div className="max-w-4xl mx-auto prose prose-lg text-muted-foreground">
            <h2 className="text-3xl font-serif font-semibold text-foreground text-center mb-8">
              Beach Weddings in Crete: The Ultimate Guide
            </h2>
            <p>
              Crete's coastline stretches over 1,000 kilometers, offering some of the most spectacular beach 
              wedding venues in the Mediterranean. From world-renowned destinations like Balos and Elafonisi 
              to hidden gems known only to locals, the island provides endless possibilities for couples 
              dreaming of a seaside celebration.
            </p>
            <p>
              The northern coast of Crete, from Chania to Agios Nikolaos, features organized beaches with 
              excellent infrastructure and easy access. These locations are ideal for larger weddings where 
              guest comfort is a priority. Many beaches here partner with nearby hotels and resorts to offer 
              comprehensive wedding packages.
            </p>
            <p>
              For couples seeking more adventurous settings, the southern coast remains largely unspoiled. 
              Beaches like Preveli, with its river and palm forest, or the secluded coves near Loutro offer 
              dramatic landscapes and privacy. These venues may require more planning but reward couples with 
              truly unique experiences.
            </p>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} />

      <CTASection
        title="Plan Your Beach Wedding"
        description="Connect with experienced planners who specialize in beach ceremonies throughout Crete."
        primaryCTA={{ label: "Find Beach Wedding Planners", href: "/wedding-planners" }}
        secondaryCTA={{ label: "Explore Luxury Venues", href: "/venues/luxury-hotels" }}
        variant="romantic"
      />
    </Layout>
  );
};

export default BeachVenues;
