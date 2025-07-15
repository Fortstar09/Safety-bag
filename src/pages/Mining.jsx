import DashboardLayout from "@/components/DashboardLayout";
import ListCard from "@/components/ListCard";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Mining = () => {
  return (
    <DashboardLayout className="bg-white">
      <div className="flex flex-col justify-center items-center py-6 md:py-12 px-5 md:px-10">
        <div className="w-full flex justify-center flex-col md:flex-row gap-20">
          <div className="w-full ">
            <Card className="py-10 md:py-[90px] bg-[#15973F33]">
              <h2 className="uppercase text-xl text-center font-medium mt-6">
                Mining Balance
              </h2>
              <h1 className="text-4xl text-[#000000] text-center font-bold">
                $0.00
              </h1>
            </Card>
            <div className="mt-10 flex justify-center items-center w-full gap-5">
              <Button className="py-5 shrink font-medium w-full text-xl bg-green rounded-[5px] hover:bg-green-700">
                Plans
              </Button>
              <Button className="py-5 shrink font-medium w-full text-xl bg-green rounded-[5px] hover:bg-green-700">
                Withdrawals
              </Button>
            </div>
            <Card className="hidden w-[580px] h-[250px] mt-[60px] text-3xl font-bold md:flex justify-center items-center">Tradview BTC CHART</Card>
          </div>
          <div className="w-full flex flex-col gap-5">
            <ListCard />
            <ListCard />
            <ListCard />
            <ListCard />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Mining;
