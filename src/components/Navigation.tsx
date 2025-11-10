import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Properties", path: "/properties" },
    { name: "Blog", path: "/blog" },
    { name: "Resources", path: "/resources" },
  ];

  const serviceLinks = [
    { name: "Buyer Representation", path: "/services/buyer-representation" },
    { name: "Seller Services", path: "/services/seller-services" },
    { name: "Home Staging", path: "/services/home-staging" },
    { name: "Investment Properties", path: "/services/investment-properties" },
    { name: "Relocation Assistance", path: "/services/relocation-assistance" },
  ];

  const isActive = (path: string) => location.pathname === path;

  const handleContactClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="font-playfair text-2xl font-semibold text-foreground">
              Dylan Lawrence
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-poppins text-sm font-medium transition-colors hover:text-accent ${
                  isActive(link.path) ? "text-accent" : "text-foreground"
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="font-poppins text-sm font-medium bg-transparent hover:bg-transparent data-[state=open]:bg-transparent">
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[240px] gap-1 p-2">
                      {serviceLinks.map((service) => (
                        <li key={service.path}>
                          <NavigationMenuLink asChild>
                            <Link
                              to={service.path}
                              className={`block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground font-poppins text-sm ${
                                isActive(service.path) ? "bg-accent/10 text-accent font-medium" : ""
                              }`}
                            >
                              {service.name}
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Button onClick={handleContactClick} className="bg-accent hover:bg-accent/90 text-accent-foreground font-poppins">
              Let's Connect
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground hover:text-accent transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block font-poppins text-sm font-medium py-2 transition-colors hover:text-accent ${
                  isActive(link.path) ? "text-accent" : "text-foreground"
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            <div className="space-y-2">
              <div className="font-poppins text-sm font-semibold text-foreground py-2">
                Services
              </div>
              {serviceLinks.map((service) => (
                <Link
                  key={service.path}
                  to={service.path}
                  onClick={() => setIsOpen(false)}
                  className={`block font-poppins text-sm font-medium py-2 pl-4 transition-colors hover:text-accent ${
                    isActive(service.path) ? "text-accent" : "text-foreground"
                  }`}
                >
                  {service.name}
                </Link>
              ))}
            </div>

            <Button onClick={handleContactClick} className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-poppins">
              Let's Connect
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
