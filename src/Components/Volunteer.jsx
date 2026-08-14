import React from "react";
import "../Styles/Volunteer.css";

import volunteerImage from "../assets/images/volunteer-img.jpg";
import volunteerBg from "../assets/images/volunteer-bg.jpg";

const Volunteer = () => {
  return (
    <section className="volunteer-section">

      <div className="container">

        <div className="volunteer-wrapper">

          {/* LEFT IMAGE */}
          <div className="volunteer-left">
            <img
              src={volunteerImage}
              alt="Volunteers helping people"
            />
          </div>


          {/* RIGHT CONTENT */}
          <div
            className="volunteer-right"
            style={{
              backgroundImage: `url(${volunteerBg})`,
            }}
          >

            <div className="volunteer-overlay"></div>

            <div className="volunteer-content">

              <h2>
                Join With Us As a Volunteer
              </h2>

              <p>
                There are many variations of passages of Lorem Ipsum
                available, but the majority have suffered alteration in
                some form, by injected humour, or randomised words which.
              </p>

              <ul>

                <li>
                  <i className="bi bi-check-circle"></i>
                  There are many variations of passages of Lorem Ipsum
                </li>

                <li>
                  <i className="bi bi-check-circle"></i>
                  The majority have suffered alteration in some
                </li>

                <li>
                  <i className="bi bi-check-circle"></i>
                  By injected humour or randomised words which
                </li>

                <li>
                  <i className="bi bi-check-circle"></i>
                  There are many variations of passages of Lorem Ipsum
                </li>

              </ul>

              <a href="#volunteer" className="volunteer-btn">
                JOIN VOLUNTEER
                <i className="bi bi-arrow-up-right"></i>
              </a>

            </div>


            {/* Heart */}
            <div className="volunteer-heart">
              <i className="bi bi-heart"></i>
              <i className="bi bi-heart-fill"></i>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Volunteer;