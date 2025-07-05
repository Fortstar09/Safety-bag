import DashboardLayout from "@/components/DashboardLayout";
import RightSideBar from "@/components/RightSideBar";
import TradingViewWidget from "@/components/TradingViewWidget";

const Trading = () => {
  return (
    <DashboardLayout className="bg-[#1E1E1E]">
      <TradingViewWidget />
      <RightSideBar />
    </DashboardLayout>
  );
};

export default Trading;
