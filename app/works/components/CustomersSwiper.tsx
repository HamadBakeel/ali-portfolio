"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";


import { Autoplay } from "swiper";
import Image from "next/image";


type PropsType = {
  data: string[];
};
function CustomersSwiper({ data }: PropsType) {
  return (
    <>
      <Swiper 
      modules={[Autoplay]}
       speed={3000}
        className="customersSwiper mt-10"
        slidesPerView={2}
        spaceBetween={20}
        slidesPerGroup={1}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
          waitForTransition: true,
          reverseDirection: false,
          stopOnLastSlide: false,      
        }}
        loop={true}
        >
        {data.map((item, id) => {
          return (
            <SwiperSlide key={id} className="flex items-center justify-center">
              <Image
                className=" w-full h-16"
                src={`/assets/icons/customers/${item}.svg`}
                alt=""
                width={10}
                height={100}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}

export default CustomersSwiper;
