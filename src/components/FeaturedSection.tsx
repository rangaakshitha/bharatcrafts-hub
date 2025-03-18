
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CategoryCard from './CategoryCard';

// Featured categories data
const featuredCategories = [
  {
    id: 'textiles',
    name: 'Textiles & Fabrics',
    description: 'Intricate handwoven fabrics including silk, cotton, and wool textiles from different regions of India.',
    imageUrl: 'https://images.unsplash.com/photo-1582748150211-01bf24989b54?q=80&w=2035&auto=format&fit=crop',
    region: 'Pan India'
  },
  {
    id: 'pottery',
    name: 'Pottery & Ceramics',
    description: 'Traditional clay pottery with intricate designs and patterns, reflecting local art forms.',
    imageUrl: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=1740&auto=format&fit=crop',
    region: 'Rajasthan & Gujarat'
  },
  {
    id: 'woodwork',
    name: 'Woodwork & Carving',
    description: 'Exquisite wooden artifacts with detailed carvings showcasing skilled craftsmanship.',
    imageUrl: 'https://images.unsplash.com/photo-1662010021854-e67c538ea7a9?q=80&w=1752&auto=format&fit=crop',
    region: 'Kashmir & Kerala'
  },
  {
    id: 'jewelry',
    name: 'Traditional Jewelry',
    description: 'Handcrafted jewelry pieces made from precious metals, gems, and beads following ancient techniques.',
    imageUrl: 'https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?q=80&w=1887&auto=format&fit=crop',
    region: 'Rajasthan & Bengal'
  },
  {
    id: 'metalwork',
    name: 'Metalwork & Sculpture',
    description: 'Fine metal crafts including bronze, brass, and copper items with detailed designs.',
    imageUrl: 'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?q=80&w=1740&auto=format&fit=crop',
    region: 'Madhya Pradesh & Tamil Nadu'
  }
];

const FeaturedSection = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollable = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 5); // 5px buffer
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScrollable);
      // Initialize scroll state
      checkScrollable();
      
      // Check on window resize
      window.addEventListener('resize', checkScrollable);
      
      return () => {
        container.removeEventListener('scroll', checkScrollable);
        window.removeEventListener('resize', checkScrollable);
      };
    }
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { clientWidth } = scrollContainerRef.current;
      const scrollAmount = clientWidth * 0.75; // Scroll 75% of the visible width
      
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight">
              Explore Bharat's Craft Heritage
            </h2>
            <p className="mt-3 text-muted-foreground max-w-2xl">
              Discover traditional handicrafts passed down through generations, each telling a unique story of cultural heritage and artisanal excellence.
            </p>
          </div>
          
          <div className="mt-6 md:mt-0 flex items-center space-x-4">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full"
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
            >
              <ChevronLeft className="h-4 w-4" />
              <span className="sr-only">Scroll left</span>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full"
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
            >
              <ChevronRight className="h-4 w-4" />
              <span className="sr-only">Scroll right</span>
            </Button>
          </div>
        </div>

        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto space-x-6 pb-6 hide-scrollbar"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {featuredCategories.map((category) => (
            <div key={category.id} className="min-w-[280px] md:min-w-[320px]">
              <CategoryCard {...category} />
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link to="/categories">
            <Button variant="link" className="text-primary hover:text-primary/80 gap-2">
              View All Categories
              <ChevronRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
