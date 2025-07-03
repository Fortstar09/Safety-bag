import Button from "./Button";

const footerLink = [
  { src: "#products", name: "Products", id: 1 },
  { src: "#company", name: "Company", id: 2 },
  { src: "#blog", name: "Blog", id: 3 },
  { src: "#faq", name: "FAQs", id: 4 },
  { src: "#support", name: "Support", id: 5 },
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
            <img src="/icons/webLogo.svg" alt="logo" />
            <p className="para text-grey -tracking-wide max-w-[350px]">
              Have idle funds? Put your money to work by investing with Wutong —
              simple, secure, and built for beginners.
            </p>
          </div>
          <p className=" para text-grey1 -tracking-wide max-w-[350px]">
            Email : wtwutong@gmail.com
          </p>
        </div>
        <div className="flex flex-col justify-center items-start gap-8 ">
          <ul className="flex items-start justify-center flex-col md:items-center md:flex-row gap-2 md:gap-10">
            {footerLink.map(({ src, name, id }) => (
              <li key={id} className="text-black para cursor-pointer">
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
                className="py-4 px-4 w-[300px] text-[14px] text-grey border border-border rounded-[10px] focus:outline-none focus:border-green  focus:ring-green"
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
        <p className="para text-black">
          2025 WUTONG LIMITED. All Rights Reserved.
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
