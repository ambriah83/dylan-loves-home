import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Home, Building, Wrench, DollarSign, LineChart } from "lucide-react";

const InvestmentProperties = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 lg:py-32 bg-gradient-to-br from-primary to-accent/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-playfair text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Investment Properties
            </h1>
            <p className="font-poppins text-xl lg:text-2xl text-primary-foreground/90 max-w-3xl mx-auto">
              Build wealth through strategic real estate investments in Tampa Bay
            </p>
          </div>
        </section>

        {/* Intro */}
        <section className="py-16 lg:py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <p className="font-poppins text-lg text-muted-foreground leading-relaxed">
                Real estate has long been one of the most reliable paths to building long-term wealth. Whether you're looking to generate passive income, diversify your portfolio, or build equity over time, investment properties can be a powerful financial tool.
              </p>
              <p className="font-poppins text-lg text-muted-foreground leading-relaxed">
                The Tampa Bay area offers strong fundamentals for real estate investors — steady population growth, robust rental demand, and diverse property types that fit various investment strategies.
              </p>
            </div>
          </div>
        </section>

        {/* Why Tampa Bay */}
        <section className="py-20 lg:py-32 bg-muted/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-foreground text-center mb-16">
              Why Invest in Tampa Bay?
            </h2>

            <div className="max-w-4xl mx-auto space-y-8">
              <Card className="bg-card border-none shadow-soft">
                <CardContent className="p-8 space-y-4">
                  <TrendingUp className="w-10 h-10 text-accent" />
                  <h3 className="font-poppins font-semibold text-2xl text-foreground">
                    Strong Market Fundamentals
                  </h3>
                  <p className="font-poppins text-muted-foreground leading-relaxed">
                    Tampa Bay consistently ranks among the fastest-growing metro areas in the country. Population growth, job creation, and infrastructure development all contribute to sustained real estate appreciation.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-none shadow-soft">
                <CardContent className="p-8 space-y-4">
                  <DollarSign className="w-10 h-10 text-accent" />
                  <h3 className="font-poppins font-semibold text-2xl text-foreground">
                    High Rental Demand
                  </h3>
                  <p className="font-poppins text-muted-foreground leading-relaxed">
                    With people relocating to Florida from higher-cost states, rental demand remains strong. Vacation rentals near beaches and attractions also generate impressive returns.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-none shadow-soft">
                <CardContent className="p-8 space-y-4">
                  <LineChart className="w-10 h-10 text-accent" />
                  <h3 className="font-poppins font-semibold text-2xl text-foreground">
                    Appreciation Potential
                  </h3>
                  <p className="font-poppins text-muted-foreground leading-relaxed">
                    Historical data shows consistent property value appreciation in the Tampa Bay area, particularly in up-and-coming neighborhoods with new development.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-none shadow-soft">
                <CardContent className="p-8 space-y-4">
                  <Home className="w-10 h-10 text-accent" />
                  <h3 className="font-poppins font-semibold text-2xl text-foreground">
                    Diverse Property Options
                  </h3>
                  <p className="font-poppins text-muted-foreground leading-relaxed">
                    From single-family rentals to multi-family properties, vacation homes, and fix-and-flip opportunities, Tampa Bay offers investment options for every strategy and budget.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Types of Investment Properties */}
        <section className="py-20 lg:py-32 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-foreground text-center mb-16">
              Types of Investment Properties
            </h2>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <Card className="bg-card border-none shadow-soft">
                <CardContent className="p-8 space-y-4">
                  <Home className="w-10 h-10 text-accent" />
                  <h3 className="font-poppins font-semibold text-xl text-foreground">
                    Single-Family Rentals
                  </h3>
                  <p className="font-poppins text-muted-foreground leading-relaxed">
                    Great for first-time investors. Easier to finance, manage, and sell. Steady rental income with long-term appreciation potential.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-none shadow-soft">
                <CardContent className="p-8 space-y-4">
                  <Building className="w-10 h-10 text-accent" />
                  <h3 className="font-poppins font-semibold text-xl text-foreground">
                    Multi-Family Properties
                  </h3>
                  <p className="font-poppins text-muted-foreground leading-relaxed">
                    Duplexes, triplexes, and small apartment buildings offer multiple income streams from a single property, reducing vacancy risk.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-none shadow-soft">
                <CardContent className="p-8 space-y-4">
                  <TrendingUp className="w-10 h-10 text-accent" />
                  <h3 className="font-poppins font-semibold text-xl text-foreground">
                    Vacation Rentals
                  </h3>
                  <p className="font-poppins text-muted-foreground leading-relaxed">
                    Short-term rentals near beaches, theme parks, and attractions can generate higher income but require more active management.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-none shadow-soft">
                <CardContent className="p-8 space-y-4">
                  <Wrench className="w-10 h-10 text-accent" />
                  <h3 className="font-poppins font-semibold text-xl text-foreground">
                    Fix-and-Flip Properties
                  </h3>
                  <p className="font-poppins text-muted-foreground leading-relaxed">
                    Purchase distressed properties, renovate strategically, and sell for profit. Requires more capital and expertise but offers faster returns.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Dylan's Investor Services */}
        <section className="py-20 lg:py-32 bg-muted/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-foreground text-center mb-12">
                How I Help Investors
              </h2>

              <div className="space-y-8">
                <p className="font-poppins text-lg text-muted-foreground leading-relaxed text-center">
                  My background in home staging and renovation gives me a unique advantage when evaluating investment properties. I can see past cosmetic issues to identify genuine value and potential, and I'll help you avoid costly mistakes.
                </p>

                <Card className="bg-card border-none shadow-soft">
                  <CardContent className="p-8 space-y-4">
                    <h3 className="font-poppins font-semibold text-2xl text-accent">
                      Market Analysis & Property Sourcing
                    </h3>
                    <p className="font-poppins text-muted-foreground leading-relaxed">
                      I'll identify properties with strong investment potential based on your strategy, budget, and risk tolerance. I analyze comparable sales, rental rates, and neighborhood trends to ensure you're making a smart purchase.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-card border-none shadow-soft">
                  <CardContent className="p-8 space-y-4">
                    <h3 className="font-poppins font-semibold text-2xl text-accent">
                      Rental Income Projections
                    </h3>
                    <p className="font-poppins text-muted-foreground leading-relaxed">
                      I'll provide realistic rental income estimates based on current market data, helping you calculate cash flow, ROI, and break-even timelines before you commit.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-card border-none shadow-soft">
                  <CardContent className="p-8 space-y-4">
                    <h3 className="font-poppins font-semibold text-2xl text-accent">
                      Renovation & Improvement Guidance
                    </h3>
                    <p className="font-poppins text-muted-foreground leading-relaxed">
                      For fix-and-flip or value-add investments, I'll help you prioritize improvements that maximize ROI. I can also connect you with trusted contractors and property managers.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-card border-none shadow-soft">
                  <CardContent className="p-8 space-y-4">
                    <h3 className="font-poppins font-semibold text-2xl text-accent">
                      Long-Term Strategy & Portfolio Growth
                    </h3>
                    <p className="font-poppins text-muted-foreground leading-relaxed">
                      Whether you're buying your first rental or your tenth, I'll help you build a strategic plan for growing your real estate portfolio over time.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Getting Started */}
        <section className="py-20 lg:py-32 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-foreground text-center mb-12">
                Getting Started as an Investor
              </h2>

              <div className="space-y-6">
                <Card className="bg-accent/10 border-l-4 border-accent p-8 rounded-r-lg">
                  <h3 className="font-poppins font-semibold text-xl text-foreground mb-3">
                    Financing Options for Investors
                  </h3>
                  <ul className="space-y-2 font-poppins text-muted-foreground">
                    <li>• <span className="font-semibold">Conventional Investment Loans</span> — Typically require 15-25% down</li>
                    <li>• <span className="font-semibold">FHA Loans (House Hacking)</span> — Live in one unit, rent the others with as little as 3.5% down</li>
                    <li>• <span className="font-semibold">Hard Money Loans</span> — Short-term financing for fix-and-flip projects</li>
                    <li>• <span className="font-semibold">1031 Exchanges</span> — Defer capital gains taxes by reinvesting profits into new properties</li>
                  </ul>
                </Card>

                <p className="font-poppins text-lg text-muted-foreground leading-relaxed">
                  Not sure where to start? I'll connect you with experienced lenders who specialize in investment property financing and can help you understand your options.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 lg:py-32 bg-gradient-to-br from-primary to-accent/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              Ready to Start Building Wealth?
            </h2>
            <p className="font-poppins text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Let's discuss your investment goals and find properties that align with your strategy.
            </p>
            <Button 
              asChild
              size="lg"
              className="bg-rose hover:bg-rose/90 text-rose-foreground font-poppins text-lg px-8 py-6"
            >
              <a href="https://calendar.app.google/SWazGvdTsxQ5QhQx5" target="_blank" rel="noopener noreferrer">
                Discuss Your Investment Goals
              </a>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default InvestmentProperties;
