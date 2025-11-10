import ConsultationForm from "./ConsultationForm";

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-4">
            Request a Free Consultation
          </h2>
          <p className="text-lg text-foreground max-w-2xl mx-auto">
            Ready to buy or sell? Let's discuss your real estate goals and how I can help you achieve them.
          </p>
        </div>
        
        <ConsultationForm />
      </div>
    </section>
  );
}
