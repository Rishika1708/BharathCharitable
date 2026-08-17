import React, { useState } from "react";
import "../Styles/EventsPrograms.css";

// 1. IMAGES IMPORT
import eventImg1 from "../assets/Images/event_img_1.jpg";
import eventImg2 from "../assets/Images/event_img_2.jpg";
import eventImg3 from "../assets/Images/event_img_3.jpg";
import eventImg4 from "../assets/Images/event_img_4.jpg";

const EventsPrograms = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slidesData = [
    // SLIDE 1 (4 Cards)
    [
      {
        id: 1,
        date: "12, Mar 2026",
        location: "African City",
        title: "Education for Every Child",
        desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
        img: eventImg1,
      },
      {
        id: 2,
        date: "12, Mar 2026",
        location: "African City",
        title: "Education for Every Child",
        desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
        img: eventImg2,
      },
      {
        id: 3,
        date: "12, Mar 2026",
        location: "African City",
        title: "Education for Every Child",
        desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
        img: eventImg3,
      },
      {
        id: 4,
        date: "12, Mar 2026",
        location: "African City",
        title: "Education for Every Child",
        desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
        img: eventImg4,
      },
    ],
    // SLIDE 2 (4 Cards) - SAME 4 IMAGES
    [
      {
        id: 5,
        date: "18, Apr 2026",
        location: "Asian Community",
        title: "Clean Water Initiative",
        desc: "Providing clean drinking water to remote villages worldwide.",
        img: eventImg1,
      },
      {
        id: 6,
        date: "22, Apr 2026",
        location: "South America",
        title: "Healthcare Support",
        desc: "Medical camps for underprivileged children.",
        img: eventImg2,
      },
      {
        id: 7,
        date: "05, May 2026",
        location: "African City",
        title: "Nutrition & Meals",
        desc: "Daily nutritious meal plans for primary schools.",
        img: eventImg3,
      },
      {
        id: 8,
        date: "15, May 2026",
        location: "Global Reach",
        title: "Shelter for All",
        desc: "Rebuilding safe houses and community learning spaces.",
        img: eventImg4,
      },
    ],
  ];

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slidesData.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slidesData.length) % slidesData.length);
  };

  return (
    <section className="event_3_section">
      <div className="container">
        <div className="row g-4 align-items-center position-relative">
          
          {/* CENTER DECORATIVE YELLOW SHAPE */}
          <div className="events_center_shape"></div>

          {/* LEFT BANNER (Hero Box) */}
          <div className="col-xl-4 col-lg-5">
            <div className="event_3_banner">
              <div className="event_3_banner_overlay"></div>
              <div className="event_3_banner_content">
                <span className="event_3_subtitle">EVENTS &amp; PROGRAMS</span>
                <h2 className="event_3_title">
                  Heroes in Action <br />
                  Disaster Relief <br />
                  Fundraiser
                </h2>
                <p className="event_3_text">
                  Our events are more than just gatherings they powerful
                  opportunities to bring communities together, raise awareness,
                  and generate.
                </p>
                <a href="#discover" className="event_3_btn">
                  DISCOVER MORE <i className="bi bi-arrow-up-right"></i>
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT CAROUSEL (2x2 Grid per Slide) */}
          <div className="col-xl-8 col-lg-7">
            <div className="event_3_right_wrapper">
              
              {/* SLIDER TRACK */}
              <div className="event_3_slider_container">
                <div
                  className="event_3_slider_track"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {slidesData.map((slide, sIdx) => (
                    <div className="event_3_slide" key={sIdx}>
                      <div className="row g-3">
                        {slide.map((item) => (
                          <div className="col-md-6 col-12" key={item.id}>
                            <div className="event_3_card">
                              <div className="event_3_card_img">
                                <img src={item.img} alt={item.title} />
                              </div>
                              <div className="event_3_card_content">
                                <div className="event_3_meta">
                                  <span>
                                    <i className="bi bi-calendar3"></i> {item.date}
                                  </span>
                                  <span>
                                    <i className="bi bi-geo-alt"></i> {item.location}
                                  </span>
                                </div>
                                <h4 className="event_3_card_title">{item.title}</h4>
                                <p className="event_3_card_text">{item.desc}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* BOTTOM NAVIGATION CONTROLS */}
              <div className="event_3_controls">
                <div className="event_3_arrows">
                  <button className="arrow_btn prev" onClick={handlePrev}>
                    <i className="bi bi-arrow-left"></i>
                  </button>
                  <button className="arrow_btn next" onClick={handleNext}>
                    <i className="bi bi-arrow-right"></i>
                  </button>
                </div>

                <div className="event_3_progress">
                  <div
                    className="event_3_progress_bar"
                    style={{
                      width: `${((currentSlide + 1) / slidesData.length) * 100}%`,
                    }}
                  ></div>
                </div>

                <a href="#discover-all" className="event_3_bottom_btn">
                  DISCOVER MORE <i className="bi bi-arrow-up-right"></i>
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default EventsPrograms;