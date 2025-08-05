import React from "react";

const AboutHowServiceWork = () => {
  return (
    <div>
      {" "}
      <section className="stp-30 sbp-30 bg-n900">
        <div className="container text-white">
          <h2 className="heading-2 text-center">How does Servibe work?</h2>

          <div className="stp-15 grid grid-cols-12 gap-6">
            <div className="col-span-12 flex flex-col items-center justify-center text-center md:col-span-4">
              <div className="flex items-center justify-center rounded-full bg-white p-[14px] text-n900">
                <i className="ph-bold ph-files text-3xl !leading-none"></i>
              </div>
              <div className="max-w-[380px]">
                <h5 className="heading-5 pt-10">
                  Businesses post Shifts for free
                </h5>
                <p className="pt-3">
                  Tap into a nationwide network of Workers as your reserve labor
                  pool
                </p>
              </div>
            </div>
            <div className="col-span-12 flex flex-col items-center justify-center text-center md:col-span-4">
              <div className="flex items-center justify-center rounded-full bg-white p-[14px] text-n900">
                <i className="ph-bold ph-shield-checkered text-3xl !leading-none"></i>
              </div>
              <div className="max-w-[380px]">
                <h5 className="heading-5 pt-10">Hire with confidence</h5>
                <p className="pt-3">
                  Tap into a nationwide network of Workers as your reserve labor
                  pool
                </p>
              </div>
            </div>
            <div className="col-span-12 flex flex-col items-center justify-center text-center md:col-span-4">
              <div className="flex items-center justify-center rounded-full bg-white p-[14px] text-n900">
                <i className="ph-bold ph-users-three text-3xl !leading-none"></i>
              </div>
              <div className="max-w-[380px]">
                <h5 className="heading-5 pt-10">
                  Qualified Workers notified instantly
                </h5>
                <p className="pt-3">
                  Tap into a nationwide network of Workers as your reserve labor
                  pool
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutHowServiceWork;
