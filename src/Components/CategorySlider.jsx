import React, { useState } from "react";
import "../Styles/CategorySlider.css";

const CategorySlider = () => {
  const [slide, setSlide] = useState(0);

  const categories = [
    {
      name: "Education",
      image:
        "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Medical Help",
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Environment",
      image:
        "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Healthy Foods",
      image:
        "https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Financial Support",
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Cancer Treatment",
      image:
        "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=600&q=80",
    },
  ];

  const displayedCategories = [
    ...categories.slice(slide),
    ...categories.slice(0, slide),
  ];

  const moveFirst = () => {
    setSlide(0);
  };

  const moveNext = () => {
    setSlide((currentSlide) => {
      return (currentSlide + 1) % categories.length;
    });
  };

  return (
    <section className="category-section">

      <div className="category-label">
        CAMPAIGNS CATEGORY
      </div>

      <h2 className="category-title">
        Browse by Category
      </h2>

      <div className="category-slider">

        <div className="category-container">

          {displayedCategories.map((category) => (
            <div
              className="category-card"
              key={category.name}
            >
              <img
                src={category.image}
                alt={category.name}
              />

              <h3>
                {category.name}
              </h3>
            </div>
          ))}

        </div>

      </div>

      <div className="slider-dots">

        <button
          type="button"
          className={`dot ${
            slide === 0 ? "active-dot" : ""
          }`}
          onClick={moveFirst}
          aria-label="First category position"
        ></button>

        <button
          type="button"
          className={`dot ${
            slide !== 0 ? "active-dot" : ""
          }`}
          onClick={moveNext}
          aria-label="Next category position"
        ></button>

      </div>

    </section>
  );
};

export default CategorySlider;