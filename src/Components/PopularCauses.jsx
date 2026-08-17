// import React from "react";
// import "../Styles/PopularCauses.css";

// // 1. Images-ஐ import செய்துகொள்ளவும்
// import img1 from "../assets/images/donate_card_img_1.jpeg";
// import img2 from "../assets/images/donate_card_img_2.jpeg";
// import img3 from "../assets/images/donate_card_img_3.jpeg";
// import img4 from "../assets/images/donate_card_img_4.jpeg";
// import img5 from "../assets/images/donate_card_img_5.jpeg";
// import img6 from "../assets/images/donate_card_img_6.jpeg";

// const PopularCauses = () => {
//   const causes = [
//     {
//       id: "cause-card-1",
//       category: "Education",
//       image: img1, 
//       percent: 65,
//       raised: "$4890.00",
//       goal: "$6000.00",
//       title: "Please help the children of Africa with food helpless.",
//     },
//     {
//       id: "cause-card-2",
//       category: "Education",
//       image: img2,
//       percent: 80,
//       raised: "$4890.00",
//       goal: "$6000.00",
//       title: "Empowerment Avenue: Paving the Way to Change.",
//     },
//     {
//       id: "cause-card-3",
//       category: "Education",
//       image: img3,
//       percent: 60,
//       raised: "$4890.00",
//       goal: "$6000.00",
//       title: "Dreams Made Real: Fueling Ambitions Changin.",
//     },
//     {
//       id: "cause-card-4",
//       category: "Education",
//       image: img4,
//       percent: 65,
//       raised: "$4890.00",
//       goal: "$6000.00",
//       title: "Please help the children of Africa with food helpless.",
//     },
//     {
//       id: "cause-card-5",
//       category: "Education",
//       image: img5,
//       percent: 80,
//       raised: "$4890.00",
//       goal: "$6000.00",
//       title: "Empowerment Avenue: Paving the Way to Change.",
//     },
//     {
//       id: "cause-card-6",
//       category: "Education",
//       image: img6,
//       percent: 60,
//       raised: "$4890.00",
//       goal: "$6000.00",
//       title: "Dreams Made Real: Fueling Ambitions Changin.",
//     },
//   ];

//   return (
//     <section className="popular-causes-section" id="causes">
//       <div className="container">
        
//         {/* Section Header */}
//         <div className="text-center mb-5 position-relative">
//           <h5 className="causes-badge">HELP THE PEOPLE</h5>
//           <h2 className="causes-main-title">
//             Find The Popular Cause <br /> And Donate Them
//           </h2>
//         </div>

//         {/* Causes Cards Grid */}
//         <div className="row g-4">
//           {causes.map((item) => (
//             <div className="col-lg-4 col-md-6" key={item.id}>
//               <div className="cause-card" id={item.id}>
                
//                 {/* Image & Badge */}
//                 <div className="cause-img-wrapper">
//                   <img src={item.image} alt={item.title} className="cause-img" />
//                   <span className="category-tag">{item.category}</span>
//                 </div>

//                 {/* Card Content */}
//                 <div className="cause-content">
                  
//                   {/* Progress Bar Header */}
//                   <div className="progress-header">
//                     <span className="donate-label">Donate</span>
//                   </div>

//                   {/* Progress Bar Container */}
//                   <div className="cause-progress-bar">
//                     <div
//                       className="progress-fill"
//                       style={{ width: `${item.percent}%` }}
//                     >
//                       <span className="percent-tooltip">{item.percent}%</span>
//                     </div>
//                   </div>

//                   {/* Stats Row */}
//                   <div className="cause-stats-row">
//                     <span>Raised {item.raised}</span>
//                     <span>Goals {item.goal}</span>
//                   </div>

//                   {/* Title */}
//                   <h3 className="cause-title">
//                     <a href="#cause-details">{item.title}</a>
//                   </h3>

//                   {/* Donate Button */}
//                   <a href="#donate" className="cause-donate-btn">
//                     DONATE NOW <i className="bi bi-arrow-up-right"></i>
//                   </a>

//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// };

// export default PopularCauses;