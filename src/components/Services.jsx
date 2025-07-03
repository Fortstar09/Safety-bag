import Button from "./Button";

const eachServe = [
  {
    name: "Instart Trade Execution",
    src: "/icons/bolt.svg",
    description:
      "Never miss a market move with ultra-fast trade execution powered by real-time data.",
  },
  {
    name: "Demo & Live Accounts",
    src: "/icons/chart.svg",
    description:
      "Practice risk-free on a demo account or go live and earn real profits anytime.",
  },
  {
    name: "Secure Transactions",
    src: "/icons/lock-on.svg",
    description:
      "Your data and funds are protected with bank-level encryption and two-factor authentication.",
  },
  {
    name: "Easy Deposits & Withdrawals",
    src: "/icons/creditcard.svg",
    description:
      "Fund your account or withdraw profits quickly via cards, bank transfer, or crypto — with zero hidden fees",
  },
];

const Services = () => {
  return (
    <section className="px-5 lg:px-12 xl:px-36 py-14 md:pt-[140px] md:pb-20 flex flex-col gap-20">
      <div className="flexCenter flex-col slideIn gap-8">
        <div className="flexCenter flex-col text-center gap-4 ">
          <h2 className=" text-black head28 max-w-[700px]">
            Seamless Asset Exchange,
            <span className="text-green"> Maximum Value.</span>
          </h2>
          <p className="para max-w-[500px] text-grey">
            Experience stress-free trading with our smooth and intuitive
            exchange process. We eliminate the hassle of managing unwanted
            assets, offering a fast, secure, and rewarding way to unlock their
            full potential.
          </p>
        </div>
        <Button text="Get Started" href="/signIn" pad />
      </div>
      <div className="flex flex-col gap-8 md:flex-row md:gap-0 justify-between items-center">
        {eachServe.map(({ name, src, description }) => (
          <EachService
            key={name}
            name={name}
            src={src}
            description={description}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;

// eslint-disable-next-line react/prop-types
const EachService = ({ name, src, description }) => {
  return (
    <div className="flex fadeUp flex-col justify-center text-center items-center gap-[7px]">
      <img src={src} alt="bolt" />
      <h3 className=" text-black para18 mb-[1px]">{name}</h3>
      <p className="para text-grey max-w-64">{description}</p>
    </div>
  );
};
