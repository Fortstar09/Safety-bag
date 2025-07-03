import Button from "./Button";

const navLinks = [
  { src: "#", name: "Products", id: 1 },
  { src: "#company", name: "Company", id: 2 },
  { src: "#blog", name: "Blog", id: 3 },
  { src: "#faq", name: "FAQs", id: 4 },
  { src: "#support", name: "Support", id: 5 },
];

const Navbar = () => {
  return (
    <nav className="px-5 lg:px-12 xl:px-[120px] navanimate py-10 bg-white">
      <div className="flex justify-between">
        <img src="/icons/webLogo.svg" alt="logo" />
        <div className=" gap-20 hidden lg:flexCenter">
          <ul className="flexCenter gap-10">
            {navLinks.map(({ src, name, id }) => (
              <li key={id}>
                <a
                  href={src}
                  className="text-light-black font-monasan font-normal text-base tracking-tight"
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>
          <div className="flexCenter gap-4">
            <Button text="Sign in" href='/signIn' pad />
            <Button text="Sign up" href='/signUp' grad pad />
          </div>
        </div>
        <img
          src="/icons/menu.svg"
          alt="menu"
          className="w-8 lg:hidden cursor-pointer h-8"
        />
      </div>
    </nav>
  );
};

export default Navbar;
