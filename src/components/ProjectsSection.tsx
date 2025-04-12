
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const projects = [
  {
    id: 1,
    title: "Urban Office Complex",
    description: "A modern 12-floor office building with sustainable design features and smart technology integration.",
    image: "https://images.unsplash.com/photo-1486718448742-163732cd1544?q=80&w=2000",
    category: "commercial",
    location: "Downtown Metro",
    completionDate: "2023",
  },
  {
    id: 2,
    title: "Riverside Residences",
    description: "Luxury condominium complex featuring 24 units with premium finishes and waterfront views.",
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=2000",
    category: "residential",
    location: "Riverside District",
    completionDate: "2022",
  },
  {
    id: 3,
    title: "Central Mall Renovation",
    description: "Complete interior and exterior renovation of a 120,000 sq ft shopping center.",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=2000",
    category: "renovation",
    location: "Central City",
    completionDate: "2023",
  },
  {
    id: 4,
    title: "Highway 52 Bridge",
    description: "Construction of a 400-foot bridge connecting major transportation routes.",
    image: "https://images.unsplash.com/photo-1460574283810-2aab119d8511?q=80&w=2000",
    category: "infrastructure",
    location: "North County",
    completionDate: "2021",
  },
  {
    id: 5,
    title: "Greenview Corporate HQ",
    description: "LEED-certified corporate headquarters with innovative workspace design.",
    image: "https://images.unsplash.com/photo-1460574283810-2aab119d8511?q=80&w=2000",
    category: "commercial",
    location: "Business District",
    completionDate: "2023",
  },
  {
    id: 6,
    title: "Heritage House Restoration",
    description: "Historically accurate restoration of a 19th century landmark building.",
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=2000",
    category: "renovation",
    location: "Historic District",
    completionDate: "2022",
  },
];

const ProjectsSection = () => {
  const [activeTab, setActiveTab] = useState("all");

  const filteredProjects = activeTab === "all" 
    ? projects 
    : projects.filter(project => project.category === activeTab);

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-construction-800 mb-4">
            Our <span className="text-yellow-500">Projects</span>
          </h2>
          <p className="text-construction-600 text-lg">
            Discover our portfolio of completed construction projects showcasing our expertise and quality.
          </p>
        </div>

        <Tabs defaultValue="all" className="mb-12">
          <div className="flex justify-center">
            <TabsList className="bg-construction-100">
              <TabsTrigger 
                value="all" 
                onClick={() => setActiveTab("all")}
                className="data-[state=active]:bg-yellow-500 data-[state=active]:text-construction-800"
              >
                All Projects
              </TabsTrigger>
              <TabsTrigger 
                value="commercial" 
                onClick={() => setActiveTab("commercial")}
                className="data-[state=active]:bg-yellow-500 data-[state=active]:text-construction-800"
              >
                Commercial
              </TabsTrigger>
              <TabsTrigger 
                value="residential" 
                onClick={() => setActiveTab("residential")}
                className="data-[state=active]:bg-yellow-500 data-[state=active]:text-construction-800"
              >
                Residential
              </TabsTrigger>
              <TabsTrigger 
                value="renovation" 
                onClick={() => setActiveTab("renovation")}
                className="data-[state=active]:bg-yellow-500 data-[state=active]:text-construction-800"
              >
                Renovation
              </TabsTrigger>
              <TabsTrigger 
                value="infrastructure" 
                onClick={() => setActiveTab("infrastructure")}
                className="data-[state=active]:bg-yellow-500 data-[state=active]:text-construction-800"
              >
                Infrastructure
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value={activeTab} className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <Card key={project.id} className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="h-64 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl font-display font-bold text-construction-800">
                      {project.title}
                    </CardTitle>
                    <div className="flex items-center text-sm text-construction-500 mt-1">
                      <span>{project.location}</span>
                      <span className="mx-2">•</span>
                      <span>{project.completionDate}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-construction-600">
                      {project.description}
                    </CardDescription>
                  </CardContent>
                  <CardFooter>
                    <Button 
                      variant="outline" 
                      className="border-yellow-500 text-yellow-600 hover:bg-yellow-50"
                    >
                      View Details
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="text-center">
          <Button 
            variant="outline" 
            className="border-construction-500 text-construction-600 hover:bg-construction-50 mt-8"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
