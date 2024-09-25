'use client';

import React, { useEffect, useState } from 'react';
import styles from './book-a-demo.module.scss';
import classNames from 'classnames';

const BookADemo = ({ light }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleResize = () => {

      if (window.matchMedia('(max-width: 430px)').matches) {
        setIsVisible(true);
      } else {

        const observer = new IntersectionObserver(
          ([entry]) => {
            setIsVisible(!entry.isIntersecting);
          },
          {
            root: null,
            threshold: 0.025,
          }
        );

        const section = document.getElementById('footer');
        if (section) {
          observer.observe(section);
        }

        return () => {
          if (section) {
            observer.unobserve(section);
          }
        };
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const scrolltoHash = function (element_id) {
    const element = document.getElementById(element_id)
    element?.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
  }

  if (!isVisible) return null;

  return (
    <button onClick={() => scrolltoHash('form-section')}
      className={classNames(styles.book_a_demo, {
        [styles.book_a_demo__light]: light,
      })}
    >
      book a demo
    </button>
  );
};

export default BookADemo;
