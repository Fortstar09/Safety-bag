const ChoiceData = [
  {
    question: "Transaction Speed",
    wutong: "A few minutes",
    other: "A long time",
  },
  {
    question: "Security",
    wutong: "100% secure",
    other: "Very poor",
  },
  {
    question: "Withdrawal Charges",
    wutong: "Free",
    other: "Ridiculous",
  },
  {
    question: "Customer Support",
    wutong: "Available 24/7",
    other: "Depends on mood",
  },
  {
    question: "Exchange Rate",
    wutong: "High rate",
    other: "Low rates",
  },
];

const Choice = () => {
  return (
    <section
      className="px-5 lg:px-12 xl:px-36 py-10 md:my-[100px] flex flex-col justify-center slideIn gap-20"
      id="blog"
    >
      <div className="flexCenter flex-col text-center gap-4">
        <h2 className="max-w-[899px] text-center head28 text-black dark:text-textWhite1">
          Which do you prefer
          <span className="text-light-black"> - safebox right? </span>
          🤨
        </h2>
        <p className="para max-w-[356px] text-grey dark:text-gray-300">
          Here&apos;s a concise market review from our research, and we can tell
          you we are better
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex justify-center gap-6 text-grey1 dark:text-textWhite1 font-neuemon text-base font-medium md:para18 items-start border-b pb-2 border-line">
          <p className=" w-[370px] tracking-[-2%]"></p>
          <p className=" w-[370px] tracking-[-2%]">SAFEBOX</p>
          <p className=" w-[370px] tracking-[-2%]">Other App</p>
        </div>
        {ChoiceData.map((data) => (
          <ChioceTable
            key={data.question}
            question={data.question}
            wutong={data.wutong}
            other={data.other}
          />
        ))}
      </div>
    </section>
  );
};

export default Choice;

// eslint-disable-next-line react/prop-types
const ChioceTable = ({ question, wutong, other }) => {
  return (
    <div className="flex justify-center gap-6 text-sm font-monasan font-medium md:para items-start border-b pb-2 border-line">
      <p className="text-brand w-[370px] tracking-[-2%]">{question}</p>
      <p className="text-grey dark:text-gray-300/70 w-[370px] tracking-[-2%]">{wutong}</p>
      <p className="text-grey dark:text-gray-300/70 w-[370px] tracking-[-2%]">{other}</p>
    </div>
  );
};
