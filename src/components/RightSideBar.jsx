import DropOption from "./DropOption";
import InputOption from "./InputOption";
import { Button } from "./ui/button";

const RightSideBar = () => {
  return (
    <aside className=" font-mono border-l-1 border-grey bg-white h-full px-2 py-4">
      <div className="flex flex-col items-center w-full h-full gap-4 px-5 py-4.5">
        <DropOption />
        <div className="mt-5 w-full">
          <InputOption label="Amount (USD)" place="0" />
          <InputOption label="Amount (1 BTC)(0.834USD)" place="0.0000" />
          <div className="flex items-center justify-between gap-7.5 mt-2.25">
            <InputOption label="Leverage" place="1" />
            <InputOption label="Time(Minutes)" place="2" />
          </div>
        </div>
        <div className="mt-12.5 w-full flex flex-col gap-2.5 items-center justify-center">
          <Button className="w-full rounded-[8px] bg-[#15973F] text-white font-semibold text-base h-12 cursor-pointer hover:bg-[#15973F]/90">
            Buy
          </Button>
          <Button className="w-full rounded-[8px] bg-red-700 text-white font-semibold text-base h-12 cursor-pointer hover:bg-red-600/90">
           Sell
          </Button>
        </div>
      </div>
    </aside>
  );
};

export default RightSideBar;
