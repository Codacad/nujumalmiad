import React, { useEffect, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
const Gallery = () => {
  const [currentImg, setCurrentImg] = useState();
  const [activeId, setActiveId] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [enabelSlide, setEnabelSlide] = useState(false);
  const galleryImages = [
    {
      id: 1,
      img_url: "/images/gallery/img1.webp",
    },
    {
      id: 2,
      img_url: "/images/gallery/img2.jpeg",
    },
    {
      id: 3,
      img_url: "/images/gallery/img3.jpeg",
    },
    {
      id: 4,
      img_url: "/images/gallery/img4.jpeg",
    },
    {
      id: 5,
      img_url: "/images/gallery/img5.jpeg",
    },
    {
      id: 6,
      img_url: "/images/gallery/img6.jpeg",
    },
    {
      id: 7,
      img_url: "/images/gallery/img7.jpeg",
    },
    {
      id: 8,
      img_url: "/images/gallery/img8.jpeg",
    },
    {
      id: 9,
      img_url: "/images/gallery/img9.jpeg",
    },
    {
      id: 10,
      img_url: "/images/gallery/img10.jpeg",
    },
    {
      id: 11,
      img_url: "/images/gallery/img11.webp",
    },
    {
      id: 12,
      img_url: "/images/gallery/img12.jpeg",
    },
  ];

  const handleZoomIn = (id, index) => {
    if (activeId === id) {
      setActiveId(null);
    } else {
      setActiveId(id);
    }
    setCurrentIndex(index);
    setEnabelSlide(true);
  };

  useEffect(() => {
    if (enabelSlide) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [enabelSlide]);

  const handlePrevImage = () => {
    setCurrentIndex(currentIndex - 1);

    if (currentIndex <= 0) {
      setCurrentIndex(galleryImages.length - 1);
    }
  };
  const handleNextImage = () => {
    setCurrentIndex(currentIndex + 1);

    if (currentIndex >= galleryImages.length - 1) {
      setCurrentIndex(0);
    }
  };
  return (
    <>
      <div className={`gallery p-8 relative`}>
        <div
          className={`images grid md:grid-cols-4 grid-cols-1 gap-4 relative`}
        >
          {galleryImages.map((img, index) => (
            <img
              onClick={() => handleZoomIn(img.id, index)}
              className={`w-full h-full object-cover object-center cursor-zoom-in rounded-lg`}
              key={index}
              src={img.img_url}
            />
          ))}
          <div
            className={`images fixed z-10 top-0 md:p-16 p-4 bg-gray-950 left-0 w-full h-[100vh] transition-all duration-300 ease-out ${
              enabelSlide ? "scale-100 visible" : "scale-0 invisible"
            }`}
          >
            <span
              onClick={() => setEnabelSlide(false)}
              className="p-1 hover:bg-[rgba(255,255,255,.2)] cursor-pointer rounded-full absolute right-6 top-6 z-10"
            >
              <IoCloseSharp className="text-gray-200 font-bold" size={30} />
            </span>
            <div className="w-full md:h-[80%] h-[50vh] relative">
              <img
                className={`h-full w-full object-cover object-center rounded-lg my-auto`}
                src={galleryImages[currentIndex].img_url}
              />
              <div
                onClick={() => handlePrevImage()}
                className="img-prev absolute top-[50%] cursor-pointer left-6 w-12 h-12 -translate-y-[50%] rounded-full flex justify-center items-center bg-[rgba(0,0,0,0.2)]"
              >
                <FaArrowLeft size={30} className="text-gray-200" />
              </div>
              <div
                onClick={() => handleNextImage()}
                className="img-next absolute top-[50%] right-6 cursor-pointer w-12 h-12 -translate-y-[50%] rounded-full flex justify-center items-center bg-[rgba(0,0,0,0.2)]"
              >
                <FaArrowRight size={30} className="text-gray-200" />
              </div>
            </div>
            <div className="md:flex hidden justify-center gap-2 items-center py-6">
              {galleryImages.map((img, index) => (
                <img
                  onClick={() => handleZoomIn(img.id, index)}
                  className={`w-24 h-24 object-cover object-center cursor-pointer rounded-lg transition-all duration-200 ease-in ${
                    currentIndex == index ? "opacity-50 w-28 h-28" : ""
                  }`}
                  key={index}
                  src={img.img_url}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
