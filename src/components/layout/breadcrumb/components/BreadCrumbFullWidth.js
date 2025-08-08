import React from "react";

const BreadCrumbsFullWidth = ({ items }) => {
  return (
    <section className="stp-30 4xl:large-container mx-4 mt-[100px] rounded-3xl bg-n900 pb-52 md:pb-40 lg:rounded-[60px] lg:pb-42">
      <div className="container flex flex-col items-center justify-center gap-3 text-white">
        {/* Heading can be last item name or a separate prop */}
        <h2 className="heading-2">{items.length ? items[items.length - 1].name : ""}</h2>

        <ul className="flex items-center justify-start gap-2 pt-3 font-medium">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;

            return (
              <React.Fragment key={index}>
                <li>
                  {isLast ? (
                    <span className="text-r300">{item.name}</span>
                  ) : (
                    <a href={item.url}>{item.name}</a>
                  )}
                </li>

                {!isLast && (
                  <li className="text-r300">
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

export default BreadCrumbsFullWidth;
