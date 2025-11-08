import Button from "./Button";

const Hero = () => {
  return (
    <section className="py-14 md:pt-[120px] md:pb-[200px] bg-white dark:bg-bgDark2">
      <div className="flexCenter flex-col gap-8 ">
        <div className="flexCenter flex-col gap-6">
          <h2 className="text-[52px] md:text-[78px] max-w-full md:max-w-[50rem] px-3 md:px-0 font-neuemon font-semibold hero-head dark:text-textWhite2 text-center leading-tight tracking-normal">
            Make <span>every</span> market <span>move</span> Count!
          </h2>
          <p className="para text-center text-grey px-3 md:px-0 max-w-[34rem] dark:text-textWhite2/80">
            Start trading in minutes with a secure, user-friendly platform built
            for profit and speed.
          </p>
        </div>
        <div className="flexCenter gap-4 mt-5">
          <Button text="Create account" href="/signUp" grad pad />
          <Button text="Sign In" href="/signIn" pad />
        </div>
      </div>
    </section>
  );
};

export default Hero;
