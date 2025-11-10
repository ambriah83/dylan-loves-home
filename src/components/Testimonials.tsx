import { useState } from "react";
import { Star, ExternalLink } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, CarouselDots } from "@/components/ui/carousel";
import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/button";
import chelseaImg from "@/assets/client-chelsea-new.jpg";
import davidGeorgeImg from "@/assets/client-david-george-new.jpg";
import paintedSoldierImg from "@/assets/client-painted-soldier-new.png";
import jessicaMartinImg from "@/assets/client-jessica-martin-new.jpg";

const Testimonials = () => {
  const isMobile = useIsMobile();
  const [expandedReviews, setExpandedReviews] = useState<number[]>([]);
  const MAX_LENGTH = 150;

  const toggleReview = (index: number) => {
    setExpandedReviews(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + "...";
  };
  const testimonials = [
    {
      name: "Chelsea",
      role: "Seller & Buyer",
      content: "Dylan was nothing but amazing! I was selling my home to move to South Carolina. She was there every step of the way, answered all my crazy questions and walked me through the process. Not only did she sell my home but she stepped in when I was having a challenge with my realtor in SC and helped me find one that fit my needs.",
      rating: 5,
      image: chelseaImg,
    },
    {
      name: "The Painted Soldier",
      role: "Home Buyers",
      content: "Dylan was absolutely amazing!! She handled my wife and my stress like a champ. She got us in the home that we wanted in 15 days, nearly from day one. Dylan is fantastic and I highly recommend her. Thank you Dylan, you are a Real Estate Rockstar.",
      rating: 5,
      image: paintedSoldierImg,
    },
    {
      name: "Jessica Martin",
      role: "Out of State Seller",
      content: "I hired Dylan to sell my house while I was living out of state. She was always super responsive and communicative, and she was honest, personable, fair, and straightforward. Dylan also personally worked tirelessly on getting the property ready for listing since I wasn't there to do it.",
      rating: 5,
      image: jessicaMartinImg,
    },
    {
      name: "David George",
      role: "Remote Buyer",
      content: "Dylan helped me find my dream home. As a remote buyer, I was very pleased with how easy it was to work with Dylan. She visited the homes for live video tours. After reviewing several options, we narrowed down and put in a successful offer! You won't find a harder working agent.",
      rating: 5,
      image: davidGeorgeImg,
    },
  ];

  return (
    <section className="pt-12 pb-20 lg:pt-16 lg:pb-32 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="font-poppins text-accent font-semibold uppercase tracking-wider text-sm mb-3">
            Client Stories
          </p>
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-foreground mb-6">
            What Clients Say
          </h2>
          <p className="font-poppins text-lg text-foreground">
            Real stories from real people who found home with my help.
          </p>
        </div>

        {isMobile ? (
          <Carousel opts={{ align: "start", loop: true }} className="w-full max-w-sm mx-auto">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <div className="bg-card p-8 rounded-2xl shadow-soft h-full flex flex-col">
                    <div className="flex flex-col items-center mb-6">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-48 h-48 rounded-full object-cover object-top mb-4 border-4 border-primary/10"
                      />
                      <div className="flex gap-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex-1 mb-6">
                      <p className="font-poppins text-foreground leading-relaxed text-sm">
                        "{expandedReviews.includes(index) ? testimonial.content : truncateText(testimonial.content, MAX_LENGTH)}"
                      </p>
                      {testimonial.content.length > MAX_LENGTH && (
                        <Button
                          variant="link"
                          onClick={() => toggleReview(index)}
                          className="p-0 h-auto font-poppins text-accent text-sm mt-2"
                        >
                          {expandedReviews.includes(index) ? "Read less" : "Read more"}
                        </Button>
                      )}
                    </div>
                    
                    <div className="border-t border-border pt-4 text-center">
                      <p className="font-poppins font-semibold text-foreground">
                        {testimonial.name}
                      </p>
                      <p className="font-poppins text-sm text-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden" />
            <CarouselNext className="hidden" />
            <CarouselDots />
          </Carousel>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-card p-8 rounded-2xl shadow-soft hover:shadow-lifted transition-all duration-300 h-full flex flex-col"
              >
                <div className="flex flex-col items-center mb-6">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-48 h-48 rounded-full object-cover object-top mb-4 border-4 border-primary/10"
                  />
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                    ))}
                  </div>
                </div>
                
                <div className="flex-1 mb-6">
                  <p className="font-poppins text-foreground leading-relaxed text-sm">
                    "{expandedReviews.includes(index) ? testimonial.content : truncateText(testimonial.content, MAX_LENGTH)}"
                  </p>
                  {testimonial.content.length > MAX_LENGTH && (
                    <Button
                      variant="link"
                      onClick={() => toggleReview(index)}
                      className="p-0 h-auto font-poppins text-accent text-sm mt-2"
                    >
                      {expandedReviews.includes(index) ? "Read less" : "Read more"}
                    </Button>
                  )}
                </div>
                
                <div className="border-t border-border pt-4 text-center">
                  <p className="font-poppins font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="font-poppins text-sm text-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* View All Reviews Link */}
        <div className="text-center mt-8">
          <a 
            href="https://maps.app.goo.gl/b438xaT79vG7PpBH6" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-poppins text-sm text-foreground hover:text-accent transition-colors"
          >
            <Star className="w-4 h-4" />
            See all reviews on Google
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

        {/* Leave a Review CTA */}
        <div className="max-w-2xl mx-auto mt-16">
          <div className="bg-accent/10 border border-accent/20 rounded-2xl p-8 md:p-12 text-center">
            <h3 className="font-playfair text-3xl md:text-4xl font-bold text-foreground mb-4">
              Love Working with Dylan?
            </h3>
            <p className="font-poppins text-foreground mb-8 text-lg">
              Share your experience and help others find their dream home
            </p>
            <Button 
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90 text-white font-poppins font-semibold px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              <a 
                href="https://g.page/r/CUojRIUOiZ_XEBM/review" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3"
              >
                <Star className="w-5 h-5 fill-white" />
                Leave a Google Review
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
