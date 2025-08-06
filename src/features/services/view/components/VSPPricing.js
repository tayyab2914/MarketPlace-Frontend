import React from 'react'

const VSPPricing = ({ServiceDetails}) => {
  return (
    <div><div className="sticky top-32">
    <div className="items-center rounded-2xl border border-n30 px-6 py-8 text-center text-n300">
      <div className="border-b border-n30 pb-6">
        <p className="text-sm font-semibold">STARTING AT</p>
        <p className="heading-5 py-1 font-semibold text-r300">
          ${ServiceDetails?.price_starting_from}/hr
        </p>

        <div className="pt-3">
          <a
            href="./hire-me.html"
            className="relative block w-full overflow-hidden rounded-full bg-n700 px-6 py-3 text-sm font-semibold text-white duration-700 after:absolute after:inset-0 after:left-0 after:w-0 after:rounded-full after:bg-yellow-400 after:duration-700 hover:text-n900 hover:after:w-[calc(100%+2px)]"
          >
            <div className="relative z-20 flex items-center justify-center gap-3">
              <i className="ph ph-paper-plane-tilt text-xl !leading-none"></i>
              <span>Hire me</span>
            </div>
          </a>
        </div>
      </div>

      <div className="flex flex-col items-start justify-start pt-6">
        <p className="text-sm font-medium">Duration</p>
        <p className="flex items-center justify-start gap-2 pt-3 text-sm">
          <i className="ph-fill ph-calendar text-2xl text-b300"></i>{" "}
          1-1.5 weeks
        </p>
        <p className="pt-6 text-sm font-medium">
          Skills and Services
        </p>
        <div className="flex flex-wrap gap-1 pt-3 text-sm text-n400">
          <p className="flex items-center justify-center gap-2 rounded-xl bg-b50 px-3 py-2">
            <span>{ServiceDetails?.category} </span>
          </p>
        </div>
      </div>
    </div>
  </div></div>
  )
}

export default VSPPricing