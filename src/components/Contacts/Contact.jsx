import "./Contact.css";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  // handle input
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // submit form
  const handleSubmit = (e) => {
    e.preventDefault();

    // validation
    if (!form.name || !form.email || !form.message) {
      setSuccess("Please fill all fields ❗");
      return;
    }

    setLoading(true);

    emailjs.send(
      "YOUR_SERVICE_ID",
      "YOUR_TEMPLATE_ID",
      form,
      "YOUR_PUBLIC_KEY"
    )
    .then(() => {
      setLoading(false);
      setSuccess("Message sent successfully ✅");
      setForm({ name: "", email: "", message: "" });
    })
    .catch(() => {
      setLoading(false);
      setSuccess("Something went wrong ❌");
    });
  };

  return (
    <section id="contact" className="contact">
      <h2>Get In Touch</h2>

      <div className="contact-wrapper">

        {/* FORM */}
        <motion.form
          className="contact-form"
          onSubmit={handleSubmit}
        >
          <div className="input-group">
            <input name="name" value={form.name} onChange={handleChange} required />
            <label>Name</label>
          </div>

          <div className="input-group">
            <input name="email" value={form.email} onChange={handleChange} required />
            <label>Email</label>
          </div>

          <div className="input-group">
            <textarea name="message" value={form.message} onChange={handleChange} required />
            <label>Message</label>
          </div>

          <button type="submit">
            {loading ? "Sending..." : "Send Message"}
          </button>

          {/* SUCCESS MESSAGE */}
          {success && <p className="status">{success}</p>}
        </motion.form>

        {/* INFO */}
        <div className="contact-info">
          <h3>Contact Info</h3>

          <div className="info-item">
            <FaEnvelope /> <span>youremail@gmail.com</span>
          </div>

          <div className="info-item">
            <FaGithub /> <span>github.com/yourusername</span>
          </div>

          <div className="info-item">
            <FaLinkedin /> <span>linkedin.com/in/yourusername</span>
          </div>
        </div>

      </div>
    </section>
  );
}