import { useState } from "react";
import axios from "axios";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const API_URL = "https://blog-portfolio-backend-cbyr.onrender.com";

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(`${API_URL}/api/contact`, formData);

      setStatus("Message sent successfully!");

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.log("Contact error:", error);
      setStatus("Failed to send message.");
    }
  };

  return (
    <section className="section contact" id="contact">

      <div className="section-heading">
        <span>05.</span>
        <h2>Let's Connect</h2>
      </div>

      <div className="contact-container">

        <div className="contact-info">

          <h3>Have a project in mind?</h3>

          <p>
            I'm always interested in new projects,
            creative ideas and opportunities.
          </p>

          <div className="email-box">
            <span className="email-icon">@</span>
            <span>kaviarasu16112000@gmail.com</span>
          </div>

        </div>

        <form
          className="contact-form"
          onSubmit={handleSubmit}
        >

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            rows="6"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit">
            Send Message →
          </button>

          {status && (
            <p className="contact-status">
              {status}
            </p>
          )}

        </form>

      </div>

    </section>
  );
}

export default Contact;