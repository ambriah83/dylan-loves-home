import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Award, Briefcase, GraduationCap, Heart } from "lucide-react";
import dylanPortrait from "@/assets/dylan-portrait.jpg";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 lg:py-32 bg-muted/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="relative">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-lifted">
                  <img
                    src={dylanPortrait}
                    alt="Dylan Lawrence"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="space-y-6">
                <h1 className="font-playfair text-5xl lg:text-6xl font-bold text-primary">
                  Meet Dylan
                </h1>
                <p className="font-poppins text-xl text-muted-foreground leading-relaxed">
                  I'm Dylan Lawrence — a Tampa Bay Realtor®, certified home stager, 
                  and proud single mom of two amazing boys.
                </p>
                <p className="font-poppins text-lg text-muted-foreground leading-relaxed">
                  For over 20 years, I've called Florida home. I built my real estate 
                  career while raising my family, learning firsthand how to balance 
                  life's biggest priorities with grace, determination, and a whole lot 
                  of heart.
                </p>
                <p className="font-poppins text-lg text-muted-foreground leading-relaxed">
                  Real estate isn't just about transactions for me — it's about 
                  transformation. Whether you're a first-time buyer ready to invest 
                  in yourself, a family relocating to our beautiful Tampa Bay area, 
                  or an investor seeking your next opportunity, I'm here to make the 
                  process feel easy, empowering, and even beautiful.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* My Promise */}
        <section className="py-20 lg:py-32 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-primary">
                My Promise to You
              </h2>
              <p className="font-playfair text-2xl italic text-accent">
                "I'm here to help you move with purpose — not pressure."
              </p>
              <p className="font-poppins text-lg text-muted-foreground leading-relaxed">
                I believe in education, communication, and empowerment. I'll walk you 
                through every step, answer every question, and make sure you feel 
                confident in your decisions. My goal isn't just to help you buy or 
                sell a house — it's to help you find home.
              </p>
            </div>
          </div>
        </section>

        {/* Experience & Credentials */}
        <section className="py-20 lg:py-32 bg-muted/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-primary text-center mb-16">
              Experience & Expertise
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              <div className="bg-card p-8 rounded-2xl shadow-soft text-center space-y-4">
                <Award className="w-12 h-12 text-accent mx-auto" />
                <h3 className="font-poppins font-semibold text-primary text-lg">
                  Licensed Realtor®
                </h3>
                <p className="font-poppins text-sm text-muted-foreground">
                  RE/MAX Realtec Group
                  <br />
                  License #SL3518205
                </p>
              </div>

              <div className="bg-card p-8 rounded-2xl shadow-soft text-center space-y-4">
                <GraduationCap className="w-12 h-12 text-accent mx-auto" />
                <h3 className="font-poppins font-semibold text-primary text-lg">
                  Certified Home Stager
                </h3>
                <p className="font-poppins text-sm text-muted-foreground">
                  New York Institute of
                  <br />
                  Art & Design
                </p>
              </div>

              <div className="bg-card p-8 rounded-2xl shadow-soft text-center space-y-4">
                <Briefcase className="w-12 h-12 text-accent mx-auto" />
                <h3 className="font-poppins font-semibold text-primary text-lg">
                  20+ Years
                </h3>
                <p className="font-poppins text-sm text-muted-foreground">
                  Florida resident with deep
                  <br />
                  local market knowledge
                </p>
              </div>

              <div className="bg-card p-8 rounded-2xl shadow-soft text-center space-y-4">
                <Heart className="w-12 h-12 text-accent mx-auto" />
                <h3 className="font-poppins font-semibold text-primary text-lg">
                  Family First
                </h3>
                <p className="font-poppins text-sm text-muted-foreground">
                  Single mom who understands
                  <br />
                  life's real priorities
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Who I Help */}
        <section className="py-20 lg:py-32 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-primary text-center mb-16">
              Who I Love to Help
            </h2>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="space-y-4">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center">
                  <span className="font-playfair text-2xl font-bold text-accent">1</span>
                </div>
                <h3 className="font-poppins font-semibold text-xl text-primary">
                  First-Time Buyers
                </h3>
                <p className="font-poppins text-muted-foreground leading-relaxed">
                  Especially single women and single parents ready to invest in 
                  themselves and build equity. I've been there — I know what it 
                  takes, and I'll guide you every step.
                </p>
              </div>

              <div className="space-y-4">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center">
                  <span className="font-playfair text-2xl font-bold text-accent">2</span>
                </div>
                <h3 className="font-poppins font-semibold text-xl text-primary">
                  Relocating Families
                </h3>
                <p className="font-poppins text-muted-foreground leading-relaxed">
                  Moving to Tampa Bay from out of state? I'll be your trusted local 
                  guide, helping you find the perfect neighborhood, schools, and 
                  community for your family.
                </p>
              </div>

              <div className="space-y-4">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center">
                  <span className="font-playfair text-2xl font-bold text-accent">3</span>
                </div>
                <h3 className="font-poppins font-semibold text-xl text-primary">
                  Investors & Sellers
                </h3>
                <p className="font-poppins text-muted-foreground leading-relaxed">
                  Design-minded clients who appreciate presentation, staging, and 
                  strategy. Let's maximize your ROI and make your property shine.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 lg:py-32 bg-gradient-to-br from-primary to-accent/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              Ready to Get Started?
            </h2>
            <p className="font-poppins text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Let's connect and talk about your goals. No pressure — just possibilities.
            </p>
            <Button 
              size="lg"
              className="bg-rose hover:bg-rose/90 text-rose-foreground font-poppins text-lg px-8 py-6"
            >
              Schedule a Consultation
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
