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
import ThemeToggle from "./ThemeToggle";

const DashboardHeader = () => {
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    const storedBalance = localStorage.getItem("walletBalance");
    if (storedBalance) {
      setBalance(parseFloat(storedBalance));
    }
  }, []);

  return (
    <nav className="px-5 fixed py-3 w-full border-b bg-white dark:bg-bgDark2 z-20">
      <div className="flex justify-between">
        <div className="flexCenter gap-2">
          <Sheet>
            <SheetTrigger open>
              <Menu size={20} className="md:hidden dark:text-white size-6" />
            </SheetTrigger>
            <SheetContent className="w-[250px] sm:w-[540px] px-0 dark:bg-bgDark2" side="left">
              <SheetHeader>
                <ul className="w-full h-full flex flex-col gap-2 items-start justify-start pt-5 ">
                  <li className="hover:bg-[#15973F33] dark:hover:bg-green-500 w-full rounded-md mb-2">
                    <a
                      href="/pricing"
                      className="text-base font-medium flex items-center gap-4 py-4 px-5 rounded-md transition-colors duration-200 text-grey1 dark:text-textWhite2"
                    >
                      <NotepadText />
                      <span>Plans</span>
                    </a>
                  </li>
                  <li className="hover:bg-[#15973F33] dark:hover:bg-green-500 w-full rounded-md mb-2">
                    <a
                      href="/deposit"
                      className="text-base font-medium text-grey1 dark:text-textWhite2 flex items-center gap-4 py-4 px-5 rounded-md transition-colors duration-200"
                    >
                      <Landmark />
                      <span>Deposits</span>
                    </a>
                  </li>
                  <li className="hover:bg-[#15973F33] dark:hover:bg-green-500 w-full rounded-md mb-2">
                    <a
                      href="/withdraw"
                      className="text-base font-medium text-grey1 dark:text-textWhite2  flex items-center gap-4 py-4 px-5 rounded-md transition-colors duration-200"
                    >
                      <HandCoins />
                      <span>Withdrawals</span>
                    </a>
                  </li>

                  <li className="hover:bg-[#15973F33] dark:hover:bg-green-500 w-full rounded-md mb-2">
                    <a
                      href="/mine"
                      className="text-base font-medium text-grey1 dark:text-textWhite2  flex items-center gap-4 py-4 px-5 rounded-md transition-colors duration-200"
                    >
                      <Pickaxe />
                      <span>Mining</span>
                    </a>
                  </li>
                  <li className="hover:bg-[#15973F33] dark:hover:bg-green-500 w-full rounded-md mb-2">
                    <a
                      href="/copy"
                      className="text-base font-medium text-grey1 dark:text-textWhite2  flex items-center gap-4 py-4 px-5 rounded-md transition-colors duration-200"
                    >
                      <CopyCheck />
                      <span>Copy Trading</span>
                    </a>
                  </li>
                  <li className="hover:bg-[#15973F33] dark:hover:bg-green-500 w-full rounded-md mb-2">
                    <a
                      href="/hold"
                      className="text-base font-medium text-grey1 dark:text-textWhite2  flex items-center gap-4 py-4 px-5 rounded-md transition-colors duration-200"
                    >
                      <Wallet />
                      <span>Holding</span>
                    </a>
                  </li>
                  <li className="hover:bg-[#15973F33] dark:hover:bg-green-500 w-full rounded-md mb-2">
                    <a
                      href="/account"
                      className="text-base font-medium text-grey1 dark:text-textWhite2  flex items-center gap-4 py-4 px-5 rounded-md transition-colors duration-200"
                    >
                      <CircleUserRound />
                      <span>My Account</span>
                    </a>
                  </li>
                </ul>
              </SheetHeader>
            </SheetContent>
          </Sheet>
          <a href="/" className="hidden md:flex justify-center gap-4 items-center">
            <img src="/icons/logo.svg" alt="logo" className=" size-6 " />
            <span className="text-lg font-semibold text-[#333] dark:text-textWhite1">SafeBox</span>
          </a>
        </div>

        <div className="flexCenter gap-3 md:gap-10">
          <div>
            <ThemeToggle />
          </div>
          <div className="flex flex-col">
            <p className="text-xs text-brand dark:text-green-400 font-bold ">
              DEMO <span className="text-grey dark:text-textWhite2 font-normal">#203938463</span>
            </p>
            <p className="text-sm font-bold text-grey1 dark:text-textWhite2">
              {balance.toFixed(2)} <span className="font-normal">USDT</span>
            </p>
          </div>

          <a href="/account">
            <span className="inline-flex justify-center items-end bg-brand size-8 rounded-full">
              <UserRound color="#fff" size={24} />
            </span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default DashboardHeader;
