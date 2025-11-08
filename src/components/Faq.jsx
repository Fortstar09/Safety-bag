const FaqData = [
  {
    question: "What is SafeBox?",
    answer:
      "SafeBox is a beginner-friendly investment platform where you can buy, sell, and manage assets like stocks and cryptocurrencies with ease.",
  },
  {
    question: "Do I need experience to start investing on SafeBox?",
    answer:
      "No, SafeBox is designed for beginners. We offer a simple interface and helpful guides to support you every step of the way.",
  },
  {
    question: "What can I invest in on SafeBox?",
    answer:
      "You can invest in various assets including stocks, cryptocurrencies, and ETFs. We’re constantly expanding our offerings.",
  },
  {
    question: "How do I fund my account?",
    answer:
      "You can fund your SafeBox account using secure payment methods including bank transfers and cards.",
  },
  {
    question: "How safe is SafeBox for investing?",
    answer:
      "SafeBox uses advanced encryption and security measures to protect your funds and personal data. Your safety is our priority.",
  },
  {
    question: "Are there any fees for trading?",
    answer:
      "We keep our fees low and transparent. You’ll always know what you’re paying before you confirm a trade.",
  },
  {
    question: "Can I withdraw my money anytime?",
    answer:
      "Yes, you can withdraw your available balance at any time through your preferred payment method.",
  },
  {
    question: "What if I make a mistake in a trade?",
    answer:
      "While trades are final, our support team is here to help resolve any issues or concerns you might have.",
  },
  {
    question: "Does SafeBox offer educational resources?",
    answer:
      "Yes, we provide beginner-friendly tutorials and articles to help you learn the basics of investing and trading.",
  },
];

const Faq = () => {
  return (
    <section
      className="px-5 lg:px-12 xl:px-36 my-[100px] flex flex-col justify-center gap-[100px]"
      id="faq"
    >
      <div className="flexCenter flex-col slideIn text-center gap-4">
        <h2 className="max-w-[899px] text-center head28 text-black dark:text-textWhite1">
          Frequently asked questions 🤔
        </h2>
        <p className="para max-w-[356px] text-grey dark:text-gray-300">
          We took our time to gather some questions that we&apos;ve been asked
          before and here are the answers
        </p>
      </div>
      <div className="flex flex-col gap-20 relative">
        <div className="grid grid-cols-1 relative md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FaqData.map((data) => (
            <EachFaq
              key={data.question}
              question={data.question}
              answer={data.answer}
            />
          ))}
        </div>
        <div className="py-8 border-t border-line">
          <h2 className="para text-center text-grey dark:text-gray-300">
            Got more questions you can&apos;t find here?
            <a href="#" className="text-emerald-500 underline ml-2">
              Contact us
            </a>
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Faq;

// eslint-disable-next-line react/prop-types
const EachFaq = ({ question, answer }) => {
  return (
    <div className="max-w-[370px] fadeUp flex flex-col gap-4 justify-center items-start">
      <h2 className=" text-grey1 dark:text-textWhite1 para18">{question}</h2>
      <p className="para text-grey dark:text-gray-300/70 max-w-[320px] leading-[-2%]">{answer}</p>
    </div>
  );
};
