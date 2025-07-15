import DashboardLayout from "@/components/DashboardLayout";
import ListCard from "@/components/ListCard";

const Holding = () => {
  return (
    <DashboardLayout className="bg-white">
      <div className="w-full flex justify-between items-center gap-12 px-10 py-24">
        <div className="w-full flex flex-col gap-5">
          <h2 className="text-xl font-bold mb-5 text-black text-center">
            CRYPTO
          </h2>
          <ListCard />
          <ListCard />
          <ListCard />
          <ListCard />
          <ListCard />
        </div>
        <div className="w-full flex flex-col gap-5">
          <h2 className="text-xl font-bold mb-5 text-black text-center">
            STOCKS
          </h2>
          <ListCard />
          <ListCard />
          <ListCard />
          <ListCard />
          <ListCard />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Holding;
