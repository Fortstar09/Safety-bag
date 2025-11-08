import Button from "./Button";

const footerLink = [
  { src: "#", name: "Home", id: 1 },
  { src: "#company", name: "Features", id: 2 },
  { src: "#stats", name: "Stats", id: 3 },
  { src: "#faq", name: "FAQs", id: 4 },
  { src: "#review", name: "Review", id: 5 },
];

const socials = [
  { src: "#", name: "WhatsApp", id: 1 },
  { src: "#", name: "Twitter -X", id: 2 },
  { src: "#", name: "Instagram", id: 3 },
  { src: "#", name: "Facebook", id: 4 },
];

const Footer = () => {
  return (
    <section className="px-5 lg:px-12 xl:px-36 py-[30px] flex flex-col gap-10 md:gap-20">
      <div className="flex flex-col gap-10 md:flex-row md:gap-0 justify-between items-start">
        <div className="flex flex-col justify-center items-start gap-8 ">
          <div className="flex flex-col justify-center items-start gap-4">
            <a
              href="/"
              className="flex justify-center gap-4 items-center"
            >
              <img src="/icons/logo.svg" alt="logo" className=" size-6 " />
              <span className="text-lg font-semibold text-[#333] dark:text-white">SafeBox</span>
            </a>
            <p className="para text-grey dark:text-gray-300 -tracking-wide max-w-[350px]">
              Have idle funds? Put your money to work by investing with SafeBox
              — simple, secure, and built for beginners.
            </p>
          </div>
          <p className=" para text-grey1 dark:text-gray-300 -tracking-wide max-w-[350px]">
            Email : safebox@gmail.com
          </p>
        </div>
        <div className="flex flex-col justify-center items-start gap-8 ">
          <ul className="flex items-start justify-center flex-col md:items-center md:flex-row gap-2 md:gap-10">
            {footerLink.map(({ src, name, id }) => (
              <li key={id} className="text-black dark:text-textWhite1 para cursor-pointer">
                <a href={src}>{name}</a>
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-2 items-start justify-center">
            <p className=" para text-grey">Follow our latest news</p>
            <div className="flex flex-col justify-center items-center relative">
              <input
                type="text"
                placeholder="Email Address"
                className="py-4 px-4 w-[300px] text-[14px] text-grey border border-border rounded-[10px] focus:outline-hidden focus:border-brand  focus:ring-brand"
              />
              <Button
                text="Submit"
                grad
                className="absolute top-auto right-0 mr-2"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-start gap-4 justify-between md:items-center md:gap-0">
        <p className="para text-black dark:text-grey">
          2025 SAFEBOX LIMITED. All Rights Reserved.
        </p>
        <ul className="flexCenter flex-col md:flex-row gap-2">
          {socials.map(({ src, name, id }) => (
            <li
              key={id}
              className="py-2 px-[14px] font-monasan font-normal text-black text-[14px] leading-5 tracking-tight bg-[#F4F4F4F4] bg-opacity-[95.69%] border border-border rounded-[40px]"
            >
              <a href={src}>{name}</a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Footer;
