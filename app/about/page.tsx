import Image from "next/image";
import React from "react";

import PageTitle from "@/components/pageTitle";
import PageSubtitle from "@/components/pageSubtitle";
function About() {
  return (
    <main className="w-full min-h-screen pt-24 max-w-screen-xl">
      <section className="grid grid-cols-1 md:grid-cols-11 px-8 md:px-[3vw] lg:px-[5vw] xl:px-[7vw]">
        <div className=" col-span-4">
          <h1></h1>
          <PageTitle text="Nice to meet you!"/>
          <PageSubtitle text="welcome to..."/>
          <Image
            className=" w-full mb-4 block m-auto clip-polygon"
            src="/assets/ali/about-image.svg"
            alt=""
            width={1}
            height={1}
          />
          <h3 className="text-[2.5rem] font-extrabold uppercase text-gradient-custom text-center mb-0 leading-[3rem] tracking-tighter">
            ali abdu
          </h3>
          <h4 className=" italic font-bold text-xl md:text-[initial] text-center mt-1 mb-4">
            Product Designer <span className=" font-normal">based in</span>{" "}
            Riyadh
          </h4>
          <a
            href="#"
            className="flex justify-center gap-2 font-semibold underline"
          >
            Download CV
            <Image
              className=" w-5"
              src="/assets/icons/black-white-arrow.svg"
              alt=""
              width={1}
              height={1}
            />
          </a>
        </div>
        <div className="col-span-1"></div>
        <div className=" col-span-6">
          <div className="w-full border-b border-[#141313] border-opacity-[0.2] mt-10 md:mt-24 pb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 md:gap-y-4">
              <span className=" flex gap-2 font-extrabold text-lg md:text-sm italic items-center">
                <Image
                  className=" bg-[#1413130D] rounded-full p-2 w-9"
                  src="/assets/icons/phone.svg"
                  alt=""
                  width={30}
                  height={30}
                />
                +966 537 979 355
              </span>
              <span className=" flex gap-2 font-extrabold text-lg md:text-sm italic  justify-start items-center">
                <Image
                  className=" bg-[#1413130D] rounded-full p-2  w-9"
                  src="/assets/icons/person.svg"
                  alt=""
                  width={30}
                  height={30}
                />
                26 yrs
              </span>
              <span className=" flex gap-2 font-extrabold text-lg md:text-sm italic items-center">
                <Image
                  className=" bg-[#1413130D] rounded-full p-2  w-9"
                  src="/assets/icons/envelope.svg"
                  alt=""
                  width={30}
                  height={30}
                />
                uxali@outlook.com
              </span>
              <span className=" flex gap-2 font-extrabold text-lg md:text-sm italic items-center">
                <Image
                  className=" bg-[#1413130D] rounded-full p-2  w-9"
                  src="/assets/icons/location-pin.svg"
                  alt=""
                  width={30}
                  height={30}
                />
                United kingdom, London
              </span>
            </div>
          </div>

          <div className=" grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div>
              <p className=" flex items-center justify-start gap-2">
                <span className=" text-gradient-custom text-[3rem] md:text-[2.5rem] font-bold">
                  3+
                </span>
                <span className=" italic font-extrabold leading-5 md:leading-4 text-lg md:text-sm">
                  Years <br /> experience...
                </span>
              </p>
              <p className=" text-lg md:text-sm">
                Hello there! My name is{" "}
                <span className=" text-[#B86ADF]">Ali Abdu.</span> <br />I am a
                Products designer , and I am very passionate and dedicated to my
                work.
              </p>
            </div>
            <div>
              <p className=" flex items-center justify-start gap-2">
                <span className=" text-gradient-custom text-[3rem] md:text-[2.5rem] font-bold">
                  23
                </span>
                <span className=" italic font-extrabold leading-5 md:leading-4 text-lg md:text-sm">
                  Clients <br /> Worldwide...
                </span>
              </p>
              <p className=" text-lg md:text-sm">
                With 10+ years experience as a professional a graphic designer,
                I have acquired the skills and knowledge necessary to make your
                project a success.
              </p>
            </div>
          </div>
          <div className=" flex items-start md:items-center gap-2 bg-sport-black py-5 md:py-8 px-4 md:px-6 mt-10">
            <Image
              src="/assets/icons/gray-quotes.svg"
              className=" w-10"
              alt=""
              width={50}
              height={50}
            />
            <p className=" text-white text-xl md:text-sm font-semibold italic tracking-wide leading-9 md:leading-6">
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus
              sed sit ultrices et sed metus sollicitudin.”
            </p>
          </div>
        </div>
      </section>

      <section
        className="grid grid-cols-1 md:grid-cols-12 mt-10 md:mt-20 pt-12 md:pt-24 pb-16 
        px-8 md:px-[3vw] lg:px-[5vw] xl:px-[7vw]
        md:mr-[3vw] lg:mr-[5vw] xl:mr-[7vw]
        "
        style={{
          background:
            "linear-gradient(273deg, #FFB147 0%, #FF6C63 52.03%, #B86ADF 100%);",
        }}
      >
        <div className=" col-span-5">
          <h3 className="italic text-white text-lg md:text-sm font-semibold mb-4 md:mb-2 tracking-wider">Experience</h3>
          <h4 className="uppercase text-white font-semibold md:font-bold text-4xl mb-5 tracking-wider">my experience</h4>
          <p className=" text-xl md:text-sm text-white tracking-wide">
            Hello there! My name is Ali Abdu. <br /> I am a Product Designer, and
            I&#39;m very passionate and dedicated to my work.
          </p>
          <button
            className="
          bg-sport-black
          hover:bg-white hover:text-black transition text-white
           md:text-sm hidden md:flex justify-center items-center gap-2
           mx-auto md:mx-0 mb-6 px-4 py-4 md:px-6 md:py-3 mt-2 md:mt-8"
          >
            Download my resume
            <Image
              className=" w-[25px] md:w-[20px]"
              src="/assets/icons/colored-arrow.svg"
              alt=""
              width={15}
              height={15}
            />
          </button>
        </div>
        <div className=" col-span-1"></div>
        <div className=" col-span-6 mt-10 md:mt-0">
          <div className="text-white border-b border-white border-opacity-25 mb-7">
            <div className=" flex justify-between md:text-sm tracking-wider">
              <span className=" italic font-semibold">-2018 - Present</span>
              <span className="md:text-xs md:font-semibold">-One Graphics</span>
            </div>
            <p className=" text-2xl uppercase font-bold mb-3 mt-2">lead product designer</p>
          </div>
          <div className="text-white border-b border-white border-opacity-25 mb-7">
            <div className=" flex justify-between md:text-sm tracking-wider">
              <span className=" italic font-semibold">-2018 - 2010</span>
              <span className="md:text-xs md:font-semibold">-One Graphics</span>
            </div>
            <p className=" text-2xl uppercase font-bold mb-3 mt-2">senior UX/UI designer</p>
          </div>
          <div className="text-white border-b border-white border-opacity-25 mb-7">
            <div className=" flex justify-between md:text-sm tracking-wider">
              <span className=" italic font-semibold">-2008 - 2006</span>
              <span className="md:text-xs md:font-semibold">-Otek</span>
            </div>
            <p className=" text-2xl uppercase font-bold mb-3 mt-2">UX/UI designer</p>
          </div>
          <button
            className="
          bg-sport-black
          hover:bg-white hover:text-black transition text-white
           md:text-sm flex md:hidden w-full justify-center items-center gap-2
           mx-auto md:mx-0 mb-6 px-4 py-4 md:px-6 md:py-3 mt-12"
          >
            Download my resume
            <Image
              className=" w-[25px] md:w-[20px]"
              src="/assets/icons/colored-arrow.svg"
              alt=""
              width={15}
              height={15}
            />
          </button>
        </div>
      </section>
    </main>
  );
}

export default About;
