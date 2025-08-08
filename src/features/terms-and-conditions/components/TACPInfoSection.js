import { TERMS_AND_CONDITIONS_CONTENT } from "@/constants/static-pages/terms-and-conditions"
import React from "react"

const TACPInfoSection = () => {
  return (
    <section className="sbp-30">
      <div className="container -mt-40 rounded-xl border border-n30 bg-white p-4 sm:p-4 md:rounded-3xl xl:rounded-[60px] xl:p-15">
        {/* <h2 className="heading-2 text-center">Terms & Condition</h2> */}

        <ol className="stp-12 flex list-inside list-decimal flex-col gap-8">
          {TERMS_AND_CONDITIONS_CONTENT?.map(({ title, points }, idx) => (
            <li key={idx} className="marker:heading-4">
              <span className="heading-4">{title}</span>
              <ul className="block list-inside list-disc pt-3 text-lg text-n300 marker:text-[10px] marker:text-n900">
                {points.map((point, pIdx) => (
                  <li key={pIdx} className={pIdx === 0 ? "" : "pt-3"}>
                    {point}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default TACPInfoSection
