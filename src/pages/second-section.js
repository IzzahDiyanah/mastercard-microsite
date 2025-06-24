import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import NewFirst from '@/component/swiper-first';
import NewSecond from '@/component/swiper-second';
import NewThird from '@/component/swiper-third';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { useCursorInteractions } from '@/hooks/cursorInteractions';

const App = () => {
  const { cardHover } = useCursorInteractions();
  return (
    <div className="bg-black sm:min-h-screen min-h-0">
      <div className="p-4 md:pt-8 lg:pt-20 md:pl-8 lg:pl-20 md:pr-0 ">
        <main className="flex flex-col gap-6 md:gap-8 lg:gap-8 items-center sm:items-start">
          {/* Header Section */}
          <div className="w-full">
            <div className="flex flex-col gap-2 md:gap-4">
              <h2 className="font-normal text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-amber-400" {...cardHover()}>
                What's New?
              </h2>
              <p className="max-w-2xl text-sm md:text-base lg:text-lg text-white" {...cardHover()}>
                As our safety and security report continues to evolve, we are excited to announce
                several significant enhancements, as compared to the reports from 2023.
              </p>
            </div>
          </div>
        </main>
      </div>

      <div className='p-4 sm:p-0'>
      <Swiper
        spaceBetween={30}
        modules={[Pagination]}
        className="mySwiper"
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 20
          },
          640: {
            slidesPerView: 1.5,
            spaceBetween: 20
          },
          768: {
            slidesPerView: 1.5,
            spaceBetween: 200
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 600
          },
          1440: {
            slidesPerView: 2,
            spaceBetween: 200
          },
          1536: {
            slidesPerView: 2,
            spaceBetween: 50
          },
          1680: {
            slidesPerView: 2,
            spaceBetween: -50
          },
          1920: {
            slidesPerView: 2,
            spaceBetween: -300
          },
          2560: {
            slidesPerView: 2,
            spaceBetween: -900
          }

        }}
      >
        <SwiperSlide {...cardHover()}><NewFirst /></SwiperSlide>
        <SwiperSlide {...cardHover()}><NewSecond /></SwiperSlide>
        <SwiperSlide {...cardHover()}><NewThird /></SwiperSlide>
      </Swiper>
      </div>
      
      {/* Arrow Section */}
      <div className="w-full sm:h-52 flex items-center justify-center bg-black">   
        <div className="hidden sm:block w-12">
          <img src="/images/arrow-down.png" alt="Arrow" className="w-full h-auto" />
        </div>
      </div>
    </div>
  );
}

export default App;