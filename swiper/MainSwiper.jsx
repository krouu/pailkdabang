"use client";
import { Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { constants } from './data/constants';

const MainSwiper = () => {
    return (  
        <article>
            <Swiper
                slidesPerView={1}
                pagination={true} 
                modules={[Pagination, Autoplay]}
                loop={true}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
            >
                {constants.map((v,i)=> (
                    <SwiperSlide key={i}>
                        <img src={v} alt="" />
                    </SwiperSlide>
                ))}
                
            </Swiper>
        </article>
    );
}
 
export default MainSwiper;