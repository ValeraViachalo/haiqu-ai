'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import styles from './lab-section.module.scss';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const LabSection = ({data}) => {
  if (data.date.active !== true) {
    return ('');
  }
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
            end: '+=1800',
            scrub: true,
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
              scaleX: 0.6,
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
      <p className={styles.lab__october} dangerouslySetInnerHTML={{ __html: data.date.month }}>

      </p>
      <p
        className={styles.lab__year}
        ref={yearRef}
        dangerouslySetInnerHTML={{ __html: data.date.year }}
      >

      </p>
      <p className={styles.lab__creative_lab} dangerouslySetInnerHTML={{ __html: data.date.title }}>

      </p>
      <p className={styles.lab__text} dangerouslySetInnerHTML={{ __html: data.date.text }}>

      </p>
    </section>
  );
};

export default LabSection;
