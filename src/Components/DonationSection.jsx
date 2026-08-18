import React, { useState } from "react";

import donationImg from "../assets/images/donation-img.jpg";
import donationBg from "../assets/images/donation-bg.jpg";
import "../Styles/DonationSection.css";

const DonationSection = () => {
  const [amount, setAmount] = useState(200);

  const amounts = [100, 200, 300];

  const handleCustomAmount = () => {
    const value = window.prompt("Enter donation amount:");

    if (value && !isNaN(value) && Number(value) > 0) {
      setAmount(Number(value));
    }
  };

  return (
    <section
      className="donation-section"
      style={{
        "--donation-bg": `url(${donationBg})`,
      }}
    >
      {/* TOP BACKGROUND DARK OVERLAY */}
      <div className="donation-bg-overlay"></div>

      {/* TOP TORN / CRACK EFFECT */}
      <div className="donation-top-crack"></div>

      {/* MAIN CONTENT */}
      <div className="container donation-container">
        <div className="donation-card">

          {/* LEFT SIDE */}
          <div className="donation-content">

            {/* Label */}
            <div className="donation-label">
              MAKE A DIFFERENCE
            </div>

            {/* Heading */}
            <h2>
              Your Donation Can
              <br />
              Change Someone's Life
            </h2>

            {/* Description */}
            <div className="donation-description">
              <p>
                We've granted more than 120,000 wishes all over
                the world. Your generous donation can help us
                continue making a difference.
              </p>
            </div>

            {/* Donation Title */}
            <h4>
              Your Donation:
            </h4>

            {/* Amount Display */}
            <div className="donation-amount-box">
              <span className="dollar-icon">
                $
              </span>

              <span className="amount-value">
                {amount}
              </span>
            </div>

            {/* Amount Buttons */}
            <div className="donation-buttons">

              {amounts.map((value) => (
                <button
                  key={value}
                  type="button"
                  className={amount === value ? "selected" : ""}
                  onClick={() => setAmount(value)}
                >
                  ${value}
                </button>
              ))}

              {/* Custom Amount */}
              <button
                type="button"
                className={
                  !amounts.includes(amount)
                    ? "selected"
                    : ""
                }
                onClick={handleCustomAmount}
              >
                Custom
              </button>

            </div>

            {/* Donate Button */}
            <button
              type="button"
              className="donate-now-btn"
            >
              DONATE NOW
              <i className="bi bi-arrow-up-right"></i>
            </button>

          </div>

          {/* RIGHT IMAGE */}
          <div className="donation-image-wrapper">
            <img
              src={donationImg}
              alt="Child receiving support"
              className="donation-image"
            />
          </div>

        </div>
      </div>
    </section>
  );
};
export default DonationSection;