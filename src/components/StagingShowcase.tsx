import stagingBefore1 from "@/assets/staging-before-1.png";
import stagingAfter1 from "@/assets/staging-after-1.png";
import stagingBefore2 from "@/assets/staging-before-2.jpg";
import stagingAfter2 from "@/assets/staging-after-2.png";

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
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Comparison Set 1 */}
            <div className="space-y-4">
              <div className="relative rounded-xl overflow-hidden shadow-lifted group">
                <img
                  src={stagingBefore1}
                  alt="Living room before professional staging - cluttered and dated"
                  className="w-full h-[300px] object-cover"
                />
                <div className="absolute top-4 left-4 bg-destructive/90 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <p className="font-poppins text-sm font-bold text-destructive-foreground uppercase tracking-wider">
                    Before
                  </p>
                </div>
              </div>
              <div className="relative rounded-xl overflow-hidden shadow-lifted group">
                <img
                  src={stagingAfter1}
                  alt="Living room after professional staging - clean, modern, and inviting"
                  className="w-full h-[300px] object-cover"
                />
                <div className="absolute top-4 left-4 bg-accent/90 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <p className="font-poppins text-sm font-bold text-accent-foreground uppercase tracking-wider">
                    After
                  </p>
                </div>
              </div>
            </div>

            {/* Comparison Set 2 */}
            <div className="space-y-4">
              <div className="relative rounded-xl overflow-hidden shadow-lifted group">
                <img
                  src={stagingBefore2}
                  alt="Bedroom before professional staging - messy and uninviting"
                  className="w-full h-[300px] object-cover"
                />
                <div className="absolute top-4 left-4 bg-destructive/90 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <p className="font-poppins text-sm font-bold text-destructive-foreground uppercase tracking-wider">
                    Before
                  </p>
                </div>
              </div>
              <div className="relative rounded-xl overflow-hidden shadow-lifted group">
                <img
                  src={stagingAfter2}
                  alt="Bedroom after professional staging - organized, styled, and move-in ready"
                  className="w-full h-[300px] object-cover"
                />
                <div className="absolute top-4 left-4 bg-accent/90 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <p className="font-poppins text-sm font-bold text-accent-foreground uppercase tracking-wider">
                    After
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mb-16">
            <p className="font-poppins text-lg italic text-muted-foreground">
              Professional staging transforms ordinary spaces into buyer magnets
            </p>
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
