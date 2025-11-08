import { Card } from "./ui/card"

// eslint-disable-next-line react/prop-types
const ListCard = ({img, unit}) => {
  return (
   <Card className="flex flex-row justify-between items-center px-5 py-3 md:py-6 border dark:bg-white/10 border-gray-100 dark:border-white/20 dark:hover:border-brand hover:border-brand/50 bg-white">
      <div className="flex justify-between items-center gap-3.5">
        <img src={`/icons/${img}.svg`} alt="icon" className="size-10 md:size-12" />
        <div className="inline-flex flex-col">
          <p className="text-base font-medium">$0.00</p>
          <p className="text-base font-light">0.000000000 {unit}</p>
        </div>
      </div>
      <h3>
        0 <span>TH/s</span>
      </h3>
    </Card>
  )
}

export default ListCard
