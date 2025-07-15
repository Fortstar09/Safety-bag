import { Menu, Settings, UserRound } from "lucide-react";
import { Button } from "./ui/button";

const DashboardHeader = () => {
  return (
    <nav className="px-5 fixed py-3 w-full border-b bg-white z-10">
      <div className="flex justify-between">
        <div className="flexCenter gap-2">
          <Menu size={20} className="md:hidden"/>
          <img src="/icons/webLogo.svg" alt="logo" className="hidden md:flex" />
        </div>

        <div className="flexCenter gap-3 md:gap-32">
          <div className="flex flex-col">
            <p className="text-xs md:text-sm text-green font-bold ">
              DEMO <span className="text-grey font-normal">#203938463</span>
            </p>
            <p className="text-sm md:text-base font-bold text-grey1">
              10,000.00 <span className="font-normal">USD</span>
            </p>
          </div>
          <div className="flexCenter gap-6">
            <Settings
              size={18}
              color="#024E1A"
              className="cursor-pointer hidden md:flex"
            />

            <UserRound
              size={18}
              color="#024E1A"
              className="cursor-pointer hidden md:flex"
            />
            <Button
              variant="outline"
              className=" font-semibold text-xs md:text-base cursor-pointer rounded-[8px] py-2.5 px-2 md:px-5 ml-0 md:ml-2.5"
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
