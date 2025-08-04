import React from 'react'

const HeroSection = () => {
  return (
    <div><section className="pt-[100px]">
    <div className="bg relative z-10 h-[650px] sm:h-[600px] md:h-[700px] lg:h-[800px]">
      <div className="absolute inset-0 z-20 bg-n900/80"></div>
      {/* <div className="swiper home-four-slider-carousel smooth absolute inset-0">
    <div className="swiper-wrapper">
      <div className="swiper-slide">
        <img src="/assets/images/home_four_hero1.png" alt="" />
      </div>
      <div className="swiper-slide">
        <img src="/assets/images/home_four_hero2.png" alt="" />
      </div>
      <div className="swiper-slide">
        <img src="/assets/images/home_four_hero3.png" alt="" />
      </div>
      <div className="swiper-slide">
        <img src="/assets/images/home_four_hero4.png" alt="" />
      </div>
      <div className="swiper-slide">
        <img src="/assets/images/home_four_hero1.png" alt="" />
      </div>
      <div className="swiper-slide">
        <img src="/assets/images/home_four_hero2.png" alt="" />
      </div>
      <div className="swiper-slide">
        <img src="/assets/images/home_four_hero3.png" alt="" />
      </div>
      <div className="swiper-slide">
        <img src="/assets/images/home_four_hero4.png" alt="" />
      </div>
      <div className="swiper-slide">
        <img src="/assets/images/home_four_hero1.png" alt="" />
      </div>
      <div className="swiper-slide">
        <img src="/assets/images/home_four_hero2.png" alt="" />
      </div>
      <div className="swiper-slide">
        <img src="/assets/images/home_four_hero3.png" alt="" />
      </div>
      <div className="swiper-slide">
        <img src="/assets/images/home_four_hero4.png" alt="" />
      </div>
      <div className="swiper-slide">
        <img src="/assets/images/home_four_hero1.png" alt="" />
      </div>
      <div className="swiper-slide">
        <img src="/assets/images/home_four_hero2.png" alt="" />
      </div>
      <div className="swiper-slide">
        <img src="/assets/images/home_four_hero3.png" alt="" />
      </div>
      <div className="swiper-slide">
        <img src="/assets/images/home_four_hero4.png" alt="" />
      </div>
    </div>
  </div> */}

      <div className="relative z-30 mx-auto flex h-full max-w-[950px] flex-col items-center justify-center text-center text-white max-xxl:overflow-hidden">
        <h5
          className="heading-5 pb-3 text-center"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="0"
        >
          Your Solution Hub
        </h5>
        <h1
          className="display-2 pb-6 font-extrabold"
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-delay="0"
        >
          Find the Right <br />
          <span className="text-y300">Talent</span> for Any Task
        </h1>
        <p
          className="w-[95%] pb-10 text-xl sm:text-2xl"
          data-aos="flip-down"
          data-aos-duration="1000"
          data-aos-delay="0"
        >
          Access assistance from a vast network of reliable local experts,
          spanning home repairs to beauty services.
        </p>
        <div className="w-[95%] text-n900 md:w-[650px] lg:w-[800px] xl:w-[950px]">
          <div className="relative z-20 w-full rounded-3xl border border-n20 bg-white p-4 sm:p-8">
            <form className="flex items-center justify-between text-lg font-medium max-sm:text-sm">
              <div className="flex items-center justify-start gap-4 sm:gap-10">
                <div
                  className="relative border-r pr-4 sm:pr-10"
                  id="locationModalOpenButton"
                >
                  <div className="flex cursor-pointer items-center justify-between gap-2">
                    <i className="ph ph-map-pin"></i>
                    <span className="locationText">
                      <span className="max-[400px]:hidden">Select</span>{" "}
                      Location
                    </span>
                  </div>

                  <div
                    id="locationModal"
                    className="modalClose absolute left-0 top-10 w-[150px] origin-top rounded-3xl border border-n30 bg-white py-3 text-base duration-700 max-sm:text-sm sm:-left-8 sm:w-[220px] sm:py-5"
                  >
                    <input
                      type="text"
                      className="mx-2 w-[90%] rounded-xl border border-n30 px-2 py-2 outline-none placeholder:text-n800 sm:mx-3 sm:px-3"
                      placeholder="Search"
                    />
                    <p className="locationItem cursor-pointer px-6 py-2 duration-500 hover:bg-b300 hover:text-white">
                      Alaska
                    </p>
                    <p className="locationItem cursor-pointer px-6 py-2 duration-500 hover:bg-b300 hover:text-white">
                      New York
                    </p>
                    <p className="locationItem cursor-pointer px-6 py-2 duration-500 hover:bg-b300 hover:text-white">
                      California
                    </p>
                    <p className="locationItem cursor-pointer px-6 py-2 duration-500 hover:bg-b300 hover:text-white">
                      Washington
                    </p>
                  </div>
                </div>
                <div
                  className="relative flex cursor-pointer items-center justify-between gap-2"
                  id="servicesModalOpenButton"
                >
                  <span className="serviceText">
                    <span className="max-[400px]:hidden">
                      Select your
                    </span>{" "}
                    service
                  </span>
                  <i className="ph ph-caret-down"></i>

                  <div
                    id="servicesModal"
                    className="modalClose absolute right-0 top-10 w-[150px] origin-top rounded-3xl border border-n30 bg-white py-3 text-sm duration-700 sm:-left-8 sm:w-[220px] sm:py-5 sm:text-base"
                  >
                    <p className="serviceItem cursor-pointer px-3 py-2 duration-500 hover:bg-b300 hover:text-white sm:px-6">
                      Handyman
                    </p>
                    <p className="serviceItem cursor-pointer px-3 py-2 duration-500 hover:bg-b300 hover:text-white sm:px-6">
                      Cleaning
                    </p>
                    <p className="serviceItem cursor-pointer px-3 py-2 duration-500 hover:bg-b300 hover:text-white sm:px-6">
                      Renovation
                    </p>
                    <p className="serviceItem cursor-pointer px-3 py-2 duration-500 hover:bg-b300 hover:text-white sm:px-6">
                      Photography
                    </p>
                  </div>
                </div>
              </div>
              <button className="relative ml-2 flex items-center justify-center overflow-hidden rounded-full bg-b300 text-white duration-700 after:absolute after:inset-0 after:left-0 after:w-0 after:rounded-full after:bg-yellow-400 after:duration-700 hover:text-n900 hover:after:w-[calc(100%+2px)] max-xxl:!leading-none max-md:size-11 md:px-8 md:py-3">
                <i className="ph ph-magnifying-glass text-base !leading-none sm:text-xl md:hidden"></i>
                <span className="relative z-10 max-md:hidden">
                  Search
                </span>
              </button>
            </form>
          </div>
        </div>

        <ul className="flex flex-wrap items-center justify-start gap-2 pl-2 pt-8 font-medium text-n900 max-sm:text-sm sm:gap-3">
          <li className="heading-5 text-white">Popular:</li>
          <li className="rounded-lg bg-b50 px-2 py-2 sm:px-4">
            Handyman
          </li>
          <li className="rounded-lg bg-bg2 px-2 py-2 sm:px-4">
            Babysitting
          </li>
          <li className="rounded-lg bg-eb50 px-2 py-2 sm:px-4">
            Photography
          </li>
          <li className="rounded-lg bg-bg1 px-2 py-2 sm:px-4">
            Renovation
          </li>
        </ul>
      </div>
    </div>
  </section></div>
  )
}

export default HeroSection