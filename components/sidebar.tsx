"use client"
import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useMedia } from "react-use";

import clsx from "clsx";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  AiOutlineBehance,
  AiOutlineDribbble,
  AiOutlineInstagram,
} from "react-icons/ai";
import MenuButton from "./menuButton";
import Logo from "./logo";

const navItems = {
  "/": {
    name: "home",
  },
  "/about": {
    name: "about",
  },
  "/blogs": {
    name: "blogs",
  },
  "/works": {
    name: "works",
  },
  "/services": {
    name: "services",
  },
  "/contact": {
    name: "contact",
  },
};

export default function Navbar() {
  let pathname = usePathname() || "/";
  if (pathname.includes("/blog/")) {
    pathname = "/blog";
  }

  const [isOpen, setIsOpen] = React.useState(false);
  const isSmallScreen = useMedia("(max-width:768px)");

  const variants = {
    hidden: { y: "-110vh"},
    visible: { y: "0" }
  };


  return (
    <>
      {
        isSmallScreen
        &&
        <MenuButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
      }

      <motion.aside 
        className="w-screen md:w-[200px] md:flex-shrink-0 md:px-[30px] bg-sport-black absolute md:relative"
        initial={!isSmallScreen ? "visible" : "hidden"}
        animate={!isSmallScreen || isOpen ? "visible" : "hidden"}
        variants={variants}  
      >
        <div className="md:sticky md:top-10 h-screen md:h-[90vh]">
          <div className="mx-auto md:mx-0 mb-24 md:mb-16 w-fit md:w-full mt-8 md:mt-0">
            <Logo />

          </div>
          
            <nav
              className="flex flex-col items-center md:items-start relative space-y-3 "
              id="nav"
            >
                {Object.entries(navItems).map(([path, { name }]) => {
                  const isActive = path === pathname;
                  return (
                    <Link
                      key={path}
                      href={path}
                      className={clsx(
                        "transition-all text-white font-[200] flex align-middle tracking-wide text-xl md:text-[14px] uppercase",
                        {
                          "text-neutral-500": !isActive,
                          "!font-semibold": isActive,
                        }
                      )}
                    >
                      <span className="relative">
                        {name}
                        {path === pathname ? (
                          <motion.div
                            className="absolute h-[3px] top-1/2 -translate-y-1/2 bg-gradient-custom z-[-1]"
                            initial={{width: 0}}
                            animate={{width: '100%'}}
                            transition={{
                              type: "spring",
                              stiffness: 350,
                              damping: 30,
                              delay: 0.25
                            }}
                          />
                        ) : null}
                      </span>
                    </Link>
                  );
                })}
              
            </nav>
          
          <div className="absolute bottom-16 md:bottom-0 flex flex-col gap-6">
            <div className="flex gap-2 md:flex-col justify-center w-screen md:w-fit">
              <a href="#">
                <AiOutlineBehance className="text-black bg-white rounded-full text-xl p-1 w-10 h-10 md:w-7 md:h-7 hover:bg-black hover:text-white transition-all flex items-center justify-center" />
              </a>
              <a href="#">
                <AiOutlineDribbble className="text-black bg-white rounded-full text-xl p-1 w-10 h-10 md:w-7 md:h-7 hover:bg-black hover:text-white transition-all flex items-center justify-center" />
              </a>
              <a href="#">
                <AiOutlineInstagram className="text-black bg-white rounded-full text-xl p-1 w-10 h-10 md:w-7 md:h-7 hover:bg-black hover:text-white transition-all flex items-center justify-center" />
              </a>
            </div>
            <p className="text-white w-[200px] leading-4 mx-auto text-center md:text-start md:w-fit text-lg md:text-[12px] font-[300] ">Copyright @2023 Ali Abdu. All rights reserved</p>
          </div>
        </div>
      </motion.aside>
    </>
  );
}
