import React from 'react'

const Navbar = () => {
  return (
    <div><header className="header headerAbsolute left-0 right-0 top-0 z-50">
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
  </header></div>
  )
}

export default Navbar