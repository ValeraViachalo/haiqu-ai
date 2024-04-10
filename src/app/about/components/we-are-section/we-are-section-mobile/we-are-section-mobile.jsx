'use client';

import { useGSAP } from '@gsap/react';
import styles from './we-are-section-mobile.module.scss';
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

const WeAreSectionMobile = () => {
  useGSAP(() => {
    const elements = gsap.utils.toArray(`.${styles.we_are__profession}`);
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.3 });

    elements.forEach((profession) => {
      tl.to(profession, {
        opacity: 0.65,
        duration: 0.3,
      }).to(
        profession,
        {
          opacity: 1,
          duration: 0.3,
        },
        '+=0.3'
      );
    });
  }, []);

  return (
    <section className={styles.we_are}>
      <div className={styles.we_are__content}>
        <p className={styles.we_are__title}>We are</p>

        <div className={styles.we_are__professions}>
          <div className={styles.we_are__row}>
            <div className={styles.we_are__profession}>
              <div className={styles.we_are__dot} />
              engineers
            </div>
            <div className={styles.we_are__profession}>
              <div className={styles.we_are__dot} />
              researchers
            </div>
          </div>
          <div className={styles.we_are__line} />
          <div className={styles.we_are__row_shifted}>
            <div className={styles.we_are__profession}>
              <div className={styles.we_are__dot} />
              physicists
            </div>
            <div className={styles.we_are__profession}>
              <div className={styles.we_are__dot} />
              mathematicians
            </div>
          </div>
          <div className={styles.we_are__line} />
          <div className={styles.we_are__row}>
            <div className={styles.we_are__profession}>
              <div className={styles.we_are__dot} />
              strategists
            </div>
            <div className={styles.we_are__profession}>
              <div className={styles.we_are__dot} />
              operators
            </div>
          </div>
          <div className={styles.we_are__line} />
          <div className={styles.we_are__row_shifted}>
            <div className={styles.we_are__profession}>
              <div className={styles.we_are__dot} />
              optimists
            </div>
            <div className={styles.we_are__profession}>
              <div className={styles.we_are__dot} />
              creatives
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeAreSectionMobile;
