import React from 'react'

const NewsLetter = () => {
  return (
    <section className="stp-30 sbp-30 relative overflow-hidden bg-r300">
    <div className="jumping1 absolute -right-40 top-96 size-[300px] rounded-full bg-b900 sm:top-48 sm:size-[400px] lg:-right-10 lg:top-20 xl:size-[640px]"></div>
    <div className="jumping2 absolute -left-64 bottom-96 z-10 size-[350px] rounded-full bg-g300 sm:bottom-64 sm:size-[400px] lg:-left-40 lg:bottom-20 xl:size-[640px]"></div>
    <div className="slideRight absolute -left-64 top-96 size-[350px] rounded-full bg-b100 sm:top-64 sm:size-[500px] lg:-left-40 lg:top-20 xl:size-[876px]"></div>
    <div className="slideLeft absolute left-1/4 top-[400px] size-[300px] rounded-full bg-y200 max-sm:hidden sm:size-[400px] lg:top-80 xl:top-60 xl:size-[754px]"></div>

    <div className="container relative z-20 grid grid-cols-12 text-white max-lg:gap-6">
      <div className="col-span-12 flex flex-col items-start justify-center md:col-span-5">
        <h5
          className="heading-5"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="0"
        >
          Newsletter
        </h5>
        <h2
          className="heading-2 pt-4"
          data-aos="fade-down"
          data-aos-duration="1000"
          data-aos-delay="0"
        >
          Don&apos;t Miss a Beat with Our Newsletter
        </h2>
      </div>
      <div className="col-span-12 md:col-span-7 md:col-start-6 lg:col-span-6 lg:col-start-7 xl:col-span-5 xl:col-start-8">
        <h5 className="heading-5">Sign up to stay up to date</h5>
        <div className="flex items-start justify-start gap-3 pt-6 max-[450px]:flex-col md:items-center">
          <div className="">
            <input
              type="text"
              placeholder="Email"
              className="rounded-full bg-white px-8 py-3 text-n900 outline-none placeholder:text-n700"
            />
          </div>
          <div className="text-n900">
            <button className="group relative flex items-center justify-start pr-12 font-semibold">
              <span className="rounded-full bg-y300 px-6 py-3 duration-500 group-hover:translate-x-12">
                Send
              </span>
              <i className="ph-bold ph-arrow-up-right absolute right-0 top-0 translate-x-0 rounded-full bg-y300 p-[14px] text-xl !leading-none duration-500 group-hover:right-[90px] group-hover:rotate-45"></i>
            </button>
          </div>
        </div>
        <div className="stp-15 flex flex-wrap items-center justify-start gap-6">
          <div className="flex items-center justify-start">
            <div className="overflow-hidden rounded-full bg-n900 p-1">
              <img
                src="/assets/images/cta_img1.png"
                alt=""
                className="rounded-full"
              />
            </div>
            <div className="-ml-5 overflow-hidden rounded-full bg-n900 p-1">
              <img
                src="/assets/images/cta_img2.png"
                alt=""
                className="rounded-full"
              />
            </div>
            <div className="-ml-5 overflow-hidden rounded-full bg-n900 p-1 text-n900">
              <p className="flex h-[60px] w-[60px] items-center justify-center rounded-full bg-white text-lg font-semibold !leading-none">
                +15K
              </p>
            </div>
          </div>
          <div className="">
            <h5 className="heading-5">More than 15k active users!</h5>
            <a
              href="./sign-up-step-1.html"
              className="flex items-center justify-start gap-3 pt-3 font-medium"
            >
              Join them now <i className="ph ph-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default NewsLetter