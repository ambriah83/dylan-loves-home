import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-tampa-home-new.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0" style={{ background: 'var(--gradient-hero)' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <div className="max-w-2xl mx-auto space-y-12 animate-fade-in">
          <div className="space-y-6">
            <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-semibold text-white leading-tight">
              Your next move, made simple.
            </h1>
            
            <h2 className="font-poppins text-lg sm:text-xl lg:text-xl font-light text-white/90 leading-relaxed">
              From first home to forever home, I'll help you get there with ease.
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <a 
              href="https://dylan-lawrence.remax.com/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button 
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-poppins text-lg px-8 py-6 group"
              >
                Start Your Search
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <a 
              href="https://home-value-estimates.remax.com/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button 
                size="lg"
                variant="outline"
                className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 font-poppins text-lg px-8 py-6"
              >
                Get Your Home Value
              </Button>
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="pt-12 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/50 rounded-full mx-auto flex items-start justify-center p-2">
              <div className="w-1 h-3 bg-white/70 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
