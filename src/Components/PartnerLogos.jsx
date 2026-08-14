import React, { useEffect, useState } from "react";
import "../Styles/PartnerLogos.css";
import logo1 from "../assets/images/logo-1.png";
import logo2 from "../assets/images/logo-2.png";
import logo3 from "../assets/images/logo-3.png";
import logo4 from "../assets/images/logo-4.png";
import logo5 from "../assets/images/logo-5.png";

const logos = [
   logo1,
  logo2,
  logo3,
  logo4,
  logo5,
  logo5,
  logo3,
];

const PartnerLogos = () => {
  const [startIndex, setStartIndex] = useState(0);

  const visibleCount = 5;

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prev) => (prev + 1) % logos.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setStartIndex((prev) => (prev + 1) % logos.length);
  };

  const prevSlide = () => {
    setStartIndex(
      (prev) => (prev - 1 + logos.length) % logos.length
    );
  };

  const visibleLogos = Array.from(
    { length: visibleCount },
    (_, index) => logos[(startIndex + index) % logos.length]
  );

  return (
    <section className="partner-logo-section">

      <div className="partner-logo-container">

        {/* LEFT BUTTON */}
        <button
          className="partner-arrow partner-arrow-left"
          onClick={prevSlide}
          aria-label="Previous"
        >
          <i className="bi bi-arrow-left"></i>
        </button>

        {/* LOGOS */}
        <div className="partner-logo-track">

          {visibleLogos.map((logo, index) => (
            <div className="partner-logo-box" key={index}>
              <img
                src={logo}
                alt={`Charity Partner ${index + 1}`}
              />
            </div>
          ))}

        </div>

        {/* RIGHT BUTTON */}
        <button
          className="partner-arrow partner-arrow-right"
          onClick={nextSlide}
          aria-label="Next"
        >
          <i className="bi bi-arrow-right"></i>
        </button>

      </div>

    </section>
  );
};

export default PartnerLogos;