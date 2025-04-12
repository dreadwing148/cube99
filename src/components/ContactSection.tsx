
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Map, Phone, Mail, Clock } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-construction-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-construction-800 mb-4">
            Get In <span className="text-yellow-500">Touch</span>
          </h2>
          <p className="text-construction-600 text-lg">
            Have a project in mind? Contact us today to discuss how we can help bring your vision to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <Card className="border-none shadow-lg h-full">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-construction-700">
                        Full Name
                      </label>
                      <Input 
                        id="name" 
                        placeholder="John Doe" 
                        className="border-construction-200 focus:border-yellow-500 focus:ring-yellow-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-construction-700">
                        Email Address
                      </label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="john@example.com" 
                        className="border-construction-200 focus:border-yellow-500 focus:ring-yellow-500"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-construction-700">
                      Subject
                    </label>
                    <Input 
                      id="subject" 
                      placeholder="Project Inquiry" 
                      className="border-construction-200 focus:border-yellow-500 focus:ring-yellow-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-construction-700">
                      Message
                    </label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us about your project..." 
                      rows={5}
                      className="border-construction-200 focus:border-yellow-500 focus:ring-yellow-500"
                    />
                  </div>

                  <Button className="bg-yellow-500 hover:bg-yellow-600 text-construction-800 w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-col gap-6">
            <div className="bg-construction-800 text-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-display font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-yellow-500 p-2 rounded-md mr-4">
                    <Map className="h-5 w-5 text-construction-800" />
                  </div>
                  <div>
                    <h4 className="font-bold text-yellow-500 mb-1">Our Location</h4>
                    <p className="text-white/80">
                      1234 Construction Ave.<br />
                      Building District, NY 10001
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-yellow-500 p-2 rounded-md mr-4">
                    <Phone className="h-5 w-5 text-construction-800" />
                  </div>
                  <div>
                    <h4 className="font-bold text-yellow-500 mb-1">Phone Number</h4>
                    <p className="text-white/80">
                      +1 (555) 123-4567<br />
                      +1 (555) 987-6543
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-yellow-500 p-2 rounded-md mr-4">
                    <Mail className="h-5 w-5 text-construction-800" />
                  </div>
                  <div>
                    <h4 className="font-bold text-yellow-500 mb-1">Email Address</h4>
                    <p className="text-white/80">
                      info@edificewebworks.com<br />
                      projects@edificewebworks.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-yellow-500 p-2 rounded-md mr-4">
                    <Clock className="h-5 w-5 text-construction-800" />
                  </div>
                  <div>
                    <h4 className="font-bold text-yellow-500 mb-1">Working Hours</h4>
                    <p className="text-white/80">
                      Monday - Friday: 8:00 AM - 6:00 PM<br />
                      Saturday: 9:00 AM - 2:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-display font-bold text-construction-800 mb-4">Ready to Get Started?</h3>
              <p className="text-construction-600 mb-6">
                Contact us today for a free consultation and estimate for your construction project.
              </p>
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-construction-800">
                Request a Quote
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
