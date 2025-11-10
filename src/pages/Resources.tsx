import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FileDown, Home, Building2 } from "lucide-react";

const Resources = () => {
  const guides = [
    {
      title: "Buyer's Guide",
      description: "Everything you need to know about buying a home in Tampa Bay. From mortgage pre-approval to closing day, this comprehensive guide walks you through every step.",
      icon: Home,
      downloadUrl: "https://drive.google.com/uc?export=download&id=1kLvM7ADsSEtQ1ge2Xe0qaV2Sz_rnIcQE",
      color: "text-accent"
    },
    {
      title: "Seller's Guide",
      description: "A comprehensive guide to selling your home. Learn about pricing strategies, staging tips, marketing approaches, and navigating the closing process.",
      icon: Building2,
      downloadUrl: "https://drive.google.com/uc?export=download&id=1_0o98m_ao4H_wgRnF4KUqzsHudXuvCzp",
      color: "text-accent"
    }
  ];

  const handleDownload = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="bg-muted py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Resources for Buyers & Sellers
            </h1>
            <p className="font-poppins text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              Download our comprehensive guides to help you navigate your real estate journey with confidence
            </p>
          </div>
        </section>

        {/* Guides Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {guides.map((guide) => {
                const Icon = guide.icon;
                return (
                  <Card 
                    key={guide.title}
                    className="p-8 hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="flex flex-col h-full">
                      <div className={`${guide.color} mb-6`}>
                        <Icon size={48} strokeWidth={1.5} />
                      </div>
                      
                      <h3 className="font-playfair text-2xl font-bold text-foreground mb-4">
                        {guide.title}
                      </h3>
                      
                      <p className="font-poppins text-muted-foreground mb-6 flex-grow leading-relaxed">
                        {guide.description}
                      </p>
                      
                      <Button 
                        onClick={() => handleDownload(guide.downloadUrl)}
                        className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-poppins"
                      >
                        <FileDown className="mr-2" size={20} />
                        Download PDF Guide
                      </Button>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-muted py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Have Questions?
            </h2>
            <p className="font-poppins text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              I'm here to help you every step of the way. Let's connect and discuss how I can help you achieve your real estate goals.
            </p>
            <Button 
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                } else {
                  window.location.href = '/#contact';
                }
              }}
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-poppins"
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

export default Resources;
