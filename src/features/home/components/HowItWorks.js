import { HOME_CONTENT } from "@/constants/static-pages/home";
import React, { useState } from "react";

const HowItWorks = () => {
  const {
    heading = "",
    subheading = "",
    steps = [],
  } = HOME_CONTENT?.howItWorks;

  // State to track active step id; default to first step's id
  const [activeStepId, setActiveStepId] = useState(steps[0].id);

  // Find currently active step data
  const activeStep = steps?.find((step) => step?.id === activeStepId);

  return (
    <section className="home-hiw-section">
      <div className="home-hiw-container">
        <div className="home-hiw-header">
          <h2 className="home-hiw-heading">{heading}</h2>
          <p className="home-hiw-subheading">{subheading}</p>
        </div>

        <ul className="home-hiw-steps-list">
          {steps.map(({ id, Icon, title }) => (
            <li
              key={id}
              id={id}
              className={`home-hiw-step-button ${
                activeStepId === id
                  ? "home-hiw-step-active"
                  : "home-hiw-step-inactive"
              }`}
              onClick={() => setActiveStepId(id)}
            >
              <div className="home-hiw-step-content">
                <Icon />
                <button className="home-hiw-step-title">{title}</button>
              </div>
            </li>
          ))}
        </ul>

        <div className="home-hiw-step-details">
          <div className="home-hiw-step-grid">
            <div className="home-hiw-step-text">
              <h3 className="home-hiw-step-content-title">
                {activeStep.contentTitle}
              </h3>
              <p className="home-hiw-step-content-description">
                {activeStep.contentDescription}
              </p>
              <div className="home-hiw-step-cta">
                <a
                  href={activeStep.ctaLink}
                  className="home-hiw-step-cta-button"
                >
                  <span>{activeStep.ctaText}</span>
                </a>
              </div>
            </div>
            <div className="home-hiw-step-image">
              <img src={activeStep.imageSrc} alt={activeStep.contentTitle} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
