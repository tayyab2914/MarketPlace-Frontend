import React from "react";
const BreadCrumbsFullWidth = ({ items }) => {
  return (
    <section className="breadcrumbs-section">
      <div className="breadcrumbs-container">
        <h2 className="breadcrumbs-heading">
          {items.length ? items[items.length - 1].name : ""}
        </h2>

        <ul className="breadcrumbs-list">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;

            return (
              <React.Fragment key={index}>
                <li>
                  {isLast ? (
                    <span className="breadcrumbs-last">{item.name}</span>
                  ) : (
                    <a href={item.url}>{item.name}</a>
                  )}
                </li>

                {!isLast && (
                  <li className="breadcrumbs-separator">
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
