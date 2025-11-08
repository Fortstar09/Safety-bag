/* eslint-disable react/prop-types */
import { Card } from "./ui/card";

const CustomCard = ({ title, img, children }) => {
  return (
    <Card className="relative overflow-hidden p-6 gap-4 w-full max-w-[300px] md:max-w-[500px] rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border  dark:bg-white/10 border-gray-100 dark:border-white/20 dark:hover:border-brand hover:border-brand/50 bg-white">
      <div className="absolute inset-0 bg-gradient-to-br from-brand/5 via-transparent to-transparent rounded-2xl pointer-events-none" />

      <div className="flex items-start flex-col gap-3 relative z-10">
        <div className="bg-brand/10 dark:bg-slate-100/80 p-3 rounded-xl flex items-center justify-center">
          <img src={img} alt="bank-icon" className="size-10 md:size-12 object-contain" />
        </div>

        <div className="flex flex-col gap-2 w-full">
          <h2 className="text-base md:text-lg font-semibold text-gray-800 dark:text-textWhite2">{title}</h2>

          {/* Desktop info */}
          <ul className="flex flex-col gap-1 text-gray-600 dark:text-textWhite2/70 text-sm">
            <li>Processing Time: <span className="font-medium text-gray-800 dark:text-slate-200/80">Instant - 5mins</span></li>
            <li>Fee: <span className="font-medium text-brand">3%</span></li>
          </ul>

          {children}
        </div>
      </div>
    </Card>
  );
};

export default CustomCard;
