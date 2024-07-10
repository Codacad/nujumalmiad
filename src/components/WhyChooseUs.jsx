import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useState, useEffect } from "react";
import { whychooseus } from "../state/whyschooseus";
import { Pagination } from "swiper/modules";
import { FaCircleCheck } from "react-icons/fa6";
import "../css/pagination.css";
const WhyChooseUs = () => {
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
      <section className="why-choose-us">
        <div className="container bg-gray-50 md:p-8 p-2 flex flex-col">
          <h2 className="text-center mb-6 md:text-4xl text-2xl max-md:mt-4 font-bold text-gray-500">
            Why Choose Us
          </h2>
          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            slidesPerView={
              windowWidth.width >= 1280
                ? 4
                : windowWidth.width >= 1080
                ? 3
                : windowWidth.width >= 768
                ? 2
                : 1
            }
            spaceBetween={10}
            className="whychooseus pb-8 md:w-[80%] grid grid-cols-2"
          >
            {whychooseus.map((slide) => {
              return (
                <SwiperSlide key={slide.id} className="min-h-[400px] bg-white">
                  <div className="point p-2 flex gap-4 flex-col text-center min-h-[400px] justify-center items-center">
                    <div className="img w-32 h-32">
                      <img className="" src={slide.imgPath} alt="" />
                    </div>
                    <h3 className="text-2xl text-gray-800 font-bold">
                      {slide.title}
                    </h3>
                    <p className="text-gray-600">{slide.description}</p>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
          <div className="benefits relative z-0 flex flex-col gap-4 md:w-[80%] mx-auto py-4 my-8">
            <h3 className="text-3xl text-gray-800 font-bold">
              Benefits to Clients
            </h3>
            <ul className="flex flex-col gap-4 text-xl">
              <li className="flex items-center gap-2">
                <span>
                  <FaCircleCheck className="text-primary" />
                </span>
                <span>
                  Single-point accountability for streamlined project
                  management.
                </span>
              </li>
              <li className="flex items-center gap-2">
                <span>
                  <FaCircleCheck className="text-primary" />
                </span>
                <span>
                  Cost efficiency through optimized resource management.
                </span>
              </li>
              <li className="flex items-center gap-2">
                <span>
                  <FaCircleCheck className="text-primary" />
                </span>
                <span>
                  Reliable support from project inception to completion.
                </span>
              </li>
              <li className="flex items-center gap-2">
                <span>
                  <FaCircleCheck className="text-primary" />
                </span>
                <span>
                  Commitment to safety and adherence to industry standards.
                </span>
              </li>
              <li className="flex items-center gap-2">
                <span>
                  <FaCircleCheck className="text-primary" />
                </span>
                <span>
                  Access to skilled manpower with specialized expertise.
                </span>
              </li>
              <li className="flex items-center gap-2">
                <span>
                  <FaCircleCheck className="text-primary" />
                </span>
                <span>
                  Enhanced project outcomes through tailored maintenance
                  programs.
                </span>
              </li>
              <li className="flex items-center gap-2">
                <span>
                  <FaCircleCheck className="text-primary" />
                </span>
                <span>
                  Minimized downtime and increased operational efficiency.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyChooseUs;
