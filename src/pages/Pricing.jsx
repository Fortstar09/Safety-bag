/* eslint-disable react/prop-types */
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import DashboardLayout from "@/components/DashboardLayout";

const plans = [
  {
    title: "Starter Pack",
    type: "Trading",
    priceRange: "5 - 50",
    profit: "8",
    duration: "30 days",
    details: [
      "100+ Trading Pairs",
      "Basic Analytics",
      "24/7 Support",
      "Mobile Access",
    ],
    color: "from-blue-500 to-blue-600",
  },
  {
    title: "Growth Trader",
    type: "Trading",
    priceRange: "50 - 200",
    profit: "12",
    duration: "60 days",
    details: [
      "200+ Trading Pairs",
      "Advanced Analytics",
      "Priority Support",
      "Risk Management",
    ],
    color: "from-purple-500 to-purple-600",
  },
  {
    title: "Premium Trader",
    type: "Trading",
    priceRange: "200 - 500",
    profit: "18",
    duration: "90 days",
    details: [
      "500+ Trading Pairs",
      "AI Signals",
      "Dedicated Manager",
      "VIP Support",
    ],
    color: "from-orange-500 to-orange-600",
  },
  {
    title: "Mining Starter",
    type: "Mining",
    priceRange: "20 - 100",
    profit: "10",
    duration: "30 days",
    details: [
      "100 TH/s Power",
      "No Maintenance Fees",
      "Daily Payouts",
      "Mining Dashboard",
    ],
    color: "from-gray-600 to-gray-700",
  },
  {
    title: "Mining Pro",
    type: "Mining",
    priceRange: "100 - 350",
    profit: "15",
    duration: "60 days",
    details: [
      "500 TH/s Power",
      "Zero Downtime",
      "Priority Pool Access",
      "Advanced Analytics",
    ],
    color: "from-yellow-600 to-yellow-700",
  },
  {
    title: "Mining Elite",
    type: "Mining",
    priceRange: "350 - 800",
    profit: "22",
    duration: "90 days",
    details: [
      "2000 TH/s Power",
      "Guaranteed Uptime",
      "Custom Pool Options",
      "Dedicated Support",
    ],
    color: "from-amber-600 to-amber-700",
  },
  {
    title: "Copy Novice",
    type: "Copy Trading",
    priceRange: "10 - 75",
    profit: "9",
    duration: "30 days",
    details: [
      "Copy 5 Top Traders",
      "Auto Trading",
      "Real-time Alerts",
      "Basic Analytics",
    ],
    color: "from-green/80 to-green/50",
  },
  {
    title: "Copy Expert",
    type: "Copy Trading",
    priceRange: "75 - 300",
    profit: "16",
    duration: "60 days",
    details: [
      "Copy 20 Top Traders",
      "Custom Risk Settings",
      "Performance Reports",
      "Priority Access",
    ],
    color: "from-teal-500 to-teal-600",
  },
  {
    title: "DeFi Yield",
    type: "DeFi Staking",
    priceRange: "30 - 150",
    profit: "20",
    duration: "45 days",
    details: [
      "Multi-Protocol Staking",
      "Auto-Compounding",
      "Liquidity Mining",
      "Yield Optimization",
    ],
    color: "from-indigo-500 to-indigo-600",
  },
  {
    title: "Hodl Rewards",
    type: "Long Hold",
    priceRange: "50 - 250",
    profit: "25",
    duration: "180 days",
    details: [
      "6-Month Lock-in",
      "Bonus Interest",
      "Compound Returns",
      "Early Exit Option",
    ],
    color: "from-emerald-500 to-emerald-600",
  },
  {
    title: "Arbitrage Pro",
    type: "Arbitrage",
    priceRange: "100 - 400",
    profit: "14",
    duration: "30 days",
    details: [
      "Multi-Exchange",
      "Automated Trading",
      "Low Latency",
      "24/7 Operations",
    ],
    color: "from-red-500 to-red-600",
  },
  {
    title: "Whale Portfolio",
    type: "Premium",
    priceRange: "500 - 1000",
    profit: "30",
    duration: "120 days",
    details: [
      "All Features",
      "Personal Manager",
      "Custom Strategy",
      "Priority Everything",
    ],
    color: "from-violet-600 to-purple-700",
  },
];

const Pricing = () => {
  return (
    <DashboardLayout>
      <div className="min-h-dvh bg-white">
        <div className="bg-white w-full py-10 px-5 md:px-7">
          <h1 className="text-2xl font-bold mb-16">
            Invest & Grow Your Crypto Portfolio
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-10 w-full">
            {plans.map((plan, i) => (
              <InvestmentCard key={i} {...plan} />
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Pricing;

const InvestmentCard = ({
  title,
  type,
  priceRange,
  profit,
  duration,
  details,
  color,
}) => {
  // Calculate returns based on max amount in range
  const [minPrice, maxPrice] = priceRange
    .split(" - ")
    .map((p) => parseFloat(p));
  const profitPercentage = parseFloat(profit);
  const minProfitAmount = (minPrice * (profitPercentage / 100)).toFixed(2);
  const maxProfitAmount = (maxPrice * (profitPercentage / 100)).toFixed(2);
  const minTotalReturn = (minPrice + parseFloat(minProfitAmount)).toFixed(2);
  const maxTotalReturn = (maxPrice + parseFloat(maxProfitAmount)).toFixed(2);

  return (
    <Card className="overflow-hidden flex flex-col hover:shadow-lg transition-all duration-300 border border-[#efefef]  gap-0 hover:border-green/50 py-0 ">
      {/* Colored Header */}
      <div className={`bg-gradient-to-r ${color} p-4 text-white`}>
        <div className="text-xs font-semibold uppercase tracking-wide opacity-90 mb-1">
          {type}
        </div>
        <h2 className="text-xl font-bold">{title}</h2>
      </div>
      <div className="p-6 flex flex-col flex-1 items-center text-center">
        <div className="w-full mb-4">
          <h3 className="text-3xl font-bold text-green mb-1">${priceRange}</h3>
          <div className="text-xs text-gray-500">Investment Range</div>
        </div>

        {/* ROI Display */}
        <div className="bg-green-50 rounded-lg p-3 mb-4 border border-green-100 w-full">
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs text-gray-600">Expected ROI</span>
            <span className="text-lg font-bold text-green-700">+{profit}%</span>
          </div>
          <div className="flex justify-between items-center text-xs mb-1">
            <span className="text-gray-600">Profit Range</span>
            <span className="font-semibold text-green-600">
              +${minProfitAmount} - ${maxProfitAmount}
            </span>
          </div>
          <div className="flex justify-between items-center text-xs">
            <span className="text-gray-600">Total Return</span>
            <span className="font-bold text-gray-900">
              ${minTotalReturn} - ${maxTotalReturn}
            </span>
          </div>
        </div>

        <p className="text-xs text-gray-500 mb-4">
          <span className="font-medium">Duration:</span> {duration}
        </p>

        <div className="border-t border-gray-100 pt-4 mb-4 w-full">
          <ul className="w-full flex flex-col gap-2 text-left text-sm text-gray-700">
            {details.map((item, index) => (
              <li key={index} className="flex items-start gap-2">
                <svg
                  className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-xs">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="p-6 pt-0">
        <Button className="w-full rounded-md bg-green hover:bg-green-600 text-white font-semibold py-2.5">
          Invest Now
        </Button>
      </div>
    </Card>
  );
};
