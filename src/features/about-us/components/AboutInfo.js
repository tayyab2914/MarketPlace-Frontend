import React from "react";
import { ArrowRight } from "lucide-react";
import { Row, Col } from "antd";

const AboutInfo = ({ pages_content }) => {
  const {
    title = "",
    description = "",
    features = [],
    knowMoreLink = "",
    knowMoreText = "",
  } = pages_content?.about?.info || {};

  return (
    <div className="max-w-4xl mx-auto -mt-40 rounded-xl bg-white p-2 sm:p-4 md:rounded-3xl xl:rounded-[60px] xl:p-15">
      <div className="w-full shadow-sm bg-white">
        <section className="stp-0 sbp-15">
          <Row gutter={[24, 24]} align="middle">
            <Col xs={24}>
              <h5 className="heading-5 text-r300">About Us</h5>
              <h2 className="heading-2 pt-4">{title}</h2>
              <p className="pb-4 pt-3 text-n300">{description}</p>

              <div className="grid gap-6 pb-6">
                {features?.map((feature, i) => (
                  <div key={i} className=" ">
                    <h4 className="font-semibold text-lg">{feature.heading}</h4>
                    <p className="text-n300 mt-1">{feature.text}</p>
                  </div>
                ))}
              </div>

              {knowMoreText && (
                <div className="about-knowmore">
                  <a href={knowMoreLink} className="about-knowmore-link">
                    <span className="about-knowmore-text">{knowMoreText}</span>
                    <ArrowRight size={24} className="about-knowmore-icon" />
                  </a>
                </div>
              )}
            </Col>
          </Row>
        </section>
      </div>
    </div>
  );
};

export default AboutInfo;
