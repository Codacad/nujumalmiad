import React from "react";
import services from "../state/services";
const Services = () => {
  return (
    <>
      <div className="container">
        <header>
          <h4>Services</h4>
          <h1>Our Core Services</h1>
        </header>
        <div className="services">
          {services.map((service, index) => {
            return (
              <div className="service" key={index}>
                <div className="service__image">
                  <img src={service.image} alt={service.name} />
                </div>
                <div className="service__name">{service.name}</div>
                <div className="service__description">
                  {service.short_description}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Services;
