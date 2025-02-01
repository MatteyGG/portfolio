import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

import { Autoplay, Pagination } from "swiper/modules";

interface SliderProps {
  srcs: string[];
}

const Slider: React.FC<SliderProps> = ({ srcs }) => {
  return (
    <Swiper
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      
      modules={[Autoplay, Pagination]}
      className="mySwiper"
      style={{ width: "100%" }}
    >
      {Array.isArray(srcs) &&
        srcs.map((src, index) => {
          return (
            <SwiperSlide key={index}>
              <Image
                className="rounded-xl"
                width={1920}
                height={1080}
                quality={100}
                src={src}
                alt={`Slide ${index + 1}`}
              />
              <div className="swiper-slide" data-swiper-autoplay="2000"></div>
            </SwiperSlide>
          );
        })}
    </Swiper>
  );
};

export default Slider;

