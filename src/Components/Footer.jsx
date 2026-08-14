import React from "react";
import "../Styles/Footer.css";
const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="donatia-footer">

      {/* Dark overlay */}
      <div className="footer-overlay"></div>

      {/* Decorative yellow line */}
      <svg
        className="footer-decoration"
        viewBox="0 0 180 600"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="
            M100 0
            C50 60 80 120 120 180
            C160 240 150 290 80 315
            C20 335 25 390 75 405
            C125 420 145 380 115 360
          "
        />
        <circle cx="70" cy="335" r="22" />
      </svg>


      <div className="container footer-container">

        <div className="row">

          {/* =========================
              CONTACT / LOGO
          ========================= */}
          <div className="col-lg-4 col-md-6">

            <div className="footer-column footer-contact">

              <div className="footer-logo">

                <div className="footer-logo-symbol">
                  <i className="bi bi-heart-fill"></i>
                </div>

                <div>
                  <strong>Donatia</strong>
                  <small>NON PROFIT</small>
                </div>

              </div>


              <div className="footer-contact-item">
                <i className="bi bi-envelope"></i>
                <span>example@gmail.com</span>
              </div>


              <div className="footer-contact-item">
                <i className="bi bi-telephone"></i>
                <span>+(446) 256 234 98</span>
              </div>


              <div className="footer-contact-item">
                <i className="bi bi-geo-alt"></i>
                <span>
                  Sleepy Hollow Street 68/210.
                  <br />
                  New York 1423
                </span>
              </div>

            </div>

          </div>


          {/* =========================
              COMPANY
          ========================= */}
          <div className="col-lg-2 col-md-6">

            <div className="footer-column">

              <h4>Company</h4>

              <ul>
                <li>
                  <a href="#about">About Us</a>
                </li>

                <li>
                  <a href="#news">Our News</a>
                </li>

                <li>
                  <a href="#campaign">Our Campaign</a>
                </li>

                <li>
                  <a href="#contact">Contact Us</a>
                </li>

                <li>
                  <a href="#volunteer">
                    Become Volunteer
                  </a>
                </li>
              </ul>

            </div>

          </div>


          {/* =========================
              SERVICE
          ========================= */}
          <div className="col-lg-2 col-md-6">

            <div className="footer-column">

              <h4>Service</h4>

              <ul>
                <li>
                  <a href="#education">Education</a>
                </li>

                <li>
                  <a href="#medical">Medical Help</a>
                </li>

                <li>
                  <a href="#foods">Healthy Foods</a>
                </li>

                <li>
                  <a href="#environment">Environment</a>
                </li>

                <li>
                  <a href="#financial">
                    Financial Support
                  </a>
                </li>
              </ul>

            </div>

          </div>


          {/* =========================
              NEWSLETTER
          ========================= */}
          <div className="col-lg-4 col-md-6">

            <div className="footer-column footer-newsletter">

              <h4>Newsletter</h4>

              <form
                className="newsletter-form"
                onSubmit={(e) => e.preventDefault()}
              >

                <input
                  type="email"
                  placeholder="Subscribe"
                  aria-label="Email address"
                />

                <button type="submit">
                  <i className="bi bi-send"></i>
                </button>

              </form>


              {/* Social Media */}
              <div className="footer-social">

                <a href="#" aria-label="Facebook">
                  <i className="bi bi-facebook"></i>
                </a>

                <a href="#" aria-label="LinkedIn">
                  <i className="bi bi-linkedin"></i>
                </a>

                <a href="#" aria-label="Pinterest">
                  <i className="bi bi-pinterest"></i>
                </a>

                <a href="#" aria-label="Behance">
                  <i className="bi bi-behance"></i>
                </a>

                <a href="#" aria-label="Google">
                  <i className="bi bi-google"></i>
                </a>

              </div>

            </div>

          </div>

        </div>


        {/* =========================
            BOTTOM FOOTER
        ========================= */}
        <div className="footer-bottom">

          <p>
            Copyright © 2025 All Rights Reserved by NarzoTech
          </p>

          <div className="footer-bottom-links">

            <a href="#privacy">
              Privacy Policy
            </a>

            <a href="#terms">
              Terms &amp; Conditions
            </a>

          </div>

        </div>

      </div>


      {/* =========================
          SCROLL TOP
      ========================= */}
      <button
        className="footer-scroll-top"
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <i className="bi bi-arrow-up"></i>
      </button>

    </footer>
  );
};

export default Footer;