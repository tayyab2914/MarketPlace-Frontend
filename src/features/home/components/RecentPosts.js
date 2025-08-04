import React from 'react'

const RecentPosts = () => {
  return (
    <section className="stp-30 sbp-30">
    <div className="container">
      <div className="flex items-center justify-between gap-4">
        <div className="flex flex-col">
          <h2 className="heading-2 font-bold text-n900">
            Recent <span className="text-b300 underline">Posts</span>
          </h2>
          <p className="pt-4 font-medium text-n500">
            Read the recent articles from our blog.
          </p>
        </div>
        <div className="">
          <a
            href="./blog.html"
            className="flex items-center justify-start gap-3 font-bold duration-300 hover:text-b300"
          >
            All Article
            <i className="ph-bold ph-arrow-right text-2xl !leading-none"></i>
          </a>
        </div>
      </div>
      <div className="stp-15 grid grid-cols-12 gap-6">
        <div
          className="group col-span-12 sm:col-span-6 lg:col-span-4"
          data-aos="flip-right"
          data-aos-duration="1000"
          data-aos-delay="0"
        >
          <div className="relative">
            <img
              src="/assets/images/blog-post-image-1.png"
              alt=""
              className="w-full rounded-xl"
            />
            <p className="absolute bottom-3 left-3 rounded-2xl bg-b75 px-6 py-2 text-sm">
              Tips & Tricks
            </p>
          </div>
          <div className="rounded-2xl bg-r50 px-6 py-5 duration-500 group-hover:bg-bg2">
            <a href="./blog-details.html">
              <h4 className="heading-4 pb-3">
                Exploring Service Success Stories
              </h4>
            </a>
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-n500">
                Latest News December <br />
                12, 2024
              </p>
              <a
                href="./blog-details.html"
                className="flex items-center justify-center rounded-full bg-n900 p-2 text-2xl !leading-none text-white duration-500 group-hover:rotate-45"
              >
                <i className="ph ph-arrow-up-right"></i>
              </a>
            </div>
          </div>
        </div>
        <div
          className="group col-span-12 sm:col-span-6 lg:col-span-4"
          data-aos="flip-right"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          <div className="relative">
            <img
              src="/assets/images/blog-post-image-2.png"
              alt=""
              className="w-full rounded-xl"
            />
            <p className="absolute bottom-3 left-3 rounded-2xl bg-b75 px-6 py-2 text-sm">
              Tips & Tricks
            </p>
          </div>
          <div className="rounded-2xl bg-r50 px-6 py-5 duration-500 group-hover:bg-bg2">
            <a href="./blog-details.html">
              <h4 className="heading-4 pb-3">
                Stories of Triumph in the On-Demand Era
              </h4>
            </a>
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-n500">
                Latest News December <br />
                12, 2024
              </p>
              <a
                href="./blog-details.html"
                className="flex items-center justify-center rounded-full bg-n900 p-2 text-2xl !leading-none text-white duration-500 group-hover:rotate-45"
              >
                <i className="ph ph-arrow-up-right"></i>
              </a>
            </div>
          </div>
        </div>
        <div
          className="group col-span-12 sm:col-span-6 lg:col-span-4"
          data-aos="flip-right"
          data-aos-duration="1000"
          data-aos-delay="400"
        >
          <div className="relative">
            <img
              src="/assets/images/blog-post-image-3.png"
              alt=""
              className="w-full rounded-xl"
            />
            <p className="absolute bottom-3 left-3 rounded-2xl bg-b75 px-6 py-2 text-sm">
              Tips & Tricks
            </p>
          </div>
          <div className="rounded-2xl bg-r50 px-6 py-5 duration-500 group-hover:bg-bg2">
            <a href="./blog-details.html">
              <h4 className="heading-4 pb-3">
                Journey Through Service Experiences
              </h4>
            </a>
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-n500">
                Latest News December <br />
                12, 2024
              </p>
              <a
                href="./blog-details.html"
                className="flex items-center justify-center rounded-full bg-n900 p-2 text-2xl !leading-none text-white duration-500 group-hover:rotate-45"
              >
                <i className="ph ph-arrow-up-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default RecentPosts