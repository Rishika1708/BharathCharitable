import React, { useState } from "react";
import faqImage from "../assets/images/faq-img.jpeg";
import faqBg from "../assets/images/faq-bg.jpeg";
import "../Styles/FAQ.css";

const FAQ = () => {
  const [active, setActive] = useState(0);

  const faqs = [
    {
      question: "How Can I Get Involved In Fundraising For Your Charity?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, nulla quidem! Laboro minima earum perspiciatis praesentium nulla autem doloribus voluptatem ipsum, totam adipisci, quas hic eos et esse numquam laborum officiis consectetur inventore distinctio, repellat ipsam.",
    },
    {
      question: "Do You Have Any Upcoming Events Or Campaigns?",
      answer:
        "We regularly organize charity events, campaigns, and community activities. You can join us and support our mission through various programs throughout the year.",
    },
    {
      question: "What Impact Has Your Charity Made So Far?",
      answer:
        "Our campaigns help provide education, food, medical support, and financial assistance to communities in need. Thousands of children and families have already benefited.",
    },
    {
      question: "How Can I Volunteer With Your Organization?",
      answer:
        "You can contact our organization to become a volunteer and participate in our charity activities. We welcome people from all backgrounds.",
    },
    {
      question: "How Can I Donate To Your Organization?",
      answer:
        "You can donate through our donation page and choose the cause you would like to support. Every contribution makes a difference.",
    },
    {
      question: "How Can I Contact Your Charity?",
      answer:
        "You can contact us through email, phone, or our contact page. Our team is always ready to help and answer your questions.",
    },
  ];

  const toggleFAQ = (index) => {
    setActive(active === index ? -1 : index);
  };

  return (
    <section
      className="faq-section"
      id="faq"
      style={{ backgroundImage: `url(${faqBg})` }}
    >
      {/* Very light overlay only */}
      <div className="faq-bg-overlay"></div>

      <div className="container">
        <div className="faq-heading text-center">
          <span className="faq-label">FAQ'S</span>
          <h2>
            Common Queries: Your
            <br />
            Questions Answered
          </h2>
        </div>

        <div className="row align-items-center faq-row">
          <div className="col-lg-5">
            <div className="faq-image-wrapper">
              <div className="faq-image-circle">
                <img
                  src={faqImage}
                  alt="Child receiving support"
                  className="faq-image"
                />
              </div>
            </div>
          </div>

          <div className="col-lg-7">
            <div className="faq-list">
              {faqs.map((item, index) => (
                <div
                  className={`faq-item ${active === index ? "active" : ""}`}
                  key={index}
                >
                  <button
                    type="button"
                    className="faq-question"
                    onClick={() => toggleFAQ(index)}
                  >
                    <span>{item.question}</span>
                    <span className="faq-icon">
                      {active === index ? "−" : "+"}
                    </span>
                  </button>

                  {active === index && (
                    <div className="faq-answer">
                      <p>{item.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;