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

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: noiseRef.current,
        start: 'center 50%',
        end: '+=500',
        scrub: true,
        // pin: true,
        // pinSpacing: false,
      },
    });

    tl.to(
      spotRef.current,
      {
        motionPath: {
          path: path,
          align: 'self',
        },
        scale: 0.1,
        duration: 5,
        yoyo: false,
      },
      '<'
    );

    tl.to(
      soonRef.current,
      {
        y: '15.1875rem',
        fontSize: '18.75rem',
        transformOrigin: 'center',
        duration: 3,
      },

    );
  }, []);

  return (
    <div
      className={styles.noise}
      ref={noiseRef}
    >
      <p className={styles.noise__heading}>What we do know for certain</p>
      <p className={styles.noise__text}>
        Is that quantum computers must first work for any discoveries to be
        made. They must navigate noise to run algorithms at greater depth and
        with greater width.
      </p>
      <div className={styles.noise__union}>
        <div
          className={styles.noise__spot}
          ref={spotRef}
        />
      </div>
      <p className={styles.noise__description}>
        Hardware advancements will get us there eventually. We believe advanced
        software is necessary to get us there
      </p>
      <p
        className={styles.noise__description}
        ref={soonRef}
      >
        soon.
      </p>
    </div>
  );
};

export default NoiseSection;
