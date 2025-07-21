import { CircleCheck } from "lucide-react";

// eslint-disable-next-line react/prop-types
const EachPriceList = ({title}) => {
  return (
    <li className="text-base text-grey1 flex justify-between items-center w-full">
      <span className="font-normal">{title}</span>
      <CircleCheck size={24} color="#024E1A" />
    </li>
  );
};

export default EachPriceList;
