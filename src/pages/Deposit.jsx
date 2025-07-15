import CustomCard from "@/components/CustomCard";
import DashboardLayout from "@/components/DashboardLayout";

const Deposit = () => {
  return (
    <DashboardLayout>
      <div className="bg-white w-full py-10 px-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <CustomCard />
        <CustomCard />
        <CustomCard />
        <CustomCard />
        <CustomCard />
        <CustomCard />
      </div>
    </DashboardLayout>
  );
};

export default Deposit;
