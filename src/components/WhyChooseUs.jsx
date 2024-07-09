import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useState, useEffect } from "react";
import { whychooseus } from "../state/whyschooseus";

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

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      <section className="why-choose-us">
        <div className="container bg-gray-50 md:p-8 p-2 flex flex-col">
          <h2 className="text-center mb-6 text-4xl font-bold text-gray-500">
            Why Choose Us
          </h2>
          <Swiper
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
            className="md:w-[80%] grid grid-cols-2"
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
          <div className="benefits">
            <h3>Benefits to Clients</h3>
            <ul>
              <li>
                Single-point accountability for streamlined project management.
              </li>
              <li>Cost efficiency through optimized resource management.</li>
              <li>Reliable support from project inception to completion.</li>
              <li>Commitment to safety and adherence to industry standards.</li>
              <li>Access to skilled manpower with specialized expertise.</li>
              <li>
                Enhanced project outcomes through tailored maintenance programs.
              </li>
              <li>Minimized downtime and increased operational efficiency.</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyChooseUs;
