import React, { useEffect, useRef, useState } from "react";
import "../Styles/NeedPeople.css";

import needLeft from "../assets/images/need-left.jpeg";
import needRight from "../assets/images/need-right.jpeg";
import heartImage from "../assets/images/heart-image.png";

const NeedPeople = () => {

  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const youtubeVideo =
    "https://www.youtube.com/embed/ScMzIvxBSi4?autoplay=1&rel=0";

  const openVideo = () => {
    setIsVideoOpen(true);
  };

  const closeVideo = () => {
    setIsVideoOpen(false);
  };

  /* =====================================================
     COUNTERS
  ===================================================== */

  const statsRef = useRef(null);

  const [counts, setCounts] = useState({
    projects: 0,
    members: 0,
    reviews: 0,
    awards: 0,
  });

  const [hasAnimated, setHasAnimated] = useState(false);

  /* =====================================================
     DETECT SECTION SCROLL
  ===================================================== */

  useEffect(() => {
    const section = statsRef.current;

    if (!section) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      {
        threshold: 0.35,
      }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, [hasAnimated]);

  /* =====================================================
     COUNTER ANIMATION
  ===================================================== */

  useEffect(() => {
    if (!hasAnimated) {
      return;
    }

    const targets = {
      projects: 2487,
      members: 1247,
      reviews: 2450,
      awards: 357,
    };

    const duration = 2200;
    const startTime = performance.now();

    let animationFrame;

    const animateNumbers = (currentTime) => {
      const elapsed = currentTime - startTime;

      const progress = Math.min(
        elapsed / duration,
        1
      );

      const easeOut =
        1 - Math.pow(1 - progress, 3);

      setCounts({
        projects: Math.floor(
          targets.projects * easeOut
        ),

        members: Math.floor(
          targets.members * easeOut
        ),

        reviews: Math.floor(
          targets.reviews * easeOut
        ),

        awards: Math.floor(
          targets.awards * easeOut
        ),
      });

      if (progress < 1) {
        animationFrame =
          requestAnimationFrame(
            animateNumbers
          );
      } else {
        setCounts(targets);
      }
    };

    animationFrame =
      requestAnimationFrame(
        animateNumbers
      );

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [hasAnimated]);

  /* =====================================================
     ESC KEY
  ===================================================== */

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsVideoOpen(false);
      }
    };

    document.addEventListener(
      "keydown",
      handleEscape
    );

    return () => {
      document.removeEventListener(
        "keydown",
        handleEscape
      );
    };
  }, []);

  return (
    <>
      <section
        className="need-people-section"
        ref={statsRef}
      >

        {/* LEFT IMAGE */}

        <div className="need-people-left">

          <img
            src={needLeft}
            alt="People helping"
            className="need-left-image"
          />

          <div className="need-left-overlay"></div>

          <div className="need-content">

            <h2>
              We always help the
              <br />
              needy people
            </h2>

            <p>
              Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Distinctio neque delectus
              labore consectetur eos corrupti.
            </p>

            {/* COUNTERS */}

            <div className="need-stats">

              <div className="need-stat-box">
                <h3>
                  {counts.projects}
                  <span>+</span>
                </h3>

                <p>
                  Completer Projects
                </p>
              </div>

              <div className="need-stat-box">
                <h3>
                  {counts.members}
                  <span>+</span>
                </h3>

                <p>
                  Team Member
                </p>
              </div>

              <div className="need-stat-box">
                <h3>
                  {counts.reviews}
                  <span>+</span>
                </h3>

                <p>
                  Clients Review
                </p>
              </div>

              <div className="need-stat-box">
                <h3>
                  {counts.awards}
                  <span>+</span>
                </h3>

                <p>
                  Wining Awards
                </p>
              </div>

            </div>

          </div>

        </div>

        {/* RIGHT IMAGE */}

        <div className="need-people-right">

          <img
            src={needRight}
            alt="Mother and child"
            className="need-right-image"
          />

          <img
            src={heartImage}
            alt=""
            className="heart-decoration-image"
          />

        </div>

        {/* VIDEO BUTTON */}

        <button
          type="button"
          className="need-play-button"
          onClick={openVideo}
          aria-label="Watch video"
        >
          <span className="need-play-icon"></span>
        </button>

        {/* TOP WAVE */}

        <div className="need-top-wave">

          <svg
            viewBox="0 0 1440 70"
            preserveAspectRatio="none"
          >
            <path
              d="
                M0,25
                C50,12 85,35 135,24
                C185,12 220,32 275,20
                C330,8 370,30 425,20
                C480,10 520,30 575,19
                C630,8 675,32 730,20
                C785,8 830,30 885,18
                C940,7 980,30 1035,18
                C1090,7 1130,31 1185,19
                C1240,7 1290,30 1340,18
                C1385,8 1415,27 1440,18
                L1440,0
                L0,0
                Z
              "
            />
          </svg>

        </div>

        {/* BOTTOM WAVE */}

        <div className="need-bottom-wave">

          <svg
            viewBox="0 0 1440 80"
            preserveAspectRatio="none"
          >
            <path
              d="
                M0,55
                C60,38 110,70 175,50
                C240,30 300,72 365,51
                C430,30 490,70 555,50
                C620,30 680,72 745,51
                C810,30 870,70 935,50
                C1000,30 1060,72 1125,51
                C1190,30 1250,70 1315,50
                C1370,34 1410,60 1440,46
                L1440,80
                L0,80
                Z
              "
            />
          </svg>

        </div>

      </section>

      {/* VIDEO POPUP */}

      {isVideoOpen && (

        <div
          className="video-modal"
          onClick={closeVideo}
        >

          <div
            className="video-modal-content"
            onClick={(event) =>
              event.stopPropagation()
            }
          >

            <button
              type="button"
              className="video-close"
              onClick={closeVideo}
              aria-label="Close video"
            >
              ×
            </button>

            <div className="youtube-container">

              <iframe
                src={youtubeVideo}
                title="Donation video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>

            </div>

          </div>

        </div>

      )}

    </>
  );
};

export default NeedPeople;