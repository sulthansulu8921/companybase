import React, { useEffect } from "react";
import {
  ArrowLeft,
  Download,
  Globe,
  Bot,
  Smartphone,
  TrendingUp,
  Zap,
  Code,
  MapPin,
  Phone,
  MessageSquare,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Business.css";

const services = [
  {
    id: 1,
    name: "Website Development",
    desc: "High-performance, modern, responsive websites & web applications tailored for scalable business growth.",
    icon: Globe,
    badge: "Web Tech",
  },
  {
    id: 2,
    name: "AI Solutions & Chatbots",
    desc: "Custom AI agents, automated customer chatbots, RAG engines, and machine learning integrations.",
    icon: Bot,
    badge: "AI Powered",
  },
  {
    id: 3,
    name: "Mobile App Development",
    desc: "Seamless native & cross-platform iOS and Android mobile app development with modern UI/UX.",
    icon: Smartphone,
    badge: "Mobile Apps",
  },
  {
    id: 4,
    name: "Digital Marketing & SEO",
    desc: "Data-driven SEO strategies, social media campaigns, brand positioning, and performance marketing.",
    icon: TrendingUp,
    badge: "Growth & Reach",
  },
  {
    id: 5,
    name: "Business Automation",
    desc: "Automate repetitive workflows, CRM integrations, operational software, and data pipelines.",
    icon: Zap,
    badge: "Automation",
  },
  {
    id: 6,
    name: "Software Development",
    desc: "Enterprise custom software solutions, API integrations, cloud architecture, and web systems.",
    icon: Code,
    badge: "Software Architecture",
  },
  {
    id: 7,
    name: "Google Business Profile Setup",
    desc: "Complete local SEO optimization, profile verification, map placement, and reputation enhancement.",
    icon: MapPin,
    badge: "Local SEO",
  },
];

const Business = ({ setCurrentPage }) => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="nanorays-page fade-in">
      {/* Top Bar Navigation / Back Button */}
      <div className="nanorays-nav-bar">
        <button
          className="nanorays-back-btn"
          onClick={() => (setCurrentPage ? setCurrentPage("home") : window.history.back())}
          aria-label="Back to Projects"
        >
          <ArrowLeft size={18} />
          <span>Back</span>
        </button>
      </div>

      {/* Hero Section */}
      <section className="nanorays-hero">
        <div
          className="nanorays-hero-bg-img"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL + "/carusal-img-5.jpeg"})`,
          }}
        ></div>
        <div className="nanorays-hero-overlay"></div>

        <div className="nanorays-hero-content" data-aos="fade-up">
          {/* Official Logo Showcase */}
          <div className="nanorays-logo-wrapper">
            <img
              src={process.env.PUBLIC_URL + "/nanorays.png"}
              alt="NanoRays Solutions Logo"
              className="nanorays-hero-logo"
            />
          </div>

          {/* Heading & Tagline */}
          <h1 className="nanorays-hero-title">NANORAYS SOLUTIONS</h1>
          <p className="nanorays-hero-subtitle">
            Digital Solutions. AI. Software. Automation.
          </p>

          <p className="nanorays-hero-description">
            Empowering modern enterprises with cutting-edge software architecture, intelligent AI automation, and transformative digital experiences.
          </p>

          {/* Action Buttons */}
          <div className="nanorays-hero-actions">
            <a
              href="/nanorays-brochure.pdf"
              download="NanoRays_Solutions_Brochure.pdf"
              className="nanorays-btn-primary"
              aria-label="Download Brochure"
            >
              <Download size={18} />
              <span>Download Brochure</span>
            </a>

            <a
              href="https://nanorayssolution.com/"
              target="_blank"
              rel="noreferrer"
              className="nanorays-btn-secondary"
              aria-label="Visit NanoRays Website"
            >
              <Globe size={18} />
              <span>Visit Website</span>
            </a>

            <a
              href="tel:+918921624007"
              className="nanorays-btn-secondary"
              aria-label="Call NanoRays Solutions"
            >
              <Phone size={18} />
              <span>+91 89216 24007</span>
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="nanorays-services-section">
        <div className="nanorays-container">
          <div className="nanorays-section-header" data-aos="fade-up">
            <div className="nanorays-badge">
              <Sparkles size={16} />
              <span>OUR SERVICES & SOLUTIONS</span>
            </div>
            <h2 className="nanorays-section-title">Enterprise Digital Capabilities</h2>
            <p className="nanorays-section-subtitle">
              End-to-end digital engineering and AI solutions tailored to scale your enterprise.
            </p>
          </div>

          {/* 7 Services Grid */}
          <div className="nanorays-services-grid" data-aos="fade-up">
            {services.map((service) => {
              const IconComponent = service.icon;
              return (
                <div key={service.id} className="nanorays-service-card">
                  <div className="nanorays-card-header">
                    <div className="nanorays-icon-box">
                      <IconComponent size={26} className="nanorays-icon" />
                    </div>
                    <span className="nanorays-card-tag">{service.badge}</span>
                  </div>
                  <h3 className="nanorays-card-title">{service.name}</h3>
                  <p className="nanorays-card-desc">{service.desc}</p>
                  <div className="nanorays-card-footer">
                    <CheckCircle2 size={16} className="nanorays-check-icon" />
                    <span>Production-Ready Solution</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technology & AI Showcase Banner */}
      <section className="nanorays-tech-banner-section" data-aos="fade-up">
        <div className="nanorays-tech-banner-card">
          <div className="nanorays-tech-banner-img-wrapper">
            <img
              src={process.env.PUBLIC_URL + "/nanorays-ai-platform.png"}
              alt="NanoRays AI & Digital Platform"
              className="nanorays-tech-banner-img"
            />
          </div>
          <div className="nanorays-tech-banner-content">
            <span className="nanorays-tech-tag">NEXT-GEN DIGITAL PLATFORM</span>
            <h3 className="nanorays-tech-banner-title">
              Powering Intelligent Enterprise Software & AI
            </h3>
            <p className="nanorays-tech-banner-text">
              We build scalable web platforms, high-performance mobile apps, custom AI chat agents, and automated workflows engineered to accelerate your digital growth.
            </p>
            <div className="nanorays-tech-highlights">
              <div className="nanorays-highlight-item">
                <CheckCircle2 size={18} className="nanorays-check-icon" />
                <span>AI & Automation Engines</span>
              </div>
              <div className="nanorays-highlight-item">
                <CheckCircle2 size={18} className="nanorays-check-icon" />
                <span>Custom Software Architecture</span>
              </div>
              <div className="nanorays-highlight-item">
                <CheckCircle2 size={18} className="nanorays-check-icon" />
                <span>Growth Marketing & SEO</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Direct Contact CTA Section */}
      <section className="nanorays-cta-section" data-aos="fade-up">
        <div className="nanorays-cta-card">
          <h2 className="nanorays-cta-title">Ready to Transform Your Business?</h2>
          <p className="nanorays-cta-desc">
            Connect directly with NanoRays Solutions for software, AI, and digital transformation inquiries.
          </p>
          <div className="nanorays-cta-contact-box">
            <a href="tel:+918921624007" className="nanorays-cta-phone-link">
              <Phone size={22} />
              <span>+91 89216 24007</span>
            </a>
            <a
              href="https://wa.me/919497669317"
              target="_blank"
              rel="noreferrer"
              className="nanorays-cta-whatsapp-btn"
            >
              <MessageSquare size={20} />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Business;
