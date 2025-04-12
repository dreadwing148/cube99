
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative h-[80vh] min-h-[600px] overflow-hidden">
      {/* Hero Background */}
      <div className="absolute inset-0 bg-construction-800 z-0">
        <div 
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=2070')] 
          bg-cover bg-center bg-no-repeat opacity-40"
        ></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 h-full z-10 relative">
        <div className="flex flex-col justify-center h-full max-w-3xl">
          <div className="bg-construction-800/50 backdrop-blur-sm p-8 md:p-12 rounded-lg">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight mb-4">
              Building Excellence <span className="text-yellow-500">Together</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl">
              We transform your construction challenges into remarkable structures. With decades of experience and a commitment to quality, we build more than just buildings—we build lasting relationships.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-yellow-500 hover:bg-yellow-600 text-construction-800 font-medium text-lg px-8 py-6"
                size="lg"
              >
                Our Services
              </Button>
              <Button 
                variant="outline" 
                className="border-white text-white hover:bg-white/10 font-medium text-lg px-8 py-6"
                size="lg"
              >
                View Projects
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Diagonal Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-white transform -skew-y-2 translate-y-8 z-10"></div>
    </section>
  );
};

export default Hero;
