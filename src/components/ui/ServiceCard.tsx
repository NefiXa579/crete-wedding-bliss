import { Link } from "react-router-dom";
import { MapPin, Phone, Euro, Star } from "lucide-react";

interface ServiceCardProps {
  name: string;
  location: string;
  image: string;
  priceRange: string;
  rating: number;
  description: string;
  specialties?: string[];
  contact?: string;
}

const ServiceCard = ({
  name,
  location,
  image,
  priceRange,
  rating,
  description,
  specialties,
  contact,
}: ServiceCardProps) => {
  return (
    <article className="card-romantic h-full">
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute top-4 right-4 flex items-center gap-1 px-2.5 py-1.5 bg-background/95 backdrop-blur-sm rounded-full">
          <Star className="w-3.5 h-3.5 text-primary fill-primary" />
          <span className="text-xs font-medium text-foreground">{rating}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-serif text-xl font-semibold text-foreground">
          {name}
        </h3>
        
        <div className="flex flex-wrap items-center gap-3 mt-2 text-sm text-muted-foreground">
          <span className="flex items-center gap-1">
            <MapPin className="w-4 h-4" />
            {location}
          </span>
          <span className="flex items-center gap-1">
            <Euro className="w-4 h-4" />
            {priceRange}
          </span>
        </div>

        <p className="mt-3 text-sm text-muted-foreground line-clamp-2">
          {description}
        </p>

        {specialties && specialties.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {specialties.slice(0, 3).map((specialty) => (
              <span
                key={specialty}
                className="px-2.5 py-1 bg-secondary/50 rounded-full text-xs font-medium text-secondary-foreground"
              >
                {specialty}
              </span>
            ))}
          </div>
        )}

        {contact && (
          <div className="flex items-center gap-2 mt-4 pt-4 border-t border-border">
            <Phone className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground">{contact}</span>
          </div>
        )}
      </div>
    </article>
  );
};

export default ServiceCard;
