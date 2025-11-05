import { Heart, Home, Sparkles, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
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
              <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-primary mb-6">
                Your Partner in Finding Home
              </h2>
              <p className="font-poppins text-lg text-muted-foreground leading-relaxed mb-4">
                I'm Dylan Lawrence, a Tampa Bay Realtor® and single mom of two amazing boys. 
                I built my career while raising my family, learning to balance life's priorities 
                with grace and determination.
              </p>
              <p className="font-poppins text-lg text-muted-foreground leading-relaxed">
                I combine real estate expertise with certified home staging skills to help my 
                clients see possibilities. Whether you're buying your first home, relocating to 
                Florida, or investing in property — I'm here to make it beautiful and simple.
              </p>
            </div>

            {/* Values Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <div key={index} className="space-y-2">
                  <value.icon className="w-8 h-8 text-accent" />
                  <h3 className="font-poppins font-semibold text-primary">
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
            >
              Read My Full Story
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
