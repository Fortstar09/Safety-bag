import {
  ChartCandlestick,
  NotepadText,
  CircleUserRound,
  Wallet,
  CopyCheck,
  Pickaxe,
  Landmark,
  HandCoins,
} from "lucide-react";

const LeftSideBar = () => {
  return (
    <div className="bg-white w-[210px] fixed top-[61px] border-r border-line  flex h-full flex-col items-center justify-start">
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
    </div>
  );
};

export default LeftSideBar;
