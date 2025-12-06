import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../Contact.css";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="contact-section">
      <div className="contact-container">
        <h1 data-aos="fade-up" className="contact-title">
          CONTACT US
        </h1>
        <p data-aos="fade-up" className="contact-subtitle">
          We’d love to hear from you! Reach out to us for any business inquiries, collaborations, or support.
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
            <p>+91 9946229098</p>
          </div>
          <div className="contact-card">
            <MapPin className="contact-icon" />
            <h3>Address</h3>
               <p><strong>Vibes Solutions</strong><br/>
                <span>21/648 Second Floor</span>
                <span>Parangath Tower</span>
                <span>Kunnathurmedu Post</span>
                <span>Kalmandapam Palakkad</span>
                <span>Kerala 678013</span></p> 
          </div>
        </div>

        <form data-aos="fade-up" className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
