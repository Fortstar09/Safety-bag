import { Link } from "react-router-dom";

const Action = () => {
  return (
    <section
      className="px-5 lg:px-12 xl:px-36 py-14 md:py-[140px] flex flex-col gap-20 bg-gradient-to-r from-[#099235] to-[#7FC026]"
      id="support"
    >
      <div className="flexCenter flex-col slideIn gap-8">
        <div className="flexCenter flex-col text-center gap-4 ">
          <h2 className="text-[36px] md:text-[64px] font-neuemon font-medium text-white md:leading-[76.8px] tracking-[-1%]">
            Create account and join the movement!
          </h2>
          <p className="para max-w-[700px] text-white">
            Say goodbye to the hassle of dealing with unwanted cards—we provide
            a convenient solution that maximizes the value of your assets.
          </p>
        </div>
        <Link to='/signUp'>
          <div
            className={`text-base tracking-tight cursor-pointer font-monasan font-medium border rounded-[10px] border-line px-6 py-3 text-white bg-white bg-opacity-20`}
          >
            Create account
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Action;
