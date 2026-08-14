import React from "react";
import "../Styles/LatestNews.css";
import news1 from "../assets/images/news-1.jpeg";
import news2 from "../assets/images/news-2.jpeg";
import news3 from "../assets/images/news-3.jpg";

const LatestNews = () => {
  const news = [
    {
    image: news1,
    date: "March 23, 2025",
    author: "Eleanor Fant",
    title: "Mission Accomplished: Charity Completes Successful Relief",
  },
    {
      image: news2,
      date: "March 23, 2025",
      author: "Eleanor Fant",
      title: "Behind the Scenes of Change: Unveiling the Faces.",
    },
    {
      image: news3,
      date: "March 23, 2025",
      author: "Eleanor Fant",
      title: "Local Charity Gala Raises Record-Breaking Funds.",
    }
  ];

  return (
    <section className="latest-news-section">

      {/* Heading */}
      <div className="container">

        <div className="latest-news-heading text-center">

          <div className="latest-news-label">
            LATEST NEWS
          </div>

          <h2>
            Insights Hub: Explore Our
            <br />
            Latest News
          </h2>

        </div>

        {/* News Cards */}
        <div className="row g-4 latest-news-row">

          {news.map((item, index) => (
            <div
              className="col-lg-4 col-md-6"
              key={index}
            >

              <article className="news-card">

                {/* Image */}
                <div className="news-image-wrapper">

                  <img
                    src={item.image}
                    alt={item.title}
                    className="news-image"
                  />

                </div>

                {/* Content */}
                <div className="news-content">

                  {/* Date & Author */}
                  <div className="news-meta">

                    <span>
                      <i className="bi bi-calendar3"></i>
                      {item.date}
                    </span>

                    <span>
                      <i className="bi bi-person"></i>
                      By {item.author}
                    </span>

                  </div>

                  {/* Title */}
                  <h3>
                    {item.title}
                  </h3>

                </div>

              </article>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default LatestNews;