// src/components/layout/ComingSoonPage.jsx
import React from 'react';
import { ArrowLeft, Download } from 'lucide-react';
import './ComingSoonPage.css';

const ComingSoonPage = ({ title, setCurrentPage, bgImage, pdfFile, pdfName }) => {
    return (
        <div
            className="coming-soon-container fade-in"
            style={{ backgroundImage: bgImage ? `url(${bgImage})` : 'none' }}
        >
            <div className="coming-soon-overlay"></div>

            {/* Header section with back button */}
            <header className="coming-soon-header">
                <button
                    className="btn-back-minimal"
                    onClick={() => setCurrentPage("home")}
                    aria-label="Back to Home"
                >
                    <ArrowLeft size={18} className="icon" />
                    Back
                </button>
            </header>

            {/* Main content centered perfectly */}
            <main className="coming-soon-content">
                <h1 className="coming-soon-title">{title}</h1>
                <h2 className="coming-soon-subtitle">COMING SOON...</h2>

                <a
                    href={pdfFile || "/profile.pdf"}
                    download={pdfName || "Connect_Company_Profile.pdf"}
                    className="btn-download"
                    aria-label="Download PDF"
                >
                    <Download size={18} className="icon" />
                    Download Brochure
                </a>
            </main>
        </div>
    );
};

export default ComingSoonPage;
