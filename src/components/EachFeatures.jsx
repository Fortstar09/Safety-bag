/* eslint-disable react/prop-types */
import Button from "./Button";

const EachFeatures = ({
  title,
  description,
  cta,
  despan,
  row,
  steps,
  images,
  icons,
  extraInfo,
}) => {
  return (
    <div
      className={`py-10  md:py-20 xl:py-[130px] px-5 lg:px-12 xl:px-36 ${
        title == "Loans" && "bg-[#FAFAFA]"
      }`}
    >
      <div
        className={`flex flex-col md:flex-row gap-10 justify-center lg:gap-[51px] xl:gap-[151px] items-start lg:items-center ${
          row && "md:flex-row-reverse"
        }`}
      >
        <img
          src={images}
          alt="features"
          className="w-[300px] show md:w-[420px] lg:w-[500px]"
        />
        <div className="flex flex-col fadeUp gap-5">
          <div className="flex flex-col items-start justify-center gap-4">
            <h2 className="text-black text-[24px] md:text-[28px] leading-[33.6px] font-neuemon font-medium ">
              {title}
            </h2>
            <p className="para text-grey max-w-[430px]">
              {description}
              {despan && (
                <span className="font-medium text-black">just four steps.</span>
              )}
            </p>
            <Button text={cta} pad />
          </div>
          <div className="border-y border-line">
            <ul className="py-4 flex flex-col gap-2">
              {steps.map(({ id, name }) => (
                <li className="para text-grey" key={id}>
                  <span className="text-light-black bg-line text w-5 h-5 inline-flex justify-center items-center rounded-full mr-2">
                    {id}
                  </span>
                  {name}
                </li>
              ))}
            </ul>
          </div>
          <SmallComp icons={icons} extraInfo={extraInfo} />
        </div>
      </div>
    </div>
  );
};

const SmallComp = ({ icons, extraInfo }) => {
  return (
    <div className="flex items-center  gap-2">
      <div className="flexCenter gap-2">
        <img src={icons[0]} alt="" />
        <p className="text-[14px] font-monasan text-grey1 font-normal">
          {extraInfo[0]}
        </p>
      </div>
      <span className="bg-grey1 w-[5px] h-[5px] rounded-full"></span>
      <div className="flexCenter gap-2">
        <img src={icons[1]} alt="" />
        <p className="text-[14px] font-monasan text-grey1 font-normal">
          {extraInfo[1]}
        </p>
      </div>
    </div>
  );
};

export default EachFeatures;
