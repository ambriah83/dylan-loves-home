import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

export default function Properties() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/#contact';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="pt-32 pb-24 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-6xl font-playfair font-bold text-foreground mb-6">
            Featured Properties
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Explore exceptional homes in Tampa Bay's most desirable neighborhoods. 
            From waterfront estates to urban condos, I'll help you find your perfect property.
          </p>
          
          <div className="bg-muted/30 rounded-lg p-12 mt-12">
            <h2 className="text-2xl font-playfair font-semibold text-foreground mb-4">
              Coming Soon
            </h2>
            <p className="text-muted-foreground mb-8">
              Our featured properties showcase is currently being updated. 
              In the meantime, I'd love to discuss your property needs personally.
            </p>
            <Button 
              size="lg" 
              onClick={scrollToContact}
              className="text-lg px-8"
            >
              Schedule a Consultation
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
