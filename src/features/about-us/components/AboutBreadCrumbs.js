import React from 'react'

const AboutBreadCrumbs = () => {
  return (
    <div><section className="stp-15 sbp-15 mt-[100px] bg-n20">
    <div className="container flex flex-col items-center justify-center">
      <h2 className="heading-2">About Us</h2>
      <ul className="flex items-center justify-center gap-2 pt-3 font-medium">
        <li>
          <a href="./index.html">Home</a>
        </li>
        <li className="text-r300">
          <i className="ph ph-caret-double-right"></i>
        </li>
        <li className="text-r300">About Us</li>
      </ul>
    </div>
  </section></div>
  )
}

export default AboutBreadCrumbs