import kitchen1 from "@/assets/kitchen-1.jpg";
import kitchen2 from "@/assets/kitchen-2.jpg";

const StagingShowcase = () => {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="font-poppins text-accent font-semibold uppercase tracking-wider text-sm mb-3">
            The Power of Presentation
          </p>
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-primary mb-6">
            Design That Sells
          </h2>
          <p className="font-poppins text-lg text-muted-foreground">
            As a certified home stager, I help sellers transform their homes to attract 
            top-dollar offers — and help buyers see the potential in every property.
          </p>
        </div>

        {/* Kitchen Portfolio Showcase */}
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            <div className="relative rounded-2xl overflow-hidden shadow-lifted group">
              <img
                src={kitchen1}
                alt="Beautifully designed kitchen with sage green cabinets and warm wood accents"
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-lifted group">
              <img
                src={kitchen2}
                alt="Elegant modern kitchen featuring marble countertops and brass fixtures"
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="text-center space-y-3 p-6 bg-card rounded-xl shadow-soft">
              <p className="font-playfair text-4xl font-bold text-accent">87%</p>
              <p className="font-poppins text-sm text-muted-foreground">
                Staged homes sell faster than non-staged homes
              </p>
            </div>
            <div className="text-center space-y-3 p-6 bg-card rounded-xl shadow-soft">
              <p className="font-playfair text-4xl font-bold text-accent">20%</p>
              <p className="font-poppins text-sm text-muted-foreground">
                Average increase in sale price with professional staging
              </p>
            </div>
            <div className="text-center space-y-3 p-6 bg-card rounded-xl shadow-soft">
              <p className="font-playfair text-4xl font-bold text-accent">100%</p>
              <p className="font-poppins text-sm text-muted-foreground">
                Commitment to making your home look its absolute best
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StagingShowcase;
