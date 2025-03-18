
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import FeaturedSection from "@/components/FeaturedSection";
import { motion } from "framer-motion";

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <HeroSection />
        
        <section className="py-20">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <span className="text-sm text-primary font-medium">Our Heritage</span>
                <h2 className="mt-2 font-display text-3xl md:text-4xl font-semibold tracking-tight">
                  Centuries of Craft Excellence
                </h2>
                <p className="mt-4 text-muted-foreground">
                  India's handicraft traditions date back thousands of years, with techniques and designs passed down through generations. Each piece tells a story of cultural heritage, regional identity, and exceptional artisanal skill.
                </p>
                <p className="mt-4 text-muted-foreground">
                  Our mission is to preserve these ancient art forms by connecting skilled artisans with appreciative customers worldwide, ensuring these traditions continue to thrive in the modern world.
                </p>
              </div>
              
              <div className="order-1 md:order-2 relative">
                <div className="aspect-square relative rounded-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1588867702719-969c8c265f33?q=80&w=1932&auto=format&fit=crop" 
                    alt="Artisan working on traditional handicraft"
                    className="object-cover w-full h-full"
                  />
                </div>
                
                <div className="absolute -bottom-6 -left-6 w-40 h-40 rounded-lg overflow-hidden border-4 border-background">
                  <img 
                    src="https://images.unsplash.com/photo-1599826822174-e95de68e0a49?q=80&w=1944&auto=format&fit=crop" 
                    alt="Close-up of a handcrafted item"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <FeaturedSection />
        
        <section className="py-20 bg-primary/5 relative overflow-hidden">
          <div className="container px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-sm text-primary font-medium">Join Our Community</span>
              <h2 className="mt-2 font-display text-3xl md:text-4xl font-semibold tracking-tight">
                Subscribe for Exclusive Updates
              </h2>
              <p className="mt-4 text-muted-foreground mx-auto max-w-2xl">
                Stay informed about new collections, artisan stories, and special offers. Be the first to discover the latest treasures from across Bharat.
              </p>
              
              <div className="mt-8 flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-grow px-4 py-3 rounded-full bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
                />
                <button className="bg-primary hover:bg-primary/90 text-white font-medium px-6 py-3 rounded-full transition-colors">
                  Subscribe
                </button>
              </div>
              
              <p className="mt-4 text-xs text-muted-foreground">
                By subscribing, you agree to our privacy policy and consent to receive updates from BharatCrafts.
              </p>
            </div>
          </div>
          
          <div className="absolute top-1/2 left-0 w-full h-1/2 bg-gradient-to-t from-background to-transparent" />
          <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-primary/5 rounded-full blur-3xl" />
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
