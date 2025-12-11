import Layout from "@/components/layout/Layout";
import ServiceCard from "@/components/ui/ServiceCard";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";
import { Sparkles, Ruler, Euro, Heart } from "lucide-react";

import weddingDresses from "@/assets/wedding-dresses.jpg";
import weddingDecor from "@/assets/wedding-decor.jpg";

const WeddingDresses = () => {
  const stores = [
    {
      name: "Atelier Elena Bridal",
      location: "Heraklion City Center",
      image: weddingDresses,
      priceRange: "€800 - €3,500",
      rating: 4.9,
      description: "Renowned atelier specializing in custom-made gowns with intricate lacework and Mediterranean-inspired designs.",
      specialties: ["Custom Design", "Lace Specialists", "Greek Designers"],
      contact: "+30 281 123 4567",
    },
    {
      name: "Bridal Dreams Chania",
      location: "Chania Old Town",
      image: weddingDecor,
      priceRange: "€600 - €2,800",
      rating: 4.8,
      description: "Charming boutique in a restored Venetian building offering European designer collections and personalized fittings.",
      specialties: ["Designer Collections", "Plus Sizes", "Accessories"],
      contact: "+30 282 234 5678",
    },
    {
      name: "Nymphes Bridal House",
      location: "Rethymno",
      image: weddingDresses,
      priceRange: "€500 - €2,000",
      rating: 4.7,
      description: "Family-owned boutique with three generations of bridal expertise. Known for bohemian and beach wedding styles.",
      specialties: ["Boho Style", "Beach Dresses", "Veils"],
      contact: "+30 283 345 6789",
    },
    {
      name: "Couture Collection Crete",
      location: "Heraklion",
      image: weddingDecor,
      priceRange: "€1,500 - €6,000",
      rating: 4.9,
      description: "High-end salon featuring international designer gowns from Vera Wang, Pronovias, and exclusive Greek couturiers.",
      specialties: ["Luxury Brands", "Couture", "VIP Service"],
      contact: "+30 281 456 7890",
    },
    {
      name: "White Rose Bridal",
      location: "Agios Nikolaos",
      image: weddingDresses,
      priceRange: "€400 - €1,800",
      rating: 4.6,
      description: "Welcoming boutique popular with destination brides. Offers rental options and emergency alterations service.",
      specialties: ["Rentals Available", "Quick Alterations", "Destination Brides"],
      contact: "+30 284 567 8901",
    },
    {
      name: "Anastasia Bridal Atelier",
      location: "Chania",
      image: weddingDecor,
      priceRange: "€1,000 - €4,000",
      rating: 4.8,
      description: "Award-winning designer creating bespoke gowns inspired by Cretan heritage and Mediterranean elegance.",
      specialties: ["Bespoke Design", "Greek Heritage", "Silk Specialists"],
      contact: "+30 282 678 9012",
    },
  ];

  const highlights = [
    { icon: Sparkles, title: "Custom Designs", description: "Bespoke gowns crafted for you" },
    { icon: Ruler, title: "Expert Fittings", description: "Perfect fit guaranteed" },
    { icon: Euro, title: "All Budgets", description: "Options from €400-€6,000+" },
    { icon: Heart, title: "Dream Dresses", description: "Find your perfect style" },
  ];

  const faqs = [
    {
      question: "Should I buy my dress in Crete or bring one from home?",
      answer: "Both options work well! Buying locally allows for multiple fittings and avoids travel complications. If bringing your dress, use a carry-on dress bag and arrive a few days early for any needed adjustments. Many Crete boutiques offer last-minute alterations for destination brides.",
    },
    {
      question: "How far in advance should I book a fitting?",
      answer: "For custom gowns, begin 6-9 months before your wedding. Ready-to-wear dresses with alterations need 2-4 months. If you're a destination bride planning remote fittings, start communication 6+ months ahead to arrange virtual consultations and measurement guidance.",
    },
    {
      question: "Do stores offer rental options?",
      answer: "Yes, several boutiques offer rental programs, typically at 30-50% of the purchase price. This is particularly popular for destination weddings. Rentals usually include basic alterations and professional cleaning. Book rental gowns at least 2-3 months in advance.",
    },
    {
      question: "What styles work best for Crete weddings?",
      answer: "Lightweight, breathable fabrics like chiffon, organza, and light lace are ideal for Crete's warm climate. Beach weddings suit flowing, less structured silhouettes. For traditional venues, more formal gowns work beautifully. Consider shorter or detachable trains for outdoor settings.",
    },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src={weddingDresses} alt="Wedding dress boutique in Crete" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 to-foreground/40" />
        </div>
        <div className="container-wedding relative z-10">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-1.5 bg-champagne/90 text-foreground rounded-full text-sm font-medium mb-4">
              10 Bridal Boutiques
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-background">
              Wedding Dress <br />Stores in Crete
            </h1>
            <p className="mt-6 text-lg text-background/90 max-w-xl">
              From custom ateliers to designer boutiques, find the perfect gown for your Mediterranean wedding day.
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

      {/* Store Grid */}
      <section className="section-padding">
        <div className="container-wedding">
          <div className="mb-10">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground">
              Bridal Boutiques & Ateliers
            </h2>
            <p className="mt-2 text-muted-foreground">
              Trusted dress shops across Crete offering designer gowns and custom creations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stores.map((store, index) => (
              <ServiceCard key={index} {...store} />
            ))}
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} />

      <CTASection
        title="Complete Your Look"
        description="Explore our directories of decor, accessories, and beauty services."
        primaryCTA={{ label: "Decor & Rentals", href: "/decor-rentals" }}
        secondaryCTA={{ label: "Find a Planner", href: "/wedding-planners" }}
        variant="romantic"
      />
    </Layout>
  );
};

export default WeddingDresses;
