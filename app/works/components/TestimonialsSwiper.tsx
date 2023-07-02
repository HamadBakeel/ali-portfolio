"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "../style.css";

import { Navigation } from "swiper";

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
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {
          data.map((item, id) => {
            return (
              <SwiperSlide key={id} className="text-white !flex flex-col justify-center items-start">
                <h3 className=" italic text-xl font-semibold mb-6">{item.message}</h3>
                <h2 className=" font-semibold mb-1">{item.name}</h2>
                <h4 className="text-xs">{item.work}</h4>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </>
  );
}

export default TestimonialsSwiper;
