import stagingComparison from "@/assets/staging-before-after.jpg";

const StagingShowcase = () => {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="font-poppins text-accent font-semibold uppercase tracking-wider text-sm mb-3">
            The Power of Presentation
          </p>
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Design That Sells
          </h2>
          <p className="font-poppins text-lg text-foreground">
            As a certified home stager, I help sellers transform their homes to attract 
            top-dollar offers — and help buyers see the potential in every property.
          </p>
        </div>

        {/* Before/After Staging Showcase */}
        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-xl overflow-hidden shadow-lifted mb-16">
            <img
              src={stagingComparison}
              alt="Professional home staging before and after comparison showing dramatic transformation"
              className="w-full h-auto object-cover"
            />
            <div className="absolute bottom-4 left-4 bg-background/95 backdrop-blur-sm px-4 py-2 rounded-lg">
              <p className="font-poppins text-sm italic text-foreground">
                Small changes create dramatic results
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="text-center space-y-3 p-6 bg-card rounded-xl shadow-soft">
              <p className="font-playfair text-4xl font-bold text-accent">87%</p>
              <p className="font-poppins text-sm text-foreground">
                Staged homes sell faster than non-staged homes
              </p>
            </div>
            <div className="text-center space-y-3 p-6 bg-card rounded-xl shadow-soft">
              <p className="font-playfair text-4xl font-bold text-accent">20%</p>
              <p className="font-poppins text-sm text-foreground">
                Average increase in sale price with professional staging
              </p>
            </div>
            <div className="text-center space-y-3 p-6 bg-card rounded-xl shadow-soft">
              <p className="font-playfair text-4xl font-bold text-accent">100%</p>
              <p className="font-poppins text-sm text-foreground">
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
