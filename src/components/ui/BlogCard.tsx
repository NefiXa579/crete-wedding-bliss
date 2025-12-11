import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight } from "lucide-react";

interface BlogCardProps {
  title: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
  category: string;
  href: string;
}

const BlogCard = ({
  title,
  excerpt,
  image,
  date,
  readTime,
  category,
  href,
}: BlogCardProps) => {
  return (
    <Link to={href} className="group block">
      <article className="card-romantic h-full">
        {/* Image */}
        <div className="relative aspect-[16/10] overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1.5 bg-primary/90 backdrop-blur-sm rounded-full text-xs font-medium text-primary-foreground">
              {category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 md:p-6">
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {date}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {readTime}
            </span>
          </div>

          <h3 className="mt-3 font-serif text-xl font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
            {title}
          </h3>
          
          <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
            {excerpt}
          </p>

          <span className="inline-flex items-center gap-2 mt-4 text-sm font-medium text-primary group-hover:gap-3 transition-all">
            Read More <ArrowRight className="w-4 h-4" />
          </span>
        </div>
      </article>
    </Link>
  );
};

export default BlogCard;
