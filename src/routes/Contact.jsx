import React, { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RxCaretRight } from "react-icons/rx";
import { MdAttachEmail } from "react-icons/md";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { MdOutlineAddLocationAlt } from "react-icons/md";
import emailjs from "@emailjs/browser";
const Contact = () => {
  const navigate = useNavigate();
  const nameErrorRef = useRef();
  const emailErrorRef = useRef();
  const phoneErrorRef = useRef();
  const subjectErrorRef = useRef();
  const msgErrorRef = useRef();
  const [message, setMessage] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    msg: "",
  });
  const [error, setError] = useState({
    nameError: true,
    emailError: true,
    phoneError: true,
    subjectError: true,
    msgError: true,
  });
  const [errorMessage, setErrorMessage] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    msg: "",
  });
  const [responseMessage, setResponseMessage] = useState("");
  const { name, email, phone, subject, msg } = message;
  const regex = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;
  const isEmailValid = regex.test(email);
  const handleNameChange = (e) => {
    setMessage((prev) => ({
      ...prev,
      name: e.target.value,
    }));

    if (e.target.value.length < 5) {
      setErrorMessage((prev) => ({
        ...prev,
        name: "Name must have at least 5 Characters",
      }));
      setError((prev) => ({ ...prev, nameError: true }));
    } else {
      setError((prev) => ({ ...prev, nameError: false }));
    }
    if (!e.target.value) {
      setErrorMessage((prev) => ({
        ...prev,
        name: "Name is required",
      }));
      setError((prev) => ({ ...prev, nameError: true }));
    }
  };
  const handleEmailChange = (e) => {
    setMessage((prev) => ({
      ...prev,
      email: e.target.value,
    }));
    if (!isEmailValid) {
      setErrorMessage((prev) => ({
        ...prev,
        email: "Enter a valid email",
      }));
      setError((prev) => ({ ...prev, emailError: true }));
    } else {
      setError((prev) => ({ ...prev, emailError: false }));
    }
    if (!e.target.value) {
      setErrorMessage((prev) => ({
        ...prev,
        email: "Email is required",
      }));
      setError((prev) => ({ ...prev, emailError: true }));
    }
  };
  const handlePhoneChange = (e) => {
    setMessage((prev) => ({
      ...prev,
      phone: e.target.value,
    }));
    if (e.target.value.length < 9) {
      setErrorMessage((prev) => ({
        ...prev,
        phone: "Phonem number must be valid",
      }));
      setError((prev) => ({ ...prev, phoneError: true }));
    } else {
      setError((prev) => ({ ...prev, phoneError: false }));
    }

    if (!e.target.value) {
      setErrorMessage((prev) => ({
        ...prev,
        phone: "Phone Number is required",
      }));
      setError((prev) => ({ ...prev, phoneError: true }));
    }
  };
  const handleSubjectChange = (e) => {
    setMessage((prev) => ({
      ...prev,
      subject: e.target.value,
    }));
    if (e.target.value.length < 10) {
      setErrorMessage((prev) => ({
        ...prev,
        subject: "Subject must have at least 10 Characters",
      }));
      setError((prev) => ({ ...prev, subjectError: true }));
    } else {
      setError((prev) => ({ ...prev, subjectError: false }));
    }
    if (!e.target.value) {
      setErrorMessage((prev) => ({
        ...prev,
        subject: "Subject is required",
      }));
      setError((prev) => ({ ...prev, subjectError: true }));
    }
  };
  const handleMsgChange = (e) => {
    setMessage((prev) => ({
      ...prev,
      msg: e.target.value,
    }));
    if (e.target.value.length < 25) {
      setErrorMessage((prev) => ({
        ...prev,
        msg: "Message must have at least 25 Characters",
      }));
      setError((prev) => ({ ...prev, msgError: true }));
    } else {
      setError((prev) => ({ ...prev, msgError: false }));
    }
    if (!e.target.value) {
      setErrorMessage((prev) => ({
        ...prev,
        msg: "Subject is required",
      }));
      setError((prev) => ({ ...prev, msgError: true }));
    }
  };

  const templateParams = {
    subject,
    from_name: name,
    from_email: email,
    to_name: "Nujum Al Miad Team",
    phone,
    to_email: "info@nujumalmiad.com",
    message: msg,
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name) {
      setErrorMessage((prev) => ({
        ...prev,
        name: "Name is required",
      }));
      setError((prev) => ({ ...prev, nameError: true }));
    }
    if (!email) {
      setErrorMessage((prev) => ({
        ...prev,
        email: "Email is required",
      }));
      setError((prev) => ({ ...prev, emailError: true }));
    }

    if (!phone) {
      setErrorMessage((prev) => ({
        ...prev,
        phone: "Phone is required",
      }));
      setError((prev) => ({ ...prev, phoneError: true }));
    }
    if (!subject) {
      setErrorMessage((prev) => ({
        ...prev,
        subject: "Subject is required",
      }));
      setError((prev) => ({ ...prev, subjectError: true }));
    }
    if (!msg) {
      setErrorMessage((prev) => ({
        ...prev,
        msg: "Message is required",
      }));
      setError((prev) => ({ ...prev, msgError: true }));
    }
    console.log(error);
    // Send Email Message
    if (
      error.nameError ||
      error.emailError ||
      error.phoneError ||
      error.subjectError ||
      error.msgError
    ) {
      console.log("Please fill the correct details");
    } else {
      setResponseMessage("loading");
      emailjs
        .send(
          "service_z3szqmb",
          "template_5d7ct9j",
          templateParams,
          "mk081_OjSCUIGrAxq"
        )
        .then(
          () => {
            setResponseMessage("success");
            setMessage({
              name: "",
              email: "",
              phone: "",
              subject: "",
              msg: "",
            });
            setTimeout(() => {
              navigate("/");
            }, 1000);
          },
          (error) => {
            console.log("FAILED...", error);
            setResponseMessage("failed");
          }
        );
    }
  };

  return (
    <>
      <div className="contact-us bg-gray-100 relative">
        <header className="md:min-h-[50vh] z-10 text-center h-[40vh] relative flex justify-center items-center">
          <div
            className={`-z-10 bg-[url('/images/contact-us.jpg')] bg-fixed absolute w-full bg-cover bg-center bg-no-repeat md:h-[50vh] h-[40vh] object-center`}
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
          <div className="contact-information md:my-16 md:w-[80%] md:p-6 max-md:py-6 mx-auto flex flex-col justify-center items-center">
            <div className="heading my-8 lg:mb-16">
              <h1 className="md:text-4xl text-3xl text-primary font-[500] heading-after">
                Contact Information
              </h1>
            </div>
            <div className="information grid md:grid-cols-3 grid-col-1 justify-center md:gap-6 gap-4 p-4 relative z-0">
              <div className="mailing-address transition-all duration-150 ease-linear hover:bg-black group relative shadow-primaryShadow md:p-8 p-4 flex gap-4 flex-col items-center text-center bg-white rounded-3xl">
                <span>
                  <MdOutlineAddLocationAlt className="text-primary text-6xl group-hover:text-white" />
                </span>
                <h2 className="text-balance font-bold text-xl text-gray-950 font-montserrat group-hover:text-white">
                  Mailing Address
                </h2>
                <p className="text-gray-500 font-montserrat text-sm leading-6 group-hover:text-gray-200">
                  Flat 8, 2nd Floor, Riyadh Street Thouqba, Al Khobar 31952,
                  Kingdom of Saudi Arabia.
                </p>
              </div>
              <div className="email-info relative transition-all duration-150 ease-linear hover:bg-black group shadow-primaryShadow md:p-8 p-4 flex gap-4 flex-col items-center text-center bg-white rounded-3xl">
                <span>
                  <MdAttachEmail className="text-primary text-6xl group-hover:text-white" />
                </span>
                <h2 className="text-balance font-bold text-xl group-hover:text-white text-gray-950 font-montserrat">
                  Email Info
                </h2>
                <p className="text-gray-500 font-montserrat flex flex-col gap-1">
                  <Link
                    className="hover:underline group-hover:text-gray-200"
                    to={"mailto:info@nujumalmiad.com"}
                  >
                    info@nujumalmiad.com
                  </Link>
                  <Link
                    className="hover:underline group-hover:text-gray-200"
                    to={"mailto:admin@nujumalmiad.com"}
                  >
                    admin@nujumalmiad.com
                  </Link>
                </p>
              </div>
              <div className="phone-number relative group transition-all duration-150 ease-linear hover:bg-black shadow-primaryShadow md:p-8 p-4 flex gap-4 flex-col items-center text-center bg-white rounded-3xl">
                <span>
                  <MdOutlinePhoneIphone className="text-primary text-6xl group-hover:text-white" />
                </span>
                <h2 className="text-balance font-bold text-xl text-gray-950 font-montserrat group-hover:text-white">
                  Phone Number
                </h2>
                <p className="text-gray-500 font-montserrat">
                  <Link
                    to={"tel:+00966567710596"}
                    className="hover:underline group-hover:text-gray-200"
                  >
                    +966 567710596
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="contact-form md:py-16 flex flex-col items-center bg-white md:p-6 max-md:py-6 font-montserrat">
            <div className="heading">
              <h1 className="md:text-4xl text-3xl font-[500] text-primary my-8 lg:mb-16 heading-after">
                Send us a message
              </h1>
            </div>
            <div className="form md:w-[60%] w-full max-md:p-4">
              <form
                className="grid md:grid-cols-2 md:gap-6 gap-4"
                onSubmit={handleSubmit}
              >
                <div className="flex flex-col gap-1">
                  <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={message.name}
                    onChange={handleNameChange}
                    className={`py-2 px-4 transition-all duration-100 ease-linear outline-none border  rounded-md text-gray-500 border-gray-200`}
                  />
                  <span
                    ref={nameErrorRef}
                    className={`${
                      error.nameError
                        ? "block text-red-500 text-[12px]"
                        : "hidden"
                    }`}
                  >
                    {errorMessage.name}
                  </span>
                </div>

                <div className="flex flex-col gap-1">
                  <input
                    type="email"
                    placeholder="Email"
                    value={message.email}
                    onChange={handleEmailChange}
                    name="email"
                    className={`py-2 px-4 transition-all duration-100 ease-linear outline-none border  rounded-md text-gray-500 border-gray-200`}
                  />
                  <span
                    ref={emailErrorRef}
                    className={`${
                      error.emailError
                        ? "block text-red-500 text-[12px]"
                        : "hidden"
                    }`}
                  >
                    {errorMessage.email}
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <input
                    type="number"
                    placeholder="Phone"
                    name="phone"
                    value={message.phone}
                    onChange={handlePhoneChange}
                    className={`py-2 px-4 transition-all no-spinner duration-100 ease-linear outline-none border  rounded-md text-gray-500 border-gray-200`}
                  />
                  <span
                    ref={phoneErrorRef}
                    className={`${
                      error.phoneError
                        ? "block text-red-500 text-[12px]"
                        : "hidden"
                    }`}
                  >
                    {errorMessage.phone}
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <input
                    type="text"
                    placeholder="Subject"
                    name="subject"
                    value={message.subject}
                    onChange={handleSubjectChange}
                    className={`py-2 px-4 transition-all duration-100 ease-linear outline-none border  rounded-md text-gray-500 border-gray-200`}
                  />

                  <span
                    ref={subjectErrorRef}
                    className={`${
                      error.subjectError
                        ? "block text-red-500 text-[12px]"
                        : "hidden"
                    }`}
                  >
                    {errorMessage.subject}
                  </span>
                </div>
                <div className="flex flex-col gap-1 md:col-span-2 ">
                  <textarea
                    className={`py-2 px-4 transition-all duration-100 ease-linear outline-none border  rounded-md text-gray-500 border-gray-200`}
                    placeholder="Message"
                    name="msg"
                    value={message.msg}
                    onChange={handleMsgChange}
                    rows={7}
                  ></textarea>
                  <span
                    ref={msgErrorRef}
                    className={`${
                      error.msgError
                        ? "block text-red-500 text-[12px]"
                        : "hidden"
                    }`}
                  >
                    {errorMessage.msg}
                  </span>
                </div>
                {responseMessage == "success" ? (
                  <span className="col-span-2 p-2 bg-green-100 text-green-600">
                    Message sent succesfully
                  </span>
                ) : responseMessage == "failed" ? (
                  <span>Something went wrong</span>
                ) : (
                  ""
                )}
                <button
                  disabled={responseMessage == "loading" ? true : false}
                  className={`w-28 p-1 rounded-sm ${responseMessage == 'loading' ? "bg-gray-400 opacity-50" : "bg-primary text-white"}`}
                >
                  {responseMessage == "loading" ? (
                    <div className="flex justify-center gap-2 items-center">
                      <div className="animate-spin w-4 h-4 border-2 border-[rgba(255,255,255,.5)] border-t-2 border-t-black rounded-full"></div>
                      <span className="text-gray-200">Sending...</span>
                    </div>
                  ) : (
                    <span>Submit</span>
                  )}
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
              style={{ border: 0 }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509376!2d144.95373631532258!3d-37.8162797420215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5775c1ba2db19c0!2sGoogle!5e0!3m2!1sen!2sus!4v1606582484161!5m2!1sen!2sus"
              allowFullScreen=""
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
