import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

export default function Communities() {
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
            Tampa Bay Communities
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Discover the unique character and lifestyle of Tampa Bay's diverse communities. 
            From historic neighborhoods to modern developments, find where you belong.
          </p>
          
          <div className="bg-muted/30 rounded-lg p-12 mt-12">
            <h2 className="text-2xl font-playfair font-semibold text-foreground mb-4">
              Coming Soon
            </h2>
            <p className="text-muted-foreground mb-8">
              Our comprehensive community guide is being prepared. 
              Let's connect to discuss which Tampa Bay neighborhoods align with your lifestyle.
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
