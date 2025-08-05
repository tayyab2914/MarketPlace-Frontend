"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper/modules"
import { Star, Twitter, ArrowUpLeft, ArrowUpRight } from "lucide-react"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

const testimonials = [
  {
    id: 1,
    rating: 5,
    text: "Incredibly impressed on-demand cleaning service. Prompt, thorough and left home sparkling. A game-changer for busy schedules! Uber has transformed my daily commute. Reliable easy booking, and the app's convenience",
    author: "Devon Lane",
    handle: "@iamsedaoi&wv",
    avatar: "/placeholder.svg?height=48&width=48&text=DL",
  },
  {
    id: 2,
    rating: 5,
    text: "Incredibly impressed on-demand cleaning service. Prompt, thorough and left home sparkling. A game-changer for busy schedules! Uber has transformed my daily commute. Reliable easy booking, and the app's convenience",
    author: "Devon Lane",
    handle: "@iamsedaoi&wv",
    avatar: "/placeholder.svg?height=48&width=48&text=DL",
  },
  {
    id: 3,
    rating: 5,
    text: "Incredibly impressed on-demand cleaning service. Prompt, thorough and left home sparkling. A game-changer for busy schedules! Uber has transformed my daily commute. Reliable easy booking, and the app's convenience",
    author: "Devon Lane",
    handle: "@iamsedaoi&wv",
    avatar: "/placeholder.svg?height=48&width=48&text=DL",
  },
  {
    id: 4,
    rating: 5,
    text: "Incredibly impressed on-demand cleaning service. Prompt, thorough and left home sparkling. A game-changer for busy schedules! Uber has transformed my daily commute. Reliable easy booking, and the app's convenience",
    author: "Devon Lane",
    handle: "@iamsedaoi&wv",
    avatar: "/placeholder.svg?height=48&width=48&text=DL",
  },
]

export default function AboutTestimonials() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              prevEl: ".ara-prev",
              nextEl: ".ara-next",
            }}
            pagination={{
              el: ".swiper-pagination",
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView:2,
              },
            }}
            className="testimonial-swiper"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="flex flex-col items-start justify-start h-full">
                  {/* Star Rating */}
                  <div className="flex items-center justify-start gap-2 text-2xl text-blue-600">
                    {[...Array(testimonial.rating)].map((_, index) => (
                      <Star key={index} className="w-6 h-6 fill-current" />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="pt-6 text-lg font-medium text-gray-600 leading-relaxed">{testimonial.text}</p>

                  {/* Author Info */}
                  <div className="flex items-center justify-start gap-4 pt-6 sm:gap-8 sm:pt-8 w-full">
                    <div className="flex items-center justify-start gap-4 border-r border-gray-300 pr-4 sm:pr-8">
                      <div className="rounded-full bg-gray-300 p-[2px]">
                        <img
                          src={testimonial.avatar || "/placeholder.svg"}
                          alt={testimonial.author}
                          className="rounded-full w-12 h-12 object-cover"
                        />
                      </div>
                      <div>
                        <p className="text-lg font-semibold text-gray-900">{testimonial.author}</p>
                        <p className="font-medium text-gray-500">{testimonial.handle}</p>
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

          {/* Navigation and Pagination */}
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
  )
}
