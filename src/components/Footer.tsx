import { Link } from "react-router-dom";
import { Instagram, Facebook, Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-playfair text-2xl font-bold">Dylan Lawrence</h3>
            <p className="font-poppins text-sm text-primary-foreground/80 leading-relaxed">
              Tampa Bay Realtor® making real estate beautiful and simple.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/dylsellsflorida" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="#" 
                className="hover:text-accent transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="#" 
                className="hover:text-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-poppins font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 font-poppins text-sm">
              <li><Link to="/about" className="hover:text-accent transition-colors">About Dylan</Link></li>
              <li><Link to="/properties" className="hover:text-accent transition-colors">Search Properties</Link></li>
              <li><Link to="/communities" className="hover:text-accent transition-colors">Communities</Link></li>
              <li><Link to="/resources" className="hover:text-accent transition-colors">Resources</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-poppins font-semibold mb-4">Services</h4>
            <ul className="space-y-2 font-poppins text-sm">
              <li>Buyer Representation</li>
              <li>Seller Services</li>
              <li>Home Staging</li>
              <li>Investment Properties</li>
              <li>Relocation Assistance</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-poppins font-semibold mb-4">Get In Touch</h4>
            <ul className="space-y-3 font-poppins text-sm">
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-accent" />
                <span>(727) XXX-XXXX</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-accent" />
                <a href="mailto:dylan@example.com" className="hover:text-accent transition-colors">
                  dylan@example.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8 space-y-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-poppins text-primary-foreground/70">
            <p>
              © {new Date().getFullYear()} Dylan Lawrence. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link to="/privacy" className="hover:text-accent transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-accent transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
          
          <div className="text-xs font-poppins text-primary-foreground/60 text-center md:text-left">
            <p className="mb-2">
              Dylan Lawrence | RE/MAX Realtec Group | Palm Harbor, Florida | License #SL3518205
            </p>
            <p>
              Equal Housing Opportunity. All information provided is deemed reliable but is not 
              guaranteed and should be independently verified.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
