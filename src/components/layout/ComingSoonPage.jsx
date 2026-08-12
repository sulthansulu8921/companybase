// src/components/layout/ComingSoonPage.jsx
import React from 'react';
import { ArrowLeft, Download } from 'lucide-react';
import './ComingSoonPage.css';

const ComingSoonPage = ({ title, setCurrentPage, bgImage, pdfFile, pdfName }) => {
    const backgroundStyle = bgImage
        ? { backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.65)), url(${bgImage})` }
        : { backgroundColor: '#0b0f19' };

    return (
        <div className="coming-soon-page-container fade-in">
            {/* Full Hero Banner with Background Image */}
            <div className="coming-soon-hero" style={backgroundStyle}>
                {/* Floating Back Button */}
                <button
                    className="btn-back-hero"
                    onClick={() => (setCurrentPage ? setCurrentPage("home") : window.history.back())}
                    aria-label="Back to Home"
                >
                    <ArrowLeft size={18} />
                    <span>Back</span>
                </button>

                {/* Hero Centered Content */}
                <div className="coming-soon-hero-content">
                    <h1 className="coming-soon-hero-title">{title}</h1>
                    <h2 className="coming-soon-hero-subtitle">COMING SOON...</h2>

                    <a
                        href={pdfFile || "/profile.pdf"}
                        download={pdfName || "Connect_Company_Profile.pdf"}
                        className="btn-hero-download"
                        aria-label="Download Brochure"
                    >
                        <Download size={18} />
                        <span>Download Brochure</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ComingSoonPage;


