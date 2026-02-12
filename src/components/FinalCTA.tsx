import { useState } from "react";
import { ArrowRight, Loader2 } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";

const FinalCTA = () => {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      window.open("https://my.feishu.cn/base/PbOGbNyDTafAgjsCVanc5nNknEf?table=tblF2uHEbr9qyOBj&view=vewVVTKBvh", "_blank");
      setIsLoading(false);
    }, 1500);
  };

  return (
    <section className="py-24 bg-slate-900 text-white text-center">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">{t('finalCTA.title')}</h2>
        <Button onClick={handleClick} disabled={isLoading} className="bg-green-500 hover:bg-green-600 text-white font-bold px-10 py-8 text-xl rounded-2xl shadow-xl shadow-green-500/20 transition-all">
          {isLoading ? <Loader2 className="animate-spin" /> : <span className="flex items-center gap-2">{t('finalCTA.button')} <ArrowRight /></span>}
        </Button>
      </div>
    </section>
  );
};

export default FinalCTA;
