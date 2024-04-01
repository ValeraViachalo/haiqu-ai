'use client';

import React, { useEffect, useRef, useState } from 'react';
import styles from './testimonial.module.scss';
import TestimonialItem from './components/testimonial-item';
import { motion } from 'framer-motion';

const Testimonial = ({ testimonial }) => {
  const containerRef = useRef(null);

  const [constraints, setConstraints] = useState(0);
  useEffect(() => {
    if (containerRef.current) {
      setConstraints(
        containerRef.current.scrollWidth - containerRef.current.offsetWidth
      );
    }
  }, []);

  return (
    <div
      className={styles.testimonial}
      ref={containerRef}
    >
      <motion.div
        drag="x"
        className={styles.testimonial__items_container}
        dragConstraints={{ left: -constraints, right: 0 }}
      >
        {testimonial.map(({ id, name, role, quote }) => (
          <TestimonialItem
            key={id}
            name={name}
            role={role}
            quote={quote}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Testimonial;
