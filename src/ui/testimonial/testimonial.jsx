'use client';

import React, { useEffect, useRef, useState } from 'react';
import styles from './testimonial.module.scss';
import TestimonialItem from './components/testimonial-item';

const Testimonial = ({ testimonial }) => {
  const containerRef = useRef(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(false);
  const [scrollLeft, setScrollLeft] = useState(false);

  useEffect(() => {
    document.documentElement.style.setProperty(
      '--testimonial-items-quantity',
      testimonial.length
    );
  }, [testimonial]);

  const handleMouseDown = (e) => {
    setIsMouseDown(true);
    setStartX(e.pageX - - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
    
  }

  const handleMouseLeave = (e) => {
    setIsMouseDown(false);
   
  }

  const handleMouseUp = () => {
    setIsMouseDown(false)
  }

  const handleMouseMove = (e) => {
    if(!isMouseDown) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    containerRef.current.scrollLeft = scrollLeft - walk;
  }

  return (
    <div
      className={styles.testimonial}
      ref={containerRef}
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
      {testimonial.map(({ id, name, role, quote }) => (
        <TestimonialItem
          key={id}
          name={name}
          role={role}
          quote={quote}
        />
      ))}
    </div>
  );
};

export default Testimonial;
