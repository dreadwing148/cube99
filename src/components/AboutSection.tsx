
import { HardHat, TrendingUp, Award, Users } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-construction-800 mb-4">
            Who We <span className="text-yellow-500">Are</span>
          </h2>
          <p className="text-construction-600 text-lg">
            For over 25 years, Cube 99 has been redefining construction excellence with innovation, precision, and unmatched expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative">
              <div className="absolute -bottom-6 -right-6 w-2/3 h-2/3 bg-yellow-500 -z-10 rounded-lg"></div>
              <img 
                src="https://images.unsplash.com/photo-1486718448742-163732cd1544?q=80&w=2000" 
                alt="Construction Team" 
                className="rounded-lg shadow-xl w-full h-auto object-cover"
              />
            </div>
          </div>

          <div>
            <h3 className="text-2xl md:text-3xl font-display font-bold text-construction-800 mb-6">
              Building A Better Future
            </h3>
            <p className="text-construction-600 mb-8">
              We believe that every construction project represents a community's future. 
              That's why we approach each job with meticulous attention to detail, sustainable practices, and a commitment to exceeding expectations.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start">
                <div className="bg-yellow-500 p-3 rounded-lg mr-4">
                  <HardHat className="h-6 w-6 text-construction-800" />
                </div>
                <div>
                  <h4 className="font-bold text-construction-800 mb-1">Expert Team</h4>
                  <p className="text-construction-600 text-sm">Skilled professionals with years of industry experience</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-yellow-500 p-3 rounded-lg mr-4">
                  <TrendingUp className="h-6 w-6 text-construction-800" />
                </div>
                <div>
                  <h4 className="font-bold text-construction-800 mb-1">Modern Approach</h4>
                  <p className="text-construction-600 text-sm">Using the latest technologies and construction methods</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-yellow-500 p-3 rounded-lg mr-4">
                  <Award className="h-6 w-6 text-construction-800" />
                </div>
                <div>
                  <h4 className="font-bold text-construction-800 mb-1">Quality Guarantee</h4>
                  <p className="text-construction-600 text-sm">Every project completed to the highest standards</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-yellow-500 p-3 rounded-lg mr-4">
                  <Users className="h-6 w-6 text-construction-800" />
                </div>
                <div>
                  <h4 className="font-bold text-construction-800 mb-1">Client Focused</h4>
                  <p className="text-construction-600 text-sm">Your vision and satisfaction are our top priorities</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
