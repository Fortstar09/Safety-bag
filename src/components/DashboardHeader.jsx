import { Settings, UserRound } from "lucide-react";
import Button from "./Button";

const DashboardHeader = () => {
  return (
    <nav className="px-5  py-2 w-full bg-white">
      <div className="flex justify-between">
        <img src="/icons/webLogo.svg" alt="logo" />

        <div className="flexCenter gap-8">
          <div className="flex flex-col">
                <p className="text-sm text-green font-bold ">DEMO <span className="text-grey font-normal">#203938463</span></p>
                <p className="text-base font-bold text-grey1">10,000.00 <span className="font-normal">USD</span></p>
          </div>
          <div className="flexCenter gap-5">
            <div className="cursor-pointer p-3 hover:border-light-black/20 hover:border rounded-[5px]">
              <Settings size={24} />
            </div>

            <div className="cursor-pointer p-3 hover:border-light-black/20 hover:border rounded-[5px]">
              <UserRound size={24} />
            </div>
          </div>
          <Button text="Deposit" href="/signIn" pad />
        </div>
      </div>
    </nav>
  );
};

export default DashboardHeader;
