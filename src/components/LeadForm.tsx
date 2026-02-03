import { Building2, User, Phone, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const FEISHU_FORM_URL = "https://my.feishu.cn/base/PbOGbNyDTafAgjsCVanc5nNknEf?table=tblF2uHEbr9qyOBj&view=vewVVTKBvh";

const LeadForm = () => {
  const openFeishuForm = () => {
    window.open(FEISHU_FORM_URL, '_blank');
  };

  return (
    <section id="lead-form" className="py-20 bg-hero-gradient relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gold/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <div className="max-w-lg mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Unlock Your 2026 Grant Briefing
            </h2>
            <p className="text-primary-foreground/70">
              Enter your details to receive your tailored funding roadmap
            </p>
          </div>

          <div className="bg-card rounded-3xl p-8 md:p-10 shadow-2xl border border-border">
            <div className="space-y-6">
              {/* UEN Field */}
              <div className="space-y-2">
                <Label htmlFor="uen" className="text-sm font-medium text-foreground flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-gold" />
                  UEN (Company Entity)
                </Label>
                <Input
                  id="uen"
                  type="text"
                  placeholder="e.g., 202312345A"
                  className="h-12 rounded-xl border-border focus:border-gold focus:ring-gold/20"
                  disabled
                />
              </div>

              {/* Contact Name Field */}
              <div className="space-y-2">
                <Label htmlFor="contactName" className="text-sm font-medium text-foreground flex items-center gap-2">
                  <User className="w-4 h-4 text-gold" />
                  Contact Name
                </Label>
                <Input
                  id="contactName"
                  type="text"
                  placeholder="Your full name"
                  className="h-12 rounded-xl border-border focus:border-gold focus:ring-gold/20"
                  disabled
                />
              </div>

              {/* WhatsApp Number Field */}
              <div className="space-y-2">
                <Label htmlFor="whatsapp" className="text-sm font-medium text-foreground flex items-center gap-2">
                  <Phone className="w-4 h-4 text-gold" />
                  WhatsApp Number
                </Label>
                <Input
                  id="whatsapp"
                  type="tel"
                  placeholder="+65 9XXX XXXX"
                  className="h-12 rounded-xl border-border focus:border-gold focus:ring-gold/20"
                  disabled
                />
              </div>

              {/* CTA Button */}
              <Button
                type="button"
                onClick={openFeishuForm}
                className="w-full h-14 bg-gold-gradient text-primary font-semibold text-lg rounded-xl shadow-gold hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
              >
                Get My Grant Blueprint
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="mt-6 pt-6 border-t border-border">
              <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <CheckCircle className="w-3 h-3 text-emerald-500" />
                  Secure & Encrypted
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle className="w-3 h-3 text-emerald-500" />
                  No Spam Guarantee
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadForm;
