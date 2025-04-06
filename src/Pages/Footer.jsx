import React, { useState, useEffect } from 'react';
import styles from './Footer.module.css';

function Footer() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerTop}>
        <div className={styles.footerLogo}>
          <h2>CirCus Web</h2>
          <p>Delivering innovative digital solutions that help businesses grow.</p>
        </div>

        <div className={styles.footerLinks}>
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div className={styles.footerNewsletter}>
          <h4>Subscribe</h4>
          <p>Stay updated with our latest news</p>
          <form>
            <input type="email" placeholder="Your email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>

        <div className={styles.footerSocials}>
          <h4>Follow Us</h4>
          <div className={styles.icons}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>&copy; {new Date().getFullYear()} CirCus Web. All rights reserved.</p>
      </div>

      {showTopBtn && (
        <button className={styles.scrollTopBtn} onClick={scrollToTop}>&uarr;</button>
      )}
    </footer>
  );
}

export default Footer;
