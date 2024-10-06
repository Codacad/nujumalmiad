import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useState, useEffect } from "react";
import { whychooseus } from "../state/whyschooseus";
import { Pagination, Autoplay } from "swiper/modules";
import { FaCircleCheck } from "react-icons/fa6";
import "../css/pagination.css";
import ClientImg from "/images/whychooseus/client.svg";
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
      <section className="why-choose-us bg-gray-50">
        <div className="container scroll-animation flex flex-col">
          <h2 className="text-center flex justify-center items-center gap-3 flex-col md:my-8 md:text-4xl max-md:mt-8 text-2xl mb-6 font-bold text-primary font-montserrat after:contents-[''] after:block after:bottom-0 after:left-0 after:w-32 after:h-1 after:rounded-sm after:bg-primary">
            Why Choose Us
          </h2>
          <Swiper
            modules={[Pagination, Autoplay]}
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
            autoplay={true}
            className="whychooseus pb-8 md:w-[80%] grid grid-cols-2 mb-8 max-md:px-4"
          >
            {whychooseus.map((slide) => {
              return (
                <SwiperSlide key={slide.id} className="min-h-[400px] bg-white shadow-sm">
                  <div className="point p-2 flex gap-4 flex-col text-center min-h-[400px] justify-center items-center">
                    <div className="img w-32 h-32">
                      <img className="" src={slide.imgPath} alt="" />
                    </div>
                    <h3 className="text-2xl text-primary font-bold">
                      {slide.title}
                    </h3>
                    <p className="text-gray-600">{slide.description}</p>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
          <div className="benefits bg-white relative w-full z-0 flex flex-col items-center gap-4 mx-auto p-4 my-4">
            <div className="content  md:w-[80%] md:grid grid-cols-2 flex flex-col gap-4">
              <ul className="flex flex-col gap-4 justify-center md:text-md text-sm font-roboto">
                <h3 className="md:text-4xl text-2xl text-primary font-bold mb-4 flex flex-col after:contents-[''] after:block after:bottom-0 after:left-0 after:w-24 after:h-1 after:rounded-sm after:bg-primary">
                  Benefits to Clients
                </h3>
                <li className="flex items-center gap-2 md:text-xl">
                  <span>
                    <FaCircleCheck className="text-secondary" />
                  </span>
                  <span>
                    Single-point accountability for streamlined project
                    management.
                  </span>
                </li>
                <li className="flex items-center gap-2 md:text-xl">
                  <span>
                    <FaCircleCheck className="text-secondary" />
                  </span>
                  <span>
                    Cost efficiency through optimized resource management.
                  </span>
                </li>
                <li className="flex items-center gap-2 md:text-xl">
                  <span>
                    <FaCircleCheck className="text-secondary" />
                  </span>
                  <span>
                    Reliable support from project inception to completion.
                  </span>
                </li>
                <li className="flex items-center gap-2 md:text-xl">
                  <span>
                    <FaCircleCheck className="text-secondary" />
                  </span>
                  <span>
                    Commitment to safety and adherence to industry standards.
                  </span>
                </li>
                <li className="flex items-center gap-2 md:text-xl">
                  <span>
                    <FaCircleCheck className="text-secondary" />
                  </span>
                  <span>
                    Access to skilled manpower with specialized expertise.
                  </span>
                </li>
                <li className="flex items-center gap-2 md:text-xl">
                  <span>
                    <FaCircleCheck className="text-secondary" />
                  </span>
                  <span>
                    Enhanced project outcomes through tailored maintenance
                    programs.
                  </span>
                </li>
                <li className="flex items-center gap-2 md:text-xl">
                  <span>
                    <FaCircleCheck className="text-secondary" />
                  </span>
                  <span>
                    Minimized downtime and increased operational efficiency.
                  </span>
                </li>
              </ul>
              <div className="client-image flex justify-center max-md:order-1">
                <img className="md:w-[80%]" src={ClientImg} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyChooseUs;
