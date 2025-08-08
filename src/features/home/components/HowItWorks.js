import React, { useState } from "react";

const HOME_CONTENT = {
  hero: {
    subtitle: "Your Solution Hub",
    title: (
      <>
        Find the Right <br />
        <span className="text-y300">Talent</span> for Any Task
      </>
    ),
    description:
      "Access assistance from a vast network of reliable local experts, spanning home repairs to beauty services.",
    searchButtonText: "Search",
  },
  howItWorks: {
    heading: (
      <>
        How It <span className="text-b300 underline">Works</span>
      </>
    ),
    subheading: "What steps do I need to take to join?",
    steps: [
      {
        id: "step1",
        iconClass: "ph ph-sort-descending",
        title: "Step_01",
        contentTitle: "Tasker Evaluation",
        contentDescription:
          "Select a Tasker based on affordability, expertise, and customer feedback, ensuring you find the perfect fit for your needs.",
        imageSrc: "/assets/images/step_one_illus.png",
        ctaLink: "./sign-up-step-1.html",
        ctaText: "Sign up now",
      },
      {
        id: "step2",
        iconClass: "ph ph-calendar-plus",
        title: "Step_02",
        contentTitle: "Book Now",
        contentDescription:
          "Secure your spot at the event of your choice by booking your tickets now through our convenient online booking platform.",
        imageSrc: "/assets/images/step_two_illus.png",
        ctaLink: "./sign-up-step-1.html",
        ctaText: "Sign up now",
      },
      {
        id: "step3",
        iconClass: "ph ph-book-open-text",
        title: "Step_03",
        contentTitle: "ChatTip Hub",
        contentDescription:
          "Your Ultimate Destination for Chat-based Tips, Advice, and Insights on a Variety of Topics and Interests.",
        imageSrc: "/assets/images/step_three_illus.png",
        ctaLink: "./sign-up-step-1.html",
        ctaText: "Sign up now",
      },
    ],
  },
};

const HowItWorks = () => {
  const { heading, subheading, steps } = HOME_CONTENT.howItWorks;

  // State to track active step id; default to first step's id
  const [activeStepId, setActiveStepId] = useState(steps[0].id);

  // Find currently active step data
  const activeStep = steps.find((step) => step.id === activeStepId);

  return (
    <section className="stp-30 sbp-30">
      <div className="container">
        <div className="flex flex-col items-center justify-center">
          <h2 className="heading-2 font-bold text-n900">{heading}</h2>
          <p className="pt-4 font-medium text-n500">{subheading}</p>
        </div>

        <ul className="stp-15 flex w-full items-center justify-center max-[480px]:flex-col max-[480px]:gap-4">
          {steps.map(({ id, iconClass, title }) => (
            <li
              key={id}
              id={id}
              className={`stepsButton flex w-full items-center justify-center pb-4 sm:pb-6 ${
                activeStepId === id ? "activeButton" : "inActiveButton"
              }`}
              onClick={() => setActiveStepId(id)}
              style={{ cursor: "pointer" }}
            >
              <div className="flex items-center justify-between gap-3">
                <i
                  className={`${iconClass} flex items-center justify-center rounded-xl bg-n30 p-3 text-2xl !leading-none sm:p-[14px] sm:text-3xl`}
                ></i>
                <button className="text-lg font-semibold">{title}</button>
              </div>
            </li>
          ))}
        </ul>

        <div className="stp-15">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 flex flex-col items-start justify-center md:col-span-5 lg:col-span-4">
              <h3 className="heading-3">{activeStep.contentTitle}</h3>
              <p className="pt-3 text-n500">{activeStep.contentDescription}</p>
              <div className="pt-6 sm:pt-10">
                <a
                  href={activeStep.ctaLink}
                  className="relative flex items-center justify-center overflow-hidden rounded-full bg-b300 px-8 py-3 font-medium !leading-none text-white duration-700 after:absolute after:inset-0 after:left-0 after:w-0 after:rounded-full after:bg-yellow-400 after:duration-700 hover:text-n900 hover:after:w-[calc(100%+2px)]"
                >
                  <span className="m relative z-10">{activeStep.ctaText}</span>
                </a>
              </div>
            </div>
            <div className="col-span-12 md:col-span-7 lg:col-start-6">
              <img src={activeStep.imageSrc} alt={activeStep.contentTitle} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
