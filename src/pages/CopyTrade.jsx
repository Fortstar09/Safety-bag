/* eslint-disable react/prop-types */
import DashboardLayout from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const CopyTrade = () => {
  return (
    <DashboardLayout className="bg-white">
      <div className="w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 px-5 md:px-8 py-10 md:py-[100px]">
        <CopyTradeCard name="Uchicha Madara" img="user_1" rate='93.33%' follow='3425' profit='20%' />
        <CopyTradeCard name="Devon Lane" img="user_2" rate='93%' follow='3342' profit='20%' />
        <CopyTradeCard name="Marvin McKinney" img="user_3" rate='91%' follow='3255' profit='19%' />
        <CopyTradeCard name="Charles okocha" img="user_4" rate='90.5%' follow='3190' profit='17%'/>
        <CopyTradeCard name="Albert Flores" img="user_5" rate='90%' follow='3132' profit='16.5%' />
        <CopyTradeCard name="Brooklyn Simmons" img="user_6" rate='88.2%' follow='3105' profit='16.2%' />
        <CopyTradeCard name="Devon Lane" img="user_2" rate='86.3%' follow='2950' profit='16%' />
        <CopyTradeCard name="Charles okocha" img="user_4" rate='84%' follow='2593' profit='15.7%' />
        <CopyTradeCard name="Marvin McKinney" img="user_3" rate='80%' follow='2504' profit='15%' />
      </div>
    </DashboardLayout>
  );
};

export default CopyTrade;

const CopyTradeCard = ({ name, img, rate, follow, profit }) => {
  return (
    <Card className="flex flex-col justify-between items-start gap-10 px-5 py-6">
      <div className="flex items-center gap-3">
        <img src={`/images/${img}.svg`} alt={img} className="size-[75px]" />
        <div className="flex flex-col items-start gap-1">
          <h3 className="text-xl font-bold text-black">{name}</h3>
          <p className="text-base text-grey">Trader</p>
        </div>
      </div>
      <div className="flex justify-between items-center gap-8">
        <TextCard title="Return Rate" value={rate} />
        <TextCard title="Followers" value={follow} />
        <TextCard title="Profit Share" value={profit} />
      </div>
      <Button className="text-white bg-green hover:bg-green-600 rounded-[5px] w-full">
        COPY
      </Button>
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
