'use client';

import React, { useEffect, useState } from 'react';
import styles from './book-a-demo.module.scss';
import classNames from 'classnames';

const BookADemo = ({ light }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      // Перевіряємо, чи ширина вікна менше 430px
      if (window.matchMedia('(max-width: 430px)').matches) {
        setIsVisible(true); // Якщо так, завжди показуємо кнопку
      } else {
        // В іншому випадку, застосовуємо логіку IntersectionObserver
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

    // Виконуємо перевірку при ініціалізації та підписуємося на події зміни розміру
    handleResize();
    window.addEventListener('resize', handleResize);

    // Прибирання за собою
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <button
      className={classNames(styles.book_a_demo, {
        [styles.book_a_demo__light]: light,
      })}
    >
      book a demo
    </button>
  );
};

export default BookADemo;
