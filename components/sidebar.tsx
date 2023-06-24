"use client"
import * as React from "react";

import clsx from "clsx";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { LayoutGroup, motion } from "framer-motion";
import {
  AiOutlineBehance,
  AiOutlineDribbble,
  AiOutlineInstagram,
} from "react-icons/ai";
import MenuButton from "./menuButton";

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

function Logo() {
  return (
    <Link aria-label="Lee Robinson" href="/">
      <motion.svg
        className="text-white h-[25px] md:h-[37px]"
        width="25"
        height="37"
        viewBox="0 0 232 316"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          initial={{
            opacity: 0,
            pathLength: 0,
          }}
          animate={{
            opacity: 1,
            pathLength: 1,
          }}
          transition={{
            duration: 0.5,
            type: "spring",
            stiffness: 50,
          }}
          d="M39 316V0"
          stroke="currentColor"
          strokeWidth={78}
        />
        <motion.path
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 0.5,
            type: "spring",
            stiffness: 50,
          }}
          d="M232 314.998H129.852L232 232.887V314.998Z"
          fill="currentColor"
        />
      </motion.svg>
    </Link>
  );
}

export default function Navbar() {
  let pathname = usePathname() || "/";
  if (pathname.includes("/blog/")) {
    pathname = "/blog";
  }

  const [isOpen, setIsOpen] = React.useState(false);

  return (
    
    <aside className="w-full md:w-[200px] md:flex-shrink-0 md:px-[30px] bg-sport-black">
      <div className="md:sticky md:top-10 md:h-[90vh]">
        <div className="mx-auto md:mx-0 mb-16">
          <Logo />

          <MenuButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
        </div>
        <LayoutGroup>
          <nav
            className="flex flex-row md:flex-col items-start relative space-y-3 "
            id="nav"
          >
              {Object.entries(navItems).map(([path, { name }]) => {
                const isActive = path === pathname;
                return (
                  <Link
                    key={path}
                    href={path}
                    className={clsx(
                      "transition-all text-white font-[200] flex align-middle tracking-wide text-[14px] uppercase",
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
        </LayoutGroup>
        <div className="absolute bottom-0 flex flex-col gap-6">
          <div className="flex gap-2 flex-col">
            <a href="#">
              <AiOutlineBehance className="text-black bg-white rounded-full text-xl p-1 w-7 h-7 hover:bg-black hover:text-white transition-all flex items-center justify-center" />
            </a>
            <a href="#">
              <AiOutlineDribbble className="text-black bg-white rounded-full text-xl p-1 w-7 h-7 hover:bg-black hover:text-white transition-all flex items-center justify-center" />
            </a>
            <a href="#">
              <AiOutlineInstagram className="text-black bg-white rounded-full text-xl p-1 w-7 h-7 hover:bg-black hover:text-white transition-all flex items-center justify-center" />
            </a>
          </div>
          <p className="text-white text-[12px] font-[300] ">Copyright @2023 Ali Abdu. All rights reserved</p>
        </div>
      </div>
    </aside>
  );
}
