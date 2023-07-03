import PageSubtitle from "@/components/pageSubtitle";
import PageTitle from "@/components/pageTitle";
import Image from "next/image";
import React from "react";
import TestimonialsSwiper from "./components/TestimonialsSwiper";
import CustomersSwiper from "./components/CustomersSwiper";

function Works() {
  type TestimonialType = {
    message: string;
    name: string;
    work: string;
  };

  const works: WorkType[] = [
    {
      id: 0,
      type: "UX case study",
      title: "Bally website research",
      image: "https://picsum.photos/400/200",
      link: "https://project.com",
    },
    {
      id: 1,
      type: "UX case study",
      title: "Bally website research",
      image: "https://picsum.photos/400/200",
      link: "https://project.com",
    },
    {
      id: 2,
      type: "UX case study",
      title: "Bally website research",
      image: "https://picsum.photos/400/200",
      link: "https://project.com",
    },
    {
      id: 3,
      type: "UX case study",
      title: "Bally website research",
      image: "https://picsum.photos/400/200",
      link: "https://project.com",
    },
  ];

  const testimonials: TestimonialType[] = [
    {
      message:
        "“ File storage made easy – including powerful features you won’t find anywhere else. Whether you’re.”",
      name: "-Larry Diamond",
      work: "Chief Executive Officer, Besnik",
    },
    {
      message:
        "“ File storage made easy – including powerful features you won’t find anywhere else. Whether you’re.”",
      name: "-Larry Diamond",
      work: "Chief Executive Officer, Besnik",
    },
    {
      message:
        "“ File storage made easy – including powerful features you won’t find anywhere else. Whether you’re.”",
      name: "-Larry Diamond",
      work: "Chief Executive Officer, Besnik",
    },
    {
      message:
        "“ File storage made easy – including powerful features you won’t find anywhere else. Whether you’re.”",
      name: "-Larry Diamond",
      work: "Chief Executive Officer, Besnik",
    },
  ];

  const customers = ["wajabat", "otek", "marasi", "one-graphics", "yemenia"];
  return (
    <main className="w-full min-h-screen max-w-screen-xl pt-24 md:pb-20">
      <PageTitle
        text="Work"
        additionalClasses="px-6 md:px-[3vw] lg:px-[5vw] xl:px-[7vw]"
      />
      <PageSubtitle
        text="recent projects"
        additionalClasses="px-6 md:px-[3vw] lg:px-[5vw] xl:px-[7vw]"
      />

      <section className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-y-14 gap-x-28 px-6 md:px-[3vw] lg:px-[5vw] xl:px-[7vw]">
        {works.map((work) => (
          <Work
            key={work.id}
            id={work.id}
            title={work.title}
            type={work.type}
            image={work.image}
            link={work.link}
          />
        ))}

        <div className="col-span-1 md:col-span-2 flex justify-center">
          <a
          href="#"
            className="
          bg-sport-black border 
          hover:bg-white hover:text-black transition text-white
           text-lg md:text-sm  tracking-wide
           inline-flex justify-center items-center gap-2
           mb-6 px-8 py-4 md:px-6 md:py-2
          "
          >
            Load More
            <Image
              className=" w-[25px] md:w-[20px]"
              src="/assets/icons/colored-arrow.svg"
              alt=""
              width={15}
              height={15}
            />
          </a>
        </div>
      </section>

      <section className=" bg-gradient-custom pt-6 md:p-16 pb-14 md:mt-16 md:mx-[3vw] lg:mx-[5vw] xl:mx-[7vw]">
        <PageTitle
          text="Testimonials"
          additionalClasses="text-white text-center"
        />
        <PageSubtitle
          text="what they say"
          additionalClasses="text-white text-center text-xl md:text-4xl"
        />

        <div className="grid grid-cols-12 md:space-x-10 md:border-b md:border-white mt-8 px-6">
          <div className="md:col-span-5 col-span-12">
            <Image
              className="hidden md:block w-[85%] "
              src="/assets/images/testimonials-person-image.svg"
              alt=""
              width={10}
              height={10}
            />
            <div className="md:hidden isolate relative">
              <Image
                className="w-[60%] m-auto"
                src="/assets/images/testimonials-person-image-mobile.png"
                alt=""
                width={100}
                height={100}
              />
              <Image
                className="h-[95%] w-full absolute bottom-0 -left-5 -z-10"
                src="/assets/images/testimonials-person-shape-mobile.svg"
                alt=""
                width={10}
                height={10}
              />
            </div>
          </div>
          <div className="md:col-span-7 col-span-12 md:mb-8">
            <TestimonialsSwiper data={testimonials} />
          </div>
        </div>
        <div className="hidden md:flex gap-6 justify-between max-w-full pt-8 px-6">
          {customers.map((customer) => {
            return (
              <div className=" w-auto h-12 max-w-[30%]" key={customer}>
                <Image
                  className=" w-full h-full"
                  src={`/assets/icons/customers/${customer}.svg`}
                  alt=""
                  width={10}
                  height={100}
                />
              </div>
            );
          })}
        </div>
        <div className="md:hidden">
          <CustomersSwiper data={customers} />
        </div>
      </section>
    </main>
  );
}

export default Works;

type WorkType = {
  id: number;
  type: string;
  title: string;
  image: string;
  link: string;
};
function Work({ id, type, title, image, link }: WorkType) {
  return (
    <a href={link} className="flex flex-col md:flex-row gap-1 col-span-1">
      <div className="flex flex-col justify-between">
        <h3 className="italic font-bold ">{type}</h3>
        <h4 className=" text-4xl font-extrabold capitalize">{title}</h4>
        <Image
          className=" w-10 md:w-14"
          src="/assets/icons/north-east-arrow.svg"
          alt=""
          width={10}
          height={10}
        />
      </div>

      <div className=" min-w-[55%] w-full md:w-72 h-60 md:h-56">
        <Image
          className=" w-full h-full object-cover"
          src={image}
          alt=""
          width={10}
          height={10}
        />
      </div>
    </a>
  );
}
