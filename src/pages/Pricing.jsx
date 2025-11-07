/* eslint-disable react/prop-types */
import DashboardLayout from "@/components/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const plans = [
  {
    title: "Bitcoin Bronze",
    type: "Trading",
    price: "10,000",
    profit: "+8% monthly",
    duration: "30 days",
    details: ["200+ Pairs", "Leverage up to 1:500", "Spreads from 0.8 pips"],
  },
  {
    title: "Bitcoin Silver",
    type: "Trading",
    price: "50,000",
    profit: "+12% monthly",
    duration: "60 days",
    details: ["300+ Pairs", "Leverage up to 1:500", "Spreads from 0.8 pips"],
  },
  {
    title: "Gold Miner",
    type: "Mining",
    price: "4,500",
    profit: "+15% monthly",
    duration: "One Month",
    details: [
      "1000 TH/s",
      "No Downtime",
      "~10 Antminer S19",
      "No Electricity Costs",
    ],
  },
  {
    title: "Signal Pro",
    type: "Signals",
    price: "3,000",
    profit: "+10% Signal Strength",
    duration: "30 days",
    details: ["100% for Bronze Account", "AI Signal Optimization"],
  },
];

const Pricing = () => {
  return (
    <DashboardLayout>
      <div className="bg-white min-h-screen w-full py-10 px-6 flex flex-col items-center">
        <h1 className="text-4xl font-bold text-center mb-10">
          Invest & Grow Your Crypto Portfolio
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
          {plans.map((plan, i) => (
            <InvestmentCard key={i} {...plan} />
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Pricing;

const InvestmentCard = ({ title, type, price, profit, duration, details }) => {
  return (
    <Card className="p-6 text-center flex flex-col items-center justify-between gap-4">
      <div>
        <p className="text-sm text-gray-500 font-medium mb-2">{type}</p>
        <h2 className="text-xl font-semibold mb-1">{title}</h2>
        <h3 className="text-3xl font-bold text-green mb-1">${price}</h3>
        <p className="text-sm text-gray-500">Expected ROI: {profit}</p>
        <p className="text-sm text-gray-500 mb-4">Duration: {duration}</p>

        <ul className="w-full flex flex-col gap-2 text-sm text-gray-700">
          {details.map((item, index) => (
            <li key={index}>• {item}</li>
          ))}
        </ul>
      </div>

      <Button className="w-full rounded-md bg-green hover:bg-green-600 text-white font-semibold">
        Invest Now
      </Button>
    </Card>
  );
};
