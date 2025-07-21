import CustomCard from "@/components/CustomCard";
import DashboardLayout from "@/components/DashboardLayout";

const Withdraw = () => {
  return (
<DashboardLayout>
      <div className="bg-white w-full py-10 px-5 md:px-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <CustomCard title='Paypal' img='/icons/paypal.svg' />
        <CustomCard title='Bank Card' img='/icons/bank-fill.svg'/>
        <CustomCard title='Bitcoin' img='/icons/bitconIcon.svg' />
        <CustomCard title='Online Bank Transfer' img='/icons/bank-fill.svg' />
        <CustomCard title='Online Bank Transfer' img='/icons/bankTransfer.svg' />
        <CustomCard title='Pay with Card' img='/icons/solarCard.svg'/>
      </div>
    </DashboardLayout>
  );
};

export default Withdraw;
