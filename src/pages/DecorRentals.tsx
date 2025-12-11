import Layout from "@/components/layout/Layout";
import ServiceCard from "@/components/ui/ServiceCard";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";
import { Flower, Armchair, Lamp, Sparkles } from "lucide-react";

import weddingDecor from "@/assets/wedding-decor.jpg";
import weddingDresses from "@/assets/wedding-dresses.jpg";

const DecorRentals = () => {
  const companies = [
    {
      name: "Crete Wedding Rentals",
      location: "Heraklion (serves all Crete)",
      image: weddingDecor,
      priceRange: "€€ - €€€",
      rating: 4.9,
      description: "Full-service rental company offering everything from elegant arches to complete reception setups. Delivery and setup included.",
      specialties: ["Arches", "Furniture", "Lighting", "Full Setup"],
      contact: "+30 281 111 2222",
    },
    {
      name: "Bloom & Branch Florals",
      location: "Chania",
      image: weddingDresses,
      priceRange: "€€€",
      rating: 4.9,
      description: "Luxury floral design studio specializing in romantic, garden-style arrangements and statement wedding arches.",
      specialties: ["Floral Arches", "Centerpieces", "Bouquets", "Installation"],
      contact: "+30 282 222 3333",
    },
    {
      name: "Mediterranean Event Design",
      location: "Rethymno",
      image: weddingDecor,
      priceRange: "€€ - €€€",
      rating: 4.8,
      description: "Creative event design team offering custom-built structures, drapery, and styled tablescapes for unique celebrations.",
      specialties: ["Custom Builds", "Drapery", "Tablescapes", "Boho Style"],
      contact: "+30 283 333 4444",
    },
    {
      name: "Olive & Oak Rentals",
      location: "Agios Nikolaos",
      image: weddingDresses,
      priceRange: "€€",
      rating: 4.7,
      description: "Rustic and vintage furniture rentals perfect for beach and village weddings. Wooden arches, farm tables, and mismatched chairs.",
      specialties: ["Rustic Style", "Vintage Pieces", "Beach Setups", "Farm Tables"],
      contact: "+30 284 444 5555",
    },
    {
      name: "Starlight Events",
      location: "Heraklion",
      image: weddingDecor,
      priceRange: "€€€",
      rating: 4.8,
      description: "Specialists in dramatic lighting design including fairy lights, chandeliers, uplighting, and dance floor illumination.",
      specialties: ["Lighting Design", "Chandeliers", "Dance Floors", "LED Effects"],
      contact: "+30 281 555 6666",
    },
    {
      name: "Aegean Party Rentals",
      location: "Chania (serves western Crete)",
      image: weddingDresses,
      priceRange: "€",
      rating: 4.6,
      description: "Budget-friendly rental service offering essential items: chairs, tables, linens, and basic arch structures.",
      specialties: ["Budget Friendly", "Basics", "Chairs & Tables", "Linens"],
      contact: "+30 282 666 7777",
    },
  ];

  const highlights = [
    { icon: Flower, title: "Floral Arches", description: "Stunning ceremony backdrops" },
    { icon: Armchair, title: "Furniture", description: "Tables, chairs, lounges" },
    { icon: Lamp, title: "Lighting", description: "Ambient & dramatic effects" },
    { icon: Sparkles, title: "Full Styling", description: "Complete design packages" },
  ];

  const faqs = [
    {
      question: "What's included in a typical arch rental?",
      answer: "Basic arch rentals include the structure, delivery, setup, and collection. Florals and drapery are usually separate services. Some companies offer styled packages that include everything. Prices range from €150-300 for basic wooden arches to €800+ for elaborate floral installations.",
    },
    {
      question: "How far in advance should we book rentals?",
      answer: "For peak season (May-September), book 4-6 months ahead, especially for specialty items like vintage furniture or custom structures. Off-season weddings can often book 2-3 months in advance. Popular items book up quickly during wedding season.",
    },
    {
      question: "Do rental companies deliver to all locations?",
      answer: "Most major rental companies service all of Crete, though delivery fees vary by distance. Remote locations may incur additional charges. Some companies specialize in certain regions—check coverage when requesting quotes.",
    },
    {
      question: "Can we see items before booking?",
      answer: "Yes, most companies maintain showrooms or can arrange viewings by appointment. For destination couples, virtual tours and detailed photo catalogs are available. Ask for recent wedding photos to see items styled in real settings.",
    },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src={weddingDecor} alt="Wedding decoration and rentals in Crete" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 to-foreground/40" />
        </div>
        <div className="container-wedding relative z-10">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-1.5 bg-champagne/90 text-foreground rounded-full text-sm font-medium mb-4">
              8 Rental Companies
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-background">
              Wedding Decor <br />& Rentals
            </h1>
            <p className="mt-6 text-lg text-background/90 max-w-xl">
              Transform any venue with stunning arches, elegant furniture, atmospheric lighting, and beautiful table settings.
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

      {/* Company Grid */}
      <section className="section-padding">
        <div className="container-wedding">
          <div className="mb-10">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground">
              Decor & Rental Companies
            </h2>
            <p className="mt-2 text-muted-foreground">
              From DIY essentials to full-service styling, find everything you need
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {companies.map((company, index) => (
              <ServiceCard key={index} {...company} />
            ))}
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} />

      <CTASection
        title="Create Your Vision"
        description="Work with expert planners who can coordinate all your decor needs."
        primaryCTA={{ label: "Find a Planner", href: "/wedding-planners" }}
        secondaryCTA={{ label: "Explore Catering", href: "/catering" }}
        variant="romantic"
      />
    </Layout>
  );
};

export default DecorRentals;
