import React from "react";
import { useParams, Link } from "react-router-dom";
import services from "../state/services";
import { RxCaretRight } from "react-icons/rx";
const ServiceOverview = () => {
  const { name } = useParams();
  const service = services.find((service) => service.name === name);
  console.log(service);

  return (
    <>
      <div className="service-overview">
        <header className="md:min-h-[50vh] text-center h-[40vh] relative flex justify-center items-center">
          <div
            className={`-z-10 bg-[url('${service?.image}')] absolute w-full bg-cover bg-center bg-no-repeat md:h-[50vh] h-[40vh] object-center`}
          >
            <div className="w-full h-full bg-[rgba(0,0,0,.7)]"></div>
          </div>
          <div className=" flex gap-4 flex-col font-montserrat">
            <h1 className="lg:text-6xl md:text-4xl text-2xl font-bold text-white">
              {service?.name}
            </h1>
            <div className="navigation flex justify-center items-center">
              <Link to={"/"} className="text-gray-300">
                Home
              </Link>
              <span className="text-white">
                <RxCaretRight className="text-gray-300 mt-[2px]" />
              </span>
              <Link to={`/services`} className="text-gray-300">
                Services
              </Link>
              <span className="text-white">
                <RxCaretRight className="text-gray-300 mt-[2px]" />
              </span>
              <Link to={`/services/${service.name}`} className="text-gray-400">
                {service?.name}
              </Link>
            </div>
          </div>
        </header>
        <div className="content bg-white flex w-full justify-center md:p-16 ">
          {service.details.map((details) => (
            <div key={details.id} className="md:w-[70%] w-full p-4 font-roboto text-md text-gray-600 leading-8">
              {details.description}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ServiceOverview;
