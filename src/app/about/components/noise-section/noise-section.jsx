'use client';

import { useRef } from 'react';
import styles from './noise-section.module.scss';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MotionPathPlugin } from 'gsap/all';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

const path =
  'M0.5 129.5L37.5 95L95.5 57.5L163.5 27L230 8L302.5 0.5L376 8L444 27L493 45.5L532 68L571 95L609.5 129.5';

const NoiseSection = ({data}) => {
  const noiseRef = useRef(null);
  const spotRef = useRef(null);
  const soonRef = useRef(null);
  const soonBlockRef = useRef(null);

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

      //  gsap.timeline({
      //     scrollTrigger: {
      //       trigger: noiseRef.current,
      //       start: 'top 40%',
      //       end: '+=100',
      //       pin: true,
      //       pinSpacing: false,
      //       markers: true,
      //     },
      //   });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: noiseRef.current,
            start: isMobile ? 'top 30%' : 'center 50%',
            end: '+=800',
            scrub: 2,
          },
        });

        tl.to(
          spotRef.current,
          {
            motionPath: {
              path: '#motionPath',
              align: '#motionPath',
              alignOrigin: [0.5, 0.5],
            },
            scale: isMobile ? 0.2 : 0.1,
            duration: 5,
            yoyo: false,
          },
          '<'
        );

        // if (!isMobile) {
        //   tl.to(soonRef.current, {
        //     y: isTablet ? '11.75rem' : '15.1875rem',
        //     fontSize: isTablet ? '7.8125rem' : '18.75rem',
        //     duration: 5,
        //   });
        // }
      }
    );

    ScrollTrigger.normalizeScroll(false);
  }, []);

  return (
    <div
      className={styles.noise}
      ref={noiseRef}
      id="noise"
    >
      <p className={styles.noise__heading} dangerouslySetInnerHTML={{ __html: data.about.title }}></p>
      <p className={styles.noise__text} dangerouslySetInnerHTML={{ __html: data.about.text_1 }}>

      </p>
      <div className={styles.noise__union}>
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 610 130"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="motionPath"
            d="M0.5 129.5L37.5 95L95.5 57.5L163.5 27L230 8L302.5 0.5L376 8L444 27L493 45.5L532 68L571 95L609.5 129.5"
            stroke="none"
          />
        </svg>
        <div
          className={styles.noise__spot}
          ref={spotRef}
        />
      </div>

      <p className={styles.noise__description} dangerouslySetInnerHTML={{ __html: data.about.text_2 }}>

      </p>

      {/*<div ref={soonBlockRef}>
        <p
          className={styles.noise__soon}
          ref={soonRef}
        >
          soon.
        </p>
      </div>*/}
    </div>
  );
};

export default NoiseSection;
