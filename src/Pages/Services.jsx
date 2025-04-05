import React from 'react';
import styles from './Services.module.css';

const servicesData = [
  { title: 'Web Development', description: 'Custom web development using the latest technologies.' },
  { title: 'SEO Optimization', description: 'Improve your search engine rankings with our strategies.' },
  { title: 'Mobile App Development', description: 'Building apps for both iOS and Android.' },
  { title: 'UI/UX Design', description: 'Designing user-friendly interfaces for better user experience.' },
  { title: 'Consultation & Strategy', description: 'Expert advice on digital strategy and growth.' },
];

function Services() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Our Services</h1>
      {servicesData.map((service, index) => (
        <div key={index} className={styles.service}>
          <h2 className={styles.title}>{service.title}</h2>
          <p className={styles.description}>{service.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Services;
