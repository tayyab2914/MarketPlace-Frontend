import React from "react";

const CPPCallToAction = () => (
  <section className="stp-15 sbp-15 container flex flex-col items-center justify-center gap-8 border-y-2 border-n900">
    <h2 className="heading-2">Work with me</h2>
    <div className="max-w-[300px]">
      <a
        href="./chat.html"
        className="relative block w-full overflow-hidden rounded-full bg-n700 px-6 py-3 text-sm font-semibold text-white duration-700 after:absolute after:inset-0 after:left-0 after:w-0 after:rounded-full after:bg-yellow-400 after:duration-700 hover:text-n900 hover:after:w-[calc(100%+2px)]"
      >
        <div className="relative z-20 flex items-center justify-center gap-3">
          <span>Let's Chat</span>
        </div>
      </a>
    </div>
  </section>
);

export default CPPCallToAction;
