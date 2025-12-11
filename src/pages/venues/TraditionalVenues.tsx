import Layout from "@/components/layout/Layout";
import VenueCard from "@/components/ui/VenueCard";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";
import { Church, Mountain, Wine, History } from "lucide-react";

import venueTraditional from "@/assets/venue-traditional-village.jpg";
import venueLuxury from "@/assets/venue-luxury-hotel.jpg";

const TraditionalVenues = () => {
  const venues = [
    {
      id: "1",
      name: "Archanes Village Chapel",
      location: "Archanes, Heraklion",
      image: venueTraditional,
      category: "Village Chapel",
      capacity: "20-80 guests",
      rating: 4.9,
      description: "Historic stone chapel in a picturesque wine village surrounded by vineyards and olive groves. Authentic Cretan atmosphere.",
      href: "/venues/traditional",
    },
    {
      id: "2",
      name: "Vamos Old Village Estate",
      location: "Vamos, Chania",
      image: venueLuxury,
      category: "Restored Village",
      capacity: "40-150 guests",
      rating: 4.8,
      description: "Beautifully restored traditional village with stone houses, courtyards, and panoramic mountain views. Complete venue rental available.",
      href: "/venues/traditional",
    },
    {
      id: "3",
      name: "Margarites Pottery Village",
      location: "Margarites, Rethymno",
      image: venueTraditional,
      category: "Artisan Village",
      capacity: "30-100 guests",
      rating: 4.7,
      description: "Charming pottery village with authentic craftsmen workshops. Unique setting combining art, culture, and romance.",
      href: "/venues/traditional",
    },
    {
      id: "4",
      name: "Lassithi Plateau Windmills",
      location: "Lassithi Plateau",
      image: venueLuxury,
      category: "Mountain Venue",
      capacity: "25-80 guests",
      rating: 4.8,
      description: "Iconic mountain plateau famous for its white-sailed windmills. Dramatic backdrop at 850m elevation with sweeping valley views.",
      href: "/venues/traditional",
    },
    {
      id: "5",
      name: "Spili Village Square",
      location: "Spili, Rethymno",
      image: venueTraditional,
      category: "Village Square",
      capacity: "50-200 guests",
      rating: 4.7,
      description: "Famous for its Venetian lion fountain, this charming village offers authentic tavernas and stunning mountain scenery.",
      href: "/venues/traditional",
    },
    {
      id: "6",
      name: "Kritsa Village",
      location: "Kritsa, Lasithi",
      image: venueLuxury,
      category: "Historic Village",
      capacity: "30-120 guests",
      rating: 4.6,
      description: "One of Crete's most famous traditional villages, known for handwoven textiles and the nearby 13th-century Byzantine church.",
      href: "/venues/traditional",
    },
    {
      id: "7",
      name: "Anogia Mountain Village",
      location: "Anogia, Rethymno",
      image: venueTraditional,
      category: "Mountain Village",
      capacity: "40-150 guests",
      rating: 4.7,
      description: "High-altitude village on Mount Psiloritis known for Cretan music traditions and dramatic mountain landscapes.",
      href: "/venues/traditional",
    },
    {
      id: "8",
      name: "Milia Eco Village",
      location: "Vlatos, Chania",
      image: venueLuxury,
      category: "Eco Resort",
      capacity: "20-60 guests",
      rating: 4.8,
      description: "Restored 17th-century settlement turned eco-resort. Stone houses, organic farm, and complete seclusion in nature.",
      href: "/venues/traditional",
    },
  ];

  const highlights = [
    { icon: Church, title: "Historic Chapels", description: "Centuries-old stone churches" },
    { icon: Mountain, title: "Mountain Views", description: "Dramatic elevated settings" },
    { icon: Wine, title: "Local Culture", description: "Authentic Cretan traditions" },
    { icon: History, title: "Heritage Sites", description: "Rich historical character" },
  ];

  const faqs = [
    {
      question: "Are traditional village venues accessible for guests?",
      answer: "Accessibility varies by venue. Many villages have cobblestone streets and may present challenges for guests with mobility issues. However, most venues can accommodate special needs with advance planning. We recommend discussing specific requirements with your wedding planner to ensure all guests can participate comfortably.",
    },
    {
      question: "What services are available in remote village locations?",
      answer: "Traditional village venues typically require bringing in external vendors for catering, music, and decor. The advantage is complete creative freedom. Many wedding planners have established relationships with local caterers who can prepare authentic Cretan feasts. Some restored village estates offer on-site accommodation and basic facilities.",
    },
    {
      question: "Can we have a legal ceremony in a village church?",
      answer: "Orthodox churches in Greek villages can host religious ceremonies for Orthodox Christians. For civil ceremonies or mixed-faith couples, the legal ceremony typically occurs at the local town hall, with a blessing or symbolic ceremony possible at the church. Your wedding planner can coordinate all necessary arrangements.",
    },
    {
      question: "What is the best season for mountain village weddings?",
      answer: "Late spring (May-June) and early autumn (September-October) are ideal. Summer months can be hot, though mountain villages are cooler than coastal areas. Wildflowers bloom in spring, while autumn offers harvest celebrations and grape/olive picking season—both adding authentic touches to your celebration.",
    },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src={venueTraditional} alt="Traditional village wedding venue in Crete" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 to-foreground/40" />
        </div>
        <div className="container-wedding relative z-10">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-1.5 bg-champagne/90 text-foreground rounded-full text-sm font-medium mb-4">
              18 Traditional Venues
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-background">
              Traditional Village <br />Wedding Venues
            </h1>
            <p className="mt-6 text-lg text-background/90 max-w-xl">
              Discover the authentic heart of Crete in charming mountain villages, historic chapels, and rustic stone houses steeped in centuries of tradition.
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
              Villages, Chapels & Mountain Estates
            </h2>
            <p className="mt-2 text-muted-foreground">
              Authentic Cretan settings where history and romance come together
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
              Traditional Cretan Wedding Venues
            </h2>
            <p>
              Beyond Crete's famous coastline lies an interior rich with villages that have preserved their 
              character through centuries. These traditional settlements offer couples a glimpse into 
              authentic island life—stone houses with wooden doors, flower-filled courtyards, and churches 
              with faded frescoes that have witnessed generations of celebrations.
            </p>
            <p>
              Villages like Archanes, just 15 kilometers from Heraklion, have become popular wedding 
              destinations while maintaining their genuine charm. Set among vineyards producing some of 
              Greece's best wines, Archanes offers restored mansions, traditional tavernas, and a 
              picturesque setting that transports guests to another era.
            </p>
            <p>
              For couples seeking even more seclusion, restored settlements like Milia in western Crete 
              offer complete immersion in nature. These eco-villages combine rustic authenticity with 
              modern comforts, allowing you to celebrate surrounded by chestnut forests and organic 
              gardens far from the tourist trail.
            </p>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} />

      <CTASection
        title="Embrace Tradition"
        description="Work with planners who specialize in authentic Cretan celebrations and know the island's hidden gems."
        primaryCTA={{ label: "Find Traditional Planners", href: "/wedding-planners" }}
        secondaryCTA={{ label: "Explore Beach Venues", href: "/venues/beach" }}
        variant="romantic"
      />
    </Layout>
  );
};

export default TraditionalVenues;
