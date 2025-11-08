import Button from "./Button";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { src: "#", name: "Home", id: 1 },
  { src: "#company", name: "Features", id: 2 },
  { src: "#stats", name: "Stats", id: 3 },
  { src: "#faq", name: "FAQs", id: 4 },
  { src: "#review", name: "Review", id: 5 },
];

const Navbar = () => {
  return (
    <nav className="px-5 lg:px-12 xl:px-[120px] navanimate py-7 mb-4 bg-white dark:bg-bgDark2 border-b  dark:border-line/30">
      <div className="flex justify-between">
        <a href="/" className="flex justify-center gap-4 items-center">
          <img src="/icons/logo.svg" alt="logo" className=" size-6 " />
          <span className="text-lg font-semibold text-[#333] dark:text-white">
            SafeBox
          </span>
        </a>
        <div className=" gap-20 hidden lg:flexCenter">
          <ul className="flexCenter gap-10">
            {navLinks.map(({ src, name, id }) => (
              <li key={id}>
                <a
                  href={src}
                  className="text-lightBlack font-monasan font-normal text-base tracking-tight"
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>
          <div className="flexCenter gap-4">
            <Button text="Sign in" href="/signIn" pad />
            <Button text="Sign up" href="/signUp" grad pad />
          <ThemeToggle />

          </div>
        </div>
        <div className="lg:hidden flex justify-center items-center gap-3">
          <ThemeToggle />
          <img
            src="/icons/menu.svg"
            alt="menu"
            className="w-8  cursor-pointer h-8"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
