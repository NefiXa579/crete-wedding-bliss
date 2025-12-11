import { Link } from "react-router-dom";
import { MapPin, Users, Star } from "lucide-react";

interface VenueCardProps {
  id: string;
  name: string;
  location: string;
  image: string;
  category: string;
  capacity: string;
  rating: number;
  description: string;
  href: string;
}

const VenueCard = ({
  name,
  location,
  image,
  category,
  capacity,
  rating,
  description,
  href,
}: VenueCardProps) => {
  return (
    <Link to={href} className="group block">
      <article className="card-romantic h-full">
        {/* Image */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1.5 bg-background/95 backdrop-blur-sm rounded-full text-xs font-medium text-foreground">
              {category}
            </span>
          </div>
          <div className="absolute top-4 right-4 flex items-center gap-1 px-2.5 py-1.5 bg-background/95 backdrop-blur-sm rounded-full">
            <Star className="w-3.5 h-3.5 text-primary fill-primary" />
            <span className="text-xs font-medium text-foreground">{rating}</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          <h3 className="font-serif text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
            {name}
          </h3>
          
          <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              {location}
            </span>
            <span className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              {capacity}
            </span>
          </div>

          <p className="mt-3 text-sm text-muted-foreground line-clamp-2">
            {description}
          </p>

          <span className="inline-block mt-4 text-sm font-medium text-primary group-hover:underline underline-offset-4">
            View Details →
          </span>
        </div>
      </article>
    </Link>
  );
};

export default VenueCard;
