"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination} from 'swiper/modules';
import { ICategory } from '@/interfaces/category.interface';
import  Image  from 'next/image';



const swiperoptions = {
    slidesPerView:1,
    breakpoints:{
640:{
    spaceBetween:5,
    slidesPerView:2,
},
768:{
    spaceBetween:10,
    slidesPerView:3,
},
1200:{
    spaceBetween:15,
    slidesPerView:4,
},
1600:{
    spaceBetween:30,
    slidesPerView:6,
},
    },
    pagination: {
        clickable: true,
        bulletClass: "swiper-pagination-bullet !size-4 border-2",
        bulletActiveClass: "swiper-pagination-bullet-active !bg-red-500 border-white",
    },
    loop: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,

    },
    modules: [Pagination],
};




export default function CategoriesSlider({
     categories,
     }: {
         categories: ICategory[];
         }) {

    return (
        <Swiper className='categories-slier mb-20' {...swiperoptions}>
            {categories && categories.map((cat) => (
                <SwiperSlide key={cat._id} className='mb-8'>
                    <Image
                        src={cat.image}
                        alt={cat.name}
                        width={270}
                        height={250}
                        loading='lazy'
                        className='w-full h-[15.625rem] object-cover bg-gray-100 mb-4'
                    />
                    <h3 className='font-medium'>{cat.name}</h3>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
