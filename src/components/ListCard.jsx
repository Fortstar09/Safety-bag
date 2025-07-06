import { Card } from "./ui/card"

const ListCard = () => {
  return (
   <Card className="flex flex-row justify-between items-center px-5 py-6">
      <div className="flex justify-between items-center gap-3.5">
        <img src="/icons/amazon.svg" alt="icon" className="size-12.5" />
        <div className="inline-flex flex-col">
          <p className="text-base font-medium">$0.00</p>
          <p className="text-base font-light">0.000000000 BTC</p>
        </div>
      </div>
      <h3>
        0 <span>TH/s</span>
      </h3>
    </Card>
  )
}

export default ListCard
