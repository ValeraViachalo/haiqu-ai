'use client';

import { useEffect, useRef } from 'react';
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
              start: 'top 5%',
              end: `+=400`,
              scrub: 2,
              ease: 'power2.in',
              onLeave: () => ScrollTrigger.refresh(),
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
            },
            '<'
          );

          const tl1 = gsap.timeline({
            scrollTrigger: {
              trigger: bubblesRef.current,
              start: isTablet ? 'top top' : 'bottom 15%',
              end: `+=600`,
              scrub: true,
            },
          });

          tl1.to(perhapsRef.current, {
            y: isTablet ? '10rem' : '10rem',
            duration: 3,
          });

          const tl2 = gsap.timeline({
            scrollTrigger: {
              trigger: perhapsRefContainer.current,
              start: 'top top',
              end: isTablet ? '+=410' : '+=410',
              scrub: true,
              pin: isTablet,
            },
          });

          tl2.to('span', {
            opacity: 1,
            stagger: isTablet ? 0.01 : 0.7,
            duration: isTablet ? 0.01 : 0.7,
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
