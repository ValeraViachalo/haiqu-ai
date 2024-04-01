'use client';

import React, { useState, useRef, useEffect } from 'react';
import styles from './carousel.module.scss';
import { motion } from 'framer-motion';

const Carousel = ({ items = [], children }) => {
  const containerRef = useRef(null);
  const [constraints, setConstraints] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      setConstraints(
        containerRef.current.scrollWidth - containerRef.current.offsetWidth
      );
    }
  }, []);

  const renderChildren = () => {
    return React.Children.map(children, (child, index) => {
      return React.cloneElement(child, {
        ...items[index],
        key: index,
      });
    });
  };

  return (
    <div
      className={styles.carousel}
      ref={containerRef}
    >
      <motion.div
        drag="x"
        dragConstraints={{ left: -constraints, right: 0 }}
        className={styles.carousel__items_container}
      >
        {renderChildren()}
      </motion.div>
    </div>
  );
};

export default Carousel;
