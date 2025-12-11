import Layout from "@/components/layout/Layout";
import ServiceCard from "@/components/ui/ServiceCard";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";
import { Utensils, Wine, Leaf, ChefHat } from "lucide-react";

import weddingCatering from "@/assets/wedding-catering.jpg";
import venueLuxury from "@/assets/venue-luxury-hotel.jpg";

const Catering = () => {
  const caterers = [
    {
      name: "Cretan Feast Catering",
      location: "Heraklion (serves all Crete)",
      image: weddingCatering,
      priceRange: "€€ - €€€",
      rating: 4.9,
      description: "Award-winning caterer specializing in elevated Cretan cuisine using locally-sourced ingredients. Farm-to-table philosophy with stunning presentation.",
      specialties: ["Cretan Cuisine", "Farm-to-Table", "Full Service", "Custom Menus"],
      contact: "+30 281 777 8888",
    },
    {
      name: "Mediterranean Dreams Catering",
      location: "Chania",
      image: venueLuxury,
      priceRange: "€€€",
      rating: 4.9,
      description: "Luxury catering service known for elaborate multi-course dinners and theatrical food presentations. Celebrity chef consultations available.",
      specialties: ["Fine Dining", "Tasting Menus", "Premium Wines", "Staff Service"],
      contact: "+30 282 888 9999",
    },
    {
      name: "Olive Tree Kitchen",
      location: "Rethymno",
      image: weddingCatering,
      priceRange: "€€",
      rating: 4.8,
      description: "Authentic Greek mezze and family-style dining specialists. Perfect for couples wanting a relaxed, convivial atmosphere.",
      specialties: ["Mezze Style", "Family Dinners", "Greek BBQ", "Vegetarian Options"],
      contact: "+30 283 999 0000",
    },
    {
      name: "Sea & Vine Catering",
      location: "Agios Nikolaos",
      image: venueLuxury,
      priceRange: "€€ - €€€",
      rating: 4.8,
      description: "Specialists in fresh seafood and locally-produced wines. Excellent for beach and seaside venue weddings.",
      specialties: ["Fresh Seafood", "Wine Pairings", "Beach Events", "Raw Bar"],
      contact: "+30 284 000 1111",
    },
    {
      name: "Green Table Crete",
      location: "Heraklion",
      image: weddingCatering,
      priceRange: "€€",
      rating: 4.7,
      description: "Plant-based and organic catering company offering creative vegan and vegetarian menus that impress all guests.",
      specialties: ["Vegan", "Vegetarian", "Organic", "Dietary Friendly"],
      contact: "+30 281 111 2222",
    },
    {
      name: "Nostos Traditional Catering",
      location: "Chania",
      image: venueLuxury,
      priceRange: "€",
      rating: 4.6,
      description: "Affordable traditional Greek catering with generous portions. Great for larger guest lists and authentic village-style celebrations.",
      specialties: ["Budget Friendly", "Traditional Greek", "Large Events", "Village Style"],
      contact: "+30 282 222 3333",
    },
  ];

  const highlights = [
    { icon: ChefHat, title: "Expert Chefs", description: "Trained culinary professionals" },
    { icon: Utensils, title: "Custom Menus", description: "Tailored to your taste" },
    { icon: Wine, title: "Local Wines", description: "Cretan vineyard selections" },
    { icon: Leaf, title: "Dietary Options", description: "Vegan, vegetarian & more" },
  ];

  const faqs = [
    {
      question: "What cuisine styles are popular for Crete weddings?",
      answer: "Cretan cuisine is a highlight for destination weddings—fresh seafood, local olive oil, herbs, and cheese feature prominently. Many couples choose a mix of traditional mezze for cocktail hour and a more formal Mediterranean main course. International options are also available for mixed guest lists.",
    },
    {
      question: "How is catering priced?",
      answer: "Most caterers price per person, ranging from €35-50 for basic packages to €100-200+ for luxury experiences. Prices typically include food, service staff, basic equipment, and setup. Alcohol, premium items, and extended service hours are usually additional.",
    },
    {
      question: "Can caterers accommodate dietary restrictions?",
      answer: "Yes, reputable caterers can accommodate most dietary needs including vegan, vegetarian, gluten-free, kosher, and halal options. Discuss specific requirements during initial consultations. For complex needs, specialist caterers like Green Table Crete may be ideal.",
    },
    {
      question: "Do caterers provide equipment and staff?",
      answer: "Most full-service caterers include service staff, basic tableware, and cooking equipment. For elaborate setups—specialty linens, premium china, or additional servers—there may be extra costs. Some venues provide equipment, potentially reducing catering costs.",
    },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src={weddingCatering} alt="Wedding catering in Crete" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 to-foreground/40" />
        </div>
        <div className="container-wedding relative z-10">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-1.5 bg-champagne/90 text-foreground rounded-full text-sm font-medium mb-4">
              14 Catering Companies
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-background">
              Wedding Catering <br />in Crete
            </h1>
            <p className="mt-6 text-lg text-background/90 max-w-xl">
              Delight your guests with authentic Cretan flavors, Mediterranean cuisine, and world-class culinary experiences.
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

      {/* Caterer Grid */}
      <section className="section-padding">
        <div className="container-wedding">
          <div className="mb-10">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground">
              Wedding Caterers
            </h2>
            <p className="mt-2 text-muted-foreground">
              From intimate dinners to grand receptions, find the perfect culinary partner
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {caterers.map((caterer, index) => (
              <ServiceCard key={index} {...caterer} />
            ))}
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} />

      <CTASection
        title="Plan Your Menu"
        description="Let expert planners coordinate your catering and create a seamless dining experience."
        primaryCTA={{ label: "Find a Planner", href: "/wedding-planners" }}
        secondaryCTA={{ label: "Explore Venues", href: "/venues" }}
        variant="romantic"
      />
    </Layout>
  );
};

export default Catering;
