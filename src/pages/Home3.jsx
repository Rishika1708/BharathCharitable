import React, { useState, useEffect } from "react";
import Header from "../Components/Header";
import "./styles/Home3.css"; 
import PopularCauses from "../Components/PopularCauses";
import EventsPrograms from "../Components/EventsPrograms";
import CategorySlider from "../Components/CategorySlider";
import NeedPeople from "../Components/NeedPeople";
import ScrollingWords from "../Components/ScrollingWords";
import DonationSection from "../Components/DonationSection";
import Services from "../Components/Services";
import Volunteer from "../Components/Volunteer";
import FAQ from "../Components/FAQ";
import PartnerLogos from "../Components/PartnerLogos";
import LatestNews from "../Components/LatestNews";
import Footer from "../Components/Footer";

// 1. Assets Import
import heroLineImg from "../assets/Images/home3_shapes_line.png"; 
import handIconImg from "../assets/Images/home3_shapes_hand1.png";
// import bannerImg from "../assets/Images/banner_3_img.png";
// import aboutImg from "../assets/Images/about_3_img.jpeg";

const Home3 = () => {
  // வார்த்தைகள் மாறுவதற்கான Array & State
  const words = ["Financial", "Medical", "Education", "Foods"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    // ஒவ்வொரு 2.5 விநாடிக்கும் வார்த்தையை மாற்றும் interval
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <div className="home3">
      <Header />

      {/* HERO SECTION */}
      <section className="donatia-hero">
        <div className="hero-dark-overlay"></div>

        <div className="container hero-container">
          <div className="row align-items-center h-100">
            
            {/* LEFT CONTENT */}
            <div className="col-lg-7">
              <div className="hero-content">
                
                {/* 2. சுருண்ட மஞ்சள் கோடு (Decorative Line) */}
                <div className="hero-decoration">
                  <img src={heroLineImg} alt="decorative line" />
                </div>

                <div className="hero-script">
                  Always Donate For Children's
                </div>

 <h1>
  Your Kindness Can
  <br />
  Light Up <span key={words[currentWordIndex]} className="animated-word">{words[currentWordIndex]}</span>
</h1>

                <p>
                  Join our mission to provide food, shelter, education,
                  and hope to communities in need.
                  <br />
                  Every act of kindness brings us closer to a better world.
                </p>

                {/* 3. பட்டன் மற்றும் கை சின்னம் (Hand Overlay Wrapper) */}
                <div className="hero-btn-wrapper">
                  <a href="#about" className="hero-discover-btn">
                    DISCOVER MORE
                    <i className="bi bi-arrow-up-right"></i>
                  </a>

                  {/* இடதுபுறம் அனிமேஷனுடன் அமைந்த கை சின்னம் */}
                  <div className="hero-hand-animated">
                    <img src={handIconImg} alt="animated hand" />
                  </div>
                </div>

              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="col-lg-5">
              <div className="hero-image-wrapper">
                <div className="yellow-splash splash-one"></div>
                <div className="yellow-splash splash-two"></div>
                <div className="yellow-splash splash-three"></div>

                <div className="child-image">
                  <img
                    src={bannerImg}
                    alt="Happy child"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom wave */}
        <div className="hero-bottom-wave">
          <svg viewBox="0 0 1440 150" preserveAspectRatio="none">
            <path d="M0,100 C180,40 300,130 480,90 C680,45 760,130 950,95 C1140,55 1260,130 1440,75 L1440,150 L0,150 Z" />
          </svg>
        </div>
      </section>

{/* =========================
   ABOUT US SECTION
========================== */}
<section className="about-us-section" id="about">
  <div className="container">
    <div className="row align-items-center g-4">
      
      {/* Left Column: Brush Stroke Image & Transparent Play Button */}
      <div className="col-lg-6">
        <div className="about-img-wrapper">
          <div className="sketch-brush-container">
            
            {/* Main Image Holder */}
            <div className="sketch-img-holder">
              <img
                src={aboutImg}
                alt="Child smiling"
                className="sketch-img"
              />
            </div>

            {/* Play Button with Light Yellow Outer Ring */}
            <div className="video-play-wrapper">
              <a
                href="https://youtu.be/5q1YBhJA-rU?si=1f6tbsqLvmb9jgUc"
                target="_blank"
                rel="noreferrer"
                className="video-play-btn"
                aria-label="Play Video"
              >
                <i className="bi bi-play"></i>
              </a>
            </div>

          </div>
        </div>
      </div>

      {/* Right Column: Content */}
      <div className="col-lg-6">
        <div className="about-content">
          <h5 className="section-badge">ABOUT US</h5>

          <h2 className="section-title">
            Help Children by Collecting <br />
            Priceless Contributions
          </h2>

          <p className="section-description">
            We help companies develop powerful corporate social responsibility, grantmaking,
            and employee engagement strategies. Our impact is about more than moving money
            to where it’s needed most—it’s also about helping non-profits.
          </p>

          {/* Feature Checklist with Top/Bottom Borders */}
          <div className="feature-list-container">
            <div className="row g-3">
              <div className="col-6">
                <div className="feature-item">
                  <span className="check-icon"><i className="bi bi-check-lg"></i></span>
                  <span>Giving Hope, Changing Lives</span>
                </div>
                <div className="feature-item">
                  <span className="check-icon"><i className="bi bi-check-lg"></i></span>
                  <span>Together We Can</span>
                </div>
                <div className="feature-item">
                  <span className="check-icon"><i className="bi bi-check-lg"></i></span>
                  <span>Every Act Counts</span>
                </div>
              </div>

              <div className="col-6">
                <div className="feature-item">
                  <span className="check-icon"><i className="bi bi-check-lg"></i></span>
                  <span>Empower Through Charity</span>
                </div>
                <div className="feature-item">
                  <span className="check-icon"><i className="bi bi-check-lg"></i></span>
                  <span>Healing Communities</span>
                </div>
                <div className="feature-item">
                  <span className="check-icon"><i className="bi bi-check-lg"></i></span>
                  <span>Compassion in Action</span>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Stats, Avatars & Button */}
          <div className="about-footer-row">
            <div className="campaign-stat">
              <h3>100+</h3>
              <p>Active Campaign</p>
            </div>

            <div className="avatar-group">
              <img src="https://i.pravatar.cc/100?img=12" alt="Donor 1" />
              <img src="https://i.pravatar.cc/100?img=33" alt="Donor 2" />
              <img src="https://i.pravatar.cc/100?img=60" alt="Donor 3" />
            </div>

            <a href="#discover" className="discover-now-btn">
              DISCOVER NOW <i className="bi bi-arrow-up-right"></i>
            </a>
          </div>

        </div>
      </div>

    </div>
  </div>
</section>

 {/* ================================
          CATEGORY SLIDER
      ================================= */}

      <CategorySlider />
  
    {/* ================================
          NEED PEOPLE
      ================================= */}

      <NeedPeople />

{/* Popular Causes Section */}
      <PopularCauses />


      {/* ================================
          SCROLLING WORDS
      ================================= */}

      <ScrollingWords />


{/* 2. Events & Programs Section */}
      <EventsPrograms />
{/* 2. Donation Section */}
      <DonationSection />
{/* 2. Services Section */}
      <Services />
{/* 2. Voulunteer  Section */}
    <Volunteer />
{/* 2. FAQ  Section */}
    <FAQ />
{/* 2. PartnerLogos  Section */}
    <PartnerLogos />
{/* 2. LatestNews  Section */}
    <LatestNews />
{/* =========================
          FOOTER
========================== */}
      <Footer />
    </div>
  );
};
 
export default Home3;
