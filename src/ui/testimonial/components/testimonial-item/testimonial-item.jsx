import React from 'react';
import styles from './testimonial-item.module.scss';

const TestimonialItem = ({ name, role, quote }) => {
  return (
    <div className={styles.testimonial_item}>
      <p className={styles.testimonial_item__name}>{name}</p>
      <p className={styles.testimonial_item__role}>{role}</p>
      <p className={styles.testimonial_item__quote}>{quote}</p>
    </div>
  );
};

export default TestimonialItem;
