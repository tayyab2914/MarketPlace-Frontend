import React, { useState, useEffect } from "react";
import { Row, Col, Button, Tabs } from "antd";

const { TabPane } = Tabs;

const HowItWorks = ({ pages_content }) => {
  const {
    heading = "",
    subheading = "",
    steps = [],
  } = pages_content?.home?.howItWorks || {};

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (<div style={{display:"flex",justifyContent:"center"}}>
    
    <section
      style={{ padding: "40px 20px", maxWidth: "1200px", textAlign: "center" }}
    >
      <h2 style={{ fontSize: "2rem", fontWeight: 700 }}>{heading}</h2>
      <p
        style={{ fontSize: "1.125rem", color: "#6b7280", marginBottom: "30px" }}
      >
        {subheading}
      </p>

      <Tabs
        defaultActiveKey="0"
        centered
        tabBarStyle={{ marginBottom: "2rem" }}
      >
        {steps.map((step, index) => (
          <TabPane tab={step.title} key={index}>
            <Row
              gutter={[32, 32]}
              align="middle"
              justify="space-between"
              style={{
                marginTop: "20px",
                flexDirection: isMobile ? "column" : "row",
              }}
            >
              <Col
                xs={24}
                md={10}
                style={{ textAlign: isMobile ? "center" : "left" }}
              >
                <h3 style={{ fontSize: "1.5rem", fontWeight: 700 }}>
                  {step.contentTitle}
                </h3>
                <p style={{ color: "#6b7280", marginTop: "10px" }}>
                  {step.contentDescription}
                </p>
                {step.ctaText && (
                  <Button
                    type="primary"
                    style={{
                      borderRadius: "9999px",
                      marginTop: "20px",
                      padding: "0.75rem 2rem",
                    }}
                    href={step.ctaLink || "#"}
                  >
                    {step.ctaText}
                  </Button>
                )}
              </Col>

              <Col xs={24} md={10} justify="end">
                {step.imageSrc && (
                  <img
                    src={step.imageSrc}
                    alt={step.contentTitle || "Step image"}
                    style={{
                      width: "100%",
                      borderRadius: "16px",
                      maxHeight: "400px",
                      objectFit: "contain",
                    }}
                  />
                )}
              </Col>
            </Row>
          </TabPane>
        ))}
      </Tabs>
    </section>
  </div>
  );
};

export default HowItWorks;
