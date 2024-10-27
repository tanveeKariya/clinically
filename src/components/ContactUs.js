import React, { useState } from 'react';
import './ContactUs.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We'll get back to you shortly.");
    setFormData({ name: '', email: '', message: '' }); // Reset form
  };

  return (
    <div className="contact-us">
      <h1>Contact Us</h1>
      <p>
        We would love to hear from you! If you have any questions, concerns, or feedback, 
        please feel free to reach out to us using the form below.
      </p>

      <form onSubmit={handleSubmit}>
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
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit">Send Message</button>
      </form>

      <h2>Contact Information</h2>
      <p>Email: info@deliveryservice.com</p>
      <p>Phone: +1 (234) 567-8900</p>
    </div>
  );
};

export default ContactUs;
