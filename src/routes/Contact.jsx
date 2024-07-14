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
        <div className="contact p-4 md:py-16 flex justify-center">
          <div className="contact-information md:w-[80%] mx-auto flex flex-col justify-center items-center">
            <div className="heading mb-8">
              <h1 className="md:text-4xl text-2xl font-[500]">
                Contact Information
              </h1>
            </div>
            <div className="information grid grid-cols-3 justify-center gap-6 p-4">
              <div className="mailing-address md:p-8 p-4 flex gap-4 flex-col items-center text-center bg-white shadow-xl rounded-3xl relative">
                <span>
                  <MdOutlineAddLocationAlt
                    size={100}
                    className="text-primary"
                  />
                </span>
                <h2 className="text-balance font-bold text-2xl text-primary font-montserrat">
                  Mailing Address
                </h2>
                <p className="text-gray-500 font-montserrat">
                  Flat 8, 2nd Floor, Riyadh Street Thouqba, Al Khobar 31952,
                  Kingdom of Saudi Arabia.
                </p>
              </div>
              <div className="email-info">
                <span>
                  <MdAttachEmail />
                </span>
                <h2>Email Info</h2>
                <p>
                  <Link to={"mailto:info@nujumalmiad.com"}>
                    info@nujumalmiad.com
                  </Link>
                </p>
              </div>
              <div className="phone-number">
                <span>
                  <MdOutlinePhoneIphone />
                </span>
                <h2>Phone Number</h2>
                <p>
                  <Link to={"tel:+00966567710596"}>+966 567710596</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
