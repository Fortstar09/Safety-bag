const statsData = [
  {
    num: "3K+",
    title: "Registered Investors",
    numColor: "black",
    desc: "new investors building wealth with Wutong",
    gradient: ["from-[#CEE9D7]", "to-[#FEFEFE]"],
  },
  {
    num: "10M+",
    title: "Assets Traded",
    numColor: "white",
    desc: "stocks, crypto, and more traded with ease",
    gradient: ["from-[#98C5AA]", "to-[#008F36]"],
  },
  {
    num: "97%",
    title: "User Satisfaction Rate",
    numColor: "green",
    desc: "our platform makes investing simple and stress-free",
    gradient: ["from-[#E2E4EB]", "to-[#FEFEFE]"],
  },
  {
    num: "$60M+",
    title: "Total withdrawal amount",
    numColor: "white",
    desc: "users withdraw profits quickly and securely",
    gradient: ["from-[#E2E4EB]", "to-[#131313]"],
  },
];
const Stats = () => {
  return (
    <section className="px-5 lg:px-12 xl:px-36 mt-20 mb-10 flex flex-col justify-center gap-[140px] items-center">
      <h2 className=" w-full md:max-w-[700px] head28 text-center slideIn text-black">
        Our users trust us because we have some “doings”
        <span className="text-lightBlack">- yunno</span>
        😉
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-10 lg:gap-y-[100px]">
        {statsData.map((data) => (
          <StatsBox
            key={data.num}
            num={data.num}
            title={data.title}
            numColor={data.numColor}
            desc={data.desc}
            grad={data.gradient}
          />
        ))}
      </div>
    </section>
  );
};

export default Stats;

// eslint-disable-next-line react/prop-types
const StatsBox = ({ num, title, numColor, desc, grad }) => {
  return (
    <div
      className={`bg-gradient-to-t ${grad[0]} ${grad[1]} rounded-2xl slideIn border border-line`}
    >
      <div className="flexCenter flex-col statbox gap-[30px] px-5 md:px-10 py-14 md:py-20">
        <div className="gap-2 flexCenter flex-col ">
          <h1
            className={` text-8xl font-neuemon font-medium text-${numColor} tracking-[-5%] text-center`}
          >
            {num}
          </h1>
          <p
            className={`max-w-[220px] text-[28px] font-neuemon leading-[33.6px] font-medium
           ${
             numColor !== "white" ? "text-black" : "text-white"
           } text-[28px] text-center`}
          >
            {title}
          </p>
        </div>
        <p
          className={`para ${
            numColor !== "white" ? "text-grey" : "text-white"
          }  text-center max-w-[295px]`}
        >
          {desc}
        </p>
      </div>
    </div>
  );
};
