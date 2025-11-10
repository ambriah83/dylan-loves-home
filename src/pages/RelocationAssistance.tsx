import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Sun, Briefcase, GraduationCap, Video, Users } from "lucide-react";
import { Link } from "react-router-dom";

const RelocationAssistance = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 lg:py-32 bg-gradient-to-br from-primary to-accent/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-playfair text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Relocation Assistance
            </h1>
            <p className="font-poppins text-xl lg:text-2xl text-primary-foreground/90 max-w-3xl mx-auto">
              Welcome home to Tampa Bay — your trusted guide to a seamless transition
            </p>
          </div>
        </section>

        {/* Intro */}
        <section className="py-16 lg:py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <p className="font-poppins text-lg text-muted-foreground leading-relaxed">
                Moving to a new city is exciting — but it can also feel overwhelming. Where should you live? What are the schools like? How do you find your new favorite coffee shop or pediatrician?
              </p>
              <p className="font-poppins text-lg text-muted-foreground leading-relaxed">
                As someone who's lived in Central Florida for over 20 years, I know Tampa Bay inside and out. I'm here to be your local guide, helping you settle in with confidence and ease.
              </p>
            </div>
          </div>
        </section>

        {/* Why Tampa Bay */}
        <section className="py-20 lg:py-32 bg-muted/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-foreground text-center mb-16">
              Why People Love Tampa Bay
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <Card className="bg-card border-none shadow-soft">
                <CardContent className="p-8 space-y-4">
                  <div className="w-14 h-14 bg-accent/20 rounded-full flex items-center justify-center">
                    <Sun className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="font-poppins font-semibold text-xl text-foreground">
                    Year-Round Sunshine
                  </h3>
                  <p className="font-poppins text-muted-foreground leading-relaxed">
                    Enjoy beautiful weather, stunning beaches, and outdoor activities all year long. No more shoveling snow!
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-none shadow-soft">
                <CardContent className="p-8 space-y-4">
                  <div className="w-14 h-14 bg-accent/20 rounded-full flex items-center justify-center">
                    <Briefcase className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="font-poppins font-semibold text-xl text-foreground">
                    Thriving Job Market
                  </h3>
                  <p className="font-poppins text-muted-foreground leading-relaxed">
                    Tampa Bay is a growing hub for healthcare, finance, tech, and military industries with strong employment opportunities.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-none shadow-soft">
                <CardContent className="p-8 space-y-4">
                  <div className="w-14 h-14 bg-accent/20 rounded-full flex items-center justify-center">
                    <GraduationCap className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="font-poppins font-semibold text-xl text-foreground">
                    Quality Schools
                  </h3>
                  <p className="font-poppins text-muted-foreground leading-relaxed">
                    Excellent public, private, and charter schools, plus top-rated universities and colleges throughout the region.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-none shadow-soft">
                <CardContent className="p-8 space-y-4">
                  <div className="w-14 h-14 bg-accent/20 rounded-full flex items-center justify-center">
                    <MapPin className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="font-poppins font-semibold text-xl text-foreground">
                    Diverse Neighborhoods
                  </h3>
                  <p className="font-poppins text-muted-foreground leading-relaxed">
                    From beachside communities to suburban family neighborhoods to urban living, there's something for every lifestyle.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-none shadow-soft">
                <CardContent className="p-8 space-y-4">
                  <div className="w-14 h-14 bg-accent/20 rounded-full flex items-center justify-center">
                    <Users className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="font-poppins font-semibold text-xl text-foreground">
                    Welcoming Community
                  </h3>
                  <p className="font-poppins text-muted-foreground leading-relaxed">
                    Friendly neighbors, diverse culture, and a strong sense of community make Tampa Bay feel like home quickly.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-none shadow-soft">
                <CardContent className="p-8 space-y-4">
                  <div className="w-14 h-14 bg-accent/20 rounded-full flex items-center justify-center">
                    <Sun className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="font-poppins font-semibold text-xl text-foreground">
                    No State Income Tax
                  </h3>
                  <p className="font-poppins text-muted-foreground leading-relaxed">
                    Florida has no state income tax, which means more money in your pocket and a lower overall cost of living.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Dylan's Relocation Support */}
        <section className="py-20 lg:py-32 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-foreground text-center mb-12">
                How I Help You Relocate
              </h2>

              <div className="space-y-8">
                <p className="font-poppins text-lg text-muted-foreground leading-relaxed text-center">
                  Moving to a new area isn't just about finding a house — it's about finding a home that fits your lifestyle, your values, and your family's needs. I'm here to make that transition as smooth as possible.
                </p>

                <Card className="bg-card border-none shadow-soft">
                  <CardContent className="p-8 space-y-4">
                    <h3 className="font-poppins font-semibold text-2xl text-accent">
                      Neighborhood Discovery
                    </h3>
                    <p className="font-poppins text-muted-foreground leading-relaxed">
                      I'll take the time to understand your priorities — school quality, commute times, walkability, nightlife, family-friendly parks — and match you with neighborhoods that align with your lifestyle. I'll schedule tours and give you the insider perspective on each community.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-card border-none shadow-soft">
                  <CardContent className="p-8 space-y-4">
                    <h3 className="font-poppins font-semibold text-2xl text-accent">
                      School & Community Research
                    </h3>
                    <p className="font-poppins text-muted-foreground leading-relaxed">
                      If you have kids, I'll provide detailed school information, including ratings, programs, and district boundaries. I can also connect you with local parents for firsthand insights.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-card border-none shadow-soft">
                  <CardContent className="p-8 space-y-4">
                    <h3 className="font-poppins font-semibold text-2xl text-accent">
                      Virtual & In-Person Tours
                    </h3>
                    <p className="font-poppins text-muted-foreground leading-relaxed">
                      Can't visit in person yet? I offer virtual video tours, live walkthroughs, and detailed neighborhood overviews so you can explore from wherever you are. When you're ready, I'll coordinate in-person visits efficiently to maximize your time.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-card border-none shadow-soft">
                  <CardContent className="p-8 space-y-4">
                    <h3 className="font-poppins font-semibold text-2xl text-accent">
                      Local Resources & Connections
                    </h3>
                    <p className="font-poppins text-muted-foreground leading-relaxed">
                      Need recommendations for pediatricians, daycares, gyms, veterinarians, or your new favorite brunch spot? I've got you covered with trusted local contacts and insider tips to help you settle in faster.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-card border-none shadow-soft">
                  <CardContent className="p-8 space-y-4">
                    <h3 className="font-poppins font-semibold text-2xl text-accent">
                      Moving Logistics Support
                    </h3>
                    <p className="font-poppins text-muted-foreground leading-relaxed">
                      I can connect you with reliable movers, coordinate closing timelines with your current home sale, and help you navigate Florida-specific requirements like homeowner's insurance and driver's license transfers.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Virtual Services */}
        <section className="py-20 lg:py-32 bg-muted/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-foreground text-center mb-12">
                Virtual Relocation Services
              </h2>

              <div className="space-y-6">
                <p className="font-poppins text-lg text-muted-foreground leading-relaxed text-center">
                  Moving from out of state? No problem. I make it easy to search for your new home remotely.
                </p>

                <div className="bg-accent/10 border-l-4 border-accent p-8 rounded-r-lg space-y-4">
                  <div className="flex items-start gap-4">
                    <Video className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-poppins font-semibold text-lg text-foreground mb-2">
                        Live Video Tours
                      </h3>
                      <p className="font-poppins text-muted-foreground">
                        I'll walk through properties with you in real time, showing you every detail and answering questions as we go.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-poppins font-semibold text-lg text-foreground mb-2">
                        Neighborhood Video Tours
                      </h3>
                      <p className="font-poppins text-muted-foreground">
                        See the area beyond the house — parks, schools, shopping centers, commute routes — so you know what daily life will look like.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Video className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-poppins font-semibold text-lg text-foreground mb-2">
                        Virtual Meetings & Planning
                      </h3>
                      <p className="font-poppins text-muted-foreground">
                        We'll meet via Zoom or phone to discuss your goals, review options, and coordinate every step of the process remotely.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Community Guides Link */}
        <section className="py-20 lg:py-32 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-foreground mb-8">
                Explore Tampa Bay Neighborhoods
              </h2>
              <p className="font-poppins text-lg text-muted-foreground leading-relaxed mb-8">
                Ready to learn more about specific communities? Browse our comprehensive neighborhood guides to discover the area that's right for you.
              </p>
              <Link to="/communities">
                <Button variant="outline" size="lg" className="font-poppins">
                  View Community Guides
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 lg:py-32 bg-gradient-to-br from-primary to-accent/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              Ready to Make Tampa Bay Home?
            </h2>
            <p className="font-poppins text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Let's talk about your move and create a plan to help you transition smoothly.
            </p>
            <Button 
              asChild
              size="lg"
              className="bg-rose hover:bg-rose/90 text-rose-foreground font-poppins text-lg px-8 py-6"
            >
              <a href="https://calendar.app.google/SWazGvdTsxQ5QhQx5" target="_blank" rel="noopener noreferrer">
                Start Your Tampa Bay Journey
              </a>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default RelocationAssistance;
