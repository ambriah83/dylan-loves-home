import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-primary via-primary to-accent/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="font-playfair text-4xl lg:text-6xl font-bold text-primary-foreground">
            Let's Make Your Move Beautiful
          </h2>
          
          <p className="font-poppins text-xl text-primary-foreground/90 max-w-2xl mx-auto leading-relaxed">
            Whether you're buying, selling, or investing — I'm here to guide you 
            with expertise, empathy, and a commitment to making it feel easy.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button 
              size="lg"
              className="bg-rose hover:bg-rose/90 text-rose-foreground font-poppins text-lg px-8 py-6 group shadow-lifted"
            >
              Schedule a Consultation
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20 font-poppins text-lg px-8 py-6"
            >
              Explore Properties
            </Button>
          </div>

          <div className="pt-8 flex flex-wrap justify-center gap-8 text-primary-foreground/80">
            <div className="text-center">
              <p className="font-playfair text-3xl font-bold">20+</p>
              <p className="font-poppins text-sm">Years Experience</p>
            </div>
            <div className="text-center">
              <p className="font-playfair text-3xl font-bold">500+</p>
              <p className="font-poppins text-sm">Happy Clients</p>
            </div>
            <div className="text-center">
              <p className="font-playfair text-3xl font-bold">$200M+</p>
              <p className="font-poppins text-sm">In Sales</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
