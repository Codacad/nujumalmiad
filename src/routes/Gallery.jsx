import React, { useState } from "react";

const Gallery = () => {
  const [currentImg, setCurrentImg] = useState();
  const [activeId, setActiveId] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [enabelSlide, setEnabelSlide] = useState(false);
  const galleryImages = [
    {
      id: 1,
      img_url: "/images/gallery/img1.jpg",
    },
    {
      id: 2,
      img_url: "/images/gallery/img2.jpg",
    },
    {
      id: 3,
      img_url: "/images/gallery/img3.jpg",
    },
    {
      id: 4,
      img_url: "/images/gallery/img4.jpg",
    },
    {
      id: 5,
      img_url: "/images/gallery/img5.jpg",
    },
    {
      id: 6,
      img_url: "/images/gallery/img6.jpg",
    },
    {
      id: 7,
      img_url: "/images/gallery/img7.jpg",
    },
    {
      id: 8,
      img_url: "/images/gallery/img8.jpg",
    },
    {
      id: 9,
      img_url: "/images/gallery/img9.jpg",
    },
    {
      id: 10,
      img_url: "/images/gallery/img10.jpg",
    },
    {
      id: 11,
      img_url: "/images/gallery/img11.jpg",
    },
    {
      id: 12,
      img_url: "/images/gallery/img12.jpg",
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

  return (
    <>
      <div className="gallery p-8 relative">
        <div
          className={`images grid grid-cols-4 gap-4 relative`}
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
            className={`images absolute z-10 top-0 bg-gray-50 left-0 w-full h-[100vh] ${
              enabelSlide ? "scale-100 visible" : "scale-0 invisible"
            }`}
          >
            <img
              className={`w-full h-[80%] object-cover object-center cursor-zoom-in rounded-lg`}
              src={galleryImages[currentIndex].img_url}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
