import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import services from "../state/services";
import { FaArrowRight } from "react-icons/fa6";

const Services = () => {
  const [windowWidth, setWindowWidth] = useState({
    width: window.innerWidth,
  });
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth({
        width: window.innerWidth,
      });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      <div className="container font-montserrat min-h-[100vh] bg-gradient-to-r from-gray-100 to-gray-50 w-full flex flex-col items-center justify-center">
        <header className="md:w-[80%] px-4">
          <h4 className="text-primary mb-4 text-xl">Services</h4>
          <h1 className="text-gray-800 text-4xl mb-4 font-bold">
            Our Core Services
          </h1>
        </header>
        <Swiper
          modules={[Navigation]}
          slidesPerView={
            windowWidth.width >= 1280
              ? 3
              : windowWidth.width >= 1080
              ? 3
              : windowWidth.width >= 768
              ? 2
              : 1
          }
          navigation={true}
          className="services flex md:w-[80%] p-4 w-full"
          spaceBetween={30}
        >
          {services.map((service, index) => {
            return (
              <SwiperSlide
                className="service rounded-xl shadow-sm min-h-[400px] bg-white"
                key={index}
              >
                <div className="relative service__image rounded-xl h-[250px]">
                  <img
                    className="rounded-xl h-full object-cover"
                    src={service.image}
                    alt={service.name}
                  />
                  <Link
                    className="bg-black text-gray-50 text-sm p-[6px] rounded-md text-center w-32 absolute -bottom-[15px] left-6"
                    to={"#"}
                  >
                    Request Quote
                  </Link>
                </div>
                <div className="body flex flex-col gap-2 px-4 py-6">
                  <div className="service__name md:text-2xl text-gray-700 font-bold text-xl truncate mt-4">
                    {service.name}
                  </div>
                  <div className="service__description truncate text-gray-400">
                    {service.short_description}
                  </div>
                  <Link
                    className="group text-gray-700 mt-4 transition-all duration-150 ease-linear hover:underline hover:gap-3 rounded-md w-32 flex gap-2 items-center"
                    to={"#"}
                  >
                    <span className="hover:opacity-80 transition-all duration-150">
                      Read More
                    </span>
                    <FaArrowRight
                      size={12}
                      className="mt-[2] hover:opacity-80 transition-all duration-150"
                    />
                  </Link>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
};

export default Services;
