"use client";
import Image from "next/image";
import React from "react";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageTitle from "@/components/pageTitle";
import PageSubtitle from "@/components/pageSubtitle";

function Services() {
  const [expanded, setExpanded] = useState<number>(0);
  const services = [
    {
      id: 0,
      data: {
        title: "web design",
        briefDescription: "lorem Ips",
        image: "https://picsum.photos/400/200",
        description:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam doloribus facilis quasi consectetur expedita nam enim, iure cum nisi qui?",
      },
    },
    {
      id: 1,
      data: {
        title: "ux/ui design",
        briefDescription: "lorem Ips",
        image: "https://picsum.photos/400/200",
        description:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam doloribus facilis quasi consectetur expedita nam enim, iure cum nisi qui?",
      },
    },
    {
      id: 2,
      data: {
        title: "mobile application",
        briefDescription: "lorem Ips",
        image: "https://picsum.photos/400/200",
        description:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam doloribus facilis quasi consectetur expedita nam enim, iure cum nisi qui?",
      },
    },
    {
      id: 3,
      data: {
        title: "user research",
        briefDescription: "lorem Ips",
        image: "https://picsum.photos/400/200",
        description:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam doloribus facilis quasi consectetur expedita nam enim, iure cum nisi qui?",
      },
    },
  ];

  return (
    <main className="w-full min-h-screen pt-24 pb-10 px-6 md:px-[3vw] lg:px-[5vw] xl:px-[7vw] max-w-screen-xl transition">
      <PageTitle text="Services"/>
      <PageSubtitle text="my specialties"/>

      <section className=" mt-8">
        {services.map((service) => (
          <Accordion
            key={service.id}
            i={service.id}
            expanded={expanded}
            setExpanded={setExpanded}
            data={service.data}
          />
        ))}
      </section>
    </main>
  );
}

export default Services;

type AccordionType = {
  i: number;
  expanded: false | number;
  setExpanded: (arg: number) => void;
  data: {
    title: string;
    briefDescription: string;
    description: string;
    image: string;
  };
};

const Accordion = ({ i, expanded, setExpanded, data }: AccordionType) => {
  const isOpen = i === expanded;

  return (
    <>
      <motion.header
        className={`grid grid-cols-12 relative rounded my-3 py-5 border-[#141313] border-b border-opacity-25 overflow-hidden
          ${isOpen ? ' cursor-auto': ' cursor-pointer'}
        `}
        onClick={() => setExpanded(i)}
      >
        <h2
          className={`col-span-11 md:col-span-5 order-1 text-sport-black text-2xl md:text-3xl font-bold uppercase 
          ${isOpen ? "text-gradient-custom" : ""}
        `}
        >
          <span className="mr-3">•</span>
          {data.title}
        </h2>

        <section className="col-span-12 md:col-span-6 order-3 md:order-2">
          <AnimatePresence initial={false} mode="wait">
            {!isOpen && (
              <motion.section
                key={data.briefDescription}
                initial="collapsed"
                animate="open"
                exit="collapsed"
                variants={{
                  open: { opacity: 1, height: "auto" },
                  collapsed: { opacity: 0, height: 0 },
                }}
                transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                
              >
                {data.briefDescription}
              </motion.section>
            )}

            {isOpen && (
              <motion.section
                key={data.description}
                initial="collapsed"
                animate="open"
                exit="collapsed"
                variants={{
                  open: { opacity: 1, height: "auto" },
                  collapsed: { opacity: 0, height: 0 },
                }}
                transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                className="flex flex-col-reverse md:flex-col "
              >
                <Image src={data.image} alt="" width={350} height={100} />
                <p className=" text-sm my-3 md:my-0 md:mt-3">{data.description}</p>
              </motion.section>
            )}
          </AnimatePresence>
        </section>
        <span className=" col-span-1 order-2 md:order-3 flex justify-end">
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            className=" w-8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              animate={{
                transform: isOpen ? "rotate(-90deg)" : "rotate(0deg)",
              }}
              stroke="#141313"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M20 6.66699V33.3337"
            />
            <path
              d="M6.66669 20H33.3334"
              stroke="#141313"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </motion.header>
    </>
  );
};
