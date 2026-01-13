import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../Contact.css";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const phoneNumber = "919946229098"; // ✅ WhatsApp number (no +)
    const text = `Hello 
Name: ${formData.name}
Email: ${formData.email}
Message: ${formData.message}`;

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      text
    )}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        <h1 data-aos="fade-up" className="contact-title">
          CONTACT US
        </h1>

        <p data-aos="fade-up" className="contact-subtitle">
          We’d love to hear from you! Reach out to us for any business inquiries,
          collaborations, or support.
        </p>

        <div className="contact-grid" data-aos="fade-up">
          <div className="contact-card">
            <Mail className="contact-icon" />
            <h3>Email</h3>
            <p>Connect.ktn@gmail.com</p>
          </div>

          <div className="contact-card">
            <Phone className="contact-icon" />
            <h3>Phone</h3>
            <p>+91 9946229098,+91 9895029756</p>
          </div>

          <div className="contact-card">
            <MapPin className="contact-icon" />
            <h3>Address</h3>
            <p>
              <strong>Vibes Solutions</strong>
              <br />
              21/648 Second Floor
              <br />
              Parangath Tower
              <br />
              Kunnathurmedu Post
              <br />
              Kalmandapam, Palakkad
              <br />
              Kerala 678013
            </p>
          </div>
        </div>

        {/* ✅ WhatsApp Form */}
        <form data-aos="fade-up" className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            onChange={handleChange}
          />

          <textarea
            name="message"
            placeholder="Your Requirement"
            rows="5"
            required
            onChange={handleChange}
          ></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
