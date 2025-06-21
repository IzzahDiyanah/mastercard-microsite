import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import NewFirst from '@/component/swiper-first';
import NewSecond from '@/component/swiper-second';
import NewThird from '@/component/swiper-third';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const App = () => {
  return (
    <div className="bg-black">
      <div className="p-4 md:pt-8 lg:pt-20 md:pl-8 lg:pl-20 md:pr-0 ">
        <main className="flex flex-col gap-6 md:gap-8 lg:gap-8 items-center sm:items-start">
          {/* Header Section */}
          <div className="w-full">
            <div className="flex flex-col gap-2 md:gap-4">
              <h2 className="font-normal text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-amber-400">
                What's New?
              </h2>
              <p className="max-w-2xl text-sm md:text-base lg:text-lg text-white">
                As our safety and security report continues to evolve, we are excited to announce
                several significant enhancements, as compared to the reports from 2023.
              </p>
            </div>
          </div>
        </main>
      </div>

      <Swiper
        spaceBetween={30}
        modules={[Pagination]}
        className="mySwiper"
        breakpoints={{
          // when window width is >= 0px (mobile)
          0: {
            slidesPerView: 1,
            spaceBetween: 20
          },
          // when window width is >= 640px (small tablets)
          640: {
            slidesPerView: 1.5,
            spaceBetween: 20
          },
          // when window width is >= 768px (tablets)
          768: {
            slidesPerView: 2,
            spaceBetween: 30
          },
          // when window width is >= 1024px (desktops)
          1024: {
            slidesPerView: 2,
            spaceBetween: 30
          }
        }}
      >
        <SwiperSlide><NewFirst /></SwiperSlide>
        <SwiperSlide><NewSecond /></SwiperSlide>
        <SwiperSlide><NewThird /></SwiperSlide>
      </Swiper>
      
      {/* Arrow Section */}
      <div className="w-full flex justify-center bg-black">   
        <div className="w-12">
          <img src="/images/arrow-down.png" alt="Arrow" className="w-full h-auto" />
        </div>
      </div>
    </div>
  );
}

export default App;