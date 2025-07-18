import DropOption from "./DropOption";
import InputOption from "./InputOption";
import { Button } from "./ui/button";

const RightSideBar = () => {
  return (
    <aside className=" font-mono md:border-l  bg-white max-h-[80dvh] md:px-2 py-4">
      <div className="flex flex-col items-center w-full h-full gap-4 p-1 md:px-5 md:py-6">
        <DropOption />
        <div className="md:mt-2 w-full">
          <div className="flex items-center md:flex-col justify-between gap-3 md:gap-7 mt-2">
            <InputOption label="Amount (USD)" place="0" />
          <InputOption label="Amount (BTC)" place="0.0000" />
          </div>
          <div className="flex items-center justify-between gap-3 md:gap-7 mt-0 md:mt-2">
            <InputOption label="Leverage" place="1" />
            <InputOption label="Time(Minutes)" place="2" />
          </div>
        </div>
        <div className="mt-2 md:mt-12 w-full flex md:flex-col gap-2.5 items-center justify-center">
          <Button className="w-full flex-1 rounded-[8px] bg-[#15973F] text-white font-semibold text-base h-12 cursor-pointer hover:bg-[#15973F]/90">
            Buy
          </Button>
          <Button className="w-full flex-1 rounded-[8px] bg-red-700 text-white font-semibold text-base h-12 cursor-pointer hover:bg-red-600/90">
           Sell
          </Button>
        </div>
      </div>
    </aside>
  );
};

export default RightSideBar;
