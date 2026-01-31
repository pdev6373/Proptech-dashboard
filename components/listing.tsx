"use client";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

export type ListingProps = {
  id: string;
  title: string;
  images: string[];
  category: string;
};

export default function Listing({ images, title, category }: ListingProps) {
  return (
    <div className="group relative overflow-hidden rounded-lg sm:rounded-xl aspect-400/220 md:aspect-418/286 cursor-pointer">
      <Swiper
        modules={[Pagination, Navigation]}
        autoplay={{
          delay: 3000,
          pauseOnMouseEnter: true,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          bulletClass: "swiper-pagination-bullet !bg-white/90",
          bulletActiveClass: "swiper-pagination-bullet-active bg-[#E5E5E5]!",
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        loop={images.length > 1}
        className="h-full w-full"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div
              style={{ backgroundImage: `url(${image})` }}
              className="absolute inset-0 bg-cover bg-center"
            />
            <div className="absolute inset-0 bg-[linear-gradient(183.45deg,rgba(0,0,0,0.08)_41.18%,rgba(0,0,0,0.9)_100.6%)] pointer-events-none" />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="absolute inset-0 p-4 pb-7 sm:p-6 sm:pb-6 flex flex-col justify-end text-white pointer-events-none z-10">
        <div className="text-xs sm:text-sm font-medium uppercase">
          {category}
        </div>
        <h3 className="sm:text-lg font-semibold">{title}</h3>
      </div>
    </div>
  );
}
