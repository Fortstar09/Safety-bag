import { Card } from "./ui/card";

const CustomCard = () => {
  return (
    <Card className="px-9 py-10">
      <div className="flex items-center md:items-start md:flex-col gap-4">
        <img src="/icons/bank-fill.svg" alt="bank-icon" className="size-10 md:size-12" />
        <div className="flex flex-col gap-4">
          <h2 className="text-base md:text-xl font-semibold">Online Bank Transfer</h2>
          <ul className="hidden md:flex md:flex-col">
            <li>Processing Time: Instant - 45mins</li>
            <li>Fee: 0%</li>
            <li>Limit: 12 - 12,000 USD</li>
          </ul>
        </div>
      </div>
    </Card>
  );
};

export default CustomCard;
