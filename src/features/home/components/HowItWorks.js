import React, { useEffect, useState } from "react";

const HowItWorks = ({ pages_content }) => {
  const {
    heading = "",
    subheading = "",
    steps = [],
  } = pages_content?.home?.howItWorks || {};

  // Add temporary IDs
  const stepsWithIds = steps.map((step, index) => ({ ...step, id: index }));

  const [activeStepId, setActiveStepId] = useState(0); // default to first step

  const activeStep = stepsWithIds.find((step) => step.id === activeStepId);

  return (
    <section className="home-hiw-section">
      <div className="home-hiw-container">
        <div className="home-hiw-header">
          <h2 className="home-hiw-heading">{heading}</h2>
          <p className="home-hiw-subheading">{subheading}</p>
        </div>

        <ul className="home-hiw-steps-list">
          {stepsWithIds.map(({ id, title }) => (
            <li
              key={id}
              className={`home-hiw-step-button ${
                activeStepId === id
                  ? "home-hiw-step-active"
                  : "home-hiw-step-inactive"
              }`}
              onClick={() => setActiveStepId(id)}
            >
              <button className="home-hiw-step-title">{title}</button>
            </li>
          ))}
        </ul>

        {activeStep && (
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
                {activeStep.imageSrc && (
                  <img
                    src={activeStep.imageSrc}
                    alt={activeStep.contentTitle || "Step image"}
                  />
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default HowItWorks;
