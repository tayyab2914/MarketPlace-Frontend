import React from "react";
import { useSelector } from "react-redux";

const TACPInfoSection = () => {
  const { pages_content } = useSelector((state) => state.pages);

  return (
    <section className="sbp-30">
      <div className="container -mt-40 rounded-xl border border-n30 bg-white p-4 sm:p-4 md:rounded-3xl xl:rounded-[60px] xl:p-15">
        <div className="stp-12 flex flex-col gap-8">
          <h6>
            <b>Last Updated:</b> {pages_content?.terms?.lastUpdate}
          </h6>

          {pages_content?.terms?.sections?.map(
            ({ heading, subHeading, paragraphs }, idx) => {
              let elements = [];
              let listItems = [];

              paragraphs?.forEach((para, pIdx) => {
                if (para.startsWith("•")) {
                  listItems?.push(para.replace(/^•\s*/, ""));
                } else {
                  // If there are collected list items, push them as a <ul> first
                  if (listItems?.length > 0) {
                    elements.push(
                      <ul
                        key={`ul-${pIdx}`}
                        className="ml-6 list-disc text-n300"
                      >
                        {listItems?.map((item, i) => (
                          <li key={i} className="ml-7">
                            {item}
                          </li>
                        ))}
                      </ul>
                    );
                    listItems = [];
                  }
                  // Then push the paragraph
                  elements.push(
                    <p key={`p-${pIdx}`} className="text-n300">
                      {para}
                    </p>
                  );
                }
              });

              // Push any remaining list items at the end
              if (listItems?.length > 0) {
                elements.push(
                  <ul
                    key={`ul-end-${idx}`}
                    className="ml-6 list-disc text-n300"
                  >
                    {listItems?.map((item, i) => (
                      <li key={i} className="ml-7">
                        {item}
                      </li>
                    ))}
                  </ul>
                );
              }

              return (
                <div key={idx} className="flex flex-col gap-3">
                  <h5 className="heading-5">{heading}</h5>
                  {subHeading && (
                    <p>
                      <b>{subHeading}</b>
                    </p>
                  )}
                  {elements}
                </div>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
};

export default TACPInfoSection;
