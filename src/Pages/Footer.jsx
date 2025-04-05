import React from 'react';
import styles from './Footer.module.css';  // Import the CSS module

function Footer() {
  return (
    <footer className={styles['footer-container']}>
      <div className={styles['footer-content']}>
        <div className={styles['footer-logo']}>
          CirCus Web
        </div>
        <p className={styles['footer-description']}>
          Delivering innovative digital solutions that help businesses grow.
        </p>
        <div className={styles['footer-socials']}>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
