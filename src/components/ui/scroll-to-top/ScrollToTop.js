import { ArrowUp } from 'lucide-react'
import React from 'react'

const ScrollToTop = () => {
  return (
    <button
    className="jumping1 scrollButton scrollButtonHide fixed right-6 z-40 rounded-full border bg-b300 p-2 text-xl !leading-[0] text-white duration-700 hover:bg-y300 hover:text-n900 sm:p-3 sm:text-2xl md:right-10"
    aria-label="bottom to top button"
  >
    <span className="block">
      <ArrowUp/>
    </span>
  </button>
  )
}

export default ScrollToTop