import { useState } from "react";
import { Building2, User, Phone, ArrowRight, CheckCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const LeadForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    uen: "",
    contactName: "",
    whatsapp: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Replace with your Feishu/Lark Multitable Webhook URL
      const webhookUrl = "YOUR_FEISHU_WEBHOOK_URL_HERE";
      
      // For demo purposes, we'll simulate the submission
      // In production, uncomment the fetch below and replace the URL
      /*
      await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          uen: formData.uen,
          contactName: formData.contactName,
          whatsapp: formData.whatsapp,
          submittedAt: new Date().toISOString(),
        }),
      });
      */
      
      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      setIsSubmitted(true);
      toast({
        title: "Submission Successful!",
        description: "Our legal-compliance team will contact you via WhatsApp within 2 hours.",
      });
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section id="lead-form" className="py-20 bg-hero-gradient">
        <div className="container mx-auto px-6">
          <div className="max-w-lg mx-auto">
            <div className="bg-card rounded-3xl p-10 shadow-2xl border border-border text-center">
              <div className="w-20 h-20 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-emerald-600" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                Thank You!
              </h3>
              <p className="text-muted-foreground">
                Our legal-compliance team will contact you via WhatsApp within{" "}
                <span className="font-semibold text-gold-dark">2 hours</span>.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

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

          <form onSubmit={handleSubmit} className="bg-card rounded-3xl p-8 md:p-10 shadow-2xl border border-border">
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
                  value={formData.uen}
                  onChange={(e) => setFormData({ ...formData, uen: e.target.value })}
                  required
                  className="h-12 rounded-xl border-border focus:border-gold focus:ring-gold/20"
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
                  value={formData.contactName}
                  onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                  required
                  className="h-12 rounded-xl border-border focus:border-gold focus:ring-gold/20"
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
                  value={formData.whatsapp}
                  onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                  required
                  className="h-12 rounded-xl border-border focus:border-gold focus:ring-gold/20"
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-14 bg-gold-gradient text-primary font-semibold text-lg rounded-xl shadow-gold hover:shadow-xl hover:scale-[1.02] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 w-5 h-5 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    Get My Grant Blueprint
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </>
                )}
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
          </form>
        </div>
      </div>
    </section>
  );
};

export default LeadForm;
