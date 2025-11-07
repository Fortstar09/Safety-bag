/* eslint-disable react/prop-types */
import DashboardHeader from "./DashboardHeader";
import LeftSideBar from "./LeftSideBar";
import { Toaster } from "./ui/sonner";

const DashboardLayout = ({ children, className }) => {
  return (
    <>
      <main className="flex flex-col w-full h-screen items-center justify-start">
        <DashboardHeader />
        <section className="w-full border-b-0 h-full flex">
          <LeftSideBar />
          <div
            className={`mt-16 ml-0 md:ml-[210px] w-full h-full ${className}`}
          >
            {children}
          </div>
          <Toaster position="top-center" theme=''  />
        </section>
      </main>
    </> 
  );
};

export default DashboardLayout;
