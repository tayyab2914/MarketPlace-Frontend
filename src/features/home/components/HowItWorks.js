import React from 'react'

const HowItWorks = () => {
  return (
    <section className="stp-30 sbp-30">
    <div className="container">
      <div className="flex flex-col items-center justify-center">
        <h2 className="heading-2 font-bold text-n900">
          How It <span className="text-b300 underline">Works</span>
        </h2>
        <p className="pt-4 font-medium text-n500">
          What steps do I need to take to join?
        </p>
      </div>

      <ul className="stp-15 flex w-full items-center justify-center max-[480px]:flex-col max-[480px]:gap-4">
        <li
          id="step1"
          className="activeButton stepsButton flex w-full items-center justify-center pb-4 sm:pb-6"
        >
          <div className="flex items-center justify-between gap-3">
            <i className="ph ph-sort-descending flex items-center justify-center rounded-xl bg-n30 p-3 text-2xl !leading-none sm:p-[14px] sm:text-3xl"></i>
            <button className="text-lg font-semibold">Step_01</button>
          </div>
        </li>
        <li
          id="step2"
          className="inActiveButton stepsButton step22222 flex w-full items-center justify-center pb-4 sm:pb-6"
        >
          <div className="flex items-center justify-between gap-3">
            <i className="ph ph-calendar-plus flex items-center justify-center rounded-xl bg-n30 p-3 text-2xl !leading-none sm:p-[14px] sm:text-3xl"></i>
            <button className="text-lg font-semibold">Step_02</button>
          </div>
        </li>

        <li
          id="step3"
          className="inActiveButton stepsButton step3 flex w-full items-center justify-center pb-4 sm:pb-6"
        >
          <div className="flex items-center justify-between gap-3">
            <i className="ph ph-book-open-text flex items-center justify-center rounded-xl bg-n30 p-3 text-2xl !leading-none sm:p-[14px] sm:text-3xl"></i>
            <button className="text-lg font-semibold">Step_03</button>
          </div>
        </li>
      </ul>

      <div className="stp-15">
        <div id="step_one_data" className="activeTab">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 flex flex-col items-start justify-center md:col-span-5 lg:col-span-4">
              <h3 className="heading-3">Tasker Evaluation</h3>
              <p className="pt-3 text-n500">
                Select a Tasker based on affordability, expertise, and
                customer feedback, ensuring you find the perfect fit for
                your needs.
              </p>
              <div className="pt-6 sm:pt-10">
                <a
                  href="./sign-up-step-1.html"
                  className="relative flex items-center justify-center overflow-hidden rounded-full bg-b300 px-8 py-3 font-medium !leading-none text-white duration-700 after:absolute after:inset-0 after:left-0 after:w-0 after:rounded-full after:bg-yellow-400 after:duration-700 hover:text-n900 hover:after:w-[calc(100%+2px)]"
                >
                  <span className="m relative z-10">Sign up now</span>
                </a>
              </div>
            </div>
            <div className="col-span-12 md:col-span-7 lg:col-start-6">
              <img src="/assets/images/step_one_illus.png" alt="" />
            </div>
          </div>
        </div>
        <div id="step_two_data" className="hiddenTab">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 flex flex-col items-start justify-center md:col-span-5 lg:col-span-4">
              <h3 className="heading-3">Book Now</h3>
              <p className="pt-3 text-n500">
                Secure your spot at the event of your choice by booking
                your tickets now through our convenient online booking
                platform.
              </p>
              <div className="pt-6 sm:pt-10">
                <a
                  href="./sign-up-step-1.html"
                  className="relative flex items-center justify-center overflow-hidden rounded-full bg-b300 px-8 py-3 font-medium !leading-none text-white duration-700 after:absolute after:inset-0 after:left-0 after:w-0 after:rounded-full after:bg-yellow-400 after:duration-700 hover:text-n900 hover:after:w-[calc(100%+2px)]"
                >
                  <span className="m relative z-10">Sign up now</span>
                </a>
              </div>
            </div>
            <div className="col-span-12 md:col-span-7 lg:col-start-6">
              <img src="/assets/images/step_two_illus.png" alt="" />
            </div>
          </div>
        </div>
        <div id="step_three_data" className="hiddenTab">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 flex flex-col items-start justify-center md:col-span-5 lg:col-span-4">
              <h3 className="heading-3">ChatTip Hub</h3>
              <p className="pt-3 text-n500">
                Your Ultimate Destination for Chat-based Tips, Advice, and
                Insights on a Variety of Topics and Interests.
              </p>
              <div className="pt-6 sm:pt-10">
                <a
                  href="./sign-up-step-1.html"
                  className="relative flex items-center justify-center overflow-hidden rounded-full bg-b300 px-8 py-3 font-medium !leading-none text-white duration-700 after:absolute after:inset-0 after:left-0 after:w-0 after:rounded-full after:bg-yellow-400 after:duration-700 hover:text-n900 hover:after:w-[calc(100%+2px)]"
                >
                  <span className="m relative z-10">Sign up now</span>
                </a>
              </div>
            </div>
            <div className="col-span-12 md:col-span-7 lg:col-start-6">
              <img src="/assets/images/step_three_illus.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default HowItWorks