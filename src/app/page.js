'use client'
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useEffect } from "react";
import { initializeScript } from "../../public/assets/js/main";
export default function Home() {
  useEffect(() => {
    const handleDomReady = () => {
      console.log("✅ DOM is ready — from useEffect");
      initializeScript()
    };

    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", handleDomReady);
      return () => {
        document.removeEventListener("DOMContentLoaded", handleDomReady);
      };
    } else {
      handleDomReady(); // DOM is already ready
    }
  }, []);
  return (
    <>
      <div className="bg-white">
        {/* !-- Header Section Start --> */}
        <header className="header headerAbsolute left-0 right-0 top-0 z-50">
          <div className="max-xxl:container xxl:px-25">
            <div className="text-s1 flex items-center justify-between py-6">
              <div className="flex items-center justify-start gap-3 pb-1">
                <button className="mobileMenuOpenButton text-4xl !leading-none lg:hidden">
                  <i className="ph-bold ph-list pt-2 text-b500"></i>
                </button>
                <a>
                  <img
                    src="/assets/images/logo.png"
                    alt="Servibe logo"
                    className="max-w-[170px] max-sm:max-w-[150px]"
                  />
                </a>
              </div>
              <nav className="max-lg:hidden">
                <ul className="flex items-center justify-center gap-2 font-medium xxl:gap-6">
                  <li>
                    <div className="group relative cursor-pointer">
                      <div className="subMenuTitle relative flex items-center justify-center gap-1 px-2 py-3 hover:text-b500">
                        Home
                        <i className="ph ph-caret-down block pt-0.5 duration-700 group-hover:rotate-180"></i>
                      </div>
                      <ul className="group-hover:eventunset pointer-events-none invisible absolute left-0 top-12 flex w-[200px] translate-y-8 scale-75 flex-col items-start justify-start gap-3 rounded-lg bg-b300 py-6 font-medium text-white/90 opacity-0 duration-500 group-hover:visible group-hover:z-50 group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100">
                        <li>
                          <a className="subMenuItem px-6 duration-500 hover:ml-2 hover:text-y200">
                            Home One
                          </a>
                        </li>
                        <li>
                          <a
                            href="./index2.html"
                            className="subMenuItem px-6 duration-500 hover:ml-2 hover:text-y200"
                          >
                            Home Two
                          </a>
                        </li>
                        <li>
                          <a
                            href="./index3.html"
                            className="subMenuItem px-6 duration-500 hover:ml-2 hover:text-y200"
                          >
                            Home Three
                          </a>
                        </li>
                        <li>
                          <a
                            href="./index4.html"
                            className="subMenuItem px-6 duration-500 hover:ml-2 hover:text-y200"
                          >
                            Home Four
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <div className="group relative cursor-pointer">
                      <div className="subMenuTitle relative flex items-center justify-center gap-1 px-2 py-3 hover:text-b500">
                        Services
                        <i className="ph ph-caret-down block pt-0.5 duration-700 group-hover:rotate-180"></i>
                      </div>
                      <ul className="group-hover:eventunset pointer-events-none invisible absolute left-0 top-12 flex w-[220px] translate-y-8 scale-75 flex-col items-start justify-start gap-3 rounded-lg bg-b300 py-6 font-medium text-white/90 opacity-0 duration-500 group-hover:visible group-hover:z-50 group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100">
                        <li>
                          <a
                            href="./services.html"
                            className="subMenuItem px-6 duration-500 hover:ml-2 hover:text-y200"
                          >
                            All Services
                          </a>
                        </li>
                        <li>
                          <a
                            href="./service-details.html"
                            className="subMenuItem px-6 duration-500 hover:ml-2 hover:text-y200"
                          >
                            Service Details
                          </a>
                        </li>
                        <li>
                          <a
                            href="./browse-tasks.html"
                            className="subMenuItem px-6 duration-500 hover:ml-2 hover:text-y200"
                          >
                            Browse Tasks
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <div className="group relative cursor-pointer">
                      <div className="subMenuTitle relative flex items-center justify-center gap-1 px-2 py-3 hover:text-b500">
                        Worker
                        <i className="ph ph-caret-down block pt-0.5 duration-700 group-hover:rotate-180"></i>
                      </div>
                      <ul className="group-hover:eventunset pointer-events-none invisible absolute left-0 top-12 flex w-[220px] translate-y-8 scale-75 flex-col items-start justify-start gap-3 rounded-lg bg-b300 py-6 font-medium text-white/90 opacity-0 duration-500 group-hover:visible group-hover:z-50 group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100">
                        <li>
                          <a
                            href="./find-workers.html"
                            className="subMenuItem px-6 duration-500 hover:ml-2 hover:text-y200"
                          >
                            Find Workers
                          </a>
                        </li>

                        <li>
                          <a
                            href="./worker-profile.html"
                            className="subMenuItem px-6 duration-500 hover:ml-2 hover:text-y200"
                          >
                            Worker Profile
                          </a>
                        </li>
                        <li>
                          <a
                            href="./worker-portfolio.html"
                            className="subMenuItem px-6 duration-500 hover:ml-2 hover:text-y200"
                          >
                            Worker Portfolio
                          </a>
                        </li>
                        <li>
                          <a
                            href="./worker-portfolio-details.html"
                            className="subMenuItem px-6 duration-500 hover:ml-2 hover:text-y200"
                          >
                            Portfolio Details
                          </a>
                        </li>
                        <li>
                          <a
                            href="./hire-me.html"
                            className="subMenuItem px-6 duration-500 hover:ml-2 hover:text-y200"
                          >
                            Hire Worker
                          </a>
                        </li>
                        <li>
                          <a
                            href="./dashboard/index.html"
                            className="subMenuItem px-6 duration-500 hover:ml-2 hover:text-y200"
                          >
                            Worker Dashboard
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <div className="group relative cursor-pointer">
                      <div className="subMenuTitle relative flex items-center justify-center gap-1 px-2 py-3 hover:text-b500">
                        Pages
                        <i className="ph ph-caret-down block pt-0.5 duration-700 group-hover:rotate-180"></i>
                      </div>
                      <ul className="group-hover:eventunset pointer-events-none invisible absolute left-0 top-12 flex w-[220px] translate-y-8 scale-75 flex-col items-start justify-start gap-3 rounded-lg bg-b300 py-6 font-medium text-white/90 opacity-0 duration-500 group-hover:visible group-hover:z-50 group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100">
                        <li>
                          <a
                            href="./about-us.html"
                            className="subMenuItem px-6 duration-500 hover:ml-2 hover:text-y200"
                          >
                            About Us
                          </a>
                        </li>
                        <li>
                          <a
                            href="./blog.html"
                            className="subMenuItem px-6 duration-500 hover:ml-2 hover:text-y200"
                          >
                            Blog
                          </a>
                        </li>

                        <li>
                          <a
                            href="./blog-details.html"
                            className="subMenuItem px-6 duration-500 hover:ml-2 hover:text-y200"
                          >
                            Blog Details
                          </a>
                        </li>
                        <li>
                          <a
                            href="./chat.html"
                            className="subMenuItem px-6 duration-500 hover:ml-2 hover:text-y200"
                          >
                            Chat
                          </a>
                        </li>

                        <li>
                          <a
                            href="./faq.html"
                            className="subMenuItem px-6 duration-500 hover:ml-2 hover:text-y200"
                          >
                            FAQ
                          </a>
                        </li>
                        <li>
                          <a
                            href="./contact.html"
                            className="subMenuItem px-6 duration-500 hover:ml-2 hover:text-y200"
                          >
                            Contact
                          </a>
                        </li>
                        <li>
                          <a
                            href="./not-found.html"
                            className="subMenuItem px-6 duration-500 hover:ml-2 hover:text-y200"
                          >
                            Not Found
                          </a>
                        </li>
                        <li>
                          <a
                            href="./privacy-policy.html"
                            className="subMenuItem px-6 duration-500 hover:ml-2 hover:text-y200"
                          >
                            Privacy Policy
                          </a>
                        </li>
                        <li>
                          <a
                            href="./terms-conditions.html"
                            className="subMenuItem px-6 duration-500 hover:ml-2 hover:text-y200"
                          >
                            Terms & Conditions
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </nav>

              <div className="flex items-center justify-between gap-6">
                <ul className="flex items-center justify-start gap-2 font-medium max-sm:hidden xxl:gap-6">
                  <li className="">
                    <a
                      href="./sign-up-step-1.html"
                      className="rounded-lg px-2 py-3 duration-700"
                    >
                      Sign up
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="./sign-in.html"
                      className="rounded-lg px-2 py-3 duration-700"
                    >
                      Sign in
                    </a>
                  </li>
                </ul>
                <div className="flex items-center justify-between gap-3 font-semibold">
                  <a
                    href="./working-processed-step-01.html"
                    className="relative flex items-center justify-center overflow-hidden rounded-full bg-b300 text-white duration-700 after:absolute after:inset-0 after:left-0 after:w-0 after:rounded-full after:bg-yellow-400 after:duration-700 hover:text-n900 hover:after:w-[calc(100%+2px)] max-xxl:size-11 max-xxl:!leading-none xxl:px-8 xxl:py-3"
                  >
                    <span className="relative z-10 max-xxl:hidden">
                      Post a Task
                    </span>
                    <i className="ph-bold ph-plus relative z-10 text-xl xxl:hidden"></i>
                  </a>
                  <a
                    href="./become-tasker.html"
                    className="relative overflow-hidden rounded-full bg-b50 px-8 py-3 text-b300 duration-700 after:absolute after:inset-0 after:left-0 after:w-0 after:rounded-full after:bg-yellow-400 after:duration-700 hover:text-n900 hover:after:w-[calc(100%+2px)] max-xl:hidden"
                  >
                    <span className="relative z-10">Become a Tasker</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <nav className="">
            <div className="mobileMenuBg mobileMenuBgClose fixed left-0 top-0 z-[998] h-full w-full bg-r50 duration-700 lg:hidden"></div>

            <div className="mobileMenu mobileMenuClose fixed left-0 top-0 z-[999] flex h-full w-3/4 flex-col items-start justify-start gap-8 bg-r300 text-white/80 duration-700 min-[500px]:w-1/2 lg:hidden lg:gap-20">
              <div className="fixed top-0 flex w-full items-center justify-between bg-r300 p-4 sm:p-8">
                <a>
                  <img
                    src="/assets/images/logo_white.png"
                    alt="logo"
                    className="w-[150px]"
                  />
                </a>
                <i className="ri-close-line mobileMenuCloseButton cursor-pointer !text-3xl">
                  <i className="ph ph-x"></i>
                </i>
              </div>

              <ul className="flex w-full flex-col items-start gap-6 overflow-y-auto pb-10 pl-8 pt-24 text-lg sm:text-xl lg:gap-10">
                <li>
                  <div className="subMenuToggle group flex flex-col items-start justify-start">
                    <div className="flex cursor-pointer items-center justify-start">
                      <span className="mobileSubMenuTitle">Home Pages</span>
                      <i className="pl-1 pt-1 !text-xl duration-500">
                        <i className="ph ph-caret-right"></i>
                      </i>
                    </div>

                    <ul className="subMenuClose subMenu flex flex-col items-start justify-start gap-2 overflow-hidden pl-4 duration-700">
                      <li>
                        <a className="mobileSubMenuItem text-base">
                          <span>-</span> Home One
                        </a>
                      </li>
                      <li>
                        <a
                          href="./index2.html"
                          className="mobileSubMenuItem text-base"
                        >
                          <span>-</span> Home Two
                        </a>
                      </li>
                      <li>
                        <a
                          href="./index3.html"
                          className="mobileSubMenuItem text-base"
                        >
                          <span>-</span> Home Three
                        </a>
                      </li>
                      <li>
                        <a
                          href="./index4.html"
                          className="mobileSubMenuItem text-base"
                        >
                          <span>-</span> Home Four
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <div className="subMenuToggle group flex flex-col items-start justify-start">
                    <div className="flex cursor-pointer items-center justify-start">
                      <span className="mobileSubMenuTitle">Services</span>
                      <i className="pl-1 pt-1 !text-xl duration-500">
                        <i className="ph ph-caret-right"></i>
                      </i>
                    </div>

                    <ul className="subMenuClose subMenu flex flex-col items-start justify-start gap-2 overflow-hidden pl-4 duration-700">
                      <li>
                        <a
                          href="./services.html"
                          className="mobileSubMenuItem text-base"
                        >
                          <span>-</span> All Services
                        </a>
                      </li>
                      <li>
                        <a
                          href="./service-details.html"
                          className="mobileSubMenuItem text-base"
                        >
                          <span>-</span> Service Details
                        </a>
                      </li>
                      <li>
                        <a
                          href="./browse-tasks.html"
                          className="mobileSubMenuItem text-base"
                        >
                          <span>-</span> Browse Tasks
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <div className="subMenuToggle group flex flex-col items-start justify-start">
                    <div className="flex cursor-pointer items-center justify-start">
                      <span className="mobileSubMenuTitle">Worker</span>
                      <i className="pl-1 pt-1 !text-xl duration-500">
                        <i className="ph ph-caret-right"></i>
                      </i>
                    </div>

                    <ul className="subMenuClose subMenu flex flex-col items-start justify-start gap-2 overflow-hidden pl-4 duration-700">
                      <li>
                        <a
                          href="./find-workers.html"
                          className="mobileSubMenuItem text-base"
                        >
                          <span>-</span> Find Workers
                        </a>
                      </li>
                      <li>
                        <a
                          href="./worker-profile.html"
                          className="mobileSubMenuItem text-base"
                        >
                          <span>-</span> Worker Profile
                        </a>
                      </li>
                      <li>
                        <a
                          href="./worker-portfolio.html"
                          className="mobileSubMenuItem text-base"
                        >
                          <span>-</span> Worker Portfolio
                        </a>
                      </li>
                      <li>
                        <a
                          href="./worker-portfolio-details.html"
                          className="mobileSubMenuItem text-base"
                        >
                          <span>-</span>Portfolio Details
                        </a>
                      </li>
                      <li>
                        <a
                          href="./hire-me.html"
                          className="mobileSubMenuItem text-base"
                        >
                          <span>-</span> Hire Worker
                        </a>
                      </li>
                      <li>
                        <a
                          href="./dashboard/index.html"
                          className="mobileSubMenuItem text-base"
                        >
                          <span>-</span> Worker Dashboard
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <div className="subMenuToggle group flex flex-col items-start justify-start">
                    <div className="flex cursor-pointer items-center justify-start">
                      <span className="mobileSubMenuTitle">Pages</span>
                      <i className="pl-1 pt-1 !text-xl duration-500">
                        <i className="ph ph-caret-right"></i>
                      </i>
                    </div>

                    <ul className="subMenuClose subMenu flex flex-col items-start justify-start gap-2 overflow-hidden pl-4 duration-700">
                      <li>
                        <a
                          href="./about-us.html"
                          className="mobileSubMenuItem text-base"
                        >
                          <span>-</span> About Us
                        </a>
                      </li>
                      <li>
                        <a
                          href="./blog.html"
                          className="mobileSubMenuItem text-base"
                        >
                          <span>-</span> Blog
                        </a>
                      </li>
                      <li>
                        <a
                          href="./blog-details.html"
                          className="mobileSubMenuItem text-base"
                        >
                          <span>-</span> Blog Details
                        </a>
                      </li>
                      <li>
                        <a
                          href="./chat.html"
                          className="mobileSubMenuItem text-base"
                        >
                          <span>-</span> Chat
                        </a>
                      </li>
                      <li>
                        <a
                          href="./faq.html"
                          className="mobileSubMenuItem text-base"
                        >
                          <span>-</span> FAQ
                        </a>
                      </li>
                      <li>
                        <a
                          href="./contact.html"
                          className="mobileSubMenuItem text-base"
                        >
                          <span>-</span> Contact
                        </a>
                      </li>
                      <li>
                        <a
                          href="./privacy-policy.html"
                          className="mobileSubMenuItem text-base"
                        >
                          <span>-</span> Privacy Policy
                        </a>
                      </li>
                      <li>
                        <a
                          href="./terms-conditions.html"
                          className="mobileSubMenuItem text-base"
                        >
                          <span>-</span> Terms & Conditions
                        </a>
                      </li>
                      <li>
                        <a
                          href="./not-found.html"
                          className="mobileSubMenuItem text-base"
                        >
                          <span>-</span> Not Found
                        </a>
                      </li>
                      <li>
                        <a
                          href="./sign-up-step-1.html"
                          className="mobileSubMenuItem text-base"
                        >
                          <span>-</span> Sign Up
                        </a>
                      </li>
                      <li>
                        <a
                          href="./sign-in.html"
                          className="mobileSubMenuItem text-base"
                        >
                          <span>-</span> Sign In
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>

              <a
                href="./become-tasker.html"
                className="ml-4 rounded-full bg-y300 px-4 py-2 text-base font-medium text-n900"
              >
                Become A Tasker
              </a>
            </div>
          </nav>
        </header>

        {/* !-- Header Section End --> */}
        {/* !-- Hero Section Start --> */}
        <section className="pt-[100px]">
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
        </section>
        {/* !-- Hero Section End --> */}
        {/* !-- How It Works Section Start --> */}
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

        {/* !-- How It Works Section End --> */}
        {/* !-- Top Expert Section Start --> */}
        <section className="stp-30 sbp-30 bg-n20">
          <div className="container">
            <div className="flex items-center justify-between gap-2">
              <div className="flex max-w-[300px] flex-col">
                <h2 className="heading-2 font-bold text-n900">
                  Top <span className="text-b300 underline">Experts</span>
                </h2>
                <p className="pt-4 font-medium text-n500">
                  Our skilled and reliable experts, your most trusted partners.
                </p>
              </div>
              <div className="">
                <a
                  href="./find-workers.html"
                  className="flex items-center justify-start gap-3 font-bold duration-300 hover:text-b300"
                >
                  All Experts
                  <i className="ph-bold ph-arrow-right text-2xl !leading-none"></i>
                </a>
              </div>
            </div>

            <div className="stp-15 grid grid-cols-12 gap-6">
              <div
                className="col-span-12 flex flex-col gap-6 rounded-3xl border border-n40 bg-n10 py-6 md:col-span-6 xl:col-span-4"
                data-aos="fade-up"
                data-aos-delay="0"
                data-aos-duration="1000"
              >
                <div className="flex items-center justify-start gap-3 px-3 sm:px-6">
                  <div className="relative max-md:overflow-hidden">
                    <div className="hexagon-styles my-[calc(100px*0.5/2)] h-[calc(100px*0.57736720554273)] w-[100px] rounded-[calc(100px/36.75)] bg-b50 before:rounded-[calc(100px/18.75)] after:rounded-[calc(100px/18.75)]">
                      <div className="absolute -top-[20px] left-[5px]">
                        <div className="hexagon-styles z-10 my-[calc(90px*0.5/2)] h-[calc(90px*0.57736720554273)] w-[90px] rounded-[calc(90px/50)] bg-b300 before:rounded-[calc(90px/50)] after:rounded-[calc(90px/50)]">
                          <div className="absolute -top-[19px] left-[4px] z-20">
                            <div className="hexagon-styles z-10 my-[calc(82px*0.5/2)] h-[calc(82px*0.57736720554273)] w-[82px] rounded-[calc(82px/50)] bg-b50 before:rounded-[calc(82px/50)] after:rounded-[calc(82px/50)]">
                              <div className="r-hex3 absolute -left-0.5 -top-[19px] z-30 inline-block w-[86px] overflow-hidden">
                                <div className="r-hex-inner3">
                                  <div className="expertImg1 r-hex-inner-3 before:h-[86px] before:bg-cover"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute bottom-3 right-1 z-30">
                      <img
                        src="/assets/images/verify-badge.png"
                        alt=""
                        className=""
                      />
                    </div>
                  </div>
                  <div className="max-[350px]:max-w-20">
                    <div className="flex items-center justify-start gap-3">
                      <h5 className="heading-5">Mayme Cole</h5>
                      <p className="rounded-full bg-y300 px-2 py-1 text-xs font-medium">
                        PRO
                      </p>
                    </div>
                    <p className="pt-2 text-n500">Brooklyn, NY, USA</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 px-6 text-[13px]">
                  <p className="rounded-full bg-r50 px-2 py-1 font-medium text-r300">
                    $75 - $100/hr
                  </p>
                  <p className="rounded-full bg-g50 px-2 py-1 font-medium text-g400">
                    TOP INDEPENDENT
                  </p>
                  <p className="rounded-full bg-v50 px-2 py-1 font-medium text-v300">
                    AVAILABLE
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 px-6 text-n400">
                  <p className="flex items-center justify-center gap-2 rounded-xl bg-b50 px-3 py-2 font-medium">
                    <img src="/assets/images/settings_icon.png" alt="" />
                    <span>Handyman</span>
                  </p>
                  <p className="flex items-center justify-center gap-2 rounded-xl bg-b50 px-3 py-2 font-medium">
                    <img src="/assets/images/tap_icon.png" alt="" />
                    <span>Plumber </span>
                  </p>
                  <p className="rounded-xl bg-b50 px-3 py-2 font-medium">+3</p>
                </div>

                <div className="relative">
                  <div className="swiper expert-slider-carousel group">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        <img
                          src="/assets/images/expert_slider_img_4.png"
                          alt=""
                          className="w-full"
                        />
                      </div>
                      <div className="swiper-slide">
                        <img
                          src="/assets/images/expert_slider_img_1.png"
                          alt=""
                          className="w-full"
                        />
                      </div>
                      <div className="swiper-slide">
                        <img
                          src="/assets/images/expert_slider_img_2.png"
                          alt=""
                          className="w-full"
                        />
                      </div>
                      <div className="swiper-slide">
                        <img
                          src="/assets/images/expert_slider_img_3.png"
                          alt=""
                          className="w-full"
                        />
                      </div>

                      <div className="swiper-slide">
                        <img
                          src="/assets/images/expert_slider_img_5.png"
                          alt=""
                          className="w-full"
                        />
                      </div>
                      <div className="swiper-slide">
                        <img
                          src="/assets/images/expert_slider_img_6.png"
                          alt=""
                          className="w-full"
                        />
                      </div>
                      <div className="swiper-slide">
                        <img
                          src="/assets/images/expert_slider_img_2.png"
                          alt=""
                          className="w-full"
                        />
                      </div>
                      <div className="swiper-slide">
                        <img
                          src="/assets/images/expert_slider_img_3.png"
                          alt=""
                          className="w-full"
                        />
                      </div>
                    </div>
                    <div className="absolute left-2 right-2 top-28 z-10">
                      <div className="flex w-full items-center justify-between">
                        <button className="ara-prev flex -translate-x-12 items-center justify-center rounded-full border-2 border-r300 p-2 text-lg !leading-none text-r300 opacity-0 duration-500 hover:bg-r300 hover:text-white group-hover:translate-x-0 group-hover:opacity-100">
                          <i className="ph-bold ph-caret-left"></i>
                        </button>
                        <button className="ara-next flex translate-x-12 items-center justify-center rounded-full border-2 border-r300 p-2 text-lg !leading-none text-r300 opacity-0 duration-500 hover:bg-r300 hover:text-white group-hover:translate-x-0 group-hover:opacity-100">
                          <i className="ph-bold ph-caret-right"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-start gap-2 px-6">
                  <a
                    href="./worker-profile.html"
                    className="relative w-full overflow-hidden rounded-full bg-n700 px-6 py-3 text-sm font-semibold text-white duration-700 after:absolute after:inset-0 after:left-0 after:w-0 after:rounded-full after:bg-yellow-400 after:duration-700 hover:text-n900 hover:after:w-[calc(100%+2px)]"
                  >
                    <div className="relative z-20 flex items-center justify-center gap-3">
                      <i className="ph ph-paper-plane-tilt text-xl !leading-none"></i>
                      <span>Get in touch</span>
                    </div>
                  </a>
                  <button className="relative flex items-center justify-center rounded-full border p-3 text-xl !leading-none duration-500 hover:bg-y300">
                    <i className="ph ph-heart"></i>
                  </button>
                </div>
              </div>
              <div
                className="col-span-12 flex flex-col gap-6 rounded-3xl border border-n40 bg-n10 py-6 md:col-span-6 xl:col-span-4"
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="1000"
              >
                <div className="flex items-center justify-start gap-3 px-6">
                  <div className="relative max-md:overflow-hidden">
                    <div className="hexagon-styles my-[calc(100px*0.5/2)] h-[calc(100px*0.57736720554273)] w-[100px] rounded-[calc(100px/36.75)] bg-b50 before:rounded-[calc(100px/18.75)] after:rounded-[calc(100px/18.75)]">
                      <div className="absolute -top-[20px] left-[5px]">
                        <div className="hexagon-styles z-10 my-[calc(90px*0.5/2)] h-[calc(90px*0.57736720554273)] w-[90px] rounded-[calc(90px/50)] bg-b300 before:rounded-[calc(90px/50)] after:rounded-[calc(90px/50)]">
                          <div className="absolute -top-[19px] left-[4px] z-20">
                            <div className="hexagon-styles z-10 my-[calc(82px*0.5/2)] h-[calc(82px*0.57736720554273)] w-[82px] rounded-[calc(82px/50)] bg-b50 before:rounded-[calc(82px/50)] after:rounded-[calc(82px/50)]">
                              <div className="r-hex3 absolute -left-0.5 -top-[19px] z-30 inline-block w-[86px] overflow-hidden">
                                <div className="r-hex-inner3">
                                  <div className="expertImgBig r-hex-inner-3 before:h-[86px] before:bg-cover"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute bottom-3 right-1 z-30">
                      <img
                        src="/assets/images/verify-badge.png"
                        alt=""
                        className=""
                      />
                    </div>
                  </div>
                  <div className="max-[350px]:max-w-20">
                    <div className="flex items-center justify-start gap-3">
                      <h5 className="heading-5">Clyde Gordon</h5>
                      <p className="rounded-full bg-y300 px-2 py-1 text-xs font-medium">
                        PRO
                      </p>
                    </div>
                    <p className="pt-2 text-n500">Brooklyn, NY, USA</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 px-6 text-[13px]">
                  <p className="rounded-full bg-r50 px-2 py-1 font-medium text-r300">
                    $75 - $100/hr
                  </p>
                  <p className="rounded-full bg-g50 px-2 py-1 font-medium text-g400">
                    TOP INDEPENDENT
                  </p>
                  <p className="rounded-full bg-v50 px-2 py-1 font-medium text-v300">
                    AVAILABLE
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 px-6 text-n400">
                  <p className="flex items-center justify-center gap-2 rounded-xl bg-b50 px-3 py-2 font-medium">
                    <img src="/assets/images/settings_icon.png" alt="" />
                    <span>Handyman</span>
                  </p>
                  <p className="flex items-center justify-center gap-2 rounded-xl bg-b50 px-3 py-2 font-medium">
                    <img src="/assets/images/tap_icon.png" alt="" />
                    <span>Plumber </span>
                  </p>
                  <p className="rounded-xl bg-b50 px-3 py-2 font-medium">+3</p>
                </div>

                <div className="relative">
                  <div className="swiper expert-slider-carousel group">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        <img
                          src="/assets/images/expert_slider_img_1.png"
                          alt=""
                          className="w-full"
                        />
                      </div>
                      <div className="swiper-slide">
                        <img
                          src="/assets/images/expert_slider_img_2.png"
                          alt=""
                          className="w-full"
                        />
                      </div>
                      <div className="swiper-slide">
                        <img
                          src="/assets/images/expert_slider_img_3.png"
                          alt=""
                          className="w-full"
                        />
                      </div>

                      <div className="swiper-slide">
                        <img
                          src="/assets/images/expert_slider_img_4.png"
                          alt=""
                          className="w-full"
                        />
                      </div>
                      <div className="swiper-slide">
                        <img
                          src="/assets/images/expert_slider_img_5.png"
                          alt=""
                          className="w-full"
                        />
                      </div>
                      <div className="swiper-slide">
                        <img
                          src="/assets/images/expert_slider_img_6.png"
                          alt=""
                          className="w-full"
                        />
                      </div>
                      <div className="swiper-slide">
                        <img
                          src="/assets/images/expert_slider_img_2.png"
                          alt=""
                          className="w-full"
                        />
                      </div>
                      <div className="swiper-slide">
                        <img
                          src="/assets/images/expert_slider_img_3.png"
                          alt=""
                          className="w-full"
                        />
                      </div>
                    </div>
                    <div className="absolute left-2 right-2 top-28 z-10">
                      <div className="flex w-full items-center justify-between">
                        <button className="ara-prev flex -translate-x-12 items-center justify-center rounded-full border-2 border-r300 p-2 text-lg !leading-none text-r300 opacity-0 duration-500 hover:bg-r300 hover:text-white group-hover:translate-x-0 group-hover:opacity-100">
                          <i className="ph-bold ph-caret-left"></i>
                        </button>
                        <button className="ara-next flex translate-x-12 items-center justify-center rounded-full border-2 border-r300 p-2 text-lg !leading-none text-r300 opacity-0 duration-500 hover:bg-r300 hover:text-white group-hover:translate-x-0 group-hover:opacity-100">
                          <i className="ph-bold ph-caret-right"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-start gap-2 px-6">
                  <a
                    href="./worker-profile.html"
                    className="relative w-full overflow-hidden rounded-full bg-n700 px-6 py-3 text-sm font-semibold text-white duration-700 after:absolute after:inset-0 after:left-0 after:w-0 after:rounded-full after:bg-yellow-400 after:duration-700 hover:text-n900 hover:after:w-[calc(100%+2px)]"
                  >
                    <div className="relative z-20 flex items-center justify-center gap-3">
                      <i className="ph ph-paper-plane-tilt text-xl !leading-none"></i>
                      <span>Get in touch</span>
                    </div>
                  </a>
                  <button className="relative flex items-center justify-center rounded-full border p-3 text-xl !leading-none duration-500 hover:bg-y300">
                    <i className="ph ph-heart"></i>
                  </button>
                </div>
              </div>
              <div
                className="col-span-12 flex flex-col gap-6 rounded-3xl border border-n40 bg-n10 py-6 md:col-span-6 xl:col-span-4"
                data-aos="fade-up"
                data-aos-delay="600"
                data-aos-duration="1000"
              >
                <div className="flex items-center justify-start gap-3 px-6">
                  <div className="relative max-md:overflow-hidden">
                    <div className="hexagon-styles my-[calc(100px*0.5/2)] h-[calc(100px*0.57736720554273)] w-[100px] rounded-[calc(100px/36.75)] bg-b50 before:rounded-[calc(100px/18.75)] after:rounded-[calc(100px/18.75)]">
                      <div className="absolute -top-[20px] left-[5px]">
                        <div className="hexagon-styles z-10 my-[calc(90px*0.5/2)] h-[calc(90px*0.57736720554273)] w-[90px] rounded-[calc(90px/50)] bg-b300 before:rounded-[calc(90px/50)] after:rounded-[calc(90px/50)]">
                          <div className="absolute -top-[19px] left-[4px] z-20">
                            <div className="hexagon-styles z-10 my-[calc(82px*0.5/2)] h-[calc(82px*0.57736720554273)] w-[82px] rounded-[calc(82px/50)] bg-b50 before:rounded-[calc(82px/50)] after:rounded-[calc(82px/50)]">
                              <div className="r-hex3 absolute -left-0.5 -top-[19px] z-30 inline-block w-[86px] overflow-hidden">
                                <div className="r-hex-inner3">
                                  <div className="expertImg2 r-hex-inner-3 before:h-[86px] before:bg-cover"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute bottom-3 right-1 z-30">
                      <img
                        src="/assets/images/verify-badge.png"
                        alt=""
                        className=""
                      />
                    </div>
                  </div>
                  <div className="max-[350px]:max-w-20">
                    <div className="flex items-center justify-start gap-3">
                      <h5 className="heading-5">Madge Dale</h5>
                      <p className="rounded-full bg-y300 px-2 py-1 text-xs font-medium">
                        PRO
                      </p>
                    </div>
                    <p className="pt-2 text-n500">Brooklyn, NY, USA</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 px-6 text-[13px]">
                  <p className="rounded-full bg-r50 px-2 py-1 font-medium text-r300">
                    $75 - $100/hr
                  </p>
                  <p className="rounded-full bg-g50 px-2 py-1 font-medium text-g400">
                    TOP INDEPENDENT
                  </p>
                  <p className="rounded-full bg-v50 px-2 py-1 font-medium text-v300">
                    AVAILABLE
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 px-6 text-n400">
                  <p className="flex items-center justify-center gap-2 rounded-xl bg-b50 px-3 py-2 font-medium">
                    <img src="/assets/images/settings_icon.png" alt="" />
                    <span>Handyman</span>
                  </p>
                  <p className="flex items-center justify-center gap-2 rounded-xl bg-b50 px-3 py-2 font-medium">
                    <img src="/assets/images/tap_icon.png" alt="" />
                    <span>Plumber </span>
                  </p>
                  <p className="rounded-xl bg-b50 px-3 py-2 font-medium">+3</p>
                </div>

                <div className="relative">
                  <div className="swiper expert-slider-carousel group">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        <img
                          src="/assets/images/expert_slider_img_6.png"
                          alt=""
                          className="w-full"
                        />
                      </div>
                      <div className="swiper-slide">
                        <img
                          src="/assets/images/expert_slider_img_1.png"
                          alt=""
                          className="w-full"
                        />
                      </div>
                      <div className="swiper-slide">
                        <img
                          src="/assets/images/expert_slider_img_2.png"
                          alt=""
                          className="w-full"
                        />
                      </div>
                      <div className="swiper-slide">
                        <img
                          src="/assets/images/expert_slider_img_3.png"
                          alt=""
                          className="w-full"
                        />
                      </div>

                      <div className="swiper-slide">
                        <img
                          src="/assets/images/expert_slider_img_4.png"
                          alt=""
                          className="w-full"
                        />
                      </div>
                      <div className="swiper-slide">
                        <img
                          src="/assets/images/expert_slider_img_5.png"
                          alt=""
                          className="w-full"
                        />
                      </div>

                      <div className="swiper-slide">
                        <img
                          src="/assets/images/expert_slider_img_2.png"
                          alt=""
                          className="w-full"
                        />
                      </div>
                      <div className="swiper-slide">
                        <img
                          src="/assets/images/expert_slider_img_3.png"
                          alt=""
                          className="w-full"
                        />
                      </div>
                    </div>
                    <div className="absolute left-2 right-2 top-28 z-10">
                      <div className="flex w-full items-center justify-between">
                        <button className="ara-prev flex -translate-x-12 items-center justify-center rounded-full border-2 border-r300 p-2 text-lg !leading-none text-r300 opacity-0 duration-500 hover:bg-r300 hover:text-white group-hover:translate-x-0 group-hover:opacity-100">
                          <i className="ph-bold ph-caret-left"></i>
                        </button>
                        <button className="ara-next flex translate-x-12 items-center justify-center rounded-full border-2 border-r300 p-2 text-lg !leading-none text-r300 opacity-0 duration-500 hover:bg-r300 hover:text-white group-hover:translate-x-0 group-hover:opacity-100">
                          <i className="ph-bold ph-caret-right"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-start gap-2 px-6">
                  <a
                    href="./worker-profile.html"
                    className="relative w-full overflow-hidden rounded-full bg-n700 px-6 py-3 text-sm font-semibold text-white duration-700 after:absolute after:inset-0 after:left-0 after:w-0 after:rounded-full after:bg-yellow-400 after:duration-700 hover:text-n900 hover:after:w-[calc(100%+2px)]"
                  >
                    <div className="relative z-20 flex items-center justify-center gap-3">
                      <i className="ph ph-paper-plane-tilt text-xl !leading-none"></i>
                      <span>Get in touch</span>
                    </div>
                  </a>
                  <button className="relative flex items-center justify-center rounded-full border p-3 text-xl !leading-none duration-500 hover:bg-y300">
                    <i className="ph ph-heart"></i>
                  </button>
                </div>
              </div>
              <div
                className="col-span-12 flex flex-col gap-6 rounded-3xl border border-n40 bg-n10 py-6 md:col-span-6 xl:col-span-4"
                data-aos="fade-up"
                data-aos-delay="0"
                data-aos-duration="1000"
              >
                <div className="flex items-center justify-start gap-3 px-6">
                  <div className="relative max-md:overflow-hidden">
                    <div className="hexagon-styles my-[calc(100px*0.5/2)] h-[calc(100px*0.57736720554273)] w-[100px] rounded-[calc(100px/36.75)] bg-b50 before:rounded-[calc(100px/18.75)] after:rounded-[calc(100px/18.75)]">
                      <div className="absolute -top-[20px] left-[5px]">
                        <div className="hexagon-styles z-10 my-[calc(90px*0.5/2)] h-[calc(90px*0.57736720554273)] w-[90px] rounded-[calc(90px/50)] bg-b300 before:rounded-[calc(90px/50)] after:rounded-[calc(90px/50)]">
                          <div className="absolute -top-[19px] left-[4px] z-20">
                            <div className="hexagon-styles z-10 my-[calc(82px*0.5/2)] h-[calc(82px*0.57736720554273)] w-[82px] rounded-[calc(82px/50)] bg-b50 before:rounded-[calc(82px/50)] after:rounded-[calc(82px/50)]">
                              <div className="r-hex3 absolute -left-0.5 -top-[19px] z-30 inline-block w-[86px] overflow-hidden">
                                <div className="r-hex-inner3">
                                  <div className="expertImg3 r-hex-inner-3 before:h-[86px] before:bg-cover"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute bottom-3 right-1 z-30">
                      <img
                        src="/assets/images/verify-badge.png"
                        alt=""
                        className=""
                      />
                    </div>
                  </div>
                  <div className="max-[350px]:max-w-20">
                    <div className="flex items-center justify-start gap-3">
                      <h5 className="heading-5">Evan Dev</h5>
                      <p className="rounded-full bg-y300 px-2 py-1 text-xs font-medium">
                        PRO
                      </p>
                    </div>
                    <p className="pt-2 text-n500">Brooklyn, NY, USA</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 px-6 text-[13px]">
                  <p className="rounded-full bg-r50 px-2 py-1 font-medium text-r300">
                    $75 - $100/hr
                  </p>
                  <p className="rounded-full bg-g50 px-2 py-1 font-medium text-g400">
                    TOP INDEPENDENT
                  </p>
                  <p className="rounded-full bg-v50 px-2 py-1 font-medium text-v300">
                    AVAILABLE
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 px-6 text-n400">
                  <p className="flex items-center justify-center gap-2 rounded-xl bg-b50 px-3 py-2 font-medium">
                    <img src="/assets/images/settings_icon.png" alt="" />
                    <span>Handyman</span>
                  </p>
                  <p className="flex items-center justify-center gap-2 rounded-xl bg-b50 px-3 py-2 font-medium">
                    <img src="/assets/images/tap_icon.png" alt="" />
                    <span>Plumber </span>
                  </p>
                  <p className="rounded-xl bg-b50 px-3 py-2 font-medium">+3</p>
                </div>

                <div className="relative">
                  <div className="swiper expert-slider-carousel group">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        <img
                          src="/assets/images/expert_slider_img_2.png"
                          alt=""
                          className="w-full"
                        />
                      </div>
                      <div className="swiper-slide">
                        <img
                          src="/assets/images/expert_slider_img_1.png"
                          alt=""
                          className="w-full"
                        />
                      </div>

                      <div className="swiper-slide">
                        <img
                          src="/assets/images/expert_slider_img_3.png"
                          alt=""
                          className="w-full"
                        />
                      </div>

                      <div className="swiper-slide">
                        <img
                          src="/assets/images/expert_slider_img_4.png"
                          alt=""
                          className="w-full"
                        />
                      </div>
                      <div className="swiper-slide">
                        <img
                          src="/assets/images/expert_slider_img_5.png"
                          alt=""
                          className="w-full"
                        />
                      </div>
                      <div className="swiper-slide">
                        <img
                          src="/assets/images/expert_slider_img_6.png"
                          alt=""
                          className="w-full"
                        />
                      </div>
                      <div className="swiper-slide">
                        <img
                          src="/assets/images/expert_slider_img_2.png"
                          alt=""
                          className="w-full"
                        />
                      </div>
                      <div className="swiper-slide">
                        <img
                          src="/assets/images/expert_slider_img_3.png"
                          alt=""
                          className="w-full"
                        />
                      </div>
                    </div>
                    <div className="absolute left-2 right-2 top-28 z-10">
                      <div className="flex w-full items-center justify-between">
                        <button className="ara-prev flex -translate-x-12 items-center justify-center rounded-full border-2 border-r300 p-2 text-lg !leading-none text-r300 opacity-0 duration-500 hover:bg-r300 hover:text-white group-hover:translate-x-0 group-hover:opacity-100">
                          <i className="ph-bold ph-caret-left"></i>
                        </button>
                        <button className="ara-next flex translate-x-12 items-center justify-center rounded-full border-2 border-r300 p-2 text-lg !leading-none text-r300 opacity-0 duration-500 hover:bg-r300 hover:text-white group-hover:translate-x-0 group-hover:opacity-100">
                          <i className="ph-bold ph-caret-right"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-start gap-2 px-6">
                  <a
                    href="./worker-profile.html"
                    className="relative w-full overflow-hidden rounded-full bg-n700 px-6 py-3 text-sm font-semibold text-white duration-700 after:absolute after:inset-0 after:left-0 after:w-0 after:rounded-full after:bg-yellow-400 after:duration-700 hover:text-n900 hover:after:w-[calc(100%+2px)]"
                  >
                    <div className="relative z-20 flex items-center justify-center gap-3">
                      <i className="ph ph-paper-plane-tilt text-xl !leading-none"></i>
                      <span>Get in touch</span>
                    </div>
                  </a>
                  <button className="relative flex items-center justify-center rounded-full border p-3 text-xl !leading-none duration-500 hover:bg-y300">
                    <i className="ph ph-heart"></i>
                  </button>
                </div>
              </div>
              <div
                className="col-span-12 flex flex-col gap-6 rounded-3xl border border-n40 bg-n10 py-6 md:col-span-6 xl:col-span-4"
                data-aos="fade-up"
                data-aos-delay="400"
                data-aos-duration="1000"
              >
                <div className="flex items-center justify-start gap-3 px-6">
                  <div className="relative max-md:overflow-hidden">
                    <div className="hexagon-styles my-[calc(100px*0.5/2)] h-[calc(100px*0.57736720554273)] w-[100px] rounded-[calc(100px/36.75)] bg-b50 before:rounded-[calc(100px/18.75)] after:rounded-[calc(100px/18.75)]">
                      <div className="absolute -top-[20px] left-[5px]">
                        <div className="hexagon-styles z-10 my-[calc(90px*0.5/2)] h-[calc(90px*0.57736720554273)] w-[90px] rounded-[calc(90px/50)] bg-b300 before:rounded-[calc(90px/50)] after:rounded-[calc(90px/50)]">
                          <div className="absolute -top-[19px] left-[4px] z-20">
                            <div className="hexagon-styles z-10 my-[calc(82px*0.5/2)] h-[calc(82px*0.57736720554273)] w-[82px] rounded-[calc(82px/50)] bg-b50 before:rounded-[calc(82px/50)] after:rounded-[calc(82px/50)]">
                              <div className="r-hex3 absolute -left-0.5 -top-[19px] z-30 inline-block w-[86px] overflow-hidden">
                                <div className="r-hex-inner3">
                                  <div className="expertImg4 r-hex-inner-3 before:h-[86px] before:bg-cover"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute bottom-3 right-1 z-30">
                      <img
                        src="/assets/images/verify-badge.png"
                        alt=""
                        className=""
                      />
                    </div>
                  </div>
                  <div className="max-[350px]:max-w-20">
                    <div className="flex items-center justify-start gap-3">
                      <h5 className="heading-5">Ruth Vega</h5>
                      <p className="rounded-full bg-y300 px-2 py-1 text-xs font-medium">
                        PRO
                      </p>
                    </div>
                    <p className="pt-2 text-n500">Brooklyn, NY, USA</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 px-6 text-[13px]">
                  <p className="rounded-full bg-r50 px-2 py-1 font-medium text-r300">
                    $75 - $100/hr
                  </p>
                  <p className="rounded-full bg-g50 px-2 py-1 font-medium text-g400">
                    TOP INDEPENDENT
                  </p>
                  <p className="rounded-full bg-v50 px-2 py-1 font-medium text-v300">
                    AVAILABLE
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 px-6 text-n400">
                  <p className="flex items-center justify-center gap-2 rounded-xl bg-b50 px-3 py-2 font-medium">
                    <img src="/assets/images/settings_icon.png" alt="" />
                    <span>Handyman</span>
                  </p>
                  <p className="flex items-center justify-center gap-2 rounded-xl bg-b50 px-3 py-2 font-medium">
                    <img src="/assets/images/tap_icon.png" alt="" />
                    <span>Plumber </span>
                  </p>
                  <p className="rounded-xl bg-b50 px-3 py-2 font-medium">+3</p>
                </div>

                <div className="relative">
                  <div className="swiper expert-slider-carousel group">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        <img
                          src="/assets/images/expert_slider_img_3.png"
                          alt=""
                          className="w-full"
                        />
                      </div>
                      <div className="swiper-slide">
                        <img
                          src="/assets/images/expert_slider_img_1.png"
                          alt=""
                          className="w-full"
                        />
                      </div>
                      <div className="swiper-slide">
                        <img
                          src="/assets/images/expert_slider_img_2.png"
                          alt=""
                          className="w-full"
                        />
                      </div>

                      <div className="swiper-slide">
                        <img
                          src="/assets/images/expert_slider_img_4.png"
                          alt=""
                          className="w-full"
                        />
                      </div>
                      <div className="swiper-slide">
                        <img
                          src="/assets/images/expert_slider_img_5.png"
                          alt=""
                          className="w-full"
                        />
                      </div>
                      <div className="swiper-slide">
                        <img
                          src="/assets/images/expert_slider_img_6.png"
                          alt=""
                          className="w-full"
                        />
                      </div>
                      <div className="swiper-slide">
                        <img
                          src="/assets/images/expert_slider_img_2.png"
                          alt=""
                          className="w-full"
                        />
                      </div>
                      <div className="swiper-slide">
                        <img
                          src="/assets/images/expert_slider_img_3.png"
                          alt=""
                          className="w-full"
                        />
                      </div>
                    </div>
                    <div className="absolute left-2 right-2 top-28 z-10">
                      <div className="flex w-full items-center justify-between">
                        <button className="ara-prev flex -translate-x-12 items-center justify-center rounded-full border-2 border-r300 p-2 text-lg !leading-none text-r300 opacity-0 duration-500 hover:bg-r300 hover:text-white group-hover:translate-x-0 group-hover:opacity-100">
                          <i className="ph-bold ph-caret-left"></i>
                        </button>
                        <button className="ara-next flex translate-x-12 items-center justify-center rounded-full border-2 border-r300 p-2 text-lg !leading-none text-r300 opacity-0 duration-500 hover:bg-r300 hover:text-white group-hover:translate-x-0 group-hover:opacity-100">
                          <i className="ph-bold ph-caret-right"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-start gap-2 px-6">
                  <a
                    href="./worker-profile.html"
                    className="relative w-full overflow-hidden rounded-full bg-n700 px-6 py-3 text-sm font-semibold text-white duration-700 after:absolute after:inset-0 after:left-0 after:w-0 after:rounded-full after:bg-yellow-400 after:duration-700 hover:text-n900 hover:after:w-[calc(100%+2px)]"
                  >
                    <div className="relative z-20 flex items-center justify-center gap-3">
                      <i className="ph ph-paper-plane-tilt text-xl !leading-none"></i>
                      <span>Get in touch</span>
                    </div>
                  </a>
                  <button className="relative flex items-center justify-center rounded-full border p-3 text-xl !leading-none duration-500 hover:bg-y300">
                    <i className="ph ph-heart"></i>
                  </button>
                </div>
              </div>
              <div
                className="col-span-12 flex flex-col gap-6 rounded-3xl border border-n40 bg-n10 py-6 md:col-span-6 xl:col-span-4"
                data-aos="fade-up"
                data-aos-delay="600"
                data-aos-duration="1000"
              >
                <div className="flex items-center justify-start gap-3 px-6">
                  <div className="relative max-md:overflow-hidden">
                    <div className="hexagon-styles my-[calc(100px*0.5/2)] h-[calc(100px*0.57736720554273)] w-[100px] rounded-[calc(100px/36.75)] bg-b50 before:rounded-[calc(100px/18.75)] after:rounded-[calc(100px/18.75)]">
                      <div className="absolute -top-[20px] left-[5px]">
                        <div className="hexagon-styles z-10 my-[calc(90px*0.5/2)] h-[calc(90px*0.57736720554273)] w-[90px] rounded-[calc(90px/50)] bg-b300 before:rounded-[calc(90px/50)] after:rounded-[calc(90px/50)]">
                          <div className="absolute -top-[19px] left-[4px] z-20">
                            <div className="hexagon-styles z-10 my-[calc(82px*0.5/2)] h-[calc(82px*0.57736720554273)] w-[82px] rounded-[calc(82px/50)] bg-b50 before:rounded-[calc(82px/50)] after:rounded-[calc(82px/50)]">
                              <div className="r-hex3 absolute -left-0.5 -top-[19px] z-30 inline-block w-[86px] overflow-hidden">
                                <div className="r-hex-inner3">
                                  <div className="expertImg5 r-hex-inner-3 before:h-[86px] before:bg-cover"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute bottom-3 right-1 z-30">
                      <img
                        src="/assets/images/verify-badge.png"
                        alt=""
                        className=""
                      />
                    </div>
                  </div>
                  <div className="max-[350px]:max-w-20">
                    <div className="flex items-center justify-start gap-3">
                      <h5 className="heading-5">Scott Wade</h5>
                      <p className="rounded-full bg-y300 px-2 py-1 text-xs font-medium">
                        PRO
                      </p>
                    </div>
                    <p className="pt-2 text-n500">Brooklyn, NY, USA</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 px-6 text-[13px]">
                  <p className="rounded-full bg-r50 px-2 py-1 font-medium text-r300">
                    $75 - $100/hr
                  </p>
                  <p className="rounded-full bg-g50 px-2 py-1 font-medium text-g400">
                    TOP INDEPENDENT
                  </p>
                  <p className="rounded-full bg-v50 px-2 py-1 font-medium text-v300">
                    AVAILABLE
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 px-6 text-n400">
                  <p className="flex items-center justify-center gap-2 rounded-xl bg-b50 px-3 py-2 font-medium">
                    <img src="/assets/images/settings_icon.png" alt="" />
                    <span>Handyman</span>
                  </p>
                  <p className="flex items-center justify-center gap-2 rounded-xl bg-b50 px-3 py-2 font-medium">
                    <img src="/assets/images/tap_icon.png" alt="" />
                    <span>Plumber </span>
                  </p>
                  <p className="rounded-xl bg-b50 px-3 py-2 font-medium">+3</p>
                </div>

                <div className="relative">
                  <div className="swiper expert-slider-carousel group">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        <img
                          src="/assets/images/expert_slider_img_4.png"
                          alt=""
                          className="w-full"
                        />
                      </div>
                      <div className="swiper-slide">
                        <img
                          src="/assets/images/expert_slider_img_3.png"
                          alt=""
                          className="w-full"
                        />
                      </div>
                      <div className="swiper-slide">
                        <img
                          src="/assets/images/expert_slider_img_2.png"
                          alt=""
                          className="w-full"
                        />
                      </div>
                      <div className="swiper-slide">
                        <img
                          src="/assets/images/expert_slider_img_1.png"
                          alt=""
                          className="w-full"
                        />
                      </div>
                      <div className="swiper-slide">
                        <img
                          src="/assets/images/expert_slider_img_5.png"
                          alt=""
                          className="w-full"
                        />
                      </div>
                      <div className="swiper-slide">
                        <img
                          src="/assets/images/expert_slider_img_6.png"
                          alt=""
                          className="w-full"
                        />
                      </div>
                      <div className="swiper-slide">
                        <img
                          src="/assets/images/expert_slider_img_3.png"
                          alt=""
                          className="w-full"
                        />
                      </div>
                      <div className="swiper-slide">
                        <img
                          src="/assets/images/expert_slider_img_2.png"
                          alt=""
                          className="w-full"
                        />
                      </div>
                    </div>
                    <div className="absolute left-2 right-2 top-28 z-10">
                      <div className="flex w-full items-center justify-between">
                        <button className="ara-prev flex -translate-x-12 items-center justify-center rounded-full border-2 border-r300 p-2 text-lg !leading-none text-r300 opacity-0 duration-500 hover:bg-r300 hover:text-white group-hover:translate-x-0 group-hover:opacity-100">
                          <i className="ph-bold ph-caret-left"></i>
                        </button>
                        <button className="ara-next flex translate-x-12 items-center justify-center rounded-full border-2 border-r300 p-2 text-lg !leading-none text-r300 opacity-0 duration-500 hover:bg-r300 hover:text-white group-hover:translate-x-0 group-hover:opacity-100">
                          <i className="ph-bold ph-caret-right"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-start gap-2 px-6">
                  <a
                    href="./worker-profile.html"
                    className="relative w-full overflow-hidden rounded-full bg-n700 px-6 py-3 text-sm font-semibold text-white duration-700 after:absolute after:inset-0 after:left-0 after:w-0 after:rounded-full after:bg-yellow-400 after:duration-700 hover:text-n900 hover:after:w-[calc(100%+2px)]"
                  >
                    <div className="relative z-20 flex items-center justify-center gap-3">
                      <i className="ph ph-paper-plane-tilt text-xl !leading-none"></i>
                      <span>Get in touch</span>
                    </div>
                  </a>
                  <button className="relative flex items-center justify-center rounded-full border p-3 text-xl !leading-none duration-500 hover:bg-y300">
                    <i className="ph ph-heart"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* !-- Top Expert Section End --> */}
        {/* !-- Looking for service section Start --> */}
        <section className="stp-30 sbp-30">
          <div className="container grid grid-cols-12 max-lg:gap-6">
            <div className="relative col-span-12 lg:col-span-6">
              <div className="overflow-hidden pb-6 pl-6">
                <img
                  src="/assets/images/home_one_contact_img.png"
                  alt=""
                  className="relative z-10 overflow-hidden rounded-2xl"
                />
              </div>
              <div className="absolute bottom-0 left-0 h-[250px] w-[200px] rounded-2xl bg-n900 sm:h-[300px] lg:w-[300px] xl:h-[600px]"></div>
            </div>

            <div className="col-span-12 flex flex-col items-start justify-center lg:col-span-5 lg:col-start-8">
              <h5 className="heading-5 pb-4 text-r300">Fixed Price Service</h5>
              <ul className="flex flex-wrap items-center justify-start gap-3">
                <li className="flex items-center justify-start gap-2">
                  <i className="ph ph-currency-circle-dollar text-xl !leading-none">
                    {" "}
                  </i>
                  See your price.
                </li>
                <li className="flex items-center justify-start gap-2">
                  <i className="ph ph-calendar-check text-xl !leading-none">
                    {" "}
                  </i>{" "}
                  Book a time.
                </li>
                <li className="flex items-center justify-start gap-2">
                  <i className="ph ph-credit-card text-xl !leading-none"></i>{" "}
                  Pay online.
                </li>
              </ul>

              <h2 className="heading-2 max-w-[400px] pt-6 font-bold sm:pt-8">
                Looking to book a fixed price service?
              </h2>
              <p className="pt-4 font-medium text-n500">
                Interested in scheduling a service at a set rate? Browse our
                selection of fixed-price offerings and book with confidence
                today
              </p>
              <p className="pb-6 pt-4 font-medium text-n800 sm:pb-10 sm:pt-8">
                Plumbing, Handyman, House Cleaning, and more...
              </p>
              <div className="">
                <a
                  href="./contact.html"
                  className="group relative flex items-center justify-start pr-12 font-semibold"
                >
                  <span className="rounded-full bg-y300 px-6 py-3 duration-500 group-hover:translate-x-12">
                    Contact Now
                  </span>
                  <i className="ph-bold ph-arrow-up-right absolute right-0 top-0 translate-x-0 rounded-full bg-y300 p-[14px] text-xl !leading-none duration-500 group-hover:right-[154px] group-hover:rotate-45"></i>
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* !-- Looking for service section End --> */}
        {/* !-- Newsletter Section Start --> */}
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

        {/* !-- Newsletter Section End --> */}
        {/* !-- Secure Guard Start --> */}
        <section className="stp-30 sbp-30">
          <div className="container grid grid-cols-12 max-lg:gap-6">
            <div className="col-span-12 lg:col-span-6">
              <h5
                className="heading-5 text-r300"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="0"
              >
                Secure Guard
              </h5>
              <h2
                className="heading-2 max-w-[550px] pt-4"
                data-aos="fade-down"
                data-aos-duration="1000"
                data-aos-delay="0"
              >
                Trust and safety features for your protection
              </h2>
              <ul className="flex flex-col gap-8 pt-6 lg:pt-10">
                <li className="relative flex items-start justify-start gap-4">
                  <div className="flex items-center justify-center rounded-full bg-b300 p-3 text-2xl !leading-none text-white">
                    <i className="ph ph-currency-dollar-simple"></i>
                    <div className="linear_gradient_one absolute bottom-3 left-6 h-[50px] w-[2px]"></div>
                  </div>
                  <div className="">
                    <h5 className="heading-5">Secure payments</h5>
                    <p className="max-w-[500px] py-3 text-n500">
                      Only release payment when the task is completed to your
                      satisfaction
                    </p>
                    <a href="" className="font-bold text-b300">
                      Read More
                    </a>
                  </div>
                </li>
                <li className="relative flex items-start justify-start gap-4">
                  <div className="flex items-center justify-center rounded-full bg-b300 p-3 text-2xl !leading-none text-white">
                    <i className="ph ph-star"></i>
                    <div className="linear_gradient_one absolute bottom-3 left-6 h-[50px] w-[2px]"></div>
                  </div>
                  <div className="">
                    <h5 className="heading-5">Trusted ratings and reviews</h5>
                    <p className="max-w-[500px] py-3 text-n500">
                      Pick the right person for the task based on real ratings
                      and reviews from other users
                    </p>
                    <a href="" className="font-bold text-b300">
                      Read More
                    </a>
                  </div>
                </li>
                <li className="relative flex items-start justify-start gap-4">
                  <div className="flex items-center justify-center rounded-full bg-b300 p-3 text-2xl !leading-none text-white">
                    <i className="ph ph-shield-check"></i>
                    <div className="linear_gradient_one absolute bottom-3 left-6 h-[50px] w-[2px]"></div>
                  </div>
                  <div className="">
                    <h5 className="heading-5">Insurance for peace of mind</h5>
                    <p className="max-w-[500px] py-3 text-n500">
                      Only release payment when the task is completed to your
                      satisfaction
                    </p>
                    <a href="" className="font-bold text-b300">
                      Read More
                    </a>
                  </div>
                </li>
              </ul>
              <div className="flex justify-start pt-10">
                <a
                  href="./working-processed-step-01.html"
                  className="group relative flex items-center justify-start pr-12 font-semibold"
                >
                  <span className="rounded-full bg-y300 px-6 py-3 duration-500 group-hover:translate-x-12">
                    Post your task for free
                  </span>
                  <i className="ph-bold ph-arrow-up-right absolute right-0 top-0 translate-x-0 rounded-full bg-y300 p-[14px] text-xl !leading-none duration-500 group-hover:right-[230px] group-hover:rotate-45"></i>
                </a>
              </div>
            </div>

            <div className="relative col-span-12 items-end justify-center lg:col-span-5 lg:col-start-8 lg:flex">
              <div className="overflow-hidden pb-4 pr-4">
                <img
                  src="/assets/images/safe_guard_section_img.png"
                  alt=""
                  className="relative z-10 h-full w-full overflow-hidden rounded-2xl"
                />
              </div>
              <div className="absolute bottom-0 right-0 h-[250px] w-[200px] rounded-2xl bg-n900 sm:h-[300px] lg:w-[300px] xl:h-[500px]"></div>

              <div className="box-shadow-2 absolute right-0 top-4 z-10 flex items-center justify-start gap-2 rounded-xl border border-b50 bg-white px-3 py-2 sm:top-12 sm:gap-3 sm:px-8 sm:py-6 3xl:-right-32">
                <div className="rounded-full bg-b100 p-0.5">
                  <img
                    src="/assets/images/safe_guard_review_img.png"
                    alt=""
                    className="rounded-full"
                  />
                </div>

                <div className="">
                  <div className="flex items-center justify-start gap-3">
                    <span className="heading-3">4.5</span>
                    <i className="ph-fill ph-star text-xl !leading-none text-y300"></i>
                  </div>
                  <p className="font-medium text-n500">Over all Rating</p>
                </div>
              </div>

              <div className="box-shadow-2 absolute -left-2 bottom-20 z-10 flex items-center justify-start gap-2 rounded-xl border border-b50 bg-white px-3 py-2 font-medium sm:bottom-40 sm:gap-3 sm:px-8 sm:py-6 lg:-left-20">
                <i className="ph ph-thumbs-up text-xl !leading-none"></i>
                <p>Job Completed</p>
                <span className="text-n300">2m ago</span>
              </div>
              <div className="box-shadow-2 absolute -left-2 bottom-8 z-10 flex items-center justify-start gap-2 rounded-xl border border-b50 bg-white px-3 py-2 font-medium sm:bottom-16 sm:gap-3 sm:px-8 sm:py-6 lg:-left-20">
                <i className="ph ph-check-circle text-xl !leading-none"></i>
                <p>Payment released</p>
                <span className="text-n300">2m ago</span>
              </div>
            </div>
          </div>
        </section>
        {/* !-- Secure Guard End --> */}
        {/* !-- Testimonial Section Start --> */}
        <section className="stp-30 sbp-30 relative overflow-hidden bg-b50">
          <div className="absolute right-0 top-0">
            <img
              src="/assets/images/home-four-illus.png"
              alt=""
              className="max-[1860px]:w-[280px] max-3xl:w-[150px] max-xl:hidden"
            />
          </div>
          <div className="container">
            <div className="sbp-15 flex items-center justify-between gap-6 border-b border-sp max-sm:flex-col">
              <div className="">
                <h5 className="heading-5 text-r300">Testimonials</h5>
                <h2 className="heading-2 max-w-[500px] pt-4">
                  What Users Are Saying About The Servibe
                </h2>
              </div>
              <p className="font-medium text-n500 sm:max-w-[300px]">
                Incredibly impressed on-demand cleaning service. Prompt,
                thorough and left home sparkling.
              </p>
            </div>

            <div className="grid grid-cols-12 max-lg:gap-6">
              <div className="stp-15 col-span-12 flex items-center justify-center border-sp pr-6 md:col-span-4 md:border-r lg:col-span-5 lg:pr-20">
                <img
                  src="/assets/images/testimonial_img.png"
                  alt=""
                  className="max-md:max-h-[300px]"
                />
              </div>

              <div className="col-span-12 flex items-center justify-start md:col-span-7 lg:col-span-6 lg:col-start-7">
                <div className="swiper testimonial4-slider-carousel md:max-lg:pt-6">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide w-full">
                      <p className="border-b border-sp pb-5 text-lg font-medium text-n500 sm:text-xl">
                        &quot;Incredibly impressed on-demand cleaning service.
                        Prompt, thorough and left home sparkling. A game-changer
                        for busy schedules! Uber has transformed my daily
                        commute. Reliable drivers, easy booking, and the
                        app&apos;s convenience
                      </p>

                      <h4 className="heading-4 pt-5">Andrew Russel</h4>
                      <p className="pt-1 font-medium text-n500">
                        VP of Marketing
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-start gap-3 pt-6 text-2xl !leading-none text-b300 lg:pt-10">
                    <button className="hover: ara-prev flex items-center justify-center rounded-full border border-b300 p-3 duration-500 hover:-rotate-45 hover:bg-b300 hover:text-white lg:p-4">
                      <i className="ph ph-arrow-up-left"></i>
                    </button>
                    <button className="hover: ara-next flex items-center justify-center rounded-full border border-b300 p-3 duration-500 hover:rotate-45 hover:bg-b300 hover:text-white lg:p-4">
                      <i className="ph ph-arrow-up-right"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* !-- Testimonial Section End --> */}
        {/* !-- Recent Post Section Start --> */}
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
        {/* !-- Recent Post Section End --> */}
        {/* !-- Find work and hiring section start --> */}
        <section className="stp-30 sbp-30 relative">
          <div className="absolute left-0 top-0 w-full bg-g300 max-md:h-1/2 md:bottom-0 md:w-1/2"></div>
          <div className="absolute bottom-0 right-0 w-full bg-r300 max-md:h-1/2 md:top-0 md:w-1/2"></div>
          <div className="container relative z-10 grid grid-cols-12 overflow-hidden max-md:gap-6">
            <div className="col-span-12 grid grid-cols-6 max-sm:pb-6 sm:max-md:pb-24 md:col-span-5">
              <div className="col-span-6 rounded-xl border bg-g75 p-8 lg:col-span-5">
                <div className="flex items-start justify-between">
                  <p className="rounded-full bg-y300 px-2 py-1 text-sm font-medium">
                    PRO
                  </p>
                  <div className="">
                    <div className="">
                      <img
                        src="/assets/images/review_img.png"
                        alt=""
                        className="w-[75px]"
                      />
                    </div>
                    <div className="flex gap-2 pt-2">
                      <p className="flex items-center justify-start gap-2 text-sm font-bold !leading-none text-o300">
                        <i className="ph-fill ph-star"></i> 4.7
                      </p>
                      <div className="text-sm text-n300">
                        <p className="">(81)</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-center justify-center py-6">
                  <div className="relative max-md:overflow-hidden">
                    <div className="hexagon-styles my-[calc(200px*0.5/2)] h-[calc(200px*0.57736720554273)] w-[200px] rounded-[calc(200px/36.75)] bg-b50 before:rounded-[calc(200px/18.75)] after:rounded-[calc(200px/18.75)]">
                      <div className="absolute -top-11 left-[5px]">
                        <div className="hexagon-styles z-10 my-[calc(190px*0.5/2)] h-[calc(190px*0.57736720554273)] w-[190px] rounded-[calc(190px/50)] bg-b300 before:rounded-[calc(190px/50)] after:rounded-[calc(190px/50)]">
                          <div className="absolute -top-[42px] left-[5px] z-20">
                            <div className="hexagon-styles z-10 my-[calc(180px*0.5/2)] h-[calc(180px*0.57736720554273)] w-[180px] rounded-[calc(180px/50)] bg-b50 before:rounded-[calc(180px/50)] after:rounded-[calc(180px/50)]">
                              <div className="r-hex3 absolute -left-[5px] -top-[43px] z-30 inline-block w-[190px] overflow-hidden">
                                <div className="r-hex-inner3">
                                  <div className="expertImg5 r-hex-inner-3 before:h-[190px] before:bg-cover"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute bottom-5 right-1 z-30">
                      <img
                        src="/assets/images/verify-badge2.png"
                        alt=""
                        className=""
                      />
                    </div>
                  </div>
                  <div className="pt-3">
                    <div className="flex flex-col items-center justify-start gap-3">
                      <h5 className="heading-5">I am an Expert</h5>
                    </div>
                    <p className="pt-2 text-center text-n500 sm:px-3">
                      I&apos;m a Skilled Professional, Ready to Assist with
                      Expertise and Dedication in Your Task.
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between border-b border-n40 pb-6">
                  <div className="flex items-center justify-start gap-2">
                    <i className="ph ph-clock text-2xl !leading-none"></i>
                    <p>Full-Time</p>
                  </div>
                  <div className="flex items-center justify-start gap-2">
                    <i className="ph ph-chart-line text-2xl !leading-none"></i>
                    <p>10+ Years</p>
                  </div>
                </div>

                <div className="flex w-full items-center justify-center pt-8">
                  <a
                    href="./find-workers.html"
                    className="group relative flex items-center justify-start pr-12 font-semibold"
                  >
                    <span className="rounded-full bg-g300 px-6 py-3 duration-500 group-hover:translate-x-12">
                      Explore Now
                    </span>
                    <i className="ph-bold ph-arrow-up-right absolute right-0 top-0 translate-x-0 rounded-full bg-g300 p-[14px] text-xl !leading-none duration-500 group-hover:right-[152px] group-hover:rotate-45"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-span-12 flex flex-col items-start max-sm:pt-6 md:col-span-5 md:col-start-8">
              <div className="col-span-12 grid grid-cols-6 sm:col-span-5">
                <div className="col-span-6 rounded-xl border bg-r50 p-8 lg:col-span-5 lg:col-start-2">
                  <div className="flex items-start justify-between">
                    <p className="rounded-full bg-y300 px-2 py-1 text-sm font-medium">
                      PRO
                    </p>
                    <div className="">
                      <div className="">
                        <img
                          src="/assets/images/review_img.png"
                          alt=""
                          className="w-[75px]"
                        />
                      </div>
                      <div className="flex gap-2 pt-2">
                        <p className="flex items-center justify-start gap-2 text-sm font-bold !leading-none text-o300">
                          <i className="ph-fill ph-star"></i> 4.7
                        </p>
                        <div className="text-sm text-n300">
                          <p className="">(81)</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col items-center justify-center py-6">
                    <div className="relative max-md:overflow-hidden">
                      <div className="hexagon-styles my-[calc(200px*0.5/2)] h-[calc(200px*0.57736720554273)] w-[200px] rounded-[calc(200px/36.75)] bg-b50 before:rounded-[calc(200px/18.75)] after:rounded-[calc(200px/18.75)]">
                        <div className="absolute -top-11 left-[5px]">
                          <div className="hexagon-styles z-10 my-[calc(190px*0.5/2)] h-[calc(190px*0.57736720554273)] w-[190px] rounded-[calc(190px/50)] bg-b300 before:rounded-[calc(190px/50)] after:rounded-[calc(190px/50)]">
                            <div className="absolute -top-[42px] left-[5px] z-20">
                              <div className="hexagon-styles z-10 my-[calc(180px*0.5/2)] h-[calc(180px*0.57736720554273)] w-[180px] rounded-[calc(180px/50)] bg-b50 before:rounded-[calc(180px/50)] after:rounded-[calc(180px/50)]">
                                <div className="r-hex3 absolute -left-[5px] -top-[43px] z-30 inline-block w-[190px] overflow-hidden">
                                  <div className="r-hex-inner3">
                                    <div className="expertImg2 r-hex-inner-3 before:h-[190px] before:bg-cover"></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="absolute bottom-5 right-1 z-30">
                        <img
                          src="/assets/images/verify-badge2.png"
                          alt=""
                          className=""
                        />
                      </div>
                    </div>
                    <div className="pt-3">
                      <div className="flex flex-col items-center justify-start gap-3">
                        <h5 className="heading-5">I am an Expert</h5>
                      </div>
                      <p className="pt-2 text-center text-n500 sm:px-3">
                        I&apos;m a Skilled Professional, Ready to Assist with
                        Expertise and Dedication in Your Task.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between border-b border-n40 pb-6">
                    <div className="flex items-center justify-start gap-2">
                      <i className="ph ph-clock text-2xl !leading-none"></i>
                      <p>Full-Time</p>
                    </div>
                    <div className="flex items-center justify-start gap-2">
                      <i className="ph ph-chart-line text-2xl !leading-none"></i>
                      <p>10+ Years</p>
                    </div>
                  </div>

                  <div className="flex w-full items-center justify-center pt-8">
                    <a
                      href="./find-workers.html"
                      className="group relative flex items-center justify-start pr-12 font-semibold"
                    >
                      <span className="rounded-full bg-y300 px-6 py-3 duration-500 group-hover:translate-x-12">
                        Explore Now
                      </span>
                      <i className="ph-bold ph-arrow-up-right absolute right-0 top-0 translate-x-0 rounded-full bg-y300 p-[14px] text-xl !leading-none duration-500 group-hover:right-[152px] group-hover:rotate-45"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* !-- Find work and hiring section end --> */}
        {/* !-- Get Help Section Start --> */}
        <section className="stp-30">
          <div className="relative flex items-center justify-center">
            <h2 className="heading-2 relative font-bold text-n900">
              Get help <span className="text-b300 underline">Today</span>
              <img
                src="/assets/images/get_help_icon.png"
                alt=""
                className="absolute -bottom-24 right-0 z-20 sm:-bottom-20 sm:-right-28"
              />
            </h2>
          </div>

          <div className="overflow-hidden">
            <div className="tags-container relative"></div>
          </div>
        </section>

        {/* !-- Get Help Section End --> */}
        {/* !-- Footer section start --> */}
        <section className="stp-15 overflow-hidden bg-n900">
          <div className="4xl:large-container text-white max-4xl:mx-4">
            <div className="sbp-15 flex items-center justify-between border-b border-n500 max-xl:flex-col max-xl:gap-6">
              <div className="flex w-full items-center justify-start gap-4 max-xl:justify-center">
                <img
                  src="/assets/images/big_arrow.png"
                  alt=""
                  className="max-xxl:w-[80px] max-md:w-[60px]"
                />
                <p className="text-xl font-medium sm:text-3xl md:text-5xl 3xl:text-[72px]">
                  Let’s work together
                </p>
              </div>

              <div className="flex items-center justify-between gap-6 max-sm:flex-col">
                <div className="rounded-[32px] border px-6 py-10 xxl:px-12 xxl:py-20">
                  <p className="heading-3 pb-6 text-center font-bold md:w-[285px] xxl:pb-10">
                    Looking to hire an Service?
                  </p>
                  <div className="flex items-center justify-center font-bold text-n900">
                    <a
                      href="./contact.html"
                      className="group relative flex items-center justify-start pr-12"
                    >
                      <span className="rounded-full bg-y300 px-6 py-3 duration-500 group-hover:translate-x-12">
                        LETS&apos;S TALK
                      </span>
                      <i className="ph-bold ph-arrow-up-right absolute right-0 top-0 translate-x-0 rounded-full bg-y300 p-[14px] text-xl !leading-none duration-500 group-hover:right-[148px] group-hover:rotate-45"></i>
                    </a>
                  </div>
                </div>
                <div className="rounded-[32px] border px-6 py-10 xxl:px-12 xxl:py-20">
                  <p className="heading-3 pb-6 text-center font-bold md:w-[285px] xxl:pb-10">
                    Looking to hire an Service?
                  </p>
                  <div className="flex items-center justify-center font-bold text-n900">
                    <a
                      href="./sign-up-step-1.html"
                      className="group relative flex items-center justify-start pr-12"
                    >
                      <span className="rounded-full bg-y300 px-6 py-3 duration-500 group-hover:translate-x-12">
                        JOIN US
                      </span>
                      <i className="ph-bold ph-arrow-up-right absolute right-0 top-0 translate-x-0 rounded-full bg-y300 p-[14px] text-xl !leading-none duration-500 group-hover:right-[115px] group-hover:rotate-45"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="stp-15 flex items-center justify-between gap-6 max-md:flex-col max-[450px]:items-start">
              <div className="flex items-center justify-start gap-6 font-medium max-sm:items-start max-[450px]:flex-col">
                <p className="max-w-[200px] text-start lg:max-w-[250px]">
                  Valentin, Street Road 27, New York. USA - 752252
                </p>
                <div className="lg:pl-15">
                  <p className="font-semibold">(629) 555-0129</p>
                  <p>example@mail.com</p>
                </div>
              </div>

              <div className="flex items-center justify-center gap-3 text-2xl">
                <a className="group relative" href="javascript:void(0)">
                  <i className="ph ph-facebook-logo flex items-center justify-center rounded-full border border-n500 p-4 duration-500 hover:border-v200 hover:text-v200"></i>

                  <div className="absolute right-1/2 top-1 h-0 w-px bg-v200 duration-500 group-hover:h-2"></div>
                  <div className="absolute right-1 top-1/2 h-px w-0 bg-v200 duration-500 group-hover:w-2"></div>

                  <div className="absolute bottom-1 right-1/2 h-0 w-px bg-v200 duration-500 group-hover:h-2"></div>

                  <div className="absolute left-1 top-1/2 h-px w-0 bg-v200 duration-500 group-hover:w-2"></div>
                </a>
                <a className="group relative" href="javascript:void(0)">
                  <i className="ph ph-twitch-logo flex items-center justify-center rounded-full border border-n500 p-4 duration-500 hover:border-v200 hover:text-v200"></i>

                  <div className="absolute right-1/2 top-1 h-0 w-px bg-v200 duration-500 group-hover:h-2"></div>
                  <div className="absolute right-1 top-1/2 h-px w-0 bg-v200 duration-500 group-hover:w-2"></div>

                  <div className="absolute bottom-1 right-1/2 h-0 w-px bg-v200 duration-500 group-hover:h-2"></div>

                  <div className="absolute left-1 top-1/2 h-px w-0 bg-v200 duration-500 group-hover:w-2"></div>
                </a>
                <a className="group relative" href="javascript:void(0)">
                  <i className="ph ph-instagram-logo flex items-center justify-center rounded-full border border-n500 p-4 duration-500 hover:border-v200 hover:text-v200"></i>

                  <div className="absolute right-1/2 top-1 h-0 w-px bg-v200 duration-500 group-hover:h-2"></div>
                  <div className="absolute right-1 top-1/2 h-px w-0 bg-v200 duration-500 group-hover:w-2"></div>

                  <div className="absolute bottom-1 right-1/2 h-0 w-px bg-v200 duration-500 group-hover:h-2"></div>

                  <div className="absolute left-1 top-1/2 h-px w-0 bg-v200 duration-500 group-hover:w-2"></div>
                </a>
                <a className="group relative" href="javascript:void(0)">
                  <i className="ph ph-linkedin-logo flex items-center justify-center rounded-full border border-n500 p-4 duration-500 hover:border-v200 hover:text-v200"></i>

                  <div className="absolute right-1/2 top-1 h-0 w-px bg-v200 duration-500 group-hover:h-2"></div>
                  <div className="absolute right-1 top-1/2 h-px w-0 bg-v200 duration-500 group-hover:w-2"></div>

                  <div className="absolute bottom-1 right-1/2 h-0 w-px bg-v200 duration-500 group-hover:h-2"></div>

                  <div className="absolute left-1 top-1/2 h-px w-0 bg-v200 duration-500 group-hover:w-2"></div>
                </a>
              </div>
            </div>

            <h1
              className="text-center text-[430px] font-bold leading-none max-4xl:text-[400px] max-3xl:text-[350px] max-xxl:text-[300px] max-xl:text-[230px] max-lg:text-[180px] max-md:text-[130px] max-sm:text-[70px]"
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-delay="0"
            >
              Servibe
            </h1>

            <div className="border-t border-n500">
              <div className="container flex items-center justify-between gap-6 py-8 font-medium max-md:flex-col">
                <div className="flex items-center justify-start gap-1">
                  <p>Designed By</p>
                  <a href="" className="text-g200 underline">
                    Pixelaxis
                  </a>
                </div>

                <p>Copyright @ 2024 Servibe</p>
              </div>
            </div>
          </div>
        </section>
        {/* !-- Footer section end --> */}
        {/* {/* !-- Scroll To top Button Start --> */}
        <button
          className="jumping1 scrollButton scrollButtonHide fixed right-6 z-40 rounded-full border bg-b300 p-2 text-xl !leading-[0] text-white duration-700 hover:bg-y300 hover:text-n900 sm:p-3 sm:text-2xl md:right-10"
          aria-label="bottom to top button"
        >
          <span className="block">
            <i className="ph ph-arrow-up"></i>
          </span>
        </button>

        {/* !-- Scroll To top Button End --> */}
        {/* !-- ==== js dependencies start ==== --> */}
      </div>
    </>
  );
}
