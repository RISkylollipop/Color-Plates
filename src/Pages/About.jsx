import React from 'react';
import styles from './About.module.css'; 

function About() {
  return (
    <div className={styles['about-container']}>
      <h1 className={styles['about-heading']}>About CirCus Web</h1>
      <p className={styles['about-description']}>
        Welcome to CirCus Web, where we specialize in delivering top-notch web development and digital solutions tailored to your needs.
        Our team is dedicated to helping businesses grow through innovative strategies and user-friendly technology.
      </p>
      <h2 className={styles['about-subheading']}>Our Mission</h2>
      <p className={styles['about-description']}>
        Our mission is to provide reliable, cost-effective, and innovative solutions to help businesses establish their online presence and succeed in the digital world.
      </p>
      <h2 className={styles['about-subheading']}>Our Vision</h2>
      <p className={styles['about-description']}>
        To be a leading provider of digital solutions that empower businesses globally to leverage the power of the internet for growth and success.
      </p>
      <h2 className={styles['about-subheading']}>Our Values</h2>
      <ul className={styles['about-values']}>
        <li>Innovation: We always aim to stay ahead with cutting-edge technologies.</li>
        <li>Integrity: We operate with transparency and honesty in all our dealings.</li>
        <li>Customer Focus: Our clients' satisfaction is our top priority.</li>
        <li>Collaboration: We believe in the power of teamwork to achieve great results.</li>
      </ul>
    </div>
  );
}

export default About;
