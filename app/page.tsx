import Image from "next/image";

export default function Home() {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 w-full min-h-screen items-center justify-items-center px-[18px] py-[80px] md:px-[4vw] lg:px-[6vw] xl:px-[10vw]">
      <section className="relative isolate">
        <h1 className=" text-[50px] md:text-[60px] uppercase leading-[55px] mb-4">
          My name <br /> is{" "}
          <span className=" font-extrabold">
            Ali <br className=" hidden md:block"/> Abdu...
          </span>
        </h1>
        <h2 className=" italic font-bold text-xl md:text-[initial]">
          Product Designer <span className=" font-normal">based in</span> Riyadh
        </h2>

        <Image
          className=" min-w-[40vw] md:hidden"
          src="/assets/ali/home-image.svg"
          alt=""
          width={450}
          height={450}
        />

        <button
          className="
          bg-sport-black border
          hover:bg-white hover:text-black transition text-white
           md:text-sm flex justify-center items-center gap-2
           mx-auto md:mx-0 mb-6 px-4 py-4 md:px-6 md:py-2 mt-2 md:mt-7
          "
        >
          Let’s talk with me
          <Image
          className=" w-[25px] md:w-[20px]"
            src="/assets/icons/colored-arrow.svg"
            alt=""
            width={15}
            height={15}
          />
        </button>

        <div className=" md:mt-10 flex gap-1 md:gap-8 flex-col md:flex-row items-center">
          <span className=" flex gap-2 font-bold italic">
            <Image
              className=" bg-[#1413130D] rounded-full px-1 max-h-[25px]"
              src="/assets/icons/phone.svg"
              alt=""
              width={25}
              height={20}
            />
            +966 537 979 355
          </span>
          <span className=" flex gap-2 font-bold italic">
            <Image
              className=" bg-[#1413130D] rounded-full px-1 max-h-[25px]"
              src="/assets/icons/envelope.svg"
              alt=""
              width={25}
              height={20}
            />
            uxali@outlook.com
          </span>
        </div>

        <Image
          className=" absolute -top-1 -left-6 -z-[1] invisible md:visible"
          src="/assets/shapes/home-name-top-cut.svg"
          alt=""
          width={120}
          height={15}
        />
      </section>

      <section>
        <Image
          className=" min-w-[40vw] hidden md:block"
          src="/assets/ali/home-image.svg"
          alt=""
          width={450}
          height={450}
        />
      </section>
    </main>
  );
}
