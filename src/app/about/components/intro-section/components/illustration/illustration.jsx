'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './illustration.module.scss';

gsap.registerPlugin(ScrollTrigger);

const Illustration = ({ data }) => {
  const dotsRef = useRef(null);
  const dot1 = useRef(null);
  const dot2 = useRef(null);
  const dot3 = useRef(null);

  useGSAP(() => {
    ScrollTrigger.normalizeScroll(true);

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
              start: isTablet ? 'top 15%' : '8% 7%',
              end: isTablet ? '+=800' : '+=1100',
              scrub: true,
            },
          });

          const baseShift = isTablet ? 4.26125 : 6.4375;

          bubbles.forEach((bubble, index) => {
            tl.to(
              bubble,
              {
                y: `-=${baseShift * (index + 1)}rem`,
                duration: 1,
              },
              '<'
            );
          });

          tl.to(
            dot1.current,
            {
              top: isTablet ? '10.125rem' : '26.6875rem',
              left: isTablet ? '4rem' : '25.3125rem',
              duration: 3,
            },
            '<'
          );

          tl.to(
            dot2.current,
            {
              top: isTablet ? '6.25rem' : '5.5rem',
              left: isTablet ? '40rem' : '79rem',
              duration: 3,
            },
            '<'
          );

          tl.to(
            dot3.current,
            {
              top: isTablet ? '16.25rem' : '26.5rem',
              left: isTablet ? '38rem' : '79rem',
              duration: 5,
            },
            '<'
          );
        }

        if (isMobile) {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: dotsRef.current,
              start: 'top 70%',
              end: '+=400',
              scrub: true,
            },
          });

          tl.to([dot1.current, dot2.current, dot3.current],  {
            x: '-=300%',
          });
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
          <p
            className={styles.illustration__info}
            dangerouslySetInnerHTML={{
              __html: data.preview.illustration.text_1,
            }}
          ></p>
        </div>

        <div
          className={`${styles.illustration__info_dot} ${styles.illustration__info_dot__2}`}
          ref={dot2}
        >
          <div className={styles.illustration__dot} />
          <p
            className={styles.illustration__info}
            dangerouslySetInnerHTML={{
              __html: data.preview.illustration.text_2,
            }}
          ></p>
        </div>

        <div
          className={`${styles.illustration__info_dot} ${styles.illustration__info_dot__3}`}
          ref={dot3}
        >
          <div className={styles.illustration__dot} />
          <p
            className={styles.illustration__info}
            dangerouslySetInnerHTML={{
              __html: data.preview.illustration.text_3,
            }}
          ></p>
        </div>
      </div>
    </div>
  );
};

export default Illustration;
