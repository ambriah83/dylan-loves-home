import { Heart, Home, Sparkles, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import dylanPortrait from "@/assets/dylan-headshot.jpg";

const AboutSection = () => {
  const values = [
    {
      icon: Heart,
      title: "Heart-Led Service",
      description: "I'm here to help you move with purpose — not pressure.",
    },
    {
      icon: Sparkles,
      title: "Design Expertise",
      description: "Certified home stager helping homes shine and sell.",
    },
    {
      icon: Home,
      title: "Local Knowledge",
      description: "Over 20 years of Tampa Bay experience and insights.",
    },
    {
      icon: Users,
      title: "Family Values",
      description: "Single mom of two boys — I understand life's priorities.",
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-lifted">
              <img
                src={dylanPortrait}
                alt="Dylan Lawrence, Tampa Bay Realtor"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground p-6 rounded-xl shadow-soft">
              <p className="font-playfair text-4xl font-bold">20+</p>
              <p className="font-poppins text-sm">Years in Florida</p>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <p className="font-poppins text-accent font-semibold uppercase tracking-wider text-sm mb-3">
                Meet Dylan
              </p>
              <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Your Partner in Finding Home
              </h2>
              <p className="font-poppins text-lg text-muted-foreground leading-relaxed mb-4">
                I'm <span className="text-accent font-semibold">Dylan Lawrence</span>, a <span className="text-accent font-semibold">Tampa Bay</span> Realtor® and proud single mom who believes every woman <span className="text-accent font-semibold">deserves to feel confident</span> about where she lives — and how she got there.
              </p>
              <p className="font-poppins text-lg text-muted-foreground leading-relaxed mb-4">
                Buying your first home can feel overwhelming, but it doesn't have to. I guide first-time buyers and families through each step with calm, clarity, and care — so you always know what's coming next.
              </p>
              <p className="font-poppins text-lg text-muted-foreground leading-relaxed mb-4">
                With over 20 years in Central Florida and a deep understanding of our local communities, I help my clients make informed, empowered decisions — not rushed ones. Whether you're finding your very first home or building your next chapter, I'll make sure the process feels simple, supportive, and worth celebrating.
              </p>
              <p className="font-poppins text-lg text-muted-foreground leading-relaxed">
                Because it's not just about buying a house — it's about building your foundation with confidence.
              </p>
            </div>

            {/* Values Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <div key={index} className="space-y-2">
                  <value.icon className="w-8 h-8 text-accent" />
                  <h3 className="font-poppins font-semibold text-foreground">
                    {value.title}
                  </h3>
                  <p className="font-poppins text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>

            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-poppins"
              asChild
            >
              <Link to="/about">Read My Full Story</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
