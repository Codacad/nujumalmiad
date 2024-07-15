import React from "react";
import AboutImg from "/images/about.jpg";
import VisionImg from "/images/vision.jpg";
import DottedImg from "/images/dotted.svg";
import { Link } from "react-router-dom";
import { TbArrowNarrowLeft, TbArrowNarrowRight } from "react-icons/tb";
const About = () => {
  return (
    <>
      <div className="about flex justify-center bg-white">
        <div className="container p-4 md:w-[80%] w-full relative z-10">
          <header className=" flex flex-col gap-4 items-center text-center leading-8">
            <div className="content md:m-16 font-roboto">
              <h3 className="text-primary font-montserrat">About</h3>
              <h1 className="md:text-6xl font-[600] mb-4 text-gray-950">
                Our Company
              </h1>
              <p className="md:w-[60%] text-center mx-auto text-gray-500">
                At <strong>Nujum Al Miad</strong>, we deliver expert
                subcontracting, manpower supply, and maintenance services,
                tailored to civil, mechanical, and electrical projects.
              </p>
            </div>
            <div className="img md:h-[500px] ring-2 rounded-xl ring-gray-950 group h-[200px] w-full relative">
              <img
                src={AboutImg}
                alt=""
                className="h-full w-full object-cover object-center rounded-xl"
              />
              <img
                src={DottedImg}
                alt=""
                className="absolute md:-top-10 -top-4 md:-left-10 -left-4 md:w-[200px] md:h-[200px] w-[100px] h-[100px] -z-10"
              />
              <img
                src={DottedImg}
                alt=""
                className="absolute md:-right-10 -right-4 md:-bottom-10 -bottom-4 -z-10 md:w-[200px] md:h-[200px] w-[100px] h-[100px]"
              />
            </div>
          </header>
          <div className="mission grid md:grid-cols-2 grid-col-1 gap-4 p-4 bg-gray-950 rounded-xl md:mt-32 mt-8">
            <div className="flex flex-col justify-center font-roboto p-6">
              <h3 className="text-primary">Mission</h3>
              <h1 className="md:text-4xl font-bold text-gray-100">
                How we work with our clients
              </h1>
              <Link
                className="w-[100px] transition-all duration-100 ease-linear mt-6 hover:bg-transparent hover:ring-2 hover:ring-gray-100 hover:text-gray-100 rounded-md p-2 bg-gray-100 text-gray-950 flex hover:gap-3 gap-2 items-center"
                to={"/contact"}
              >
                <span>Contact</span>
                <TbArrowNarrowRight />
              </Link>
            </div>
            <div className="font-roboto leading-6 p-4 rounded-xl text-gray-100">
              <p>
                Our mission is to deliver high-quality subcontracting and
                manpower supply services that are characterized by reliability,
                efficiency, and innovation. We are committed to understanding
                the unique needs of each client and providing customized
                solutions that ensure optimal project outcomes. Through a focus
                on safety, quality, and continuous improvement, we aim to uphold
                the highest industry standards. We believe in empowering our
                workforce with the necessary skills and knowledge to perform at
                their best, while also fostering a culture of integrity and
                respect. Our mission is to contribute to the success of our
                clients by delivering exceptional value and building lasting
                relationships based on trust and mutual success.
              </p>
            </div>
          </div>
          <div className="vision grid md:grid-cols-2 grid-col-1 gap-4 rounded-xl md:my-32 m-8">
            <div className="img group w-full relative ring-2 rounded-xl ring-gray-950">
              <img
                src={VisionImg}
                alt=""
                className="h-full w-full object-cover object-center rounded-xl"
              />
              <img
                src={DottedImg}
                alt=""
                className="absolute -top-6 -left-6 w-[100px] h-[100px] -z-10"
              />
              <img
                src={DottedImg}
                alt=""
                className="absolute -right-6 -bottom-6 -z-10 w-[100px] h-[100px]"
              />
            </div>
            <div className="flex flex-col justify-center font-roboto p-6">
              <h3 className="text-primary">Vision</h3>
              <h1 className="md:text-4xl font-bold text-gray-950 leading-8">
                Dream untill your dreams come true
              </h1>
              <Link
                className="w-[100px] transition-all duration-100 ease-linear mt-6 hover:bg-gray-950 ring-1 ring-gray-950 hover:text-gray-100 rounded-md p-2 bg-white text-gray-950 flex hover:gap-3 gap-2 items-center"
                to={"/contact"}
              >
                <TbArrowNarrowLeft />
                <span>Contact</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
