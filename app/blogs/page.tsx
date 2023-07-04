import PageSubtitle from "@/components/pageSubtitle";
import PageTitle from "@/components/pageTitle";
import Image from "next/image";
import React from "react";
function Blogs() {
  const blogs: BlogType[] = [
    {
      date: "30 May, 2023",
      title:
        "The Future of UX Design: How AI and Machine Learning Are Changing the Way We Design",
      image: "/assets/images/blog-1.png",
      link: "#",
    },
    {
      date: "16 Jan, 2023",
      title: "How Your Brand Experience Affects The User Experience",
      image: "/assets/images/blog-2.png",
      link: "#",
    },
    {
      date: "14 Oct, 2022",
      title: "3 UX Frameworks you need to know as a UX Designer",
      image: "/assets/images/blog-3.png",
      link: "#",
    },
  ];

  return (
    <main className="w-full min-h-screen max-w-screen-xl pt-24 md:pb-20">
      <PageTitle
        text="Blog"
        additionalClasses="px-6 md:px-[3vw] lg:px-[5vw] xl:px-[7vw] md:text-center mb-4"
      />
      <PageSubtitle
        text="Read my blog"
        additionalClasses="px-6 md:px-[3vw] lg:px-[5vw] xl:px-[7vw] md:text-center"
      />

      <section className="mt-8 md:mt-12 grid grid-cols-1 md:grid-cols-3 gap-y-14 gap-x-8 xl:gap-y-14 xl:gap-x-16  px-6 md:px-[3vw] lg:px-[5vw] xl:px-[7vw]">
        {blogs.map((blog, id) => (
          <Blog
            key={id}
            title={blog.title}
            date={blog.date}
            image={blog.image}
            link={blog.link}
          />
        ))}

        <div className="col-span-1 md:col-span-3 flex justify-center">
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
    </main>
  );
}

export default Blogs;

type BlogType = {
  date: string;
  title: string;
  image: string;
  link: string;
};
function Blog({ date, title, image, link }: BlogType) {
  return (
    <a
      href={link}
      className="flex flex-col col-span-1 border-b border-sport-black border-opacity-20 pb-6"
    >
      <Image
        className=" w-full object-cover"
        src={image}
        alt=""
        width={200}
        height={200}
      />
      <h3 className="italic font-bold text-lg md:text-xs xl:text-sm mt-4 mb-2">{date}</h3>
      <h4 className=" text-2xl md:text-sm lg:text-base xl:text-xl font-bold capitalize leading-8 md:leading-5 xl:leading-6 tracking-tight">{title}</h4>
    </a>
  );
}
