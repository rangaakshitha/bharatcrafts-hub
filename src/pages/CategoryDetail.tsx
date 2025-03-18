
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ChevronLeft, MapPin, ArrowRight } from "lucide-react";

// Categories data matching what we have in the Categories page
const categoriesData = [
  {
    id: 'textiles',
    name: 'Textiles & Fabrics',
    description: 'Handwoven fabrics including silk, cotton, and wool textiles from different regions of India.',
    longDescription: 'India has a rich heritage of textile production with techniques dating back thousands of years. From the intricate silk weaves of Varanasi to the vibrant cotton prints of Gujarat, each region has its distinctive style. Traditional techniques like ikat, bandhani (tie-dye), block printing, and embroideries such as chikankari and zardozi showcase the remarkable skill of Indian artisans. These textiles not only serve functional purposes but also carry cultural significance, often featuring motifs and patterns that tell stories of local traditions and beliefs.',
    imageUrl: 'https://images.unsplash.com/photo-1582748150211-01bf24989b54?q=80&w=2035&auto=format&fit=crop',
    region: 'Pan India',
    origin: 'Various regions across India',
    materials: 'Cotton, Silk, Wool, Natural dyes',
    techniques: 'Hand weaving, Block printing, Tie-dye, Embroidery',
    items: [
      {
        name: 'Banarasi Silk Saree',
        image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=1974&auto=format&fit=crop'
      },
      {
        name: 'Pashmina Shawl',
        image: 'https://images.unsplash.com/photo-1606517188328-ab44789da921?q=80&w=1780&auto=format&fit=crop'
      },
      {
        name: 'Block Printed Fabric',
        image: 'https://images.unsplash.com/photo-1585821570368-53a0b709cb9e?q=80&w=1974&auto=format&fit=crop'
      },
      {
        name: 'Ikat Textiles',
        image: 'https://images.unsplash.com/photo-1584015152671-0891b17e6838?q=80&w=1974&auto=format&fit=crop'
      }
    ]
  },
  {
    id: 'pottery',
    name: 'Pottery & Ceramics',
    description: 'Traditional clay pottery with intricate designs and patterns, reflecting local art forms.',
    longDescription: 'Indian pottery traditions are as diverse as the country itself, with each region developing distinctive styles based on local clay and cultural preferences. From the blue pottery of Jaipur to the terracotta of Bengal, potters create both functional vessels and decorative items using techniques passed down through generations. Many pieces feature hand-painted designs or relief work that reflects local artistic traditions. Despite modernization, traditional pottery making continues to thrive, with artisans preserving ancient techniques while also innovating with contemporary designs.',
    imageUrl: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=1740&auto=format&fit=crop',
    region: 'Rajasthan & Gujarat',
    origin: 'Dating back to the Indus Valley Civilization',
    materials: 'Clay, Natural minerals, Quartz powder, Glazes',
    techniques: 'Wheel throwing, Hand building, Firing, Glazing, Painting',
    items: [
      {
        name: 'Blue Pottery',
        image: 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?q=80&w=1935&auto=format&fit=crop'
      },
      {
        name: 'Terracotta Sculptures',
        image: 'https://images.unsplash.com/photo-1605883705077-8d3d3cebe78c?q=80&w=1974&auto=format&fit=crop'
      },
      {
        name: 'Khurja Pottery',
        image: 'https://images.unsplash.com/photo-1607770694073-83477d63f350?q=80&w=1974&auto=format&fit=crop'
      },
      {
        name: 'Longpi Black Pottery',
        image: 'https://images.unsplash.com/photo-1565560049171-c491f1731108?q=80&w=1887&auto=format&fit=crop'
      }
    ]
  },
  // Add data for other categories here
];

const CategoryDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [category, setCategory] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Find the category that matches the URL parameter
    const foundCategory = categoriesData.find(cat => cat.id === id);
    
    // Simulate loading
    setTimeout(() => {
      setCategory(foundCategory || null);
      setLoading(false);
    }, 500);
  }, [id]);

  if (loading) {
    return (
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center pt-24">
          <div className="animate-pulse flex flex-col items-center">
            <div className="h-8 w-64 bg-muted rounded mb-4"></div>
            <div className="h-4 w-96 bg-muted rounded"></div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!category) {
    return (
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-grow flex flex-col items-center justify-center pt-24">
          <h1 className="text-2xl font-bold mb-4">Category Not Found</h1>
          <p className="text-muted-foreground mb-6">The category you're looking for doesn't exist.</p>
          <Link to="/categories">
            <Button>
              <ChevronLeft className="mr-2 h-4 w-4" />
              Back to Categories
            </Button>
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-black/60 z-10" />
            <img
              src={category.imageUrl}
              alt={category.name}
              className="h-full w-full object-cover object-center"
            />
          </div>
          
          <div className="relative z-20 container px-4 md:px-6 h-full flex flex-col justify-end pb-12">
            <Link to="/categories" className="inline-flex items-center text-white/80 hover:text-white mb-4 transition-colors">
              <ChevronLeft className="mr-1 h-4 w-4" />
              Back to Categories
            </Link>
            
            <h1 className="font-display text-3xl md:text-5xl font-semibold tracking-tight text-white">
              {category.name}
            </h1>
            
            {category.region && (
              <div className="mt-4 flex items-center text-white/80">
                <MapPin className="mr-2 h-4 w-4" />
                <span>{category.region}</span>
              </div>
            )}
          </div>
        </section>
        
        {/* Overview Section */}
        <section className="py-16">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="md:col-span-2 space-y-6">
                <h2 className="font-display text-2xl md:text-3xl font-semibold tracking-tight">
                  Overview
                </h2>
                <p className="text-muted-foreground">
                  {category.longDescription || category.description}
                </p>
                
                <div className="space-y-4 mt-8">
                  <h3 className="font-display text-xl font-medium">
                    Historical Significance
                  </h3>
                  <p className="text-muted-foreground">
                    These crafts represent centuries of cultural evolution and artistic tradition, providing a tangible link to India's rich heritage. Often associated with specific communities or regions, they reflect local aesthetics, religious beliefs, and social practices. Many techniques have been preserved through family lineages, with skills passed down from master to apprentice over generations.
                  </p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-muted/30 rounded-lg p-6 space-y-4">
                  <h3 className="font-medium">Craft Details</h3>
                  
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground">
                      Origin
                    </h4>
                    <p>{category.origin || "Various regions across India"}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground">
                      Materials Used
                    </h4>
                    <p>{category.materials || "Traditional and natural materials"}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground">
                      Techniques
                    </h4>
                    <p>{category.techniques || "Various traditional methods"}</p>
                  </div>
                </div>
                
                <div className="bg-primary/5 rounded-lg p-6 space-y-4">
                  <h3 className="font-medium">Support Artisans</h3>
                  <p className="text-sm text-muted-foreground">
                    When you purchase these handicrafts, you directly support the artisans and help preserve traditional craft techniques that might otherwise be lost.
                  </p>
                  <Link to={`/shop/${category.id}`}>
                    <Button className="w-full">
                      Shop {category.name}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Featured Items */}
        {category.items && (
          <section className="py-16 bg-muted/20">
            <div className="container px-4 md:px-6">
              <h2 className="font-display text-2xl md:text-3xl font-semibold tracking-tight mb-12 text-center">
                Featured {category.name}
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.items.map((item: any, index: number) => (
                  <div key={index} className="group relative rounded-lg overflow-hidden">
                    <div className="aspect-square bg-muted overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      <h3 className="font-medium">{item.name}</h3>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-12 text-center">
                <Link to={`/shop/${category.id}`}>
                  <Button variant="outline">
                    View All Items
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </section>
        )}
        
        {/* Related Categories */}
        <section className="py-16">
          <div className="container px-4 md:px-6">
            <h2 className="font-display text-2xl md:text-3xl font-semibold tracking-tight mb-8">
              Explore Related Categories
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {categoriesData
                .filter(cat => cat.id !== category.id)
                .slice(0, 3)
                .map(cat => (
                  <Link key={cat.id} to={`/categories/${cat.id}`} className="group block">
                    <div className="relative overflow-hidden rounded-lg">
                      <div className="aspect-[3/2] bg-muted">
                        <img
                          src={cat.imageUrl}
                          alt={cat.name}
                          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                        <h3 className="font-display text-lg font-medium">{cat.name}</h3>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default CategoryDetail;
