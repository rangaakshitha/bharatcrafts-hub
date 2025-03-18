
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface CategoryCardProps {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  region?: string;
}

const CategoryCard = ({ id, name, description, imageUrl, region }: CategoryCardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <Link to={`/categories/${id}`}>
      <div className="group relative overflow-hidden rounded-lg transition-all duration-500 hover:shadow-xl">
        <div className="image-blur-wrapper aspect-[4/5]">
          <img
            src={imageUrl}
            alt={name}
            className={`image-blur ${imageLoaded ? 'loaded' : ''} h-full w-full object-cover transition-transform duration-500 group-hover:scale-105`}
            onLoad={handleImageLoad}
          />
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80" />
        
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          {region && (
            <span className="mb-2 inline-block rounded-full bg-primary/80 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
              {region}
            </span>
          )}
          <h3 className="font-display text-xl font-medium tracking-tight">{name}</h3>
          <p className="mt-1 text-sm text-white/80 line-clamp-2">{description}</p>
          
          <div className="mt-4 overflow-hidden">
            <span className="inline-block translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0">
              Explore →
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
