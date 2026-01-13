
// import React, { useState, useEffect } from "react";
// import Navbar from "./components/layout/Navbar";
// import Footer from "./components/layout/Footer";

// // Pages
// import Home from "./pages/Home";
// import CompanyDetail from "./pages/CompanyDetail";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import Telecom from "./pages/Telecom";
// import Engineering from "./pages/Engineering";
// import Suraksha from "./pages/Suraksha";
// import Renovations from "./pages/Renovations";
// import Reviews from "./pages/Reviews";
// import BinCare from "./pages/BinCare";
// import Business from "./pages/Business";

// import "./index.css";

// const App = () => {
//   const [currentPage, setCurrentPage] = useState("home");
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 50);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const renderPage = () => {
//     switch (currentPage) {
//       case "home": return <Home setCurrentPage={setCurrentPage} />;
//       case "telecom": return <Telecom setCurrentPage={setCurrentPage} />;
//       case "engineering": return <Engineering setCurrentPage={setCurrentPage} />;
//       case "suraksha": return <Suraksha setCurrentPage={setCurrentPage} />;
//       case "bincare": return <BinCare setCurrentPage={setCurrentPage} />;
//       case "renovations": return <Renovations setCurrentPage={setCurrentPage} />;
//       case "business": return <Business setCurrentPage={setCurrentPage} />;
//       case "company-detail": return <CompanyDetail setCurrentPage={setCurrentPage} />;
//       case "about": return <About />;
//       case "contact": return <Contact />;
//       case "reviews": return <Reviews />;
//       default: return <Home setCurrentPage={setCurrentPage} />;
//     }
//   };

//   return (
//     <div className="app-container bg-dark text-light min-vh-100 d-flex flex-column">
//       <Navbar
//         currentPage={currentPage}
//         setCurrentPage={setCurrentPage}
//         isMenuOpen={isMenuOpen}
//         setIsMenuOpen={setIsMenuOpen}
//         scrolled={scrolled}
//       />

//       {/* Main Content */}
//       <main className="main-content flex-grow-1">
//         {renderPage()}
//       </main>

//       <Footer setCurrentPage={setCurrentPage} />
//     </div>
//   );
// };

// export default App;




// src/App.jsx
import React, { useState } from "react";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

// Pages
import Home from "./pages/Home";
import ProductServices from "./pages/Productservices";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Reviews from "./pages/Reviews";
import Telecom from "./pages/Telecom";
import Engineering from "./pages/Engineering";
import Suraksha from "./pages/Suraksha";
import Renovations from "./pages/Renovations";
import BinCare from "./pages/BinCare";
import Business from "./pages/Business";

import "./index.css";

const App = () => {
  const [currentPage, setCurrentPage] = useState("home");

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <Home />;

      case "production-services":
        return <ProductServices setCurrentPage={setCurrentPage} />;

      case "telecom":
        return <Telecom setCurrentPage={setCurrentPage} />;

      case "engineering":
        return <Engineering setCurrentPage={setCurrentPage} />;

      case "suraksha":
        return <Suraksha setCurrentPage={setCurrentPage} />;

      case "bincare":
        return <BinCare setCurrentPage={setCurrentPage} />;

      case "renovations":
        return <Renovations setCurrentPage={setCurrentPage} />;

      case "business":
        return <Business setCurrentPage={setCurrentPage} />;

      case "about":
        return <About />;

      case "contact":
        return <Contact />;

      case "reviews":
        return <Reviews />;

      default:
        return <Home />;
    }
  };

  return (
    <div className="app-container">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="main-content">{renderPage()}</main>
      <Footer setCurrentPage={setCurrentPage} />
      
    </div>
  );
};

export default App;
