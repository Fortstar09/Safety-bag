import EachFeatures from "./EachFeatures";

const keyFeatures = [
  {
    title: "How It Works – Start Trading in 4 Simple Steps",
    description:
      "Ready to trade? With Wutong, getting started is fast, easy, and secure. Here’s how it works: ",
    despan: true,
    steps: [
      { id: "1", name: "Create your Account " },
      { id: "2", name: "Fund your Wallet" },
      { id: "3", name: "Explore the Markets" },
      { id: "4", name: "Start Trading & Earning" },
    ],
    images: {
      featureImage: "images/feature_1.png",
      icons: ["icons/time.svg", "icons/time-run.svg"],
    },
    extraInfo: [
      "Trade-ready in minutes",
      "No experience? No problem — try our demo mode first..",
    ],
    cta: "Try Demo",
  },
  /* {
    title: "Loans",
    description:
      "Need money urgently? Exchange them for cash with Wutong. Acquire loan assistance in ",
    despan: true,
    row: true,
    cta: "Get a Loan",
    steps: [
      { id: "1", name: "Complete the authentication" },
      { id: "2", name: "Apply for loan" },
      { id: "3", name: "Send to your wallet" },
      { id: "4", name: "Replay it by selling cards" },
    ],
    images: {
      featureImage: "images/feature_2.png",
      icons: ["icons/offer.svg", "icons/hourglass.svg"],
    },
    extraInfo: ["Low interest rate", "You will get loan instantly"],
  },
  {
    title: "Savings",
    description:
      "Got unused gift cards? Exchange them for cash with Wutong. Turn your cards into cash instantly in ",
    despan: true,
    steps: [
      { id: "1", name: "Select a product" },
      { id: "2", name: "Buy any amount" },
      { id: "3", name: "Sell at an appropriate price" },
      { id: "4", name: "Calculate your earnings" },
    ],
    images: {
      featureImage: "images/feature_3.png",
      icons: ["icons/shield-cross.svg", "icons/wallet.svg"],
    },
    extraInfo: ["Very secure wallet", "Sweet interest on savings"],
    cta: "Start Saving",
  }, */
  {
    title: "Refer and Earn",
    description:
      "Need a way to make more money? Invite your friends, family, and colleagues to experience the benefits of Wutong.",
    row: true,
    steps: [
      { id: "1", name: "Create account" },
      { id: "2", name: "Share referral code or link" },
      { id: "3", name: "Earn points" },
      { id: "4", name: "Claim your reward" },
    ],
    images: {
      featureImage: "images/feature_4.png",
      icons: ["icons/gift.svg", "icons/block.svg"],
    },
    extraInfo: ["Amazing rewards", "No referral limit"],
    cta: "Start Earning",
  },
];

const Features = () => {
  return (
    <section className="py-14 md:pt-[140px] md:pb-20" id="company">
      <div className=" flexCenter flex-col slideIn gap-4">
        <h2 className="text-center text-black head28 max-w-[700px] ">
          Our features are designed to guide you every step of the way, helping
          you build confidence as you grow your portfolio.
        </h2>
        <p className="para text-center text-grey max-w-[555px] ">
          Whether you&apos;re just starting out or exploring new opportunities,
          Wutong makes your investment journey easier than ever.
        </p>
      </div>
      {keyFeatures.map((feature) => (
        <EachFeatures
          key={feature.title}
          title={feature.title}
          description={feature.description}
          despan={feature.despan}
          cta={feature.cta}
          row={feature.row}
          steps={feature.steps}
          images={feature.images.featureImage}
          icons={feature.images.icons}
          extraInfo={feature.extraInfo}
        />
      ))}
      ;
    </section>
  );
};

export default Features;
