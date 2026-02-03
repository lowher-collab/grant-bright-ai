import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gold-gradient flex items-center justify-center shadow-gold">
                <span className="text-primary font-bold text-lg">SG</span>
              </div>
              <span className="font-display font-bold text-xl text-primary-foreground">
                SG Grant Consultancy
              </span>
            </div>
            <p className="text-primary-foreground/60 text-sm leading-relaxed">
              Your trusted partner in navigating Singapore's government grant landscape. 
              Unlock funding opportunities with our expert guidance.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-primary-foreground mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#values" className="text-sm text-primary-foreground/60 hover:text-gold transition-colors">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#coverage" className="text-sm text-primary-foreground/60 hover:text-gold transition-colors">
                  Coverage Areas
                </a>
              </li>
              <li>
                <a href="#process" className="text-sm text-primary-foreground/60 hover:text-gold transition-colors">
                  Our Process
                </a>
              </li>
              <li>
                <a href="#lead-form" className="text-sm text-primary-foreground/60 hover:text-gold transition-colors">
                  Get Started
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-primary-foreground mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-primary-foreground/60">
                <MapPin className="w-4 h-4 text-gold flex-shrink-0" />
                Singapore
              </li>
              <li className="flex items-center gap-3 text-sm text-primary-foreground/60">
                <Mail className="w-4 h-4 text-gold flex-shrink-0" />
                hello@sggrant.sg
              </li>
              <li className="flex items-center gap-3 text-sm text-primary-foreground/60">
                <Phone className="w-4 h-4 text-gold flex-shrink-0" />
                +65 9XXX XXXX
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/40">
              © {currentYear} SG Grant Consultancy. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-xs text-primary-foreground/40 hover:text-gold transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-xs text-primary-foreground/40 hover:text-gold transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
