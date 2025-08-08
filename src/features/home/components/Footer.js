import { useRouter } from "next/navigation";
import React from "react";
import { HOME_CONTENT } from "@/constants/static-pages/home";

const Footer = () => {
  const router = useRouter();
  const {
    mainTitle,
    sections,
    contactInfo,
    socialLinks,
    bigTitle,
    designedBy,
    copyrightText,
    bigArrowImage,
  } = HOME_CONTENT.footer;

  return (
    <section className="stp-15 overflow-hidden bg-n900">
      <div className="4xl:large-container text-white max-4xl:mx-4">
        <div className="sbp-15 flex items-center justify-between border-b border-n500 max-xl:flex-col max-xl:gap-6">
          <div className="flex w-full items-center justify-start gap-4 max-xl:justify-center">
            <img
              src={bigArrowImage}
              alt=""
              className="max-xxl:w-[80px] max-md:w-[60px]"
            />
            <p className="text-xl font-medium sm:text-3xl md:text-5xl 3xl:text-[72px]">
              {mainTitle}
            </p>
          </div>

          <div className="flex items-center justify-between gap-6 max-sm:flex-col">
            {sections.map(
              (
                {
                  title,
                  ctaText,
                  ctaRoute,
                  buttonBgClass,
                  iconBgClass,
                  iconRightOffset,
                },
                index
              ) => (
                <div
                  key={index}
                  className="rounded-[32px] border px-6 py-10 xxl:px-12 xxl:py-20"
                >
                  <p className="heading-3 pb-6 text-center font-bold md:w-[285px] xxl:pb-10">
                    {title}
                  </p>
                  <div className="flex items-center justify-center font-bold text-n900">
                    <a
                      onClick={() => router.push(ctaRoute)}
                      className="group relative flex items-center justify-start pr-12"
                    >
                      <span
                        className={`rounded-full ${buttonBgClass} px-6 py-3 duration-500 group-hover:translate-x-12`}
                      >
                        {ctaText}
                      </span>
                      <i
                        className={`ph-bold ph-arrow-up-right absolute right-0 top-0 translate-x-0 rounded-full ${iconBgClass} p-[14px] text-xl !leading-none duration-500`}
                        style={{ right: iconRightOffset }}
                      />
                    </a>
                  </div>
                </div>
              )
            )}
          </div>
        </div>

        <div className="stp-15 flex items-center justify-between gap-6 max-md:flex-col max-[450px]:items-start">
          <div className="flex items-center justify-start gap-6 font-medium max-sm:items-start max-[450px]:flex-col">
            <p className="max-w-[200px] text-start lg:max-w-[250px]">
              {contactInfo.address}
            </p>
            <div className="lg:pl-15">
              <p className="font-semibold">{contactInfo.phone}</p>
              <p>{contactInfo.email}</p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3 text-2xl">
            {socialLinks.map(({ href, iconClass }, idx) => (
              <a key={idx} className="group relative" href={href}>
                <i
                  className={`${iconClass} flex items-center justify-center rounded-full border border-n500 p-4 duration-500 hover:border-v200 hover:text-v200`}
                ></i>

                <div className="absolute right-1/2 top-1 h-0 w-px bg-v200 duration-500 group-hover:h-2"></div>
                <div className="absolute right-1 top-1/2 h-px w-0 bg-v200 duration-500 group-hover:w-2"></div>

                <div className="absolute bottom-1 right-1/2 h-0 w-px bg-v200 duration-500 group-hover:h-2"></div>

                <div className="absolute left-1 top-1/2 h-px w-0 bg-v200 duration-500 group-hover:w-2"></div>
              </a>
            ))}
          </div>
        </div>

        <h1
          className="text-center text-[430px] font-bold leading-none max-4xl:text-[400px] max-3xl:text-[350px] max-xxl:text-[300px] max-xl:text-[230px] max-lg:text-[180px] max-md:text-[130px] max-sm:text-[70px]"
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-delay="0"
        >
          {bigTitle}
        </h1>

        <div className="border-t border-n500">
          <div className="container flex items-center justify-between gap-6 py-8 font-medium max-md:flex-col">
            <div className="flex items-center justify-start gap-1">
              <p>{designedBy.text}</p>
              <a href={designedBy.linkHref} className="text-g200 underline">
                {designedBy.linkText}
              </a>
            </div>

            <p>{copyrightText}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
