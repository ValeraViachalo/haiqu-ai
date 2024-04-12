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
    ScrollTrigger.normalizeScroll(true);

    const mm = gsap.matchMedia();

    mm.add(
      {
        isMobile: '(max-width: 430px)',
        isTablet: '(max-width: 834px)',
        isDesktop: '(min-width: 834px)',
      },
      (context) => {
        const { isMobile, isTablet } = context.conditions;

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: labRef.current,
            start: 'top top',
            end: '+=150',
            scrub: 1,
          },
        });

        if (!isMobile) {
          tl.to(
            yearRef.current,
            {
              fontSize: isTablet ? '14.375rem' : '23.875rem',
              duration: 0.4,
            },
            '<'
          );

          tl.to(
            bgRef.current,
            {
              scaleX: 0.8,
              transformOrigin: 'center center',
            },
            '<'
          );
        }
      }
    );

    ScrollTrigger.normalizeScroll(false);
  }, []);

  return (
    <section
      className={styles.lab}
      ref={labRef}
    >
      <div className={styles.lab__bg__gray} />
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
    </section>
  );
};

export default LabSection;
