import React from "react";

const ContactBreadcrumbs = () => {
  return (
    <div>
      {" "}
      <section className="stp-30 4xl:large-container mx-4 mt-[100px] rounded-3xl bg-n900 pb-52 md:pb-60 lg:rounded-[60px] lg:pb-72">
        <div className="container flex flex-col items-center justify-center gap-3 text-white">
          <h2 className="heading-2">Contact Us</h2>

          <ul className="flex items-center justify-start gap-2 pt-3 font-medium">
            <li>
              <a href="./index.html">Home</a>
            </li>
            <li className="text-r300">
              <i className="ph ph-caret-double-right"></i>
            </li>
            <li className="text-r300">Contact</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default ContactBreadcrumbs;
