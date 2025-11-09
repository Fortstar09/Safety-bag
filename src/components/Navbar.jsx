"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "./Button";
import ThemeToggle from "./ThemeToggle";
import { X } from "lucide-react";

const navLinks = [
  { src: "#", name: "Home", id: 1 },
  { src: "#company", name: "Features", id: 2 },
  { src: "#stats", name: "Stats", id: 3 },
  { src: "#faq", name: "FAQs", id: 4 },
  { src: "#review", name: "Review", id: 5 },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="px-5 lg:px-12 xl:px-[120px] navanimate py-7 mb-4 bg-white dark:bg-bgDark2 border-b dark:border-line/30">
      <div className="flex justify-between items-center">
        <a href="/" className="flex justify-center gap-4 items-center">
          <img src="/icons/logo.svg" alt="logo" className="size-6" />
          <span className="text-lg font-semibold text-[#333] dark:text-white">
            SafeBox
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex gap-20 items-center">
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

        {/* Mobile Nav */}
        <div className="lg:hidden flex items-center gap-3">
          <ThemeToggle />
          <img
            src="/icons/menu.svg"
            alt="menu"
            className="w-8 h-8 cursor-pointer"
            onClick={() => setIsOpen(true)}
          />
        </div>
      </div>

      {/* Mobile Slider */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Dark overlay */}
            <motion.div
              className="fixed inset-0 bg-black/40 min-h-[200dvh] z-80"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Sliding menu */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 left-0 w-[300px] sm:w-[340px] h-full bg-white dark:bg-bgDark1 min-h-[200dvh] z-60 p-8 flex flex-col"
            >
              <div className="flex justify-end items-end mb-10">
                <X className="dark:text-white size-6"  onClick={() => setIsOpen(false)} />
              </div>

              <ul className="flex flex-col gap-8">
                {navLinks.map(({ src, name, id }) => (
                  <li key={id}>
                    <a
                      href={src}
                      onClick={() => setIsOpen(false)}
                      className="text-grey dark:text-white/80 text-base tracking-tight font-monasan hover:text-brand transition"
                    >
                      {name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
