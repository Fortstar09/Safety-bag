import DashboardLayout from "@/components/DashboardLayout";
import RightSideBar from "@/components/RightSideBar";
import TradingViewWidget from "@/components/TradingViewWidget";

const Trading = () => {
  return (
    <DashboardLayout className="bg-white flex flex-col md:flex-row max-h-[80dvh] items-start justify-start ">
      <TradingViewWidget />
      <RightSideBar />
    </DashboardLayout>
  );
};

export default Trading;
