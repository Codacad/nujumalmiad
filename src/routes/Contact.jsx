import React from "react";
import { Link } from "react-router-dom";
import { RxCaretRight } from "react-icons/rx";
import { MdAttachEmail } from "react-icons/md";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { MdOutlineAddLocationAlt } from "react-icons/md";
const Contact = () => {
  return (
    <>
      <div className="contact-us bg-gray-100">
        <header className="md:min-h-[50vh] z-10 text-center h-[40vh] relative flex justify-center items-center">
          <div
            className={`-z-10 bg-[url('/images/contact-us.jpg')] absolute w-full bg-cover bg-center bg-no-repeat md:h-[50vh] h-[40vh] object-center`}
          >
            <div className="w-full h-full bg-[rgba(0,0,0,.7)]"></div>
          </div>
          <div className=" flex gap-4 flex-col font-montserrat">
            <h1 className="lg:text-6xl md:text-4xl text-2xl font-bold text-white">
              Contact Us
            </h1>
            <div className="navigation flex justify-center items-center">
              <Link to={"/"} className="text-gray-300">
                Home
              </Link>
              <span className="text-white">
                <RxCaretRight className="text-gray-300 mt-[2px]" />
              </span>
              <Link to={`/contact`} className="text-gray-300">
                Contact
              </Link>
            </div>
          </div>
        </header>
        <div className="contact flex flex-col justify-center">
          <div className="contact-information md:my-16 md:w-[80%] mx-auto flex flex-col justify-center items-center">
            <div className="heading mb-8">
              <h1 className="md:text-4xl text-2xl font-[500]">
                Contact Information
              </h1>
            </div>
            <div className="information grid md:grid-cols-3 grid-col-1 justify-center md:gap-6 gap-4 p-4 relative z-0">
              <div className="mailing-address relative shadow-primaryShadow md:p-8 p-4 flex gap-4 flex-col items-center text-center bg-white rounded-3xl">
                <span>
                  <MdOutlineAddLocationAlt
                    size={100}
                    className="text-gray-950"
                  />
                </span>
                <h2 className="text-balance font-bold text-2xl text-gray-950 font-montserrat">
                  Mailing Address
                </h2>
                <p className="text-gray-500 font-montserrat">
                  Flat 8, 2nd Floor, Riyadh Street Thouqba, Al Khobar 31952,
                  Kingdom of Saudi Arabia.
                </p>
              </div>
              <div className="email-info relative shadow-primaryShadow md:p-8 p-4 flex gap-4 flex-col items-center text-center bg-white rounded-3xl">
                <span>
                  <MdAttachEmail size={100} className="text-gray-950" />
                </span>
                <h2 className="text-balance font-bold text-2xl text-gray-950 font-montserrat">
                  Email Info
                </h2>
                <p className="text-gray-500 font-montserrat">
                  <Link
                    className="hover:underline"
                    to={"mailto:info@nujumalmiad.com"}
                  >
                    info@nujumalmiad.com
                  </Link>
                </p>
              </div>
              <div className="phone-number relative shadow-primaryShadow md:p-8 p-4 flex gap-4 flex-col items-center text-center bg-white rounded-3xl">
                <span>
                  <MdOutlinePhoneIphone size={100} className="text-gray-950" />
                </span>
                <h2 className="text-balance font-bold text-2xl text-gray-950 font-montserrat">
                  Phone Number
                </h2>
                <p className="text-gray-500 font-montserrat">
                  <Link to={"tel:+00966567710596"} className="hover:underline">
                    +966 567710596
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="contact-form md:py-16 flex flex-col items-center bg-white md:p-6 font-montserrat">
            <div className="heading">
              <h1 className="md:text-4xl text-2xl font-[500] text-gray-950 mb-8">
                Send us a message
              </h1>
            </div>
            <div className="form md:w-[60%] w-full max-md:p-4">
              <form className="grid md:grid-cols-2 md:gap-6 gap-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="py-2 px-4 transition-all duration-100 ease-linear focus:ring-2 ring-primary outline-none shadow-sm border  rounded-md text-gray-500 border-gray-200"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="py-2 px-4 transition-all duration-100 ease-linear focus:ring-2 ring-primary outline-none shadow-sm border border-gray-200 rounded-md text-gray-500"
                />
                <input
                  type="text"
                  placeholder="Phone"
                  className="py-2 px-4 transition-all duration-100 ease-linear focus:ring-2 ring-primary outline-none shadow-sm border border-gray-200 rounded-md text-gray-500"
                />
                <input
                  type="text"
                  placeholder="Subject"
                  className="py-2 px-4 transition-all duration-100 ease-linear focus:ring-2 ring-primary outline-none shadow-sm border border-gray-200 rounded-md text-gray-500"
                />
                <textarea
                  className="md:col-span-2 py-2 px-4 transition-all duration-100 ease-linear focus:ring-2 ring-primary outline-none shadow-sm border rounded-md text-gray-500 border-gray-200"
                  placeholder="Message"
                  rows={7}
                ></textarea>
                <button className="w-24 bg-primary p-1 text-white rounded-sm">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="map">
          <div className="w-full md:h-[500px] h-[200px]">
            <iframe
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509376!2d144.95373631532258!3d-37.8162797420215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5775c1ba2db19c0!2sGoogle!5e0!3m2!1sen!2sus!4v1606582484161!5m2!1sen!2sus"
              allowfullscreen=""
              aria-hidden="false"
              tabIndex="0"
              className="opacity-80"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
