"use client";
import { Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { constants } from './data/constants';
import { useState } from 'react';

const BestMenuSwiper = ({type}) => {

    return (  
        <article>
            <Swiper
                slidesPerView={3}
                pagination={true} 
                modules={[Pagination, Autoplay]}
                loop={true}
            >
                {data.map((v,i)=> (
                    <SwiperSlide key={i}>
                        <img src={v} alt="" />
                    </SwiperSlide>
                ))}
                {/* {data.map((v,i)=> (
                    <SwiperSlide key={i}>
                        <img src={v} alt="" />
                    </SwiperSlide>
                ))} */}
            </Swiper>
        </article>
    );
}
 
export default BestMenuSwiper;