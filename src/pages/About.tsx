import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Award, Briefcase, GraduationCap, Heart } from "lucide-react";
import dylanPortrait from "@/assets/dylan-portrait.jpg";
import dylansFamily from "@/assets/dylans-family.jpg";

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
                    src={dylansFamily}
                    alt="Dylan Lawrence with her two sons"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="space-y-6">
                <h1 className="font-playfair text-5xl lg:text-6xl font-bold text-foreground">
                  Meet Dylan Lawrence
                </h1>
                <p className="font-poppins text-lg text-muted-foreground leading-relaxed">
                  When I bought my first home, I remember the mix of excitement and anxiety — the late-night Google searches, the questions I didn't know how to ask, the feeling that everyone else somehow knew more than I did. That experience changed how I see real estate forever.
                </p>
                <p className="font-poppins text-lg text-muted-foreground leading-relaxed">
                  It showed me what was missing: someone who could make the process feel human — someone calm, honest, and patient enough to walk beside you, not ahead of you.
                </p>
                <p className="font-poppins text-lg text-muted-foreground leading-relaxed font-semibold text-accent">
                  That's why I became a Realtor®.
                </p>
                <p className="font-poppins text-lg text-muted-foreground leading-relaxed">
                  Since 2004, I've proudly called Central Florida home and built my business helping first-time homebuyers, single women, and families across Tampa Bay navigate one of life's biggest milestones with confidence and clarity. My clients describe me as approachable, knowledgeable, and deeply invested — someone who listens first, teaches clearly, and makes sure no one feels lost or pressured along the way.
                </p>
                <p className="font-poppins text-lg text-muted-foreground leading-relaxed">
                  As a single mom, I understand what it means to juggle priorities, budgets, and big decisions. That's why I approach every transaction with empathy, structure, and transparency. I want my clients — especially women buying on their own — to feel safe, supported, and proud every step of the way.
                </p>
                <p className="font-poppins text-lg text-muted-foreground leading-relaxed">
                  My background in home staging and renovation helps me see potential and value where others might not, but my true focus is on people, not properties. I'm here to help you make choices that serve your goals, your lifestyle, and your peace of mind.
                </p>
                <p className="font-poppins text-lg text-muted-foreground leading-relaxed">
                  Whether you're buying your very first home, selling to move forward, or relocating to Tampa Bay, I'll guide you through the process with the same care I'd give my own family — clear communication, smart strategy, and genuine heart.
                </p>
                <p className="font-poppins text-lg text-muted-foreground leading-relaxed">
                  Because to me, real estate isn't about transactions; it's about transformation. It's about helping you move into the next chapter of your life feeling grounded, confident, and excited for what's next.
                </p>
                <p className="font-poppins text-lg text-muted-foreground leading-relaxed font-semibold text-accent">
                  Your story matters — and your home should reflect the strength and courage it took to build it.
                </p>
              </div>
            </div>
          </div>
        </section>


        {/* My Promise */}
        <section className="py-20 lg:py-32 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-foreground">
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
            <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-foreground text-center mb-16">
              Experience & Expertise
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              <div className="bg-card p-8 rounded-2xl shadow-soft text-center space-y-4">
                <Award className="w-12 h-12 text-accent mx-auto" />
                <h3 className="font-poppins font-semibold text-foreground text-lg">
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
                <h3 className="font-poppins font-semibold text-foreground text-lg">
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
                <h3 className="font-poppins font-semibold text-foreground text-lg">
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
                <h3 className="font-poppins font-semibold text-foreground text-lg">
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
            <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-foreground text-center mb-16">
              Who I Love to Help
            </h2>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="space-y-4">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center">
                  <span className="font-playfair text-2xl font-bold text-accent">1</span>
                </div>
                <h3 className="font-poppins font-semibold text-xl text-foreground">
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
                <h3 className="font-poppins font-semibold text-xl text-foreground">
                  Single Women & Moms
                </h3>
                <p className="font-poppins text-muted-foreground leading-relaxed">
                  Women buying on their own and single parents ready to build stability 
                  and create lasting security. I've walked this path myself — I understand 
                  the unique challenges and will guide you with clarity and care.
                </p>
              </div>

              <div className="space-y-4">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center">
                  <span className="font-playfair text-2xl font-bold text-accent">3</span>
                </div>
                <h3 className="font-poppins font-semibold text-xl text-foreground">
                  Relocating Families
                </h3>
                <p className="font-poppins text-muted-foreground leading-relaxed">
                  Moving to Tampa Bay from out of state? I'll be your trusted local 
                  guide, helping you find the perfect neighborhood, schools, and 
                  community for your family.
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

export default About;
