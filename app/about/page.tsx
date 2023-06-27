import Image from "next/image";
import React from "react";

function About() {
  return (
    <main className="w-full min-h-screen px-[18px] py-[80px] md:px-[3vw] lg:px-[5vw] xl:px-[7vw] ">
      <section className="grid grid-cols-1 md:grid-cols-12">
        <div className=" col-span-4">
          <h1 className=" italic font-bold mb-1">Nice to meet you!</h1>
          <h2 className=" uppercase text-[2.5rem] font-bold">welcome to...</h2>
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
          <div className="flex flex-col gap-3 w-full border-b border-[#141313] border-opacity-[0.2] mt-24 pb-8">
            <div className="grid grid-cols-2 gap-y-4">
              <span className=" flex gap-2 font-extrabold text-sm italic items-center">
                <Image
                  className=" bg-[#1413130D] rounded-full p-2 "
                  src="/assets/icons/phone.svg"
                  alt=""
                  width={30}
                  height={30}
                />
                +966 537 979 355
              </span>
              <span className=" flex gap-2 font-extrabold text-sm italic  justify-start items-center">
                <Image
                  className=" bg-[#1413130D] rounded-full p-2 "
                  src="/assets/icons/person.svg"
                  alt=""
                  width={30}
                  height={30}
                />
                26 yrs
              </span>
              <span className=" flex gap-2 font-extrabold text-sm italic items-center">
                <Image
                  className=" bg-[#1413130D] rounded-full p-2 "
                  src="/assets/icons/envelope.svg"
                  alt=""
                  width={30}
                  height={30}
                />
                uxali@outlook.com
              </span>
              <span className=" flex gap-2 font-extrabold text-sm italic items-center">
                <Image
                  className=" bg-[#1413130D] rounded-full p-2 "
                  src="/assets/icons/location-pin.svg"
                  alt=""
                  width={30}
                  height={30}
                />
                United kingdom, London
              </span>
            </div>
          </div>

          <div className=" grid grid-cols-2 gap-6 mt-8">
            <div>
              <p className=" flex items-center justify-start gap-2">
                <span className=" text-gradient-custom text-[2.5rem] font-bold">
                  3+
                </span>
                <span className=" italic font-extrabold leading-4 text-sm">
                  Years <br /> experience...
                </span>
              </p>
              <p className=" text-sm">
                Hello there! My name is{" "}
                <span className=" text-[#B86ADF]">Ali Abdu.</span> <br />I am a
                Products designer , and I am very passionate and dedicated to my
                work.
              </p>
            </div>
            <div>
              <p className=" flex items-center justify-start gap-2">
                <span className=" text-gradient-custom text-[2.5rem] font-bold">
                  23
                </span>
                <span className=" italic font-extrabold leading-4 text-sm">
                  Clients <br /> Worldwide...
                </span>
              </p>
              <p className=" text-sm">
                With 10+ years experience as a professional a graphic designer,
                I have acquired the skills and knowledge necessary to make your
                project a success.
              </p>
            </div>
          </div>
          <div className=" flex items-center gap-2 bg-sport-black py-8 px-6 mt-10">
            <Image
              src="/assets/icons/gray-quotes.svg"
              alt=""
              width={50}
              height={50}
            />
            <p className=" text-white text-sm font-semibold italic tracking-wide leading-6">
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus
              sed sit ultrices et sed metus sollicitudin.”
            </p>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2"></section>
    </main>
  );
}

export default About;
