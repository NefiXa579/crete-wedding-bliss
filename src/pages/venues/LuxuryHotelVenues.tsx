import Layout from "@/components/layout/Layout";
import VenueCard from "@/components/ui/VenueCard";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";
import { Star, Utensils, Sparkles, BedDouble } from "lucide-react";

import venueLuxury from "@/assets/venue-luxury-hotel.jpg";
import heroBeach from "@/assets/hero-beach-wedding.jpg";

const LuxuryHotelVenues = () => {
  const venues = [
    {
      id: "1",
      name: "Blue Palace Resort & Spa",
      location: "Elounda, Lasithi",
      image: venueLuxury,
      category: "5-Star Resort",
      capacity: "50-300 guests",
      rating: 4.9,
      description: "An iconic luxury resort with private beach, infinity pools, and Spinalonga island views. Full-service wedding packages available.",
      href: "/venues/luxury-hotels",
    },
    {
      id: "2",
      name: "Daios Cove Luxury Resort",
      location: "Agios Nikolaos",
      image: heroBeach,
      category: "5-Star Resort",
      capacity: "40-200 guests",
      rating: 4.9,
      description: "Award-winning all-suite resort carved into cliffs above a private beach. Michelin-quality dining and exclusive ceremony spaces.",
      href: "/venues/luxury-hotels",
    },
    {
      id: "3",
      name: "Elounda Peninsula All Suite Hotel",
      location: "Elounda, Lasithi",
      image: venueLuxury,
      category: "5-Star Resort",
      capacity: "30-150 guests",
      rating: 4.9,
      description: "Ultra-luxurious all-suite property with private pools, exceptional spa, and dedicated wedding coordination team.",
      href: "/venues/luxury-hotels",
    },
    {
      id: "4",
      name: "Amirandes Grecotel",
      location: "Gouves, Heraklion",
      image: heroBeach,
      category: "5-Star Resort",
      capacity: "60-250 guests",
      rating: 4.8,
      description: "Palatial resort inspired by Minoan architecture. Lagoon pools, private beach, and grand ballroom for elegant receptions.",
      href: "/venues/luxury-hotels",
    },
    {
      id: "5",
      name: "Domes of Elounda",
      location: "Elounda, Lasithi",
      image: venueLuxury,
      category: "5-Star Resort",
      capacity: "40-180 guests",
      rating: 4.8,
      description: "Boutique luxury resort with Minoan-inspired suites and villas. Intimate atmosphere perfect for exclusive celebrations.",
      href: "/venues/luxury-hotels",
    },
    {
      id: "6",
      name: "Casa Delfino Hotel & Spa",
      location: "Chania Old Town",
      image: heroBeach,
      category: "Boutique Hotel",
      capacity: "20-80 guests",
      rating: 4.8,
      description: "Historic 17th-century Venetian mansion converted to boutique hotel. Rooftop terrace with harbor and sea views.",
      href: "/venues/luxury-hotels",
    },
    {
      id: "7",
      name: "Abaton Island Resort & Spa",
      location: "Hersonissos",
      image: venueLuxury,
      category: "5-Star Resort",
      capacity: "50-200 guests",
      rating: 4.7,
      description: "Modern minimalist design meets Greek hospitality. Multiple dining venues and a spectacular cliff-edge ceremony platform.",
      href: "/venues/luxury-hotels",
    },
    {
      id: "8",
      name: "Cretan Malia Park",
      location: "Malia, Heraklion",
      image: heroBeach,
      category: "5-Star Resort",
      capacity: "30-150 guests",
      rating: 4.7,
      description: "Contemporary design hotel set in lush gardens. Sophisticated atmosphere with farm-to-table dining experiences.",
      href: "/venues/luxury-hotels",
    },
  ];

  const highlights = [
    { icon: Star, title: "5-Star Service", description: "World-class hospitality" },
    { icon: Utensils, title: "Gourmet Dining", description: "Award-winning cuisine" },
    { icon: Sparkles, title: "Full Coordination", description: "Dedicated wedding teams" },
    { icon: BedDouble, title: "Guest Rooms", description: "On-site accommodation" },
  ];

  const faqs = [
    {
      question: "What's included in luxury hotel wedding packages?",
      answer: "Most luxury hotel packages include venue hire, ceremony setup, reception space, basic decor, catering for a minimum number of guests, wedding cake, accommodation for the couple, and a dedicated wedding coordinator. Premium packages often add extras like spa treatments, photography, entertainment, and extended accommodation for guests.",
    },
    {
      question: "How far in advance should we book a luxury venue?",
      answer: "For peak season dates (May-September), we recommend booking 12-18 months in advance. Popular resorts like those in Elounda can book up quickly for summer weekends. Off-season dates (April, October) offer more flexibility and often better rates with 6-9 months notice.",
    },
    {
      question: "Can guests stay at the hotel?",
      answer: "Yes, this is one of the main advantages of luxury hotel venues. Most properties offer group booking rates for wedding guests, sometimes including discounts of 10-20% off published rates. Some venues offer exclusive buy-out options for complete privacy.",
    },
    {
      question: "Are there options for smaller, intimate weddings?",
      answer: "Absolutely! Many luxury properties cater to intimate celebrations of 20-50 guests. Boutique hotels in Chania's old town and smaller Elounda properties specialize in personalized experiences. Some resorts offer private villa options for micro-weddings.",
    },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src={venueLuxury} alt="Luxury hotel wedding venue in Crete" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 to-foreground/40" />
        </div>
        <div className="container-wedding relative z-10">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-1.5 bg-champagne/90 text-foreground rounded-full text-sm font-medium mb-4">
              12 Luxury Venues
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-background">
              Luxury Hotel <br />Wedding Venues
            </h1>
            <p className="mt-6 text-lg text-background/90 max-w-xl">
              Experience unparalleled elegance at Crete's finest 5-star resorts and boutique hotels, where every detail is perfected for your celebration.
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
              5-Star Resorts & Boutique Hotels
            </h2>
            <p className="mt-2 text-muted-foreground">
              Crete's most prestigious properties offering comprehensive wedding services
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
              Luxury Wedding Venues in Crete
            </h2>
            <p>
              For couples seeking sophistication and convenience, Crete's collection of luxury hotels offers 
              world-class wedding experiences. The Elounda area, often called the "St. Tropez of Crete," 
              features an exceptional concentration of 5-star properties, each competing to offer the most 
              memorable celebrations.
            </p>
            <p>
              These venues distinguish themselves through comprehensive services: dedicated wedding coordinators, 
              in-house florists and decorators, award-winning culinary teams, and luxurious accommodation for 
              all your guests. Many properties feature multiple ceremony locations—from cliff-edge platforms 
              overlooking the sea to manicured gardens and elegant ballrooms.
            </p>
            <p>
              Beyond the major resorts, Chania's old town harbors exquisite boutique hotels in restored 
              Venetian mansions. These intimate properties offer romantic rooftop terraces, historic 
              courtyards, and proximity to the charming harbor—perfect for couples seeking character and 
              culture alongside luxury.
            </p>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} />

      <CTASection
        title="Experience Luxury"
        description="Connect with wedding planners who have exclusive relationships with Crete's finest venues."
        primaryCTA={{ label: "Find Luxury Planners", href: "/wedding-planners" }}
        secondaryCTA={{ label: "Explore Beach Venues", href: "/venues/beach" }}
        variant="romantic"
      />
    </Layout>
  );
};

export default LuxuryHotelVenues;
