import React, { useState } from 'react'

const faqs = [
  {
    question: 'What types of services do you offer?',
    answer:
      'We offer a wide range of services including cleaning, handyman services, and more depending on your location.',
  },
  {
    question: 'What is your payment method?',
    answer:
      'We accept major credit cards, debit cards, and online payment gateways like PayPal.',
  },
  {
    question: 'How long does it take?',
    answer:
      'Service duration varies by type. Typically, cleaning services take 1–3 hours.',
  },
  {
    question: 'When is your off time?',
    answer:
      'Our services are available 7 days a week, 8am to 8pm. No off days unless notified.',
  },
]

const AboutFAQ = () => {
  const [activeIndex, setActiveIndex] = useState(2) // Open the 3rd by default

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index)
  }

  return (
    <section className="stp-30 sbp-30">
      <div className="container grid grid-cols-12 gap-6 xl:gap-10">
        {/* Left column */}
        <div className="col-span-12 rounded-3xl border border-n40 p-4 sm:px-10 sm:py-9 lg:col-span-5">
          <p className="heading-6 text-b300">FAQ</p>
          <h2 className="heading-2 pb-4 pt-3 xl:pb-6">
            Your questions <span className="text-b300">answered.</span>
          </h2>
          <p className="pb-6 font-medium text-n400 xl:pb-10">
            Let’s do our best to answer your most frequently asked questions.
          </p>

          <div className="mb-6 rounded-3xl border border-n40 p-4 sm:p-6">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center rounded-2xl border border-n40 p-3 text-b300 sm:p-5">
                <i className="ph-fill ph-question text-4xl"></i>
              </div>
              <div>
                <h5 className="heading-5">Still have questions?</h5>
                <p className="pt-3">
                  Can’t find the answer you’re looking for? Please chat with our friendly team!
                </p>
              </div>
            </div>
          </div>

          <a
            href="./contact.html"
            className="relative flex items-center justify-center overflow-hidden rounded-xl bg-b300 px-4 py-3 font-semibold text-white duration-700 after:absolute after:inset-0 after:left-0 after:w-0 after:rounded-xl after:bg-yellow-400 after:duration-700 hover:text-n900 hover:after:w-[calc(100%+2px)] sm:px-8"
          >
            <span className="relative z-10">Get In Touch</span>
          </a>
        </div>

        {/* Right column - Accordion */}
        <div className="col-span-12 flex flex-col gap-6 rounded-3xl border border-n40 p-4 sm:p-10 lg:col-span-7">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="faqItem overflow-hidden rounded-2xl border border-n40 px-4 py-3 transition-all duration-700"
            >
              <div
                className="flex items-center justify-between cursor-pointer max-sm:gap-2"
                onClick={() => toggleFAQ(index)}
              >
                <p className="text-base font-medium sm:text-lg">{faq.question}</p>
                <div
                  className={`faqIcon flex items-center justify-center rounded-full bg-b300 p-2 text-xl text-white duration-300 sm:p-3 ${
                    activeIndex === index ? 'rotate-90' : ''
                  }`}
                >
                  <i className="ph ph-caret-right"></i>
                </div>
              </div>
              <div
                className={`faqAnswer pr-8 pt-3 text-n400 transition-all duration-500 ease-in-out ${
                  activeIndex === index ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0'
                } overflow-hidden`}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutFAQ
