import {
  CircleUserRound,
  CopyCheck,
  HandCoins,
  Landmark,
  Menu,
  NotepadText,
  Pickaxe,
  UserRound,
  Wallet,
} from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./ui/sheet";
import { useEffect, useState } from "react";

const DashboardHeader = () => {
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    const storedBalance = localStorage.getItem("walletBalance");
    if (storedBalance) {
      setBalance(parseFloat(storedBalance));
    }
  }, []);

  return (
    <nav className="px-5 fixed py-3 w-full border-b bg-white z-20">
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
                      href="/pricing"
                      className="text-base font-medium text-grey1  flex items-center gap-2 py-4 px-5 rounded-md transition-colors duration-200"
                    >
                      <NotepadText />
                      <span>Plans</span>
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

        <div className="flexCenter gap-3 md:gap-10">
          <div className="flex flex-col">
            <p className="text-xs text-green font-bold ">
              DEMO <span className="text-grey font-normal">#203938463</span>
            </p>
            <p className="text-sm font-bold text-grey1">
              {balance.toFixed(2)} <span className="font-normal">USDT</span>
            </p>
          </div>

          <a href="/account">
            <span className="inline-flex justify-center items-end bg-green size-8 rounded-full">
              <UserRound color="#fff" size={24} />
            </span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default DashboardHeader;
