import { Shield, Building2, Globe } from "lucide-react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary py-12">
      <div className="container mx-auto px-6">
        {/* Trust Signals */}
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 mb-8 pb-8 border-b border-primary-foreground/10">
          <div className="flex items-center gap-2 text-sm text-primary-foreground/60">
            <Building2 className="w-4 h-4 text-emerald" />
            <span>{t('footer.trustSignals.smes')}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-primary-foreground/60">
            <Globe className="w-4 h-4 text-emerald" />
            <span>{t('footer.trustSignals.framework')}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-primary-foreground/60">
            <Shield className="w-4 h-4 text-emerald" />
            <span>{t('footer.trustSignals.security')}</span>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-gradient flex items-center justify-center shadow-emerald">
              <span className="text-primary font-bold text-sm">SG</span>
            </div>
            <span className="font-display font-semibold text-primary-foreground">
              {t('footer.brand')}
            </span>
          </div>

          <p className="text-sm text-primary-foreground/40">
            © {currentYear} {t('footer.brand')}. {t('footer.copyright')}
          </p>

          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-primary-foreground/40 hover:text-emerald transition-colors">
              {t('footer.links.privacy')}
            </a>
            <a href="#" className="text-xs text-primary-foreground/40 hover:text-emerald transition-colors">
              {t('footer.links.terms')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
