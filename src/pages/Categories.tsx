
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CategoryCard from "@/components/CategoryCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

// Categories data
const categoriesData = [
  {
    id: 'textiles',
    name: 'Textiles & Fabrics',
    description: 'Handwoven fabrics including silk, cotton, and wool textiles from different regions of India.',
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
  },
  {
    id: 'paper-crafts',
    name: 'Paper Crafts',
    description: 'Handmade paper products with traditional designs and techniques, including paper mâché.',
    imageUrl: 'https://images.unsplash.com/photo-1585208798174-6cedd86e019a?q=80&w=1734&auto=format&fit=crop',
    region: 'Gujarat & Rajasthan'
  },
  {
    id: 'stone-carving',
    name: 'Stone Carving',
    description: 'Intricate carvings on marble, sandstone, and other stones, reflecting architectural heritage.',
    imageUrl: 'https://images.unsplash.com/photo-1588732822723-6266f9fb79ad?q=80&w=1885&auto=format&fit=crop',
    region: 'Agra & Jaipur'
  },
  {
    id: 'paintings',
    name: 'Traditional Paintings',
    description: 'Various regional painting styles including Madhubani, Warli, Tanjore, and Miniature paintings.',
    imageUrl: 'https://images.unsplash.com/photo-1594733606972-73170176002c?q=80&w=1974&auto=format&fit=crop',
    region: 'Pan India'
  },
  {
    id: 'leather-crafts',
    name: 'Leather Crafts',
    description: 'Handcrafted leather goods with traditional motifs and techniques.',
    imageUrl: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=1780&auto=format&fit=crop',
    region: 'Rajasthan & Uttar Pradesh'
  },
  {
    id: 'bamboo-crafts',
    name: 'Bamboo & Cane Crafts',
    description: 'Utilitarian and decorative items crafted from bamboo and cane materials.',
    imageUrl: 'https://images.unsplash.com/photo-1588732822723-6266f9fb79ad?q=80&w=1885&auto=format&fit=crop',
    region: 'North East India'
  }
];

// Region filters
const regions = [
  'All Regions',
  'North India',
  'South India',
  'East India',
  'West India',
  'North East India',
  'Central India'
];

const Categories = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("All Regions");
  const [filteredCategories, setFilteredCategories] = useState(categoriesData);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    let result = categoriesData;
    
    // Apply search filter
    if (searchTerm) {
      result = result.filter((category) => 
        category.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        category.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Apply region filter
    if (selectedRegion !== "All Regions") {
      result = result.filter((category) => 
        category.region?.includes(selectedRegion)
      );
    }
    
    setFilteredCategories(result);
  }, [searchTerm, selectedRegion]);

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24">
        <section className="bg-muted/30 py-16">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-display text-3xl md:text-5xl font-semibold tracking-tight">
                Explore Bharat's Handicraft Categories
              </h1>
              <p className="mt-4 text-muted-foreground">
                Discover the rich diversity of India's traditional handicrafts, passed down through generations and representing our cultural heritage.
              </p>
              
              <div className="mt-8 flex items-center justify-center">
                <div className="relative w-full max-w-md">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search categories..."
                    className="pl-10 rounded-full"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>
              
              <div className="mt-6 flex flex-wrap justify-center gap-2">
                {regions.map((region) => (
                  <Button
                    key={region}
                    variant={selectedRegion === region ? "default" : "outline"}
                    size="sm"
                    className="rounded-full"
                    onClick={() => setSelectedRegion(region)}
                  >
                    {region}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16">
          <div className="container px-4 md:px-6">
            {filteredCategories.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
                {filteredCategories.map((category) => (
                  <CategoryCard key={category.id} {...category} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <h3 className="text-xl font-medium">No categories found</h3>
                <p className="mt-2 text-muted-foreground">
                  Try adjusting your search or filter to find what you're looking for.
                </p>
                <Button 
                  variant="outline" 
                  className="mt-4"
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedRegion("All Regions");
                  }}
                >
                  Reset Filters
                </Button>
              </div>
            )}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Categories;
