import React, { useState } from 'react';
import styles from './Contact.module.css'; // Link your CSS module here

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent successfully!');
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className={styles.container}>
      <h1>Contact Us</h1>
      <p>We'd love to hear from you! Please fill out the form below, and we'll get back to you as soon as possible.</p>

      <form onSubmit={handleSubmit}>
        <div className={styles['form-group']}>
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Enter your name"
          />
        </div>

        <div className={styles['form-group']}>
          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Enter your email"
          />
        </div>

        <div className={styles['form-group']}>
          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Enter your message"
            rows="4"
          />
        </div>

        <button className={styles.sendBtn} type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
