import React from "react";
import CPPSocialLinks from "./CPPSocialLinks";


const CPPFooter = () => {
  return (
    <section className="stp-30 sbp-30 bg-n900">
      <div className="container flex flex-col items-center justify-center text-white">
        <h2 className="heading-2">Let's Collaborate</h2>
        <div className="flex items-center justify-between gap-3 pt-8 font-medium">
          <a href="./hire-me.html" className="relative flex items-center justify-center overflow-hidden rounded-full bg-b300 px-8 py-3 text-white duration-700 after:absolute after:inset-0 after:left-0 after:w-0 after:rounded-full after:bg-yellow-400 after:duration-700 hover:text-n900 hover:after:w-[calc(100%+2px)]">
            <span className="relative z-10">WORK WITH ME</span>
          </a>
        </div>
        <ul className="stp-15 sbp-15 flex items-center justify-center gap-10">
          <li><a href="./worker-profile.html">Services</a></li>
          <li><a href="./contact.html">Contact</a></li>
          <li><a href="./faq.html">FAQ</a></li>
        </ul>
        <CPPSocialLinks />
      </div>
    </section>
  );
};

export default CPPFooter;
