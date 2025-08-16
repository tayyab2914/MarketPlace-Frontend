import { TERMS_AND_CONDITIONS_CONTENT } from "@/constants/static-pages/terms-and-conditions"
import React from "react"
import { useSelector } from "react-redux";

const TACPInfoSection = () => {
  const { pages_content } = useSelector((state) => state.pages);
  return (
    <section className="sbp-30">
      <div className="container -mt-40 rounded-xl border border-n30 bg-white p-4 sm:p-4 md:rounded-3xl xl:rounded-[60px] xl:p-15">
        {/* <h2 className="heading-2 text-center">Privacy Policy</h2> */}

        <div className="stp-12 flex flex-col gap-8">
          {pages_content?.terms?.map(({ heading, text }, idx) => (
            <div key={idx} className="flex flex-col gap-3">
              <h4 className="heading-4">{heading}</h4>
              <p className="text-n300">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TACPInfoSection
