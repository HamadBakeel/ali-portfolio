import * as React from "react";
import { motion } from "framer-motion";

type MenuButtonProps ={
    isOpen: boolean,
    onClick: ()=>void,
}

export default function MenuButton({ isOpen, onClick }: MenuButtonProps) {
  const topVariants = {
    closed: { rotate: 0, translateY: 0, fill: "black" },
    open: { rotate: 60, translateY: 22, fill: "white" }
  };
  const centerVariants = {
    closed: { opacity: 1, fill: "black" },
    open: { opacity: 0 }
  };
  const bottomVariants = {
    closed: { rotate: 0, translateY: 0, fill: "black" },
    open: { rotate: -60, translateY: -22, fill: "white" }
  };

  return (
    <motion.button
      onClick={onClick}
      initial={false}
      animate={isOpen ? "open" : "closed"}
      className="fixed top-4 right-4 z-10"
    >
      <motion.svg
        width="20"
        height="20"
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.rect
          width="50"
          height="6"
          rx="3"
          
          variants={topVariants}
        />
        <motion.rect
          y="22"
          width="50"
          height="6"
          rx="3"
          
          variants={centerVariants}
        />
        <motion.rect
          y="44"
          width="50"
          height="6"
          rx="3"
          
          variants={bottomVariants}
        />
      </motion.svg>
    </motion.button>
  );
}