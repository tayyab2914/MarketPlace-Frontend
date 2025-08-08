"use client"

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Star, Twitter, ArrowUpLeft, ArrowUpRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { TESTIMONIALS_CONTENT } from "@/constants/static-pages/testimonials";


export default function TestimonialsComponent() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{ prevEl: ".ara-prev", nextEl: ".ara-next" }}
            pagination={{ el: ".swiper-pagination", clickable: true }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 2 },
            }}
            className="testimonial-swiper"
          >
            {TESTIMONIALS_CONTENT?.map(({ id, rating, text, author, handle, avatar }) => (
              <SwiperSlide key={id}>
                <div className="flex flex-col items-start justify-start h-full">
                  <div className="flex items-center justify-start gap-2 text-2xl text-blue-600">
                    {[...Array(rating)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 fill-current" />
                    ))}
                  </div>

                  <p className="pt-6 text-lg font-medium text-gray-600 leading-relaxed">{text}</p>

                  <div className="flex items-center justify-start gap-4 pt-6 sm:gap-8 sm:pt-8 w-full">
                    <div className="flex items-center justify-start gap-4 border-r border-gray-300 pr-4 sm:pr-8">
                      <div className="rounded-full bg-gray-300 p-[2px]">
                        <img
                          src={avatar || "/placeholder.svg"}
                          alt={author}
                          className="rounded-full w-12 h-12 object-cover"
                        />
                      </div>
                      <div>
                        <p className="text-lg font-semibold text-gray-900">{author}</p>
                        <p className="font-medium text-gray-500">{handle}</p>
                      </div>
                    </div>
                    <div className="text-3xl leading-none text-blue-600">
                      <Twitter className="w-8 h-8 fill-current" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="flex items-center justify-between mt-8">
            <div className="swiper-pagination relative max-w-[120px] rounded-full bg-white px-2 pt-0.5"></div>

            <div className="flex items-center justify-end gap-3 pt-6 text-2xl leading-none text-blue-600 lg:pt-10 ms-auto">
              <button className="ara-prev flex items-center justify-center rounded-full border border-blue-600 p-3 duration-500 hover:-rotate-45 hover:bg-blue-600 hover:text-white lg:p-4 transition-all">
                <ArrowUpLeft className="w-6 h-6" />
              </button>
              <button className="ara-next flex items-center justify-center rounded-full border border-blue-600 p-3 duration-500 hover:rotate-45 hover:bg-blue-600 hover:text-white lg:p-4 transition-all">
                <ArrowUpRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .testimonial-swiper .swiper-pagination-bullet {
          background: #e5e7eb;
          opacity: 1;
          width: 12px;
          height: 12px;
        }
        
        .testimonial-swiper .swiper-pagination-bullet-active {
          background: #2563eb;
        }
        
        .testimonial-swiper .swiper-slide {
          height: auto;
          display: flex;
        }
        
        .testimonial-swiper .swiper-wrapper {
          align-items: stretch;
        }
      `}</style>
    </section>
  );
}
