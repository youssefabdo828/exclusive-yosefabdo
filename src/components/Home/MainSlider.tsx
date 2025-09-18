"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import { Pagination, Autoplay } from 'swiper/modules';



const swiperoptions = {
  pagination:{
    clickable: true,
    bulletClass:"swiper-pagination-bullet !size-4 border-2",
    bulletActiveClass:"swiper-pagination-bullet-active !bg-red-500 border-white",
  },
  loop:true,
autoplay:{
delay:2000,
disableOnInteraction:false,

  },
   modules:[Pagination,Autoplay],
};


export default function MainSlider() {
  return (
<section>
  <div className="container mx-auto">
<div>








      <Swiper {...swiperoptions}>
      <SwiperSlide>
              <Image
        src="/slider-image-1.jpeg"
        alt=""
        width={1920}
        height={344}
        loading='lazy'
        className='w-full h-[21.5rem] object-cover'
      />
      </SwiperSlide>




      <SwiperSlide>
              <Image
        src="/slider-image-2.jpeg"
        alt=""
        width={1920}
        height={344}
        loading='lazy'
        className='w-full h-[21.5rem] object-cover'
      />
      </SwiperSlide>





      <SwiperSlide>
              <Image
        src="/slider-image-3.jpeg"
        alt=""
        width={1920}
        height={344}
        loading='lazy'
        className='w-full h-[21.5rem] object-cover'
      />
      </SwiperSlide>
    </Swiper>
    </div>
  </div>
</section>
  )
}
