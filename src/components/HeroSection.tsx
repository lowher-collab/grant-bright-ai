import { useState } from "react";
import { ArrowRight, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
const HeroSection = () => {
  const [isLoading, setIsLoading] = useState(false);
  const handleClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      window.open("https://my.feishu.cn/base/PbOGbNyDTafAgjsCVanc5nNknEf?table=tblF2uHEbr9qyOBj&view=vewVVTKBvh", "_blank");
      setIsLoading(false);
    }, 1500);
  };
  return (
    <section className="relative min-h-screen bg-slate-50 overflow-hidden flex items-center">
      <div className="container relative z-10 mx-auto px-6 py-32">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 border border-green-100 mb-8 animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-green-700 text-sm font-medium">Singapore Government Grants Specialists</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 leading-tight">
            Stop Leaving Your Growth Capital on the Table.
          </h1>
          <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto">
            Last year, Singapore SMEs missed over <span className="text-green-600 font-bold">S$50M</span> in unclaimed grants.
          </p>
          <Button onClick={handleClick} disabled={isLoading} size="lg" className="bg-green-500 hover:bg-green-600 text-white font-bold px-10 py-8 text-xl rounded-2xl shadow-xl shadow-green-500/30 hover:scale-105 transition-all">
            {isLoading ? <span className="flex items-center gap-3"><Loader2 className="animate-spin" /> AI Is Scanning...</span> : 
            <span className="flex items-center gap-2">Check My Grant Eligibility Now <ArrowRight /></span>}
          </Button>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
