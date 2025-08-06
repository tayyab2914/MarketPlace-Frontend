import React from 'react'

const VSPInfo = ({ServiceDetails}) => {
  return (
    <div><div className="grid grid-cols-12 gap-6">
    <div className="col-span-12 overflow-hidden rounded-xl md:col-span-6">
      <img
        src="/assets/images/worker-details-img.png"
        className="w-full rounded-xl"
        alt=""
      />
    </div>
    <div className="col-span-12 flex flex-col items-center justify-start lg:col-span-6">
      <div className="flex flex-col items-start justify-start">
        <h3 className="heading-3 pb-3">{ServiceDetails?.title}</h3>
        <p className="font-medium text-n300">
          {ServiceDetails?.description}
        </p>
        <div className="flex items-center justify-start gap-3 pt-3">
          <div className="relative max-md:overflow-hidden">
            <div className="hexagon-styles my-[calc(100px*0.5/2)] h-[calc(100px*0.57736720554273)] w-[100px] rounded-[calc(100px/36.75)] bg-b50 before:rounded-[calc(100px/18.75)] after:rounded-[calc(100px/18.75)]">
              <div className="absolute -top-[20px] left-[5px]">
                <div className="hexagon-styles z-10 my-[calc(90px*0.5/2)] h-[calc(90px*0.57736720554273)] w-[90px] rounded-[calc(90px/50)] bg-b300 before:rounded-[calc(90px/50)] after:rounded-[calc(90px/50)]">
                  <div className="absolute -top-[18px] left-[4px] z-20">
                    <div className="hexagon-styles z-10 my-[calc(82px*0.5/2)] h-[calc(82px*0.57736720554273)] w-[82px] rounded-[calc(82px/50)] bg-b50 before:rounded-[calc(82px/50)] after:rounded-[calc(82px/50)]">
                      <div className="r-hex3 absolute -left-0.5 -top-[20px] z-30 inline-block w-[86px] overflow-hidden">
                        <div className="r-hex-inner3">
                          <div className="expertImg5 r-hex-inner-3 before:h-[86px] before:bg-cover"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-3 right-1 z-30">
              <img
                src="/assets/images/verify-badge.png"
                alt=""
                className=""
              />
            </div>
          </div>
          <div className="max-[350px]:max-w-20">
            <div className="flex items-center justify-center gap-3">
              <h5 className="heading-5">{ServiceDetails?.company}</h5>
              <p className="p rounded-full bg-y300 px-3 py-1 text-sm font-medium">
                PRO
              </p>
            </div>
            <p className="text-sm text-n300">
              {ServiceDetails?.location}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-4 flex w-full items-center justify-between border-y border-n30 py-3">
        <div className="flex items-center justify-start gap-2">
          <i className="ph-fill ph-star text-2xl !leading-none text-b300"></i>
          <p className="text-n300">No recommendations yet</p>
        </div>
        <i className="ph-fill ph-share-network text-2xl !leading-none text-b300"></i>
      </div>
    </div>
  </div></div>
  )
}

export default VSPInfo