import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import services from "../state/services";
import { FaServicestack } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import "../css/service-navigation.css";
const Services = () => {
  const [windowWidth, setWindowWidth] = useState({
    width: window.innerWidth,
  });
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth({
        width: window.innerWidth,
      });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (
      swiperInstance &&
      swiperInstance.params &&
      swiperInstance.params.navigation
    ) {
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;
      swiperInstance.navigation.update();
      swiperInstance.on("slideChange", () => {
        setIsBeginning(swiperInstance.isBeginning);
        setIsEnd(swiperInstance.isEnd);
      });
    }
  }, [swiperInstance]);

  return (
    <>
      <div className="container font-montserrat md:min-h-[100vh] max-md:py-4 bg-gradient-to-r from-gray-100 to-gray-50 w-full flex flex-col items-center justify-center">
        <header className="md:w-[80%] scroll-animation w-full px-4">
          <h4 className="text-secondary md:mb-4 mb-2 text-xl flex items-center gap-1">
            {" "}
            <FaServicestack /> <span>Services</span>
          </h4>
          <h1 className="text-primary md:text-4xl text-2xl md:mb-4 mb-2 md font-bold after:contents-[''] after:block after:bottom-0 after:left-0 after:w-24 after:h-1 after:rounded-sm after:bg-primary">
            Our Core Services
          </h1>
        </header>
        <Swiper
          modules={[Navigation, Autoplay]}
          slidesPerView={
            windowWidth.width >= 1280
              ? 3
              : windowWidth.width >= 1080
              ? 3
              : windowWidth.width >= 768
              ? 2
              : 1
          }
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          className="services scroll-animation flex md:w-[80%] p-4 w-full relative"
          spaceBetween={30}
          onSwiper={setSwiperInstance}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
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
                    className="bg-primary text-gray-50 text-sm p-[6px] rounded-md text-center w-32 absolute -bottom-[15px] left-6"
                    to={"#"}
                  >
                    Request Quote
                  </Link>
                </div>
                <div className="body flex flex-col gap-2 px-4 py-6">
                  <div className="service__name md:text-2xl text-primary font-bold text-xl truncate mt-4">
                    {service.name}
                  </div>
                  <div className="service__description truncate text-gray-400">
                    {service.short_description}
                  </div>
                  <Link
                    className="group text-gray-700 mt-4 transition-all duration-150 ease-linear hover:opacity-80 hover:gap-3 rounded-md w-32 flex gap-2 items-center"
                    to={`/services/${service.name}`}
                  >
                    <span className="hover:opacity-80 text-secondary transition-all duration-150">
                      Read More
                    </span>
                    <FaArrowRight
                      size={12}
                      className="mt-[2] hover:opacity-80 text-secondary transition-all duration-150"
                    />
                  </Link>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="swiper-navigation">
          <button
            ref={prevRef}
            className={`custom-swiper-prev  ${
              isBeginning ? "disabled text-gray-300" : "text-secondary"
            }`}
            disabled={isBeginning}
          >
            ←
          </button>
          <button
            ref={nextRef}
            className={`custom-swiper-next  ${
              isEnd ? "disabled text-gray-300" : "text-secondary"
            }`}
            disabled={isEnd}
          >
            →
          </button>
        </div>
      </div>
    </>
  );
};

export default Services;
