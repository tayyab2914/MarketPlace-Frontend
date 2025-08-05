import React from "react";

const TACPBreadcrumbs = () => {
  return (
    <div>
      {" "}
      <section class="stp-30 4xl:large-container mx-4 mt-[100px] rounded-3xl bg-n900 pb-52 md:pb-60 lg:rounded-[60px] lg:pb-72">
        <div class="container flex flex-col items-center justify-center gap-3 text-white">
          <h2 class="heading-2">Terms & Condition</h2>

          <ul class="flex items-center justify-start gap-2 pt-3 font-medium">
            <li>
              <a href="./index.html">Home</a>
            </li>
            <li class="text-r300">
              <i class="ph ph-caret-double-right"></i>
            </li>
            <li class="text-r300">Terms & Condition</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default TACPBreadcrumbs;
