import React from "react";
import "../Styles/ScrollingWords.css";

const ScrollingWords = () => {

  const words = [
    "Health",
    "Support",
    "Donation",
    "Medical",
    "Healthy Foods",
    "Education",
    "Hope",
    "Care",
    "Together",
    "Kindness",
    "Charity",
    "Community",
  ];

  return (
    <section className="donation-marquee-section">

      <div className="donation-marquee">

        <div className="donation-marquee-track">

          {/* FIRST SET */}

          {words.map((word, index) => (
            <React.Fragment key={`first-${index}`}>

              <span
                className={`marquee-word ${
                  index % 2 === 0
                    ? "marquee-outline"
                    : "marquee-filled"
                }`}
              >
                {word}
              </span>

              <span className="marquee-star">
                ✦
              </span>

            </React.Fragment>
          ))}

          {/* DUPLICATE SET FOR INFINITE LOOP */}

          {words.map((word, index) => (
            <React.Fragment key={`second-${index}`}>

              <span
                className={`marquee-word ${
                  index % 2 === 0
                    ? "marquee-outline"
                    : "marquee-filled"
                }`}
              >
                {word}
              </span>

              <span className="marquee-star">
                ✦
              </span>

            </React.Fragment>
          ))}

        </div>

      </div>

    </section>
  );
};

export default ScrollingWords;