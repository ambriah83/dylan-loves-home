import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import StagingShowcase from "@/components/StagingShowcase";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Camera, Share2, Handshake, Key, Home } from "lucide-react";
import { Link } from "react-router-dom";

const SellerServices = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 lg:py-32 bg-gradient-to-br from-primary to-accent/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-playfair text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Seller Services
            </h1>
            <p className="font-poppins text-xl lg:text-2xl text-primary-foreground/90 max-w-3xl mx-auto">
              Strategic marketing and expert negotiation to maximize your home's value
            </p>
          </div>
        </section>

        {/* Intro */}
        <section className="py-16 lg:py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <p className="font-poppins text-lg text-muted-foreground leading-relaxed">
                Selling your home is one of the biggest financial decisions you'll make. You deserve an agent who understands how to position your property strategically, market it effectively, and negotiate skillfully on your behalf.
              </p>
              <p className="font-poppins text-lg text-muted-foreground leading-relaxed">
                With my background in home staging and renovation, I see potential and value where others might not. I'll help you prepare, price, and present your home in a way that attracts serious buyers and maximizes your return.
              </p>
            </div>
          </div>
        </section>

        {/* Design That Sells Section */}
        <StagingShowcase />

        {/* The Selling Process */}
        <section className="py-20 lg:py-32 bg-muted/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-foreground text-center mb-16">
              The Selling Process
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <Card className="bg-card border-none shadow-soft">
                <CardContent className="p-8 space-y-4">
                  <div className="w-14 h-14 bg-accent/20 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="font-poppins font-semibold text-xl text-foreground">
                    1. Pricing Strategy
                  </h3>
                  <p className="font-poppins text-muted-foreground leading-relaxed">
                    I'll provide a comprehensive market analysis to price your home competitively while maximizing your profit.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-none shadow-soft">
                <CardContent className="p-8 space-y-4">
                  <div className="w-14 h-14 bg-accent/20 rounded-full flex items-center justify-center">
                    <Home className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="font-poppins font-semibold text-xl text-foreground">
                    2. Staging & Preparation
                  </h3>
                  <p className="font-poppins text-muted-foreground leading-relaxed">
                    As a certified home stager, I'll recommend strategic improvements that increase your home's appeal and value.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-none shadow-soft">
                <CardContent className="p-8 space-y-4">
                  <div className="w-14 h-14 bg-accent/20 rounded-full flex items-center justify-center">
                    <Camera className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="font-poppins font-semibold text-xl text-foreground">
                    3. Professional Photography
                  </h3>
                  <p className="font-poppins text-muted-foreground leading-relaxed">
                    High-quality photos and virtual tours that showcase your home's best features and attract qualified buyers.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-none shadow-soft">
                <CardContent className="p-8 space-y-4">
                  <div className="w-14 h-14 bg-accent/20 rounded-full flex items-center justify-center">
                    <Share2 className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="font-poppins font-semibold text-xl text-foreground">
                    4. Strategic Marketing
                  </h3>
                  <p className="font-poppins text-muted-foreground leading-relaxed">
                    Multi-channel marketing including MLS, social media, email campaigns, and targeted advertising to reach serious buyers.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-none shadow-soft">
                <CardContent className="p-8 space-y-4">
                  <div className="w-14 h-14 bg-accent/20 rounded-full flex items-center justify-center">
                    <Handshake className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="font-poppins font-semibold text-xl text-foreground">
                    5. Negotiation & Offers
                  </h3>
                  <p className="font-poppins text-muted-foreground leading-relaxed">
                    Expert negotiation to secure the best possible terms while protecting your interests throughout the process.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-none shadow-soft">
                <CardContent className="p-8 space-y-4">
                  <div className="w-14 h-14 bg-accent/20 rounded-full flex items-center justify-center">
                    <Key className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="font-poppins font-semibold text-xl text-foreground">
                    6. Closing Coordination
                  </h3>
                  <p className="font-poppins text-muted-foreground leading-relaxed">
                    I'll manage all the details from contract to closing, ensuring a smooth and stress-free transition.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Home Staging Advantage */}
        <section className="py-20 lg:py-32 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-foreground text-center mb-12">
                The Home Staging Advantage
              </h2>

              <div className="space-y-8">
                <p className="font-poppins text-lg text-muted-foreground leading-relaxed">
                  As a certified home stager from the New York Institute of Art & Design, I bring a unique advantage to sellers. I don't just list homes — I transform them to highlight their full potential and command top dollar.
                </p>

                <div className="bg-accent/10 border-l-4 border-accent p-6 rounded-r-lg">
                  <p className="font-poppins text-lg text-foreground font-semibold mb-3">
                    Did you know?
                  </p>
                  <ul className="space-y-2 font-poppins text-muted-foreground">
                    <li>• Staged homes sell 73% faster than non-staged homes</li>
                    <li>• Staging can increase your sale price by 1-5% on average</li>
                    <li>• 85% of buyers say staging helps them visualize the property as their future home</li>
                  </ul>
                </div>

                <p className="font-poppins text-lg text-muted-foreground leading-relaxed">
                  Whether it's simple styling recommendations or a full staging consultation, I'll help you create the kind of first impression that generates offers.
                </p>

                <div className="text-center pt-6">
                  <Link to="/services/home-staging">
                    <Button variant="outline" size="lg" className="font-poppins">
                      Learn More About Home Staging
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Marketing Approach */}
        <section className="py-20 lg:py-32 bg-muted/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-foreground text-center mb-16">
              My Marketing Approach
            </h2>

            <div className="max-w-4xl mx-auto space-y-8">
              <Card className="bg-card border-none shadow-soft">
                <CardContent className="p-8 space-y-4">
                  <h3 className="font-poppins font-semibold text-2xl text-accent">
                    Professional Photography & Video
                  </h3>
                  <p className="font-poppins text-muted-foreground leading-relaxed">
                    Stunning visuals that showcase your home's best features. I work with professional photographers to ensure your listing stands out online where 97% of buyers begin their search.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-none shadow-soft">
                <CardContent className="p-8 space-y-4">
                  <h3 className="font-poppins font-semibold text-2xl text-accent">
                    Comprehensive Online Presence
                  </h3>
                  <p className="font-poppins text-muted-foreground leading-relaxed">
                    Your home will be featured on the MLS, Zillow, Realtor.com, and dozens of other high-traffic real estate sites, plus promoted through my social media channels and email database.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-none shadow-soft">
                <CardContent className="p-8 space-y-4">
                  <h3 className="font-poppins font-semibold text-2xl text-accent">
                    Strategic Open Houses & Showings
                  </h3>
                  <p className="font-poppins text-muted-foreground leading-relaxed">
                    I'll coordinate open houses and private showings that create urgency and competition among qualified buyers, helping you secure the best possible offer.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-none shadow-soft">
                <CardContent className="p-8 space-y-4">
                  <h3 className="font-poppins font-semibold text-2xl text-accent">
                    Targeted Digital Advertising
                  </h3>
                  <p className="font-poppins text-muted-foreground leading-relaxed">
                    Paid social media campaigns and search advertising designed to put your home in front of motivated buyers actively searching in your area.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 lg:py-32 bg-gradient-to-br from-primary to-accent/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              Ready to Sell Your Home?
            </h2>
            <p className="font-poppins text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Let's discuss your goals and create a strategic plan to sell your home for top dollar.
            </p>
            <Button 
              asChild
              size="lg"
              className="bg-rose hover:bg-rose/90 text-rose-foreground font-poppins text-lg px-8 py-6"
            >
              <a href="https://calendar.app.google/SWazGvdTsxQ5QhQx5" target="_blank" rel="noopener noreferrer">
                Get Your Free Home Valuation
              </a>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SellerServices;
