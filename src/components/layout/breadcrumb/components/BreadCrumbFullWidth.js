import { ChevronsRight } from "lucide-react";
import React from "react";
const BreadCrumbsFullWidth = ({ items }) => {
  return (
    <section className="brdcrm-section">
      <div className="brdcrm-container">
        <h2 className="brdcrm-heading">
          {items?.length ? items[items?.length - 1]?.name : ""}
        </h2>

        <ul className="brdcrm-list">
          {items?.map((item, index) => {
            const isLast = index === items?.length - 1;

            return (
              <React.Fragment key={index}>
                <li>
                  {isLast ? (
                    <span className="brdcrm-last">{item?.name}</span>
                  ) : (
                    <a href={item?.url}>{item?.name}</a>
                  )}
                </li>

                {!isLast && (
                  <li className="brdcrm-separator">
                    <ChevronsRight strokeWidth={1}/>
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
