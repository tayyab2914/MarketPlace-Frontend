import { PRIVACY_POLICY_CONTENT } from "@/constants/static-pages/privacy-policy"
import React from "react"
const PrivacyInfo = () => {
  return (
    <section className="sbp-30">
      <div className="container -mt-40 rounded-xl border border-n30 bg-white p-4 sm:p-4 md:rounded-3xl xl:rounded-[60px] xl:p-15">
        {/* <h2 className="heading-2 text-center">Privacy Policy</h2> */}

        <div className="stp-12 flex flex-col gap-8">
          {PRIVACY_POLICY_CONTENT?.map(({ heading, text }, idx) => (
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

export default PrivacyInfo
