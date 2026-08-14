import React from "react";
import "../Styles/Services.css";

const Services = () => {
  const services = [
    {
      icon: "bi-mortarboard",
      title: "Education",
      color: "green",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam ipsum alias vero? Ullam, nostrum qui!",
    },
    {
      icon: "bi-hand-heart",
      title: "Financial Support",
      color: "pink",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam ipsum alias vero? Ullam, nostrum qui!",
    },
    {
      icon: "bi-virus",
      title: "Cancer Treatment",
      color: "blue",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam ipsum alias vero? Ullam, nostrum qui!",
    },
    {
      icon: "bi-person-heart",
      title: "Non profit",
      color: "purple",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam ipsum alias vero? Ullam, nostrum qui!",
    },
    {
      icon: "bi-person-badge",
      title: "Medical Help",
      color: "orange",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam ipsum alias vero? Ullam, nostrum qui!",
    },
    {
      icon: "bi-house-heart",
      title: "Home benefits",
      color: "violet",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam ipsum alias vero? Ullam, nostrum qui!",
    },
  ];

  return (
    <section className="services-section" id="services">

      <div className="container">

        {/* HEADING */}
        <div className="services-heading text-center">

          <span className="services-label">
            SERVICES
          </span>

          <h2>
            The services we provide
          </h2>

        </div>


        {/* SERVICES */}
        <div className="services-grid">

          {services.map((service, index) => (

            <div
              className={`service-card ${service.color}`}
              key={index}
            >

              {/* ICON */}
              <div className="service-icon">
                <i className={`bi ${service.icon}`}></i>
              </div>


              {/* CONTENT */}
              <div className="service-content">

                <h3>
                  {service.title}
                </h3>

                <p>
                  {service.description}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Services;