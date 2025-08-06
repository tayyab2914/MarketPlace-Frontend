import React from "react";

const platforms = ["facebook-logo", "twitch-logo", "instagram-logo", "linkedin-logo"];

const CPPSocialLinks = () => (
  <div className="flex items-center justify-center gap-3 text-2xl">
    {platforms.map((platform, i) => (
      <a className="group relative" href="javascript:void(0)" key={i}>
        <i className={`ph ph-${platform} flex items-center justify-center rounded-full border border-n500 p-4 duration-500 hover:border-v200 hover:text-v200`}></i>
        <div className="absolute right-1/2 top-1 h-0 w-px bg-v200 duration-500 group-hover:h-2" />
        <div className="absolute right-1 top-1/2 h-px w-0 bg-v200 duration-500 group-hover:w-2" />
        <div className="absolute bottom-1 right-1/2 h-0 w-px bg-v200 duration-500 group-hover:h-2" />
        <div className="absolute left-1 top-1/2 h-px w-0 bg-v200 duration-500 group-hover:w-2" />
      </a>
    ))}
  </div>
);

export default CPPSocialLinks;
