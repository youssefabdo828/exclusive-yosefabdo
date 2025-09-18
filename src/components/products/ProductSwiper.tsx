"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import  Image  from 'next/image';import React from 'react'



const swiperoptions = {
  pagination:{
    clickable: true,
    bulletClass:"swiper-pagination-bullet !size-4 border-2",
    bulletActiveClass:"swiper-pagination-bullet-active !bg-red-500 border-white",
  },
  loop:true,

   modules:[Pagination],
};

export default function ProductSwiper({images} : {images : string[]}) {
  return (
    <Swiper className='main-slider' {...swiperoptions}>
            {images.map((img , idx) => (
                <SwiperSlide key={idx}>
                    <Image
                        src={img}
                        alt={`${img}-${idx}`}
                        width={500}
            height={500}
            className='mx-auto w-full object-contain h-[37.5rem] bg-gray-100'
            loading='lazy'
                    />
                </SwiperSlide>
            ))}
        </Swiper>
  )
}
