import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Button = ({ text,href, grad, pad, className }) => {
  return (
    <Link to={href}
      className={`text-base tracking-tight cursor-pointer font-monasan font-medium border rounded-[10px] border-border text-black ${
        pad ? "px-6 py-3" : "px-4 py-2"
      } ${
        grad &&
        "bg-linear-to-r from-green to-[#7FC026]  text-white border-0"
      } ${className} `}
    >
      {text}
    </Link>
  );
};

export default Button;
