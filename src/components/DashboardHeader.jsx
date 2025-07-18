import {
  ChartCandlestick,
  CircleUserRound,
  CopyCheck,
  HandCoins,
  Landmark,
  Menu,
  NotepadText,
  Pickaxe,
  Settings,
  UserRound,
  Wallet,
} from "lucide-react";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "./ui/sheet";

const DashboardHeader = () => {
  return (
    <nav className="px-5 fixed py-3 w-full border-b bg-white z-10">
      <div className="flex justify-between">
        <div className="flexCenter gap-2">
          <Sheet>
            <SheetTrigger open>
              <Menu size={20} className="md:hidden" />
            </SheetTrigger>
            <SheetContent className="w-[250px] sm:w-[540px] px-0" side="left">
              <SheetHeader>
                <ul className="w-full h-full flex flex-col gap-0 items-start justify-start pt-5">
                  <li className="hover:bg-[#15973F33] w-full rounded-md mb-2">
                    <a
                      href="/trading"
                      className="text-base font-medium text-grey1  flex items-center gap-2 py-4 px-5 rounded-md transition-colors duration-200"
                    >
                      <ChartCandlestick />
                      <span>Trading</span>
                    </a>
                  </li>
                  <li className="hover:bg-[#15973F33] w-full rounded-md mb-2">
                    <a
                      href="/deposit"
                      className="text-base font-medium text-grey1  flex items-center gap-2 py-4 px-5 rounded-md transition-colors duration-200"
                    >
                      <Landmark />
                      <span>Deposits</span>
                    </a>
                  </li>
                  <li className="hover:bg-[#15973F33] w-full rounded-md mb-2">
                    <a
                      href="/withdraw"
                      className="text-base font-medium text-grey1  flex items-center gap-2 py-4 px-5 rounded-md transition-colors duration-200"
                    >
                      <HandCoins />
                      <span>Withdrawals</span>
                    </a>
                  </li>
                  <li className="hover:bg-[#15973F33] w-full rounded-md mb-2">
                    <a
                      href="/pricing"
                      className="text-base font-medium text-grey1  flex items-center gap-2 py-4 px-5 rounded-md transition-colors duration-200"
                    >
                      <NotepadText />
                      <span>Plans</span>
                    </a>
                  </li>
                  <li className="hover:bg-[#15973F33] w-full rounded-md mb-2">
                    <a
                      href="/mine"
                      className="text-base font-medium text-grey1  flex items-center gap-2 py-4 px-5 rounded-md transition-colors duration-200"
                    >
                      <Pickaxe />
                      <span>Mining</span>
                    </a>
                  </li>
                  <li className="hover:bg-[#15973F33] w-full rounded-md mb-2">
                    <a
                      href="/copy"
                      className="text-base font-medium text-grey1  flex items-center gap-2 py-4 px-5 rounded-md transition-colors duration-200"
                    >
                      <CopyCheck />
                      <span>Copy Trading</span>
                    </a>
                  </li>
                  <li className="hover:bg-[#15973F33] w-full rounded-md mb-2">
                    <a
                      href="/hold"
                      className="text-base font-medium text-grey1  flex items-center gap-2 py-4 px-5 rounded-md transition-colors duration-200"
                    >
                      <Wallet />
                      <span>Holding</span>
                    </a>
                  </li>
                  <li className="hover:bg-[#15973F33] w-full rounded-md mb-2">
                    <a
                      href="/account"
                      className="text-base font-medium text-grey1  flex items-center gap-2 py-4 px-5 rounded-md transition-colors duration-200"
                    >
                      <CircleUserRound />
                      <span>My Account</span>
                    </a>
                  </li>
                </ul>
              </SheetHeader>
            </SheetContent>
          </Sheet>
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
