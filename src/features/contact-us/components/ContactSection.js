
import { Map, MessageCircle, Phone } from "lucide-react";
import React from "react";
import { useSelector } from "react-redux";

const ContactSection = () => {

  
  const { pages_content } = useSelector((state) => state.pages);
  const {
    email = "",
    visitUs = {},
    timing = "",
    phone_num = "",
  } = pages_content?.contact || {};
  return (
    <div>
      {/* <!-- Contact Section Start --> */}
      <section className="">
        <div className="container -mt-40 rounded-xl bg-white p-2 sm:p-4 md:rounded-3xl xl:rounded-[60px] xl:p-15">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 flex flex-col items-center justify-center rounded-3xl border border-n30 p-6 md:col-span-4 lg:p-10">
              <div className="flex items-center justify-center rounded-full bg-b300/5 p-5 text-4xl !leading-none text-b300">
                <MessageCircle />
              </div>
              <h4 className="heading-4 pt-6">Chat to support</h4>
              <p className="pb-6 text-sm font-medium text-n300">
                Speak to our friendly team.
              </p>
              <a href={`mailto:${email}`} className="font-medium">
                {email}
              </a>
            </div>
            <div className="col-span-12 flex flex-col items-center justify-center rounded-3xl border border-n30 p-6 md:col-span-4 lg:p-10">
              <div className="flex items-center justify-center rounded-full bg-b300/5 p-5 text-4xl !leading-none text-b300">
                <Map />
              </div>
              <h4 className="heading-4 pt-6">Visit us</h4>
              <p className="pb-6 text-sm font-medium text-n300">
                {visitUs?.text}
              </p>
              <a
                href={visitUs?.mapLocation}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium"
              >
                View on Google Maps
              </a>
            </div>
            <div className="col-span-12 flex flex-col items-center justify-center rounded-3xl border border-n30 p-6 md:col-span-4 lg:p-10">
              <div className="flex items-center justify-center rounded-full bg-b300/5 p-5 text-4xl !leading-none text-b300">
                <Phone />
              </div>
              <h4 className="heading-4 pt-6">Contact Us</h4>
              <p className="pb-6 text-sm font-medium text-n300">{timing}</p>
              <a href="mailto:support@servibe.com" className="font-medium">
                {phone_num}
              </a>
            </div>
          </div>

          {/* <div className="stp-15 grid grid-cols-12 gap-6">
            <div className="col-span-12 flex items-center justify-center self-stretch overflow-hidden rounded-3xl md:col-span-4">
              <img
                src="./assets/images/contact_img.png"
                alt=""
                className="h-full rounded-3xl"
              />
            </div>
            <div className="col-span-12 rounded-3xl border border-n30 p-4 md:col-span-8 lg:p-15">
              <h3 className="heading-3 sbp-15 text-center">Get in touch</h3>
              <form
                id="contactForm"
                className="grid grid-cols-12 gap-4 font-medium sm:gap-6"
              >
                <div className="col-span-12 rounded-xl border border-n30 p-3 lg:col-span-6">
                  <input
                    type="text"
                    className="outline-none placeholder:text-n100"
                    placeholder="Name"
                    id="from_name"
                    required
                  />
                </div>
                <div className="col-span-12 rounded-xl border border-n30 p-3 lg:col-span-6">
                  <input
                    type="text"
                    className="outline-none placeholder:text-n100"
                    placeholder="Email"
                    id="reply_to"
                    required
                  />
                </div>
                <div className="col-span-12 rounded-xl border border-n30 p-3">
                  <textarea
                    className="min-h-[100px] w-full outline-none placeholder:text-n100"
                    placeholder="Message"
                    id="message"
                    required
                  ></textarea>
                </div>
                <p className="col-span-12 hidden" id="responseMessage"></p>
                <div className="col-span-4">
                  <button
                    type="submit"
                    className="relative flex items-center justify-center overflow-hidden rounded-xl bg-b300 px-4 py-3 font-semibold text-white duration-700 after:absolute after:inset-0 after:left-0 after:w-0 after:rounded-xl after:bg-yellow-400 after:duration-700 hover:text-n900 hover:after:w-[calc(100%+2px)] sm:px-8"
                  >
                    <span className="relative z-10">Submit</span>
                  </button>
                </div>
              </form>
            </div>
          </div> */}
        </div>
      </section>

      {/* <!-- Contact Section End --> */}
    </div>
  );
};

export default ContactSection;
