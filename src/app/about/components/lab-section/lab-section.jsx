'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import styles from './lab-section.module.scss';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const LabSection = () => {
  const labRef = useRef(null);
  const yearRef = useRef(null);
  const bgRef = useRef(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add('(max-width: 834px)', () => {
      console.log('match media inside!');
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: labRef.current,
          start: 'top top',
          end: '+=50',
          scrub: 1,
        },
      });

      tl.to(
        yearRef.current,
        {
          fontSize: '16.875rem',
          duration: 0.4,
        },
        '<'
      );

      tl.to(
        bgRef.current,
        {
          scaleX: 0.6,
          transformOrigin: 'center center',
        },
        '<'
      );
    });

    mm.add('(min-width: 834px', () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: labRef.current,
          start: 'top top',
          end: '+=300',
          scrub: 1,
        },
      });

      tl.to(
        yearRef.current,
        {
          fontSize: '23.875rem',
          duration: 0.4,
        },
        '<'
      );

      tl.to(
        bgRef.current,
        {
          scaleX: 0.5,
          transformOrigin: 'center center',
        },
        '<'
      );
    });
  }, []);

  return (
    <div
      className={styles.lab}
      ref={labRef}
    >
      <div
        className={styles.lab__bg__gray}
      />
      <div
        className={styles.lab__bg}
        ref={bgRef}
      />
      <p className={styles.lab__october}>October</p>
      <p
        className={styles.lab__year}
        ref={yearRef}
      >
        2022
      </p>
      <p className={styles.lab__creative_lab}>Creative Desctuction Lab</p>
      <p className={styles.lab__text}>
        Since forming within the Creative Destruction Lab in October 2022, we
        have built a global team of interdisciplinary, open minds to push
        quantum software forward. <br />
        <br />
        We combine deep expertise with creativity to deliver performance
        breakthroughs. 
      </p>
    </div>
  );
};

export default LabSection;
