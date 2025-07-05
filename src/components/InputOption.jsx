/* eslint-disable react/prop-types */
import { Input } from "./ui/input"
import { Label } from "./ui/label"

const InputOption = ({label, place}) => {
  return (
    <div className="grid w-full max-w-sm items-center gap-1 mt-5">
      <Label htmlFor="email" className='text-center font-semibold text-base'>{label}</Label>
      <Input type="email" id="email" placeholder={place} className='rounded-[8px] border-[#1E1E1E7D] w-full focus-visible:ring-0' />
    </div>
  )
}

export default InputOption
