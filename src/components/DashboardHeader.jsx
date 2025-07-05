import { Settings, UserRound } from "lucide-react";
import { Button } from "./ui/button";

const DashboardHeader = () => {
  return (
    <nav className="px-5  py-2 w-full border-b-1 bg-white">
      <div className="flex justify-between">
        <img src="/icons/webLogo.svg" alt="logo" />

        <div className="flexCenter gap-32">
          <div className="flex flex-col">
            <p className="text-sm text-green font-bold ">
              DEMO <span className="text-grey font-normal">#203938463</span>
            </p>
            <p className="text-base font-bold text-grey1">
              10,000.00 <span className="font-normal">USD</span>
            </p>
          </div>
          <div className="flexCenter gap-6">
            <Settings size={18} color="#024E1A" className="cursor-pointer" />

            <UserRound size={18} color="#024E1A" className="cursor-pointer" />
            <Button
              variant="outline"
              className=" font-semibold text-base cursor-pointer rounded-[8px] py-2.5 px-5 ml-2.5"
            >
              Deposit
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default DashboardHeader;
