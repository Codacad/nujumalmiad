import { useState } from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { PiCaretCircleDoubleDownFill } from "react-icons/pi";
import { BiSolidCaretDownCircle } from "react-icons/bi";
import gsap from "gsap";
const CoreValuesCommitments = () => {
  const [activeID, setActiveID] = useState(null);
  const handleAccordion = (id) => {
    if (activeID == id) {
      setActiveID(null);
    } else {
      setActiveID(id);
    }
    console.log(id, activeID);
  };
  const additionalContent = [
    {
      id: 1,
      heading: "Our Commitment to Safety",
      mainDescription:
        "At Nujum Al Miad Contracting Est. (NMC), safety is our top priority. We adhere to the highest safety standards and practices to ensure the well-being of our employees and clients.",
      details: [
        "Regular safety training and certifications",
        "Strict adherence to industry safety regulations",
        "Use of personal protective equipment (PPE)",
        "Continuous monitoring and improvement of safety protocols",
        "Emergency response planning and drills",
      ],
    },
    {
      id: 2,
      heading: "Sustainability Initiatives",
      mainDescription:
        "We are committed to sustainable practices that minimize our environmental impact.",
      details: [
        "Use of eco-friendly materials and technologies",
        "Energy-efficient construction methods",
        "Waste reduction and recycling programs",
        "Water conservation techniques",
        "Community engagement and education on sustainability",
      ],
    },
    {
      id: 3,
      heading: "Technology and Innovation",
      mainDescription:
        "We leverage the latest technologies and innovative methods to deliver superior results.",
      details: [
        "Advanced project management software",
        "Building Information Modeling (BIM)",
        "Drone surveys and inspections",
        "3D printing for rapid prototyping",
        "Smart construction equipment and machinery",
      ],
    },
    {
      id: 4,
      heading: "Employee Training and Development",
      mainDescription:
        "We believe in continuous learning and development for our employees.",
      details: [
        "Ongoing technical and safety training",
        "Leadership and management workshops",
        "Certification courses and professional development",
        "Mentorship and coaching programs",
        "Support for continuing education and skill enhancement",
      ],
    },
    {
      id: 5,
      heading: "Community Engagement",
      mainDescription:
        "We are dedicated to making a positive impact in the communities we serve.",
      details: [
        "Sponsorship of local events and initiatives",
        "Volunteer work and charity drives",
        "Partnerships with local schools and organizations",
        "Environmental conservation projects",
        "Support for underprivileged communities",
      ],
    },
  ];

  return (
    <>
      <div className="core-values-commitment flex justify-center md:p-10 p-4 bg-primary font-spaceGrotesk">
        <div className="accrordion md:w-[70%] w-full flex flex-col gap-4">
          <h1 className="text-4xl text-gray-100 font-bold mb-4">
            Our Core Values and Commitments
          </h1>
          {additionalContent.map((accord) => (
            <div
              key={accord.id}
              className={`bg-[rgba(255,255,255,.1)] rounded-md ring-1 ring-primary hover:ring-2 hover:ring-secondary ${
                activeID === accord.id ? "active:" : ""
              }`}
            >
              <div
                onClick={() => handleAccordion(accord.id)}
                className="heading cursor-pointer py-2 px-4  flex justify-between items-center"
              >
                <h2 className="text-white font-bold">{accord.heading}</h2>
                <span>
                  <BiSolidCaretDownCircle
                    className={`text-xl text-white transition-all ease-linear duration-150 ${
                      activeID === accord.id ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </span>
              </div>
              <div
                className={`content bg-[rgba(255,255,255,.05)] ${
                  activeID == accord.id ? "active" : ""
                }`}
              >
                <div
                  className="h-0 overflow-hidden"
                  ref={(el) => {
                    if (el && activeID === accord.id) {
                      gsap.to(el, { height: "auto", duration: 0.5 });
                    } else if (el) {
                      gsap.to(el, { height: 0, duration: 0.5 });
                    }
                  }}
                >
                  <div className="p-4 text-gray-200">
                    <p className="text-gray-200 text-lg mb-4">
                      {accord.mainDescription}
                    </p>
                    <ul className="flex flex-col gap-2">
                      {accord.details.map((item, index) => (
                        <li
                          key={index}
                          className="flex items-center gap-2 text-gray-300"
                        >
                          <IoCheckmarkCircleOutline className="" size={20} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CoreValuesCommitments;
