import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface CategoryCardProps {
  title: string;
  description: string;
  image: string;
  href: string;
  count?: number;
}

const CategoryCard = ({ title, description, image, href, count }: CategoryCardProps) => {
  return (
    <Link to={href} className="group block">
      <article className="relative h-80 md:h-96 rounded-2xl overflow-hidden">
        {/* Background Image */}
        <img
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent" />

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
          {count && (
            <span className="inline-block self-start px-3 py-1 mb-3 bg-primary/90 backdrop-blur-sm rounded-full text-xs font-medium text-primary-foreground">
              {count} Listings
            </span>
          )}
          <h3 className="font-serif text-2xl md:text-3xl font-semibold text-background">
            {title}
          </h3>
          <p className="mt-2 text-background/80 text-sm md:text-base line-clamp-2">
            {description}
          </p>
          <span className="inline-flex items-center gap-2 mt-4 text-champagne font-medium group-hover:gap-3 transition-all">
            Explore <ArrowRight className="w-4 h-4" />
          </span>
        </div>
      </article>
    </Link>
  );
};

export default CategoryCard;
