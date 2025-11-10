import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0" style={{ background: 'var(--gradient-coastal)' }}></div>
      <div className="absolute inset-0 bg-accent/5"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="font-playfair text-4xl lg:text-6xl font-bold text-foreground">
            Let's Make Your Move Beautiful
          </h2>
          
          <p className="font-poppins text-xl text-foreground/80 max-w-2xl mx-auto leading-relaxed">
            Whether you're buying, selling, or investing — I'm here to guide you 
            with expertise, empathy, and a commitment to making it feel easy.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button 
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-poppins text-lg px-8 py-6 group shadow-lifted"
            >
              <a href="https://calendar.app.google/SWazGvdTsxQ5QhQx5" target="_blank" rel="noopener noreferrer">
                Schedule a Consultation
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button 
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-poppins text-lg px-8 py-6"
            >
              <a href="https://dylan-lawrence.remax.com/" target="_blank" rel="noopener noreferrer">
                Explore Properties
              </a>
            </Button>
          </div>

          <div className="pt-8 flex flex-wrap justify-center gap-8 text-foreground/70">
            <div className="text-center">
              <p className="font-playfair text-3xl font-bold">5+</p>
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
