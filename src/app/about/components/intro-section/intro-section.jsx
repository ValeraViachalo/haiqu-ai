'use client';

import { useRef } from 'react';
import styles from './intro-section.module.scss';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Illustration from './components/illustration';
import classNames from 'classnames';

gsap.registerPlugin(ScrollTrigger);

const IntroSection = () => {
  const mainRef = useRef(null);
  const titlePartRef = useRef(null);
  const bubblesRef = useRef(null);
  const dotsRef = useRef(null);
  const dot1 = useRef(null);
  const dot2 = useRef(null);
  const dot3 = useRef(null);
  const perhapsRef = useRef(null);

  useGSAP(() => {
    ScrollTrigger.normalizeScroll(true);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: mainRef.current,
        start: 'top 7%',
        end: `+=400`,
        scrub: 2,
      },
    });

    tl.to(
      titlePartRef.current,
      {
        top: '21rem',
        fontSize: '5.25rem',
        lineHeight: '6.09rem',
        color: '#000000',
      },
      '<'
    );

    tl.to(
      bubblesRef.current,
      {
        top: '31rem',
        duration: 0.4,
      },
      '<'
    );

    tl.to(
      dot1.current,
      {
        top: '26.6875rem',
        left: '25.3125rem',
        duration: 3,
      },
      '<'
    );

    tl.to(
      dot2.current,
      {
        top: '5.5rem',
        duration: 3,
      },
      '<'
    );

    tl.to(
      dot3.current,
      {
        top: '35.5rem',
        duration: 3,
      },
      '<'
    );

    tl.to(
      dotsRef.current,
      {
        top: '25rem',
        duration: 2,
      },
      '<'
    );

    const tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: perhapsRef.current,
        start: 'bottom bottom',
        end: `+=400`,
        scrub: true,
      },
    });

    tl1.to(perhapsRef.current, {
      y: '12rem',
    });

    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: '#about-main',
        start: 'bottom center',
        end: '+=500',
        pin: true,
        pinSpacing: false,
        scrub: true,
      },
    });

    tl2.to(
      'span',
      {
        opacity: 1,
        stagger: 0.05,
        duration: 0.5,
      },
      '<'
    );

    ScrollTrigger.normalizeScroll(false);
  });

  return (
    <section
      className={styles.intro}
      ref={mainRef}
      id="about-main"
    >
      <p className={styles.intro__title}>
        Quantum computing will inspire a more carefully designed world
      </p>
      <p
        className={styles.intro__title_part}
        ref={titlePartRef}
      >
        when it works.
      </p>

      <div
        className={styles.intro__bubbles}
        ref={bubblesRef}
      >
        <Illustration />
      </div>

      <div
        className={styles.intro__info_dots_container}
        ref={dotsRef}
      >
        <div
          className={`${styles.intro__info_dot} ${styles.intro__info_dot__1}`}
          ref={dot1}
        >
          <div className={styles.intro__dot} />
          <p className={styles.intro__info}>
            create better carbon capture mechanisms?
          </p>
        </div>

        <div
          className={`${styles.intro__info_dot} ${styles.intro__info_dot__2}`}
          ref={dot2}
        >
          <div className={styles.intro__dot} />
          <p className={styles.intro__info}>
            Will it help us discover better drugs?
          </p>
        </div>

        <div
          className={`${styles.intro__info_dot} ${styles.intro__info_dot__3}`}
          ref={dot3}
        >
          <div className={styles.intro__dot} />
          <p className={styles.intro__info}>
            find cleaner ways to produce ammonia?
          </p>
        </div>
      </div>

      <p
        className={styles.intro__perhaps}
        ref={perhapsRef}
      >
        Perhaps. <span>Perhaps.</span> <span>Perhaps.</span>
      </p>
    </section>
  );
};

export default IntroSection;
