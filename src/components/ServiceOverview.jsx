import React from "react";
import { useParams, Link } from "react-router-dom";
import services from "../state/services";
import { BiCaretRight } from "react-icons/bi";
const ServiceOverview = () => {
  const { name } = useParams();
  const service = services.find((service) => service.name === name);
  console.log(service);

  return (
    <>
      <div className="service-overview">
        <header className="md:min-h-[50vh] h-auto relative flex justify-center items-center">
          <div
            className={`-z-10 bg-[url('${service?.image}')] absolute w-full bg-cover bg-center bg-no-repeat md:h-[50vh] h-auto object-center`}
          >
            <div className="w-full h-full bg-[rgba(0,0,0,.7)]"></div>
          </div>
          <div className=" flex gap-4 flex-col font-montserrat">
            <h1 className="lg:text-6xl md:text-4xl text-2xl font-bold text-white">{service?.name}</h1>
            <div className="navigation flex justify-center items-center">
              <Link to={"/"} className="text-gray-300">
                Home
              </Link>
              <span className="text-white">
                <BiCaretRight className="text-gray-300 mt-[2px]" />
              </span>
              <Link to={`/services`} className="text-gray-300">
                Services
              </Link>
              <span className="text-white">
                <BiCaretRight className="text-gray-300 mt-[2px]" />
              </span>
              <Link to={`/services/${service.name}`} className="text-gray-400">
                {service?.name}
              </Link>
            </div>
          </div>
        </header>
      </div>
    </>
  );
};

export default ServiceOverview;