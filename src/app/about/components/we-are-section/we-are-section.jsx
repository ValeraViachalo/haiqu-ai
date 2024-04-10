'use client';

import { useState, useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import styles from './we-are-section.module.scss';
import gsap from 'gsap';
import WeAreSectionMobile from './we-are-section-mobile';

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
  const [isMobile, setIsMobile] = useState(null);

  useEffect(() => {
    setIsMobile(window.innerWidth <= 430);

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 430);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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
    <>
      {isMobile ? (
        <WeAreSectionMobile />
      ) : (
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
      )}
    </>
  );
};

export default WeAreSection;
