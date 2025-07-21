/* eslint-disable react/prop-types */
import { Card } from "./ui/card";

const CustomCard = ({title, img}) => {
  return (
    <Card className="px-4 md:px-9 py-5 md:py-10 gap-3">
      <div className="flex items-center md:items-start md:flex-col gap-4">
        <img
          src={img}
          alt="bank-icon"
          className="size-10 md:size-12"
        />
        <div className="flex flex-col gap-4">
          <h2 className="text-base md:text-xl font-semibold">
           {title}
          </h2>
          <ul className="hidden md:flex md:flex-col">
            <li>Processing Time: Instant - 45mins</li>
            <li>Fee: 0%</li>
            <li>Limit: 12 - 12,000 USD</li>
          </ul>
        </div>
      </div>
      <ul className=" flex flex-col gap-1 md:hidden text-xs">
        <li>Processing Time: Instant - 45mins</li>
        <li>Fee: 0%</li>
        <li>Limit: 12 - 12,000 USD</li>
      </ul>
    </Card>
  );
};

export default CustomCard;
