import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface CTASectionProps {
  title: string;
  description: string;
  primaryCTA: {
    label: string;
    href: string;
  };
  secondaryCTA?: {
    label: string;
    href: string;
  };
  variant?: "default" | "romantic";
}

const CTASection = ({
  title,
  description,
  primaryCTA,
  secondaryCTA,
  variant = "default",
}: CTASectionProps) => {
  const bgClass = variant === "romantic" 
    ? "bg-gradient-to-br from-secondary via-blush to-champagne-light" 
    : "bg-foreground";
  const textClass = variant === "romantic" ? "text-foreground" : "text-background";
  const mutedClass = variant === "romantic" ? "text-foreground/70" : "text-background/70";

  return (
    <section className={`section-padding ${bgClass}`}>
      <div className="container-wedding">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-serif font-semibold ${textClass}`}>
            {title}
          </h2>
          <p className={`mt-4 text-lg ${mutedClass} max-w-xl mx-auto`}>
            {description}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <Link
              to={primaryCTA.href}
              className={`inline-flex items-center gap-2 px-8 py-4 rounded-full font-medium transition-all duration-300 ${
                variant === "romantic"
                  ? "bg-foreground text-background hover:bg-foreground/90"
                  : "bg-champagne text-foreground hover:bg-champagne/90"
              }`}
            >
              {primaryCTA.label}
              <ArrowRight className="w-4 h-4" />
            </Link>
            {secondaryCTA && (
              <Link
                to={secondaryCTA.href}
                className={`inline-flex items-center gap-2 px-8 py-4 rounded-full font-medium border-2 transition-all duration-300 ${
                  variant === "romantic"
                    ? "border-foreground text-foreground hover:bg-foreground hover:text-background"
                    : "border-background/30 text-background hover:bg-background/10"
                }`}
              >
                {secondaryCTA.label}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
