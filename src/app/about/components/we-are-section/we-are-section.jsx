'use client';

import { useState, useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import styles from './we-are-section.module.scss';
import gsap from 'gsap';
import WeAreSectionMobile from './we-are-section-mobile';
import { useIsMobile } from '@/src/hooks';
import { mediaQueries } from '@/src/constants';

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
  const isMobile = useIsMobile(mediaQueries.mobile);

  function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // swap elements
  }
  return array;
}

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
