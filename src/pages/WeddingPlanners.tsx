import Layout from "@/components/layout/Layout";
import ServiceCard from "@/components/ui/ServiceCard";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";
import { Star, Globe, Heart, Calendar } from "lucide-react";

import weddingPlanners from "@/assets/wedding-planners.jpg";
import heroBeach from "@/assets/hero-beach-wedding.jpg";

const WeddingPlanners = () => {
  const planners = [
    {
      name: "Crete Dream Weddings",
      location: "Chania (serves all Crete)",
      image: weddingPlanners,
      priceRange: "€2,500 - €8,000",
      rating: 4.9,
      description: "Full-service wedding planning with 15+ years experience. Specializes in luxury beach and villa weddings. Fluent in English, German, and French.",
      specialties: ["Luxury Weddings", "Beach Ceremonies", "Multilingual", "Full Service"],
      contact: "+30 282 111 2222",
    },
    {
      name: "Mediterranean Wedding Co.",
      location: "Heraklion",
      image: heroBeach,
      priceRange: "€3,000 - €10,000",
      rating: 4.9,
      description: "Award-winning planners featured in international publications. Known for creative, personalized celebrations and attention to detail.",
      specialties: ["Award Winning", "Creative Design", "Destination Experts", "VIP Service"],
      contact: "+30 281 222 3333",
    },
    {
      name: "Olive Branch Events",
      location: "Rethymno",
      image: weddingPlanners,
      priceRange: "€1,800 - €5,000",
      rating: 4.8,
      description: "Boutique planning studio focusing on intimate weddings and elopements. Excellent for couples seeking a personal touch.",
      specialties: ["Elopements", "Intimate Weddings", "Personalized", "Budget Conscious"],
      contact: "+30 283 333 4444",
    },
    {
      name: "Bliss Events Crete",
      location: "Agios Nikolaos",
      image: heroBeach,
      priceRange: "€2,000 - €6,000",
      rating: 4.8,
      description: "Experienced team specializing in hotel weddings and resort celebrations. Strong relationships with Elounda luxury properties.",
      specialties: ["Hotel Weddings", "Elounda Experts", "Large Events", "Coordination"],
      contact: "+30 284 444 5555",
    },
    {
      name: "Whimsical Weddings Greece",
      location: "Chania",
      image: weddingPlanners,
      priceRange: "€1,500 - €4,500",
      rating: 4.7,
      description: "Creative planners known for bohemian, eclectic celebrations. Perfect for couples wanting something unique and non-traditional.",
      specialties: ["Boho Style", "Eclectic Design", "Outdoor Events", "Styled Shoots"],
      contact: "+30 282 555 6666",
    },
    {
      name: "Moments in Crete",
      location: "Heraklion",
      image: heroBeach,
      priceRange: "€2,200 - €7,000",
      rating: 4.8,
      description: "Professional team offering both planning and coordination services. Specialists in traditional village and winery weddings.",
      specialties: ["Village Weddings", "Winery Events", "Traditions", "Local Expertise"],
      contact: "+30 281 666 7777",
    },
  ];

  const highlights = [
    { icon: Star, title: "Top Rated", description: "Highly reviewed professionals" },
    { icon: Globe, title: "Multilingual", description: "English, German, French & more" },
    { icon: Heart, title: "Personalized", description: "Tailored to your vision" },
    { icon: Calendar, title: "Full Service", description: "Planning to day-of coordination" },
  ];

  const faqs = [
    {
      question: "What does a wedding planner actually do?",
      answer: "Wedding planners handle everything from venue sourcing and vendor coordination to timeline creation, budget management, and day-of logistics. For destination weddings, they're invaluable for navigating local requirements, language barriers, and vendor relationships. Services range from full planning to day-of coordination only.",
    },
    {
      question: "How much do wedding planners in Crete cost?",
      answer: "Prices typically range from €1,500-€3,000 for coordination services to €5,000-€10,000+ for full planning. Factors include wedding size, complexity, and services required. Many planners offer tiered packages. The investment often saves money through vendor relationships and avoiding costly mistakes.",
    },
    {
      question: "When should we hire a planner?",
      answer: "For full planning services, engage a planner 12-18 months before your wedding. For coordination only, 3-6 months is sufficient. Destination wedding couples particularly benefit from early engagement to help with venue selection and vendor introductions.",
    },
    {
      question: "Can planners help with legal requirements?",
      answer: "Yes! Experienced Crete planners are well-versed in Greek marriage requirements for international couples. They can guide you through documentation, translations, and appointments with local authorities. This alone makes their services invaluable for destination weddings.",
    },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src={weddingPlanners} alt="Wedding planning in Crete" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 to-foreground/40" />
        </div>
        <div className="container-wedding relative z-10">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-1.5 bg-champagne/90 text-foreground rounded-full text-sm font-medium mb-4">
              9 Expert Planners
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-background">
              Wedding Planners <br />in Crete
            </h1>
            <p className="mt-6 text-lg text-background/90 max-w-xl">
              Let experienced professionals bring your dream Crete wedding to life, handling every detail so you can enjoy every moment.
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

      {/* Planner Grid */}
      <section className="section-padding">
        <div className="container-wedding">
          <div className="mb-10">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground">
              Professional Wedding Planners
            </h2>
            <p className="mt-2 text-muted-foreground">
              Experienced teams ready to create your perfect Crete celebration
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {planners.map((planner, index) => (
              <ServiceCard key={index} {...planner} />
            ))}
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} />

      <CTASection
        title="Ready to Start Planning?"
        description="Explore our venue guides and resources to begin your Crete wedding journey."
        primaryCTA={{ label: "Explore Venues", href: "/venues" }}
        secondaryCTA={{ label: "Read Our Blog", href: "/blog" }}
        variant="romantic"
      />
    </Layout>
  );
};

export default WeddingPlanners;
