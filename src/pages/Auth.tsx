import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-hero-gradient flex items-center justify-center px-6">
      {/* Back button */}
      <button
        onClick={() => navigate("/")}
        className="absolute top-6 left-6 flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        <span className="text-sm">Back</span>
      </button>

      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="w-12 h-12 rounded-xl bg-emerald-gradient flex items-center justify-center shadow-emerald">
            <span className="text-primary font-bold text-xl">SG</span>
          </div>
        </div>

        {/* Card */}
        <div className="bg-card rounded-3xl p-8 shadow-2xl border border-border">
          <div className="text-center mb-8">
            <h1 className="font-display text-2xl font-bold text-foreground mb-2">
              Check Your Eligibility
            </h1>
            <p className="text-muted-foreground text-sm">
              Sign in to access your personalized grant assessment
            </p>
          </div>

          <form className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium text-foreground">
                Email Address
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="you@company.sg"
                className="h-12 rounded-xl border-border focus:border-emerald focus:ring-emerald/20"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-sm font-medium text-foreground">
                Password
              </Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                className="h-12 rounded-xl border-border focus:border-emerald focus:ring-emerald/20"
              />
            </div>

            <Button
              type="submit"
              className="w-full h-12 bg-emerald-gradient text-white font-semibold rounded-xl success-glow hover:scale-[1.02] transition-all duration-300"
            >
              Sign In
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-muted-foreground">
              Don't have an account?{' '}
              <button className="text-emerald font-medium hover:underline">
                Create one
              </button>
            </p>
          </div>
        </div>

        {/* Trust signal */}
        <p className="text-center text-xs text-primary-foreground/40 mt-6">
          Bank-grade encryption • Your data is secure
        </p>
      </div>
    </div>
  );
};

export default Auth;
