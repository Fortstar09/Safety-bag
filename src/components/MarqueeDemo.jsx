/* eslint-disable react/prop-types */
import Marquee from "@/components/ui/marquee";

// const reviews = [
//   {
//     name: "Jack",
//     username: "@jack",
//     body: "I've never seen anything like this before. It's amazing. I love it.",
//     img: "https://avatar.vercel.sh/jack",
//   },
//   {
//     name: "Jill",
//     username: "@jill",
//     body: "I don't know what to say. I'm speechless. This is amazing.",
//     img: "https://avatar.vercel.sh/jill",
//   },
//   {
//     name: "John",
//     username: "@john",
//     body: "I'm at a loss for words. This is amazing. I love it.",
//     img: "https://avatar.vercel.sh/john",
//   },
//   {
//     name: "Jane",
//     username: "@jane",
//     body: "I'm at a loss for words. This is amazing. I love it.",
//     img: "https://avatar.vercel.sh/jane",
//   },
//   {
//     name: "Jenny",
//     username: "@jenny",
//     body: "I'm at a loss for words. This is amazing. I love it.",
//     img: "https://avatar.vercel.sh/jenny",
//   },
//   {
//     name: "James",
//     username: "@james",
//     body: "I'm at a loss for words. This is amazing. I love it.",
//     img: "https://avatar.vercel.sh/james",
//   },
// ];

const reviews = [
  {
    name: "Charles okocha",
    body: "Trading my gift cards here has been a great experience. Now at level 3 with access to loans, I highly recommend this reliable platform. 5 stars!",
    img: "images/user_4.svg",
    tier: "icons/v3.svg",
  },
  {
    name: "Uchicha Madara",
    body: "Whenever i got a card.... I'm always rest assured. My goods are reliable with you. I don't care if it's over a million dollar. I trust you guys. I've been dealing with you since June 2021 🥳",
    img: "images/user_1.svg",
    tier: "icons/v1.svg",
  },
  {
    name: "Albert Flores",
    body: "The cashback offer is really great here... I receive more money than I expected... Thanks safebox.",
    img: "images/user_5.svg",
    tier: "icons/v3.svg",
  },
  {
    name: "Devon Lane",
    body: "Well you have been the best trading site I have ever know. I recommend you to all my friends because of your fast and reliable. I love you all and may God bless you and me 😍",
    img: "images/user_2.svg",
    tier: "icons/v2.svg",
  },
  {
    name: "Brooklyn Simmons",
    body: "To everyone out there this platform is more reliable like other gift card trading platform that's why I give them my 5 stars.",
    img: "images/user_6.svg",
    tier: "icons/v2.svg",
  },
  {
    name: "Marvin McKinney",
    body: "Very nice and wonderful service we are really appreciating.",
    img: "images/user_3.svg",
    tier: "icons/v3.svg",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ name, body, img, tier }) => {
  return (
    <div className="flex flex-col justify-between cursor-pointer p-3 md:p-6 gap-2 items-start border border-border rounded-xl ml-5">
      <p className="h-fit md:h-[120px] w-[221px] md:w-[421px] text-sm md:para text-grey dark:text-gray-300">
        &quot;{body}&quot;
      </p>
      <div className="flex justify-center items-center gap-2">
        <img src={img} alt="" />
        <p className=" text-base font-neuemon font-medium md:para18 text-grey1 dark:text-gray-300/80  leading-6">
          {name}
        </p>
        <img src={tier} alt="" />
      </div>
    </div>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center gap-5 justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:30s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:30s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-0 md:w-1/3 bg-gradient-to-r from-white dark:from-bgDark2"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-0 md:w-1/3 bg-gradient-to-l from-white dark:from-bgDark2"></div>
    </div>
  );
}
