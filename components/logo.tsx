import Link from "next/link";
import { motion } from "framer-motion";

export default function Logo() {
    return (
      <Link aria-label="Lee Robinson" href="/">
        <motion.svg
          className="text-white h-[50px] md:h-[37px]"
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