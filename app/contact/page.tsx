"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import PageTitle from "@/components/pageTitle";
import PageSubtitle from "@/components/pageSubtitle";
import "./style.css";

export default function Home() {
  const [fileName, setFileName] = useState<string | null>(null);
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setFileName(event.target.files[0].name);
    }
  };

  const socialMedia = [
    {
      name: "facebook",
      link: "#",
      icon: "",
    },
    {
      name: "twitter",
      link: "#",
      icon: "",
    },
    {
      name: "instagram",
      link: "#",
      icon: "",
    },
    {
      name: "linkedin",
      link: "#",
      icon: "",
    },
  ];
  return (
    <main
      className="grid grid-cols-1 md:grid-cols-12 min-h-screen w-full items-center justify-items-center 
    px-5 pt-[80px] md:px-[4vw] lg:px-[6vw] xl:px-[6vw]"
    >
      <PageTitle text="Contact" additionalClasses="block md:hidden md:col-span-12 w-full" />
      <PageSubtitle
        text="reach me out"
        additionalClasses="mt-2 mb-4 block md:hidden md:col-span-12 w-full"
      />
      <section className=" col-span-1 md:col-span-4 order-2 md:order-1 w-full pb-8 md:pb-0">
      <PageTitle text="Contact" additionalClasses="col-span-1 hidden md:block w-full" />
      <PageSubtitle
        text="reach me out"
        additionalClasses="mt-2 mb-6 col-span-1 hidden md:block w-full"
      />
        <p className="text-base md:text-xs font-medium">
          249 king Sir, 05th Floor, Ultra House Building, <br />
          Melboune, VIC 3000, London.
        </p>

        <h4 className="text-xl md:text-2xl font-bold mt-8 md:mt-16 md:mb-1">
          +966 359 797 355
        </h4>
        <h4 className="text-xl md:text-2xl font-bold">uxali@outlook.com</h4>

        <div className="flex justify-between md:justify-start md:gap-4 w-full mt-8 md:mt-14">
          {socialMedia.map((item, id) => {
            return (
              <a
                className="text-base md:text-xs font-semibold"
                href={item.link}
                key={id}
              >
                {item.name.toUpperCase()}
              </a>
            );
          })}
        </div>
      </section>

      <section className="col-span-1 md:col-span-8 bg-gradient-custom pl-6 pr-12 md:px-12 py-10 -mx-5 md:mx-0 w-[112%] md:w-full order-1 md:order-2 mb-14 md:mb-0">
        <h2 className="text-white text-2xl md:text-3xl font-bold uppercase">
          Any project
        </h2>
        <form
          id="form"
          className="grid grid-cols-1 md:grid-cols-2 gap-x-8 mt-7"
          noValidate
        >
          <div className="relative z-0 w-full mb-5 col-span-1">
            <input
              type="text"
              name="name"
              placeholder=" "
              required
              className="pt-3 pb-2 md:pt-2 block w-full px-0 mt-0 bg-transparent border-b-[1.5px] border-white appearance-none focus:outline-none focus:ring-0 text-white"
            />
            <label
              htmlFor="name"
              className="absolute duration-300 top-3 -z-1 origin-0 text-white text-base md:text-sm uppercase"
            >
              Name
            </label>
            <span
              className="text-base md:text-sm text-red-600 hidden"
              id="error"
            >
              Name is required
            </span>
          </div>

          <div className="relative z-0 w-full mb-5 col-span-1">
            <input
              type="email"
              name="email"
              placeholder=" "
              className="pt-3 pb-2 md:pt-2 block w-full px-0 mt-0 bg-transparent border-b-[1.5px] border-white appearance-none focus:outline-none focus:ring-0 text-white"
            />
            <label
              htmlFor="email"
              className="absolute duration-300 top-3 -z-1 origin-0 text-white text-base md:text-sm uppercase"
            >
              Email
            </label>
            <span
              className="text-base md:text-sm text-red-600 hidden"
              id="error"
            >
              Email address is required
            </span>
          </div>

          <div className="relative z-0 w-full mb-8 md:mb-3 mt-6 col-span-1 md:col-span-2">
            <textarea
              name="message"
              rows={3}
              className="pt-3 pb-2 md:pt-2 resize-none block w-full px-0 mt-0 bg-transparent border-b-[1.5px] border-white appearance-none focus:outline-none  text-white"
            />
            <label
              htmlFor="message"
              className="absolute duration-300 top-3 -z-1 origin-0 text-white text-base md:text-sm uppercase"
            >
              Message
            </label>
            <span
              className="text-base md:text-sm text-red-600 hidden"
              id="error"
            >
              Email address is required
            </span>
          </div>
          <div className="col-span-1 md:col-span-2 mb-8">
            <label
              htmlFor="upload"
              className="flex items-center gap-2 cursor-pointer text-white"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="mdi:link-variant">
                  <path
                    id="Vector"
                    d="M8.82509 11.175C9.16676 11.5 9.16676 12.0333 8.82509 12.3583C8.50009 12.6833 7.96676 12.6833 7.64176 12.3583C6.86124 11.5766 6.42285 10.5171 6.42285 9.4125C6.42285 8.30785 6.86124 7.24836 7.64176 6.46667L10.5918 3.51667C11.3735 2.73615 12.4329 2.29776 13.5376 2.29776C14.6422 2.29776 15.7017 2.73615 16.4834 3.51667C17.2639 4.29836 17.7023 5.35786 17.7023 6.4625C17.7023 7.56715 17.2639 8.62665 16.4834 9.40834L15.2418 10.65C15.2501 9.96667 15.1418 9.28334 14.9084 8.63334L15.3001 8.23334C15.5337 8.00224 15.7192 7.72711 15.8457 7.42386C15.9723 7.12061 16.0375 6.79527 16.0375 6.46667C16.0375 6.13807 15.9723 5.81273 15.8457 5.50948C15.7192 5.20623 15.5337 4.9311 15.3001 4.7C15.069 4.46639 14.7939 4.28093 14.4906 4.15435C14.1874 4.02778 13.862 3.96261 13.5334 3.96261C13.2048 3.96261 12.8795 4.02778 12.5762 4.15435C12.273 4.28093 11.9979 4.46639 11.7668 4.7L8.82509 7.64167C8.59148 7.87276 8.40602 8.1479 8.27944 8.45114C8.15287 8.75439 8.0877 9.07973 8.0877 9.40834C8.0877 9.73694 8.15287 10.0623 8.27944 10.3655C8.40602 10.6688 8.59148 10.9439 8.82509 11.175ZM11.1751 7.64167C11.5001 7.31667 12.0334 7.31667 12.3584 7.64167C13.1389 8.42336 13.5773 9.48285 13.5773 10.5875C13.5773 11.6922 13.1389 12.7516 12.3584 13.5333L9.40843 16.4833C8.62674 17.2639 7.56724 17.7022 6.46259 17.7022C5.35795 17.7022 4.29845 17.2639 3.51676 16.4833C2.73624 15.7016 2.29785 14.6422 2.29785 13.5375C2.29785 12.4329 2.73624 11.3734 3.51676 10.5917L4.75843 9.35C4.75009 10.0333 4.85843 10.7167 5.09176 11.375L4.70009 11.7667C4.46648 11.9978 4.28102 12.2729 4.15444 12.5761C4.02787 12.8794 3.9627 13.2047 3.9627 13.5333C3.9627 13.8619 4.02787 14.1873 4.15444 14.4905C4.28102 14.7938 4.46648 15.0689 4.70009 15.3C4.93119 15.5336 5.20632 15.7191 5.50957 15.8457C5.81282 15.9722 6.13816 16.0374 6.46676 16.0374C6.79536 16.0374 7.12071 15.9722 7.42395 15.8457C7.7272 15.7191 8.00233 15.5336 8.23343 15.3L11.1751 12.3583C11.4087 12.1272 11.5942 11.8521 11.7207 11.5489C11.8473 11.2456 11.9125 10.9203 11.9125 10.5917C11.9125 10.2631 11.8473 9.93773 11.7207 9.63448C11.5942 9.33123 11.4087 9.0561 11.1751 8.825C11.0942 8.74916 11.0296 8.65753 10.9855 8.55576C10.9414 8.45399 10.9187 8.34425 10.9187 8.23334C10.9187 8.12242 10.9414 8.01269 10.9855 7.91092C11.0296 7.80915 11.0942 7.71751 11.1751 7.64167Z"
                    fill="white"
                  />
                </g>
              </svg>

              {fileName ? (
                <span className="">{fileName}</span>
              ) : (
                <span className="">Attach file</span>
              )}
            </label>
            <input
              id="upload"
              type="file"
              className="hidden"
              onChange={handleFileChange}
            />
          </div>

          <div className="col-span-1 md:col-span-2">
            <button
              type="submit"
              className="
          bg-sport-black
          hover:bg-opacity-75 transition text-white
           md:text-sm flex justify-center items-center gap-2
           px-8 py-4 md:px-6 md:py-2 mt-2 md:mt-7
          "
            >
              Submit now
              <Image
                className=" w-[25px] md:w-[20px]"
                src="/assets/icons/colored-arrow.svg"
                alt=""
                width={15}
                height={15}
              />
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}
