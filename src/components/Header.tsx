import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToForm = () => {
    document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-md border-b border-primary-foreground/10">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gold-gradient flex items-center justify-center shadow-gold">
              <span className="text-primary font-bold text-lg">SG</span>
            </div>
            <span className="font-display font-bold text-xl text-primary-foreground hidden sm:block">
              SG Grant Consultancy
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#values" className="text-sm text-primary-foreground/70 hover:text-gold transition-colors">
              Why Us
            </a>
            <a href="#coverage" className="text-sm text-primary-foreground/70 hover:text-gold transition-colors">
              Coverage
            </a>
            <a href="#process" className="text-sm text-primary-foreground/70 hover:text-gold transition-colors">
              Process
            </a>
            <Button 
              onClick={scrollToForm}
              className="bg-gold-gradient text-primary font-semibold px-6 shadow-gold hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Get Started
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-primary-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-primary-foreground/10">
            <nav className="flex flex-col gap-4">
              <a 
                href="#values" 
                className="text-primary-foreground/70 hover:text-gold transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Why Us
              </a>
              <a 
                href="#coverage" 
                className="text-primary-foreground/70 hover:text-gold transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Coverage
              </a>
              <a 
                href="#process" 
                className="text-primary-foreground/70 hover:text-gold transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Process
              </a>
              <Button 
                onClick={scrollToForm}
                className="bg-gold-gradient text-primary font-semibold mt-2 shadow-gold"
              >
                Get Started
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
