"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "../style.css";

import { Navigation, Autoplay } from "swiper";

type TestimonialType = {
  message: string;
  name: string;
  work: string;
};
type PropsType = {
  data: TestimonialType[]
}
function TestimonialsSwiper({data}: PropsType) {
  return (
    <>
      <Swiper navigation={true} autoplay modules={[Navigation, Autoplay]} loop className="testimonialsSwiper">
        {
          data.map((item, id) => {
            return (
              <SwiperSlide key={id} className="text-white !flex flex-col justify-center items-start">
                <h3 className=" italic text-xl font-semibold mb-6 mt-8 md:mt-0 text-center md:text-start">{item.message}</h3>
                <h2 className=" font-semibold m-auto md:m-0 text-lg md:text-base">{item.name}</h2>
                <h4 className="text-base md:text-xs m-auto md:m-0">{item.work}</h4>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </>
  );
}

export default TestimonialsSwiper;
