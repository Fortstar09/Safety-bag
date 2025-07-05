import { Card } from "./ui/card";

const CustomCard = () => {
  return (
    <Card className="px-8.5 py-10">
      <div className="flex flex-col gap-3.5">
        <img src="/icons/bank-fill.svg" alt="bank-icon" className="size-12.5" />
        <h2 className="text-xl font-semibold">Online Bank Transfer</h2>
        <ul>
          <li>Processing Time: Instant - 45mins</li>
          <li>Fee: 0%</li>
          <li>Limit: 12 - 12,000 USD</li>
        </ul>
      </div>
    </Card>
  );
};

export default CustomCard;
