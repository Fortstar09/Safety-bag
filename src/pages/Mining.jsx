import DashboardLayout from "@/components/DashboardLayout";
import ListCard from "@/components/ListCard";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Mining = () => {
  return (
    <DashboardLayout className="bg-white dark:bg-bgDark2">
      <div className="bg-white dark:bg-bgDark2 w-full min-h-full  py-10 px-5 md:px-7">
        <h1 className="text-2xl font-bold mb-6 dark:text-textWhite1">
          Mining
        </h1>
        <div className="flex flex-col justify-center items-center py-6 md:py-12">
          <div className="w-full flex justify-center flex-col md:flex-row gap-20">
            <div className="w-full ">
              <Card className="py-10 md:py-[90px] bg-[#15973F33] dark:bg-white/10 border-gray-100 dark:border-white/20 dark:hover:border-brand hover:border-brand/50 bg-white">
                <h2 className="uppercase text-xl text-center font-medium mt-6">
                  Mining Balance
                </h2>
                <h1 className="text-4xl text-black dark:text-white text-center font-bold">
                  $0.00
                </h1>
              </Card>
              <div className="mt-10 flex justify-center items-center w-full gap-5">
                <Button className="shrink font-medium w-full text-xl bg-brand rounded-[5px] hover:bg-brand/70 dark:bg-brand dark:hover:bg-brand/70 dark:text-textWhite1 py-6">
                  Plans
                </Button>
                <Button className="shrink font-medium w-full text-xl  rounded-[5px] bg-brand hover:bg-brand/70 dark:bg-brand dark:hover:bg-brand/70 dark:text-textWhite1 py-6">
                  Withdrawals
                </Button>
              </div>
              <Card className="hidden w-[580px] h-[250px] mt-[60px] text-3xl font-bold md:flex justify-center items-center dark:bg-white/10 border-gray-100 dark:border-white/20 dark:hover:border-brand hover:border-brand/50 bg-white">
                Tradview BTC CHART
              </Card>
            </div>
            <div className="w-full flex flex-col gap-5">
              <ListCard img="Bitcoin" unit="BTC" />
              <ListCard img="Dogecoin" unit="DOGE" />
              <ListCard img="Ethereum" unit="ETC" />
              <ListCard img="Tron" unit="TRN" />
              <ListCard img="Litecoin" unit="LTC" />
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Mining;
