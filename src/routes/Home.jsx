import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../css/navigation.css";
import "../css/pagination.css";
import { Autoplay, EffectFade, Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import WhyChooseUs from "../components/WhyChooseUs";

const Home = () => {
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
  console.log(windowWidth.width);
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={windowWidth.width >= 768 ? true : false}
        effect={"fade"}
        modules={[Autoplay, EffectFade, Pagination, Navigation]}
        className="mySwiper showcase-swiper md:h-[80vh] h-[60vh]"
      >
        <SwiperSlide>
          <div className="slide relative">
            <div className="image -z-10 bg-[url('/images/showcase-slider/cos.jpg')] absolute w-full bg-cover bg-center bg-no-repeat md:h-[80vh] h-[60vh] object-center">
              <div className="w-full h-full bg-[rgba(0,0,0,.5)]"></div>
            </div>
            <div className="content lg:px-16 md:px-10 px-4 w-full z-10 md:h-[80vh] h-[60vh] flex gap-4 flex-col justify-center max-md:text-center items-center">
              <h2 className="text-white xl:text-6xl font-bold md:text-4xl text-2xl">
                Professional Contracting Services
              </h2>
              <p className="text-white md:w-[50%] md:text-xl text-center">
                From project planning to execution, our contracting services
                cover all your needs. Delivering quality and reliability every
                step of the way.
              </p>
              <div className="buttons flex gap-2">
                <Link
                  to={"#"}
                  className="bg-primary transition-all duration-100 ease-linear hover:bg-transparent hover:ring-1 hover:ring-primary hover:text-primary rounded-md shadow-md text-sm text-white px-3 py-2"
                >
                  Learn More
                </Link>
                <Link
                  to={"#"}
                  className="bg-white hover:bg-transparent transition-all duration-100 ease-linear hover:ring-1 ring-white hover:text-white rounded-md shadow-md text-black px-3 py-2"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide relative">
            <div className="image -z-10 bg-[url('/images/showcase-slider/mp.jpg')] absolute w-full bg-cover bg-center bg-no-repeat md:h-[80vh] h-[60vh] object-center">
              <div className="w-full h-full bg-[rgba(0,0,0,.5)]"></div>
            </div>
            <div className="content lg:px-16 md:px-10 px-4 w-full z-10 md:h-[80vh] h-[60vh] flex gap-4 flex-col justify-center max-md:text-center items-center">
              <h2 className="text-white xl:text-6xl font-bold md:text-4xl text-2xl">
                Skilled & Unskilled Manpower Supply
              </h2>
              <p className="text-white md:w-[50%] md:text-xl text-center">
                Access a diverse pool of skilled professionals to meet your
                workforce demands. Reliable and ready to contribute to your
                success.
              </p>
              <div className="buttons flex gap-2">
                <Link
                  to={"#"}
                  className="bg-primary transition-all duration-100 ease-linear hover:bg-transparent hover:ring-1 hover:ring-primary hover:text-primary rounded-md shadow-md text-sm text-white px-3 py-2"
                >
                  Learn More
                </Link>
                <Link
                  to={"#"}
                  className="bg-white hover:bg-transparent transition-all duration-100 ease-linear hover:ring-1 ring-white hover:text-white rounded-md shadow-md text-black px-3 py-2"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide relative">
            <div className="image -z-10 bg-[url('/images/showcase-slider/cc.jpg')] absolute w-full bg-cover bg-center bg-no-repeat md:h-[80vh] h-[60vh] object-center">
              <div className="w-full h-full bg-[rgba(0,0,0,.5)]"></div>
            </div>
            <div className="content lg:px-16 md:px-10 px-4 w-full z-10 md:h-[80vh] h-[60vh] flex gap-4 flex-col justify-center max-md:text-center items-center">
              <h2 className="text-white xl:text-6xl font-bold md:text-4xl text-2xl">
                Civil Construction Maintenance
              </h2>
              <p className="text-white md:w-[50%] md:text-xl text-center">
                Enhance your construction projects' performance with our
                tailored maintenance services. Efficient, effective, and
                customized to your needs.
              </p>
              <div className="buttons flex gap-2">
                <Link
                  to={"#"}
                  className="bg-primary transition-all duration-100 ease-linear hover:bg-transparent hover:ring-1 hover:ring-primary hover:text-primary rounded-md shadow-md text-sm text-white px-3 py-2"
                >
                  Learn More
                </Link>
                <Link
                  to={"#"}
                  className="bg-white hover:bg-transparent transition-all duration-100 ease-linear hover:ring-1 ring-white hover:text-white rounded-md shadow-md text-black px-3 py-2"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide relative">
            <div className="image -z-10 bg-[url('/images/showcase-slider/mm.jpg')] absolute w-full bg-cover bg-center bg-no-repeat md:h-[80vh] h-[60vh] object-center">
              <div className="w-full h-full bg-[rgba(0,0,0,.5)]"></div>
            </div>
            <div className="content lg:px-16 md:px-10 px-4 w-full z-10 md:h-[80vh] h-[60vh] flex gap-4 flex-col justify-center max-md:text-center items-center">
              <h2 className="text-white xl:text-6xl font-bold md:text-4xl text-2xl">
                Expert Mechanical Maintenance
              </h2>
              <p className="text-white md:w-[50%] md:text-xl text-center">
                Ensure your machinery runs smoothly with our comprehensive
                mechanical maintenance services. Experience minimal downtime and
                maximum efficiency.
              </p>
              <div className="buttons flex gap-2">
                <Link
                  to={"#"}
                  className="bg-primary transition-all duration-100 ease-linear hover:bg-transparent hover:ring-1 hover:ring-primary hover:text-primary rounded-md shadow-md text-sm text-white px-3 py-2"
                >
                  Learn More
                </Link>
                <Link
                  to={"#"}
                  className="bg-white hover:bg-transparent transition-all duration-100 ease-linear hover:ring-1 ring-white hover:text-white rounded-md shadow-md text-black px-3 py-2"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide relative">
            <div className="image -z-10 bg-[url('/images/showcase-slider/em.jpg')] absolute w-full bg-cover bg-center bg-no-repeat md:h-[80vh] h-[60vh] object-center">
              <div className="w-full h-full bg-[rgba(0,0,0,.5)]"></div>
            </div>
            <div className="content lg:px-16 md:px-10 px-4 w-full z-10 md:h-[80vh] h-[60vh] flex gap-4 flex-col justify-center max-md:text-center items-center">
              <h2 className="text-white xl:text-6xl font-bold md:text-4xl text-2xl">
                Reliable Electrical Maintenance
              </h2>
              <p className="text-white md:w-[50%] md:text-xl text-center">
                Keep your electrical systems safe and efficient with our
                top-notch electrical maintenance solutions. Trust our expertise
                for uninterrupted operations.
              </p>
              <div className="buttons flex gap-2">
                <Link
                  to={"#"}
                  className="bg-primary transition-all duration-100 ease-linear hover:bg-transparent hover:ring-1 hover:ring-primary hover:text-primary rounded-md shadow-md text-sm text-white px-3 py-2"
                >
                  Learn More
                </Link>
                <Link
                  to={"#"}
                  className="bg-white hover:bg-transparent transition-all duration-100 ease-linear hover:ring-1 ring-white hover:text-white rounded-md shadow-md text-black px-3 py-2"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <WhyChooseUs />
    </>
  );
};

export default Home;
