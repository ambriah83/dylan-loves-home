import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Martinez",
      role: "First-Time Buyer",
      content: "Dylan made my dream of homeownership a reality. As a single mom myself, I felt understood and supported every step of the way. She found me the perfect home in South Tampa.",
      rating: 5,
    },
    {
      name: "Michael & Jennifer Chen",
      role: "Relocating Family",
      content: "Moving from out of state was stressful, but Dylan made it seamless. Her local knowledge and design eye helped us find a home we truly love in Palm Harbor. Couldn't recommend her more!",
      rating: 5,
    },
    {
      name: "Robert Thompson",
      role: "Seller & Investor",
      content: "Dylan's staging expertise was invaluable. Our home sold in 8 days for $40K over asking! Her attention to detail and market knowledge is unmatched.",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="font-poppins text-accent font-semibold uppercase tracking-wider text-sm mb-3">
            Client Stories
          </p>
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-foreground mb-6">
            What Clients Say
          </h2>
          <p className="font-poppins text-lg text-muted-foreground">
            Real stories from real people who found home with my help.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-2xl shadow-soft hover:shadow-lifted transition-all duration-300"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              
              <p className="font-poppins text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              
              <div className="border-t border-border pt-4">
                <p className="font-poppins font-semibold text-foreground">
                  {testimonial.name}
                </p>
                <p className="font-poppins text-sm text-muted-foreground">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
