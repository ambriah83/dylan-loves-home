import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Eye, TrendingUp, Clock, Heart, Sparkles, Users } from "lucide-react";
import stagingBeforeAfter from "@/assets/staging-before-after.jpg";

const HomeStaging = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 lg:py-32 bg-gradient-to-br from-primary to-accent/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-playfair text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Home Staging
            </h1>
            <p className="font-poppins text-xl lg:text-2xl text-primary-foreground/90 max-w-3xl mx-auto">
              Transform your space to sell faster and for more money
            </p>
          </div>
        </section>

        {/* Intro */}
        <section className="py-16 lg:py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <p className="font-poppins text-lg text-muted-foreground leading-relaxed">
                As a certified home stager from the New York Institute of Art & Design, I have a unique ability to see a home's hidden potential. Staging isn't just about making a space look pretty — it's about creating an emotional connection that helps buyers envision their life in your home.
              </p>
              <p className="font-poppins text-lg text-muted-foreground leading-relaxed">
                Whether you're preparing to list or simply want to refresh your space, strategic staging can dramatically increase your home's appeal and market value.
              </p>
            </div>
          </div>
        </section>

        {/* Before/After Image */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-foreground text-center mb-8">
                The Power of Staging
              </h2>
              <div className="rounded-2xl overflow-hidden shadow-lifted">
                <img 
                  src={stagingBeforeAfter} 
                  alt="Before and after home staging transformation"
                  className="w-full h-auto"
                />
              </div>
              <p className="font-poppins text-center text-muted-foreground italic mt-6">
                Small changes create dramatic results
              </p>
            </div>
          </div>
        </section>

        {/* Why Staging Matters */}
        <section className="py-20 lg:py-32 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-foreground text-center mb-16">
              Why Staging Matters
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <Card className="bg-card border-none shadow-soft">
                <CardContent className="p-8 space-y-4">
                  <div className="w-14 h-14 bg-accent/20 rounded-full flex items-center justify-center">
                    <Clock className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="font-poppins font-semibold text-xl text-foreground">
                    Sell 73% Faster
                  </h3>
                  <p className="font-poppins text-muted-foreground leading-relaxed">
                    Staged homes spend significantly less time on the market compared to non-staged properties.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-none shadow-soft">
                <CardContent className="p-8 space-y-4">
                  <div className="w-14 h-14 bg-accent/20 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="font-poppins font-semibold text-xl text-foreground">
                    Higher Sale Price
                  </h3>
                  <p className="font-poppins text-muted-foreground leading-relaxed">
                    Staging can increase your final sale price by 1-5%, often more than covering the investment.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-none shadow-soft">
                <CardContent className="p-8 space-y-4">
                  <div className="w-14 h-14 bg-accent/20 rounded-full flex items-center justify-center">
                    <Eye className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="font-poppins font-semibold text-xl text-foreground">
                    Better Photos
                  </h3>
                  <p className="font-poppins text-muted-foreground leading-relaxed">
                    Staged homes photograph beautifully, attracting more online views and generating more showings.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-none shadow-soft">
                <CardContent className="p-8 space-y-4">
                  <div className="w-14 h-14 bg-accent/20 rounded-full flex items-center justify-center">
                    <Heart className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="font-poppins font-semibold text-xl text-foreground">
                    Emotional Connection
                  </h3>
                  <p className="font-poppins text-muted-foreground leading-relaxed">
                    85% of buyers say staging helps them visualize the property as their future home.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-none shadow-soft">
                <CardContent className="p-8 space-y-4">
                  <div className="w-14 h-14 bg-accent/20 rounded-full flex items-center justify-center">
                    <Users className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="font-poppins font-semibold text-xl text-foreground">
                    Wider Appeal
                  </h3>
                  <p className="font-poppins text-muted-foreground leading-relaxed">
                    Neutral, well-staged spaces appeal to a broader range of potential buyers.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-none shadow-soft">
                <CardContent className="p-8 space-y-4">
                  <div className="w-14 h-14 bg-accent/20 rounded-full flex items-center justify-center">
                    <Sparkles className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="font-poppins font-semibold text-xl text-foreground">
                    Highlight Features
                  </h3>
                  <p className="font-poppins text-muted-foreground leading-relaxed">
                    Strategic staging draws attention to your home's best features and minimizes problem areas.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Dylan's Staging Approach */}
        <section className="py-20 lg:py-32 bg-muted/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-foreground text-center mb-12">
                My Staging Approach
              </h2>

              <div className="space-y-8">
                <p className="font-poppins text-lg text-muted-foreground leading-relaxed text-center">
                  My background in staging and renovation gives me a trained eye for what works. I see beyond clutter and personal style to identify a home's true potential. More importantly, I understand buyer psychology — what catches their attention, what makes them linger, and what ultimately makes them say "yes."
                </p>

                <Card className="bg-card border-none shadow-soft">
                  <CardContent className="p-8 space-y-4">
                    <h3 className="font-poppins font-semibold text-2xl text-accent">
                      Initial Consultation
                    </h3>
                    <p className="font-poppins text-muted-foreground leading-relaxed">
                      I'll walk through your home room by room, taking notes on strengths to emphasize and areas that need attention. We'll discuss your timeline, budget, and goals.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-card border-none shadow-soft">
                  <CardContent className="p-8 space-y-4">
                    <h3 className="font-poppins font-semibold text-2xl text-accent">
                      Customized Staging Plan
                    </h3>
                    <p className="font-poppins text-muted-foreground leading-relaxed">
                      You'll receive a detailed, room-by-room action plan with specific recommendations for decluttering, rearranging, painting, repairs, and styling. I prioritize changes that offer the biggest impact for your investment.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-card border-none shadow-soft">
                  <CardContent className="p-8 space-y-4">
                    <h3 className="font-poppins font-semibold text-2xl text-accent">
                      Vendor Connections
                    </h3>
                    <p className="font-poppins text-muted-foreground leading-relaxed">
                      Need help implementing the plan? I have trusted relationships with painters, handymen, cleaners, and staging rental companies who can execute the vision efficiently and affordably.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-card border-none shadow-soft">
                  <CardContent className="p-8 space-y-4">
                    <h3 className="font-poppins font-semibold text-2xl text-accent">
                      Final Walkthrough & Styling
                    </h3>
                    <p className="font-poppins text-muted-foreground leading-relaxed">
                      Before photos are taken, I'll return for a final styling session to perfect the details — fresh flowers, strategic lighting, thoughtful accents — that make your home feel warm and inviting.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="py-20 lg:py-32 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-foreground text-center mb-12">
                Staging Services Include
              </h2>

              <div className="bg-accent/10 border-l-4 border-accent p-8 rounded-r-lg space-y-4">
                <ul className="space-y-4 font-poppins text-lg text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold text-xl">✓</span>
                    <span>Comprehensive room-by-room assessment and recommendations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold text-xl">✓</span>
                    <span>Decluttering and depersonalization guidance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold text-xl">✓</span>
                    <span>Furniture arrangement and space optimization</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold text-xl">✓</span>
                    <span>Color consultation and paint recommendations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold text-xl">✓</span>
                    <span>Lighting and accessory placement strategy</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold text-xl">✓</span>
                    <span>Curb appeal enhancement suggestions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold text-xl">✓</span>
                    <span>Pre-listing repair and improvement priorities</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold text-xl">✓</span>
                    <span>Coordination with professional photographers</span>
                  </li>
                </ul>
              </div>

              <p className="font-poppins text-center text-muted-foreground italic mt-8">
                Staging is included as part of my comprehensive seller services. Let's work together to showcase your home's full potential.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 lg:py-32 bg-gradient-to-br from-primary to-accent/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              Ready to Transform Your Space?
            </h2>
            <p className="font-poppins text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Let's schedule a staging consultation and create a plan to help your home shine.
            </p>
            <Button 
              asChild
              size="lg"
              className="bg-rose hover:bg-rose/90 text-rose-foreground font-poppins text-lg px-8 py-6"
            >
              <a href="https://calendar.app.google/SWazGvdTsxQ5QhQx5" target="_blank" rel="noopener noreferrer">
                Request a Staging Consultation
              </a>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HomeStaging;
