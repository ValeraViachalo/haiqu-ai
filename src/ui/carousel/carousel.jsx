'use client';

import React, { useState, useRef, useEffect } from 'react';
import styles from './carousel.module.scss';

const Carousel = ({ items = [], children }) => {
  const containerRef = useRef(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(false);
  const [scrollLeft, setScrollLeft] = useState(false);

  useEffect(() => {
    document.documentElement.style.setProperty(
      '--testimonial-items-quantity',
      items.length
    );
  }, [items]);

  const handleMouseDown = (e) => {
    setIsMouseDown(true);
    setStartX(e.pageX - -containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsMouseDown(false);
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
  };

  const handleMouseMove = (e) => {
    if (!isMouseDown) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

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
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
      {renderChildren()}
    </div>
  );
};

export default Carousel;
