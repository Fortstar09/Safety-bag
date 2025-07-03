import Button from "./Button";
import { MarqueeDemo } from "./MarqueeDemo";

const Reviews = () => {
  return (
    <section className="pt-[50px] mb-[88px] flex flex-col justify-center gap-20 items-center">
      <h2 className=" max-w-[765px] px-5 text-center slideIn head28 text-black">
        Here are some of what our customers say about us
        <span className="text-light-black">- in a good way </span>
        😊
      </h2>
      <MarqueeDemo />
      <Button text="See all Reviews" pad />
    </section>
  );
};

export default Reviews;
