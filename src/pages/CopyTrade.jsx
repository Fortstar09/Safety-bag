/* eslint-disable react/prop-types */
import DashboardLayout from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const CopyTrade = () => {
  return (
    <DashboardLayout className="bg-white">
      <div className="w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 px-10 py-24.5">
        <CopyTradeCard />
        <CopyTradeCard />
        <CopyTradeCard />
        <CopyTradeCard />
        <CopyTradeCard />
        <CopyTradeCard />
        <CopyTradeCard />
        <CopyTradeCard />
        <CopyTradeCard />
        <CopyTradeCard />
      </div>
    </DashboardLayout>
  );
};

export default CopyTrade;

const CopyTradeCard = () => {
  return (
    <Card className="flex flex-col justify-between items-start gap-10 px-5 py-6">
      <div className="flex items-center gap-3">
        <img src="/images/user_1.svg" alt="user1" className="size-[75px]" />
        <div className="flex flex-col items-start gap-1">
          <h3 className="text-xl font-bold text-black">John Doe</h3>
          <p className="text-base text-grey">Trader</p>
        </div>
      </div>
      <div className="flex justify-between items-center gap-8">
        <TextCard title="Return Rate" value="93.33%" />
        <TextCard title="Followers" value="8372" />
        <TextCard title="Profit Share" value="10%" />
      </div>
      <Button className="text-white bg-green hover:bg-green-600 rounded-[5px] w-full">COPY</Button>
    </Card>
  );
};

const TextCard = ({ title, value }) => {
  return (
    <div className="flex flex-col items-center gap-1">
      <h3 className="text-xl font-bold text-black">{value}</h3>
      <p className="text-base  text-grey">{title}</p>
    </div>
  );
};
