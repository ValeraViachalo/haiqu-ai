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

const NoiseSection = () => {
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
      //       end: '+=200',
      //       pin: true,
      //       pinSpacing: false,
      //       markers: true,
      //     },
      //   });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: noiseRef.current,
            start: 'center 50%',
            end: '+=1000',
            scrub: 2,
            onLeave: () => ScrollTrigger.refresh(),
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
            scale: 0.1,
            duration: 5,
            yoyo: false,
          },
          '<'
        );

        if (!isMobile) {
          tl.to(soonRef.current, {
            y: isTablet ? '11.75rem' : '15.1875rem',
            fontSize: isTablet ? '7.8125rem' : '18.75rem',
            duration: 5,
          });

          tl.to(
            soonBlockRef.current,
            {
              height: isTablet ? '20rem' : '30rem',
              duration: 5,
              // onComplete: () => ScrollTrigger.refresh(),
            },
            '<'
          );
        }
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
      <p className={styles.noise__heading}>What we do know for certain</p>
      <p className={styles.noise__text}>
        Is that quantum computers must first work for any discoveries to be
        made. They must navigate noise to run algorithms at greater depth and
        with greater width.
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

      <p className={styles.noise__description}>
        Hardware advancements will get us there eventually. We believe advanced
        software is necessary to get us there
      </p>

      <div ref={soonBlockRef}>
        <p
          className={styles.noise__soon}
          ref={soonRef}
        >
          soon.
        </p>
      </div>
    </div>
  );
};

export default NoiseSection;
