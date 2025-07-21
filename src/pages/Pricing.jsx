/* eslint-disable react/prop-types */
import DashboardLayout from "@/components/DashboardLayout";
import EachPriceList from "@/components/EachPriceList";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Pricing = () => {
  return (
    <DashboardLayout className="">
      <div className="bg-white w-full py-7 px-8 flex flex-col justify-center items-center gap-10 md:gap-20">
        <h1 className="text-4xl font-bold text-center">Pricing</h1>
        <div className="w-full">
          <h2 className="text-xl text-center font-semibold mb-6">Trading</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
            <EachPrice title="Bitcoin Bronze" price="10,000" />
            <EachPrice title="Bitcoin Silver" price="50,000" />
            <EachPrice title="Bitcoin Gold" price="500,000" />
            <EachPrice title="Bronze" price="200.00" list>
              <EachPriceList title="200+ Pairs" />
              <EachPriceList title="Leverage up to 1:500" />
              <EachPriceList title="Spreads from 0.8 pips" />
            </EachPrice>
            <EachPrice title="Silver" price="800.00" list>
              <EachPriceList title="300+ Pairs" />
              <EachPriceList title="Leverage up to 1:500" />
              <EachPriceList title="Spreads from 0.8 pips" />
            </EachPrice>
            <EachPrice title="Gold" price="1,500.00" list>
              <EachPriceList title="400+ Pairs" />
              <EachPriceList title="No Swap Fees" />
              <EachPriceList title="Leverage up to 1:500" />
              <EachPriceList title="Spreads from 0.8 pips" />
            </EachPrice>
            <EachPrice title="Premium" price="1,800" list>
              <EachPriceList title="500+ Pairs" />
              <EachPriceList title="No Swap Fees" />
              <EachPriceList title="Leverage up to 1:500" />
              <EachPriceList title="Spreads from 0.8 pips" />
            </EachPrice>
          </div>
        </div>
        <div className="w-full">
          <h2 className="text-xl text-center font-semibold mb-10">Signals</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
            <EachPrice title="Bronze" price="1,000" list>
              <EachPriceList title="+5% Signal Strength" />
            </EachPrice>
            <EachPrice title="Silver" price="3,000" list>
              <EachPriceList title="+%10 Signal Strength" />
              <EachPriceList title="100% for Bronze Account" />
            </EachPrice>
            <EachPrice title="Gold" price="4,500" list>
              <EachPriceList title="+15% Signal Strength" />
              <EachPriceList title="100% for Bronze Account" />
            </EachPrice>
          </div>
        </div>
        <div className="w-full">
          <h2 className="text-xl text-center font-semibold mb-10">Mining</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
            <EachPrice title="Bronze" price="1,000" list>
              <EachPriceList title="100 TH/s" />
              <EachPriceList title="No Downtime" />
              <EachPriceList title="~ 1 Antminer S19" />
              <EachPriceList title="Duration: One Month" />
              <EachPriceList title="No Electricity Costs" />
            </EachPrice>
            <EachPrice title="Silver" price="3,000" list >
              <EachPriceList title="250 TH/s" />
              <EachPriceList title="No Downtime" />
              <EachPriceList title="~ 2.5 Antminer S19" />
              <EachPriceList title="Duration: One Month" />
              <EachPriceList title="No Electricity Costs" />
            </EachPrice>
            <EachPrice title="Gold" price="4,500" list >
              <EachPriceList title="1000 TH/s" />
              <EachPriceList title="No Downtime" />
              <EachPriceList title="~ 10 Antminer S19" />
              <EachPriceList title="Duration: One Month" />
              <EachPriceList title="No Electricity Costs" />
            </EachPrice>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Pricing;

const EachPrice = ({ title, price, list, children }) => {
  return (
    <Card className="p-6 text-center flex flex-col items-center justify-center gap-3.5">
      <h2 className="text-xl font-semibold">{title}</h2>
      <h1 className="text-4xl text-green font-bold">${price}.00</h1>
      <p className="text-sm">USD {price}</p>
      {list && <ul className="w-full flex flex-col gap-4 my-5">{children}</ul>}
      <Button className="w-full rounded-[5px] bg-green hover:bg-green-600 text-base font-bold">
        FUND TRADING
      </Button>
    </Card>
  );
};
