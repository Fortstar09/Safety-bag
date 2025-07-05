// import LiveChart from "@/components/LiveChart";
import DashboardHeader from "@/components/DashboardHeader";
import LeftSideBar from "@/components/LeftSideBar";
import RightSideBar from "@/components/RightSideBar";
import TradingViewWidget from "@/components/TradingViewWidget";

const Dashboard = () => {
  return (
    <>
      <main className="flex flex-col w-full h-screen items-center justify-start">
        <DashboardHeader />
        <section className="w-full  border-b-0 h-full flex">
          <LeftSideBar />
          <div className="w-full h-full flex items-center border-b-4 border-line  justify-start ">
            <TradingViewWidget />
            <RightSideBar />
          </div>
        </section>
      </main>
    </>
  );
};

export default Dashboard;
