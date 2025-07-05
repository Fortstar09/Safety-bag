/* eslint-disable react/prop-types */
import DashboardLayout from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CircleCheck } from "lucide-react";

const Pricing = () => {
  return (
    <DashboardLayout className="">
      <div className="bg-white w-full py-7 px-7.5 flex flex-col justify-center items-center gap-20">
        <h1 className="text-4xl font-bold text-center">Pricing</h1>
        <div className='w-full'>
          <h2 className="text-xl text-center font-semibold mb-6">Trading</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
            <EachPrice title="Bitcoin Bronze" price="10,000" />
            <EachPrice title="Bitcoin Silver" price="50,000" />
            <EachPrice title="Bitcoin Gold" price="500,000"/>
            <EachPrice title="Bronze" price="10,000" list />
            <EachPrice title="Silver" price="10,000" list />
            <EachPrice title="Gold" price="10,000" list />
            <EachPrice title="Premium" price="10,000" list />
          </div>
        </div>
        <div className='w-full'>
          <h2 className="text-xl text-center font-semibold mb-10">Signals</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
            <EachPrice title="Bronze" price="1,000" list />
            <EachPrice title="Silver" price="3,000" list />
            <EachPrice title="Gold" price="4,500" list />
          </div>
        </div>
         <div className='w-full'>
          <h2 className="text-xl text-center font-semibold mb-10">Mining</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
            <EachPrice title="Bronze" price="1,000" list />
            <EachPrice title="Silver" price="3,000" list />
            <EachPrice title="Gold" price="4,500" list />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Pricing;

const EachPrice = ({ title, price, list }) => {
  return (
    <Card className="p-6 text-center flex flex-col items-center justify-center gap-3.5">
      <h2 className="text-xl font-semibold">{title}</h2>
      <h1 className="text-4xl text-green font-bold">${price}.00</h1>
      <p className="text-sm">USD {price}</p>
      {list && (
        <ul className="w-full flex flex-col gap-4 my-5">
          <EachList title="Minimum Deposit" />
          <EachList title="Maximum Deposit" />
          <EachList title="Trading Fee" />
        </ul>
      )}
      <Button className="w-full rounded-[5px] bg-green hover:bg-green-600 text-base font-bold">
        FUND TRADING
      </Button>
    </Card>
  );
};

const EachList = ({ title }) => {
  return (
    <li className="text-base text-grey1 flex justify-between items-center w-full">
      <span className="font-normal">{title}</span>
      <CircleCheck size={24} color="#024E1A" />
    </li>
  );
};
