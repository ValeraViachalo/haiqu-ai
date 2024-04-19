'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './illustration.module.scss';

gsap.registerPlugin(ScrollTrigger);

const Illustration = () => {
  const dotsRef = useRef(null);
  const dot1 = useRef(null);
  const dot2 = useRef(null);
  const dot3 = useRef(null);

  useGSAP(() => {
    ScrollTrigger.normalizeScroll(true);
    ScrollTrigger.refresh();

    const bubbles = gsap.utils.toArray([
      `.${styles.illustration__bubble}`,
      `.${styles.illustration__bubble_last}`,
    ]);

    const mm = gsap.matchMedia();

    mm.add(
      {
        isMobile: '(max-width: 430px)',
        isTablet: '(max-width: 834px)',
        isDesktop: '(min-width: 834px)',
      },
      (context) => {
        const { isMobile, isTablet } = context.conditions;

        if (!isMobile) {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: '#about-main',
              start: '8% 7%',
              end: isTablet ? '+=800' : '+=1100',
              scrub: 1,
              ease: 'power3.out',
            },
          });

          bubbles.forEach((bubble, index) => {
            tl.to(
              bubble,
              {
                y: isTablet
                  ? `-=${4.26125 * (index + 1)}rem`
                  : `-=${6.4375 * (index + 1)}rem`,
                duration: 2,
              },
              '<'
            );
          });

          tl.to(
            dot1.current,
            {
              top: isTablet ? '20.125rem' : '26.6875rem',
              left: isTablet ? '5rem' : '25.3125rem',
              duration: 3,
            },
            '<'
          );

          tl.to(
            dot2.current,
            {
              top: isTablet ? '9.25rem' : '5.5rem',
              duration: 3,
            },
            '<'
          );

          tl.to(
            dot3.current,
            {
              top: '26.5rem',
              duration: 5,
            },
            '<'
          );
        }
      }
    );

    ScrollTrigger.normalizeScroll(false);
  });

  return (
    <div className={styles.illustration__container}>
      <div className={styles.illustration}>
        <div className={styles.illustration__bubble} />
        <div className={styles.illustration__bubble} />
        <div className={styles.illustration__bubble} />
        <div className={styles.illustration__bubble_last} />
      </div>

      <div
        className={styles.illustration__info_dots_container}
        ref={dotsRef}
      >
        <div
          className={`${styles.illustration__info_dot} ${styles.illustration__info_dot__1}`}
          ref={dot1}
        >
          <div className={styles.illustration__dot} />
          <p className={styles.illustration__info}>
            create better carbon capture mechanisms?
          </p>
        </div>

        <div
          className={`${styles.illustration__info_dot} ${styles.illustration__info_dot__2}`}
          ref={dot2}
        >
          <div className={styles.illustration__dot} />
          <p className={styles.illustration__info}>
            Will it help us discover better drugs?
          </p>
        </div>

        <div
          className={`${styles.illustration__info_dot} ${styles.illustration__info_dot__3}`}
          ref={dot3}
        >
          <div className={styles.illustration__dot} />
          <p className={styles.illustration__info}>
            find cleaner ways to produce ammonia?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Illustration;
