
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Set loaded to true after component mounts
    setLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with parallax effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <img
          src="https://images.unsplash.com/photo-1630291420827-756469974478?q=80&w=1974&auto=format&fit=crop"
          alt="Indian handicrafts background"
          className="w-full h-full object-cover object-center"
        />
      </div>
      
      {/* Content */}
      <div className="container relative z-20 px-4 md:px-6 py-12 md:py-24">
        <div className="max-w-3xl mx-auto text-center text-white space-y-6">
          <div
            className={`transition-opacity duration-1000 ${
              loaded ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <span className="inline-block text-xs md:text-sm font-medium tracking-wider uppercase text-primary bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              Heritage of Bharat
            </span>
          </div>

          <h1
            className={`font-display text-4xl md:text-5xl lg:text-7xl font-semibold leading-tight md:leading-tight lg:leading-tight transition-all duration-1000 delay-100 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Discover the Timeless Artistry of <span className="text-craft-gold">Bharat's</span> Handicrafts
          </h1>

          <p
            className={`text-base md:text-lg lg:text-xl text-white/90 max-w-2xl mx-auto transition-all duration-1000 delay-200 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Exquisite handcrafted treasures that tell stories of our rich cultural heritage, tradition, and unparalleled craftsmanship.
          </p>

          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center pt-4 transition-all duration-1000 delay-300 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <Link to="/categories">
              <Button className="rounded-full px-8 py-6 bg-primary hover:bg-primary/90 text-white">
                Explore Categories
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="outline" className="rounded-full px-8 py-6 bg-white/10 backdrop-blur-sm hover:bg-white/20 border-white/20 text-white">
                Our Heritage
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Decorative element */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default HeroSection;
