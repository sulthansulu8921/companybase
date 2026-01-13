
// // src/pages/Home.jsx
// import React from "react";
// import {
//   FaWifi,
//   FaCogs,
//   FaRecycle,
//   FaBriefcase,
//   FaDoorOpen,
//   FaHome,
//   FaWhatsapp,
//   FaPhoneAlt,
// } from "react-icons/fa";

// import "../Home.css";

// const Home = ({ setCurrentPage }) => {
//   const companies = [
//     { title: "Connect Integrated Telecom Services", desc: "Advanced telecommunication solutions connecting the world.", icon: <FaWifi />, page: "telecom" },
//     { title: "Vibes Business solution", desc: "Comprehensive business growth strategies.", icon: <FaBriefcase />, page: "business" },
//     { title: "Connect Engineering and Infrastructure", desc: "Building innovation with precision and excellence.", icon: <FaCogs />, page: "engineering" },
//     { title: "Suraksha Doors and Windows", desc: "Premium, secure, and aesthetic home protection systems.", icon: <FaDoorOpen />, page: "suraksha" },
//     { title: "Connect Bin Care Solutions", desc: "Smart and sustainable waste management.", icon: <FaRecycle />, page: "bincare" },
//     { title: "Connect Home Renovations", desc: "Transforming living spaces with modern design.", icon: <FaHome />, page: "renovations" },
//   ];

//   return (
//     <div className="connect-container">
//       {/* WhatsApp Icon - Left */}
//       <a
//         href="https://wa.me/919946229098"
//         target="_blank"
//         rel="noreferrer"
//         className="floating-icon left-icon icon-whatsapp"
//         aria-label="WhatsApp"
//       >
//         <FaWhatsapp size={30} />
//       </a>

//       {/* Call Icon - Right */}
//       <a
//         href="tel:+919946229098"
//         className="floating-icon right-icon call-icon"
//         aria-label="Call"
//       >
//         <FaPhoneAlt size={28} />
//       </a>

//       {/* Cards */}
//       <div className="cards-grid" data-testid="cards-grid">
//         {companies.map((item, index) => (
//           <div
//             key={index}
//             className="connect-card"
//             role="button"
//             tabIndex={0}
//             onClick={() => {
//               console.log("card clicked:", item.page);
//               setCurrentPage(item.page);
//             }}
//             onKeyDown={(e) => {
//               if (e.key === "Enter" || e.key === " ") {
//                 console.log("card activated by keyboard:", item.page);
//                 setCurrentPage(item.page);
//               }
//             }}
//           >
//             <div className="card-icon">{item.icon}</div>
//             <h2>{item.title}</h2>
//             <p>{item.desc}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Home;



// // src/pages/Home.jsx
// import React from "react";
// import {
//   FaWifi,
//   FaCogs,
//   FaRecycle,
//   FaBriefcase,
//   FaDoorOpen,
//   FaHome,
// } from "react-icons/fa";
// import "../Home.css";

// const Home = ({ setCurrentPage }) => {
//   const companies = [
//     { title: "Connect Integrated Telecom Services", icon: <FaWifi />, page: "telecom" },
//     { title: "Vibes Business Solution", icon: <FaBriefcase />, page: "business" },
//     { title: "Connect Engineering and Infrastructure", icon: <FaCogs />, page: "engineering" },
//     { title: "Suraksha Doors and Windows", icon: <FaDoorOpen />, page: "suraksha" },
//     { title: "Connect Bin Care Solutions", icon: <FaRecycle />, page: "bincare" },
//     { title: "Connect Home Renovations", icon: <FaHome />, page: "renovations" },
//   ];

//   return (
//     <div className="connect-container">
//       <div className="cards-grid">
//         {companies.map((item, index) => (
//           <div
//             key={index}
//             className="connect-card"
//             onClick={() => setCurrentPage(item.page)}
//           >
//             <div className="card-icon">{item.icon}</div>
//             <h2>{item.title}</h2>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Home;




// src/pages/Home.jsx
import React from "react";
import Carousel from "../components/layout/Carousel";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

const Home = () => {
  return (
    <div>
      <Carousel />
       {/* WhatsApp Icon - Left */}
            <a
              href="https://wa.me/919946229098"
              target="_blank"
              rel="noreferrer"
              className="floating-icon left-icon icon-whatsapp"
              aria-label="WhatsApp"
            >
              <FaWhatsapp size={30} />
            </a>
      
            {/* Call Icon - Right */}
            <a
              href="tel:+919946229098"
              className="floating-icon right-icon call-icon"
              aria-label="Call"
            >
              <FaPhoneAlt size={28} />
            </a>
    </div>
  );
};

export default Home;
