
import React, { useState } from "react";
import './styles/faq-component.css'
const FaqComponent = ({questionnaire}) => {
  const [activeIndex, setActiveIndex] = useState(2); // Open 3rd by default

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="faq-sec-section">
      <div className="faq-sec-container">
        {/* Left column */}
        <div className="faq-sec-left-col">
          <p className="faq-sec-faq-label">FAQ</p>
          <h2 className="faq-sec-heading">
            Your questions <span className="faq-sec-highlight">answered.</span>
          </h2>
          <p className="faq-sec-intro-text">
            Let’s do our best to answer your most frequently asked questions.
          </p>

          <div className="faq-sec-help-box">
            <div className="faq-sec-help-icon-wrapper">
              <i className="ph-fill ph-question faq-sec-help-icon"></i>
            </div>
            <div>
              <h5 className="faq-sec-help-title">Still have questions?</h5>
              <p className="faq-sec-help-text">
                Can’t find the answer you’re looking for? Please chat with our friendly team!
              </p>
            </div>
          </div>

          <a className="faq-sec-get-in-touch-btn">
            <span className="faq-sec-btn-text">Get In Touch</span>
          </a>
        </div>

        {/* Right column - Accordion */}
        <div className="faq-sec-right-col">
          {questionnaire?.faqs?.map((faq, index) => (
            <div
              key={index}
              className={`faq-sec-faq-item ${
                activeIndex === index ? "active" : ""
              }`}
            >
              <div
                className="faq-sec-faq-question"
                onClick={() => toggleFAQ(index)}
              >
                <p className="faq-sec-question-text">{faq?.question}</p>
                <div
                  className={`faq-sec-faq-icon ${
                    activeIndex === index ? "rotated" : ""
                  }`}
                >
                  <i className="ph ph-caret-right"></i>
                </div>
              </div>
              <div className="faq-sec-faq-answer">
                <p>{faq?.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqComponent;
