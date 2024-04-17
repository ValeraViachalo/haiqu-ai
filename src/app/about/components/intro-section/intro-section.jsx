'use client';

import { useRef } from 'react';
import styles from './intro-section.module.scss';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Illustration from './components/illustration';

gsap.registerPlugin(ScrollTrigger);

const IntroSection = () => {
  const mainRef = useRef(null);
  const titleRef = useRef(null);
  const titlePartRef = useRef(null);
  const bubblesRef = useRef(null);
  const perhapsRef = useRef(null);
  const perhapsRefContainer = useRef(null);

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

        if (!isMobile) {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: mainRef.current,
              start: '8% 7%',
              end: `+=300`,
              scrub: 1,
            },
          });

          tl.to(
            titleRef.current,
            {
              fontSize: isTablet ? '3.375rem ' : '5.25rem',
              color: '#000000',
            },
            '<'
          );

          tl.to(
            titlePartRef.current,
            {
              alignItems: 'flexStart',
              height: isTablet ? '3.9375rem' : '6.0625rem',
              onComplete: () => ScrollTrigger.refresh(),
            },
            '<'
          );

          const tl1 = gsap.timeline({
            scrollTrigger: {
              trigger: bubblesRef.current,
              start: 'bottom 15%',
              end: `+=300`,
              scrub: true,
            },
          });

          tl1.to(perhapsRef.current, {
            y: isTablet ? '6rem' : '18rem',
          });

          const tl2 = gsap.timeline({
            scrollTrigger: {
              trigger: perhapsRefContainer.current,
              start: 'top top',
              end: isTablet ? '+=150' : '+=210',
              scrub: true,
            },
          });

          tl2.to('span', {
            opacity: 1,
            stagger: 0.001,
            duration: 0.005,
          });
        }
      }
    );

    ScrollTrigger.normalizeScroll(false);
  }, []);

  return (
    <section
      className={styles.intro}
      ref={mainRef}
      id="about-main"
    >
      <p className={styles.intro__title}>
        Quantum computing will inspire a more carefully designed world
      </p>

      <div
        ref={titlePartRef}
        className={styles.intro__title_part}
      >
        <p
          className={styles.intro__title_part_text}
          ref={titleRef}
        >
          when it works.
        </p>
      </div>

      <div
        className={styles.intro__bubbles}
        ref={bubblesRef}
      >
        <Illustration />
      </div>

      <div
        className={styles.intro__perhaps_container}
        ref={perhapsRefContainer}
      >
        <p
          className={styles.intro__perhaps}
          ref={perhapsRef}
        >
          Perhaps. <span>Perhaps.</span> <span>Perhaps.</span>
        </p>
      </div>
    </section>
  );
};

export default IntroSection;
