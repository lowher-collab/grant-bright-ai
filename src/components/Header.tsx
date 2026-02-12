import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const Header = () => {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleHeroCTA = () => {
    window.open("https://my.feishu.cn/base/PbOGbNyDTafAgjsCVanc5nNknEf?table=tblF2uHEbr9qyOBj&view=vewVVTKBvh", "_blank");
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/80 backdrop-blur-lg shadow-sm py-4" : "bg-transparent py-6"}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center shadow-lg shadow-green-500/20">
            <span className="text-white font-bold text-xl">SG</span>
          </div>
          <span className="text-xl font-display font-bold tracking-tight text-slate-900">{t('header.brand')}</span>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#values" className="text-sm font-medium text-slate-600 hover:text-green-600 transition-colors">{t('header.nav.whyUs')}</a>
          <a href="#coverage" className="text-sm font-medium text-slate-600 hover:text-green-600 transition-colors">{t('header.nav.coverage')}</a>
          <a href="#success-stories" className="text-sm font-medium text-slate-600 hover:text-green-600 transition-colors">{t('header.nav.successStories')}</a>
          <LanguageSwitcher />
          <Button onClick={handleHeroCTA} className="bg-green-600 hover:bg-green-700 text-white rounded-full px-6 shadow-md hover:shadow-lg transition-all">
            {t('header.nav.getStarted')}
          </Button>
        </nav>
        <button className="md:hidden text-slate-900" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
};

export default Header;
