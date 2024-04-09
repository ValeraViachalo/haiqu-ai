'use client';

import { useGSAP } from '@gsap/react';
import styles from './we-are-section.module.scss';
import gsap from 'gsap';

const professions = [
  'engineers',
  'researchers',
  'physicists',
  'mathematicians',
  'strategists',
  'operators',
  'optimists',
  'creatives',
];

const WeAreSection = () => {
  useGSAP(() => {
    const elements = gsap.utils.toArray(`.${styles.we_are__profession}`);
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.3 });

    elements.forEach((profession) => {
      tl.to(profession, {
          opacity: 0.65,
          duration: 0.3,
        })
        .to(profession, {
          opacity: 1,
          duration: 0.3,
        }, '+=0.3'); // Додаємо затримку перед тим, як повертати opacity назад
    });
  }, []);

  return (
    <section className={styles.we_are}>
      <div className={styles.we_are__content}>
        <p className={styles.we_are__title}>We are</p>
        <div className={styles.we_are__line} />
        <div className={styles.we_are__professions}>
          {professions.map((profession) => (
            <p
              key={profession}
              className={styles.we_are__profession}
            >
              {profession}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WeAreSection;
