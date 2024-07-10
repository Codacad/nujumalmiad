import { v4 as uuidv4 } from "uuid";
const services = [
  {
    id: uuidv4(),
    name: "Contracting Services",
    short_description:
      "Offering top-notch professional contracting services for all your project needs.",
    details: [
      {
        id: uuidv4(),
        title: "Professional Contracting Services",
        description:
          "Our professional contracting services encompass a wide range of project management and execution capabilities. With years of experience in the industry, our team is equipped to handle projects of varying scales and complexities. From initial planning and design to the final execution and completion, we ensure that every step is meticulously managed to meet client specifications and industry standards. Our services include but are not limited to residential and commercial construction, infrastructure development, and specialized project contracting. We prioritize quality, safety, and sustainability in all our projects, ensuring that we deliver exceptional results on time and within budget. Trust us to bring your vision to life with our comprehensive and professional contracting services.",
      },
    ],
  },
  {
    id: uuidv4(),
    name: "Manpower Supply",
    short_description:
      "Providing skilled and unskilled manpower to meet your labor needs.",
    details: [
      {
        id: uuidv4(),
        title: "Skilled & Unskilled Manpower Supply",
        description:
          "We specialize in providing both skilled and unskilled manpower to meet the diverse needs of various industries. Our manpower supply services are designed to help businesses achieve their operational goals by providing the right personnel for the job. Whether you need temporary workers for a short-term project or long-term staffing solutions, we have a vast pool of qualified candidates ready to step in. Our skilled manpower includes technicians, engineers, and professionals with specialized training and certifications, while our unskilled manpower consists of general laborers and support staff. We carefully screen and select our candidates to ensure they meet the specific requirements of your projects, helping you maintain productivity and efficiency. Partner with us for reliable and cost-effective manpower solutions.",
      },
    ],
  },
  {
    id: uuidv4(),
    name: "Civil Construction & Maintenance",
    short_description:
      "Expert civil construction and maintenance services for your infrastructure projects.",
    details: [
      {
        id: uuidv4(),
        title: "Civil Construction & Maintenance",
        description:
          "Our civil construction and maintenance services cover a broad spectrum of activities essential for the development and upkeep of infrastructure. From constructing new buildings and roads to maintaining and repairing existing structures, our team of experienced professionals is equipped to handle all aspects of civil engineering projects. We use advanced construction techniques and state-of-the-art equipment to ensure high-quality results that comply with regulatory standards. Our services include site preparation, foundation work, structural construction, and routine maintenance tasks such as inspections, repairs, and upgrades. We are committed to delivering durable and sustainable solutions that enhance the longevity and functionality of your infrastructure. Trust our expertise to manage your civil construction and maintenance needs efficiently and effectively.",
      },
    ],
  },
  {
    id: uuidv4(),
    name: "Mechanical Maintenance",
    short_description:
      "Reliable mechanical maintenance services to keep your machinery running smoothly.",
    details: [
      {
        id: uuidv4(),
        title: "Expert Mechanical Maintenance",
        description:
          "Our expert mechanical maintenance services are designed to ensure the optimal performance and longevity of your machinery and equipment. We offer comprehensive maintenance solutions that include regular inspections, preventive maintenance, troubleshooting, and repairs. Our team of skilled technicians is proficient in handling a wide range of mechanical systems and equipment, from industrial machinery to HVAC systems. We use advanced diagnostic tools and techniques to identify potential issues before they become major problems, minimizing downtime and reducing repair costs. Our maintenance programs are tailored to meet the specific needs of your operations, ensuring that your equipment runs efficiently and reliably. With our expert mechanical maintenance services, you can focus on your core business activities while we take care of your mechanical assets.",
      },
    ],
  },
  {
    id: uuidv4(),
    name: "Electrical Maintenance",
    short_description:
      "Dependable electrical maintenance services for safe and efficient electrical systems.",
    details: [
      {
        id: uuidv4(),
        title: "Reliable Electrical Maintenance",
        description:
          "Our reliable electrical maintenance services are essential for maintaining the safety and efficiency of your electrical systems. We provide a full range of maintenance solutions, including routine inspections, preventive maintenance, troubleshooting, and emergency repairs. Our team of certified electricians has extensive experience in handling various types of electrical systems, from residential and commercial installations to industrial power systems. We use the latest tools and technologies to ensure accurate diagnostics and effective maintenance. Our services help prevent electrical failures, reduce energy consumption, and extend the lifespan of your electrical components. We prioritize safety and compliance with industry standards, ensuring that your electrical systems operate reliably and efficiently. Rely on us for dependable electrical maintenance services that keep your operations running smoothly.",
      },
    ],
  },
];

export default services