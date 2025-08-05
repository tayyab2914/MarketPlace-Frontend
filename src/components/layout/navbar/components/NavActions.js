import React from "react";

const NavActions = () => {
  return (
    <div className="flex items-center justify-between gap-6">
      <ul className="flex items-center justify-start gap-2 font-medium max-sm:hidden xxl:gap-6">
        <li className="">
          <a
            href="./sign-up-step-1.html"
            className="rounded-lg px-2 py-3 duration-700"
          >
            Sign up
          </a>
        </li>
        <li className="">
          <a
            href="./sign-in.html"
            className="rounded-lg px-2 py-3 duration-700"
          >
            Sign in
          </a>
        </li>
      </ul>
      <div className="flex items-center justify-between gap-3 font-semibold">
        <a
          href="./working-processed-step-01.html"
          className="relative flex items-center justify-center overflow-hidden rounded-full bg-b300 text-white duration-700 after:absolute after:inset-0 after:left-0 after:w-0 after:rounded-full after:bg-yellow-400 after:duration-700 hover:text-n900 hover:after:w-[calc(100%+2px)] max-xxl:size-11 max-xxl:!leading-none xxl:px-8 xxl:py-3"
        >
          <span className="relative z-10 max-xxl:hidden">Post a Task</span>
          <i className="ph-bold ph-plus relative z-10 text-xl xxl:hidden"></i>
        </a>
        <a
          href="./become-tasker.html"
          className="relative overflow-hidden rounded-full bg-b50 px-8 py-3 text-b300 duration-700 after:absolute after:inset-0 after:left-0 after:w-0 after:rounded-full after:bg-yellow-400 after:duration-700 hover:text-n900 hover:after:w-[calc(100%+2px)] max-xl:hidden"
        >
          <span className="relative z-10">Become a Tasker</span>
        </a>
      </div>
    </div>
  );
};

export default NavActions;
