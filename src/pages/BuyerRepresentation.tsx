import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Home, Search, FileText, ClipboardCheck, Key, Heart } from "lucide-react";

const BuyerRepresentation = () => {
  const handleContactClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 lg:py-32 bg-gradient-to-br from-primary to-accent/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-playfair text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Buyer Representation
            </h1>
            <p className="font-poppins text-xl lg:text-2xl text-primary-foreground/90 max-w-3xl mx-auto">
              Your trusted guide to finding and securing your dream home in Tampa Bay
            </p>
          </div>
        </section>

        {/* Intro */}
        <section className="py-16 lg:py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <p className="font-poppins text-lg text-muted-foreground leading-relaxed">
                Buying a home — especially for the first time — can feel overwhelming. There's so much to learn, so many decisions to make, and the stakes feel incredibly high. That's exactly why having someone in your corner matters.
              </p>
              <p className="font-poppins text-lg text-muted-foreground leading-relaxed">
                As your buyer's agent, I represent <span className="font-semibold text-accent">your</span> interests throughout the entire home-buying process. My job is to educate, advocate, and empower you to make confident, informed decisions every step of the way.
              </p>
            </div>
          </div>
        </section>

        {/* What to Expect */}
        <section className="py-20 lg:py-32 bg-muted/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-foreground text-center mb-16">
              What to Expect: The Home Buying Journey
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <Card className="bg-card border-none shadow-soft">
                <CardContent className="p-8 space-y-4">
                  <div className="w-14 h-14 bg-accent/20 rounded-full flex items-center justify-center">
                    <FileText className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="font-poppins font-semibold text-xl text-foreground">
                    1. Pre-Approval
                  </h3>
                  <p className="font-poppins text-muted-foreground leading-relaxed">
                    We'll connect you with trusted lenders to determine your budget and strengthen your offer when the time comes.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-none shadow-soft">
                <CardContent className="p-8 space-y-4">
                  <div className="w-14 h-14 bg-accent/20 rounded-full flex items-center justify-center">
                    <Search className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="font-poppins font-semibold text-xl text-foreground">
                    2. Home Search
                  </h3>
                  <p className="font-poppins text-muted-foreground leading-relaxed">
                    I'll curate listings that match your needs, schedule tours, and point out both potential and red flags along the way.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-none shadow-soft">
                <CardContent className="p-8 space-y-4">
                  <div className="w-14 h-14 bg-accent/20 rounded-full flex items-center justify-center">
                    <Home className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="font-poppins font-semibold text-xl text-foreground">
                    3. Making an Offer
                  </h3>
                  <p className="font-poppins text-muted-foreground leading-relaxed">
                    Together, we'll craft a strong, strategic offer that protects your interests while positioning you competitively.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-none shadow-soft">
                <CardContent className="p-8 space-y-4">
                  <div className="w-14 h-14 bg-accent/20 rounded-full flex items-center justify-center">
                    <ClipboardCheck className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="font-poppins font-semibold text-xl text-foreground">
                    4. Inspection & Due Diligence
                  </h3>
                  <p className="font-poppins text-muted-foreground leading-relaxed">
                    I'll guide you through inspections, appraisals, and negotiations to ensure you're making a sound investment.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-none shadow-soft">
                <CardContent className="p-8 space-y-4">
                  <div className="w-14 h-14 bg-accent/20 rounded-full flex items-center justify-center">
                    <Key className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="font-poppins font-semibold text-xl text-foreground">
                    5. Closing Day
                  </h3>
                  <p className="font-poppins text-muted-foreground leading-relaxed">
                    I'll walk you through every document, coordinate final details, and celebrate with you when you get the keys!
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-none shadow-soft">
                <CardContent className="p-8 space-y-4">
                  <div className="w-14 h-14 bg-accent/20 rounded-full flex items-center justify-center">
                    <Heart className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="font-poppins font-semibold text-xl text-foreground">
                    6. Beyond Closing
                  </h3>
                  <p className="font-poppins text-muted-foreground leading-relaxed">
                    My support doesn't end at closing. I'm here to help you settle in and answer questions as they come up.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Work With Dylan */}
        <section className="py-20 lg:py-32 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-foreground text-center mb-12">
                Why Work With Dylan?
              </h2>

              <div className="space-y-8">
                <div className="space-y-4">
                  <h3 className="font-poppins font-semibold text-2xl text-accent">
                    I Specialize in First-Time Buyers
                  </h3>
                  <p className="font-poppins text-lg text-muted-foreground leading-relaxed">
                    I know what it's like to feel uncertain or overwhelmed. I break down the process in plain language, answer every question (no matter how small), and make sure you feel confident at every stage.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="font-poppins font-semibold text-2xl text-accent">
                    I Champion Single Women & Moms
                  </h3>
                  <p className="font-poppins text-lg text-muted-foreground leading-relaxed">
                    As a single mom myself, I understand what it means to navigate big financial decisions on your own. I'll ensure you feel supported, heard, and empowered throughout the entire journey.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="font-poppins font-semibold text-2xl text-accent">
                    Transparent Communication
                  </h3>
                  <p className="font-poppins text-lg text-muted-foreground leading-relaxed">
                    No jargon, no pressure, no surprises. I believe in honest, clear communication so you always know exactly where you stand and what comes next.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="font-poppins font-semibold text-2xl text-accent">
                    Deep Local Knowledge
                  </h3>
                  <p className="font-poppins text-lg text-muted-foreground leading-relaxed">
                    With over 20 years in Central Florida, I know Tampa Bay's neighborhoods, schools, and market trends inside and out. I'll help you find areas that match your lifestyle and goals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* First-Time Buyer Programs */}
        <section className="py-20 lg:py-32 bg-muted/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-foreground text-center mb-12">
                First-Time Homebuyer Programs
              </h2>

              <div className="space-y-6">
                <p className="font-poppins text-lg text-muted-foreground leading-relaxed text-center mb-12">
                  Many of my clients are surprised to learn about the programs and assistance available to first-time buyers. Here are a few options we can explore together:
                </p>

                <Card className="bg-card border-none shadow-soft">
                  <CardContent className="p-8 space-y-3">
                    <h3 className="font-poppins font-semibold text-xl text-foreground">
                      Florida Hometown Heroes Program
                    </h3>
                    <p className="font-poppins text-muted-foreground leading-relaxed">
                      Special financing for teachers, healthcare workers, law enforcement, military members, and other essential service professionals. Offers low interest rates and reduced down payment requirements.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-card border-none shadow-soft">
                  <CardContent className="p-8 space-y-3">
                    <h3 className="font-poppins font-semibold text-xl text-foreground">
                      FHA Loans
                    </h3>
                    <p className="font-poppins text-muted-foreground leading-relaxed">
                      Federal Housing Administration loans allow down payments as low as 3.5% and are accessible to buyers with lower credit scores.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-card border-none shadow-soft">
                  <CardContent className="p-8 space-y-3">
                    <h3 className="font-poppins font-semibold text-xl text-foreground">
                      Down Payment Assistance Programs
                    </h3>
                    <p className="font-poppins text-muted-foreground leading-relaxed">
                      Various local and state programs provide grants or low-interest loans to help with down payments and closing costs.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-card border-none shadow-soft">
                  <CardContent className="p-8 space-y-3">
                    <h3 className="font-poppins font-semibold text-xl text-foreground">
                      Conventional Loans (3% Down)
                    </h3>
                    <p className="font-poppins text-muted-foreground leading-relaxed">
                      Some conventional loan programs now accept as little as 3% down for qualified first-time buyers.
                    </p>
                  </CardContent>
                </Card>

                <p className="font-poppins text-center text-muted-foreground italic pt-6">
                  I'll connect you with trusted lenders who can walk you through all available options and help you determine what makes the most sense for your situation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 lg:py-32 bg-gradient-to-br from-primary to-accent/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              Ready to Start Your Home Search?
            </h2>
            <p className="font-poppins text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Let's talk about your goals, your budget, and your dream home. No pressure — just possibilities.
            </p>
            <Button 
              asChild
              size="lg"
              className="bg-rose hover:bg-rose/90 text-rose-foreground font-poppins text-lg px-8 py-6"
            >
              <a href="https://calendar.app.google/SWazGvdTsxQ5QhQx5" target="_blank" rel="noopener noreferrer">
                Schedule a Consultation
              </a>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BuyerRepresentation;
