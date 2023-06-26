import Image from "next/image";

export default function Home() {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 w-full md:px-28 md:py-20">
      <section className="relative isolate">
        <h1
          className=" text-[60px] uppercase leading-[55px] mb-4"
        >My name <br /> is <span className=" font-extrabold">Ali <br /> Abdu...</span></h1>
        <h2
          className=" italic font-bold"
        >
        Product Designer <span className=" font-normal">based in</span> Riyadh 
        </h2>

        <button 
          className="
          bg-sport-black hover:border
          hover:bg-white hover:text-black transition
          text-white px-6 py-2 mt-7
           text-sm
          flex justify-center items-center gap-2
          "
        >
          Let’s talk with me
          <Image src="/assets/icons/colored-arrow.svg" alt="" width={15} height={15}/>
        </button>

        <div
          className=" md:mt-10 flex gap-8"
        >
          <span
            className=" flex gap-2 font-bold italic"
          >
            <Image className=" bg-[#1413130D] rounded-full px-1" src="/assets/icons/phone.svg" alt="" width={25} height={20}/>
            +966 537 979 355
          </span>
          <span
            className=" flex gap-2 font-bold italic"
          >
            <Image className=" bg-[#1413130D] rounded-full px-1" src="/assets/icons/envelope.svg" alt="" width={25} height={20}/>
            uxali@outlook.com
          </span>
        </div>

        <Image 
          className=" absolute -top-1 -left-6 -z-[1]"
          src="/assets/shapes/home-name-top-cut.svg" alt="" width={120} height={15}/>

      </section>
      <section>image</section>
    </main>
  );
}
