import React from "react";

const BreadCrumbNormal = ({ items }) => {
  return (
    <section className=" mt-[100px] pt-6  pb-2">
      <div className="container">
        <ul className="flex flex-wrap items-center justify-start gap-2 pt-3 font-medium">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;

            return (
              <React.Fragment key={index}>
                <li>
                  {isLast ? (
                    <span className="brdcrm-last">{item.name}</span>
                  ) : (
                    <a href={item.url}>{item.name}</a>
                  )}
                </li>

                {!isLast && (
                  <li className="brdcrm-separator">
                    <i className="ph ph-caret-double-right"></i>
                  </li>
                )}
              </React.Fragment>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default BreadCrumbNormal;
