
import { Building, Home, Truck, Wrench } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: Building,
    title: "Commercial Construction",
    description: "We build office buildings, retail spaces, and industrial facilities with a focus on efficiency and functionality.",
  },
  {
    icon: Home,
    title: "Residential Projects",
    description: "From luxury homes to multi-family units, we create living spaces that combine comfort, style, and durability.",
  },
  {
    icon: Wrench,
    title: "Renovation & Remodeling",
    description: "Transform existing structures with our expert renovation services that breathe new life into any space.",
  },
  {
    icon: Truck,
    title: "Infrastructure Development",
    description: "We handle large-scale infrastructure projects including roads, bridges, and public facilities.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-construction-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-construction-800 mb-4">
            Our <span className="text-yellow-500">Services</span>
          </h2>
          <p className="text-construction-600 text-lg">
            We offer comprehensive construction solutions tailored to meet your specific needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="pb-4">
                <div className="w-14 h-14 bg-yellow-500 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="h-8 w-8 text-construction-800" />
                </div>
                <CardTitle className="text-xl font-display font-bold text-construction-800">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-construction-600">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-16 bg-construction-800 rounded-lg p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
            Ready to Start Your Project?
          </h3>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Contact our team today to discuss your construction needs and get a detailed quote.
          </p>
          <a 
            href="#contact" 
            className="inline-block bg-yellow-500 hover:bg-yellow-600 text-construction-800 font-medium px-8 py-3 rounded-md transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
