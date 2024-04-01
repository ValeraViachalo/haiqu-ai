'use client';

import { useRef, useState } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Logo } from '@/src/ui';
import styles from './tech-intro-section.module.scss';
import Image from 'next/image';
import classNames from 'classnames';
import Illustration from './components/illustration';

gsap.registerPlugin(ScrollTrigger);

const TechIntroSection = () => {
  const filledBar = useRef(null);
  const main = useRef(null);
  const logo = useRef(null);
  const number = useRef(null);
  const boost = useRef(null);
  const line = useRef(null);
  const maskFilledBar = useRef(null);
  const moto = useRef(null);

  const [scaled, setScaled] = useState(false);

  useGSAP(() => {
    ScrollTrigger.normalizeScroll(true);
    const isNotMobile = window.innerWidth >= 460;

    gsap.set([maskFilledBar.current, logo.current], {
      opacity: 1,
    });

    // const tl = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: main.current,
    //     start: 'top 10%',
    //     end: 'top 10%',
    //     toggleActions: 'restart none reverse none',
    //   },
    // });

    // tl.to(
    //   maskFilledBar.current,
    //   {
    //     x: 0,
    //     // duration: 1,
    //     opacity: 1,
    //     // xPercent: -98,
    //   },
    //   '<'
    // );

    // tl.to(
    //   logo.current,
    //   {
    //     x: 0,
    //     // duration: 1,
    //     opacity: 1,
    //   },
    //   '<'
    // );

    const tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: main.current,
        // start: 'top top',
        start: !isNotMobile ? 'top 40%' : 'top top',
        // end: `+=${window.innerHeight}`,
        end: isNotMobile ? `+=${window.innerHeight}` : '+=300',
        pin: isNotMobile,
        scrub: 1.5,
      },
    });

    // tl1.to(filledBar.current, {
    //   x: 0,
    // });

    tl1.to(
      maskFilledBar.current,
      {
        clipPath: isNotMobile
          ? 'polygon(0 0, 102% 0, 102% 100%, 0% 100%)'
          : 'polygon(0 0, 108% 0, 108% 100%, 0% 100%)',
      },
      '<'
    );

    tl1.to(
      logo.current,
      {
        x: '100vw',
      },
      '<'
    );

    tl1.to(
      moto.current,
      {
        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
      },
      '<'
    );

    tl1.to(
      boost.current,
      {
        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
      },
      '<'
    );

    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: main.current,
        start: isNotMobile ? '22% top' : 'top 10%',
        end: isNotMobile ? `+=${window.innerWidth / 2}` : '+=400',
        scrub: 1.5,
        pin: isNotMobile,
      },
    });

    gsap.set(number.current, {
      scale: isNotMobile ? 0.05 : 0.1,
      transformOrigin: 'top center',
    });

    tl2.to(boost.current, {
      y: isNotMobile ? '9vh' : '14vh',
    });

    tl2.to(
      line.current,
      {
        height: isNotMobile ? '14.9375rem' : '7rem',
        height: isNotMobile ? '9rem' : '7rem',
        transformOrigin: 'top center',
      },
      '<'
    );

    tl2.to(
      number.current,
      {
        scale: 1,
        transformOrigin: 'top center',
        duration:2,
        onUpdate: () => setScaled(true),
        onReverseComplete: () => setScaled(false),
      },
      '<'
    );

    ScrollTrigger.normalizeScroll(false);
  }, []);

  return (
    <section
      className={`${styles.tech_intro} main`}
      ref={main}
      id="tech_intro"
    >
      <div className={styles.tech_intro__process_bar} />

      <div
        ref={filledBar}
        className={`${styles.tech_intro__process_bar} ${styles.tech_intro__process_bar__filled}`}
      />
      <div
        className={styles.tech_intro__mask_filled}
        ref={maskFilledBar}
      />

      <div
        className={styles.tech_intro__logo}
        ref={logo}
      >
        <Logo blue />
      </div>

      <p className={styles.tech_intro__text}>
        Today’s quantum computers are noisy.
      </p>

      <p
        className={styles.tech_intro__moto}
        ref={moto}
      >
        But they can do a lot more than you think.
      </p>

      <Illustration />

      <div
        className={styles.tech_intro__100x_container}
        ref={boost}
      >
        <div
          className={styles.tech_intro__line}
          ref={line}
        >
          <Image
            src="/images/line.svg"
            alt="line"
            fill
          />
        </div>

        <div
          className={classNames(`${styles.tech_intro__number} number`, {
            [styles.tech_intro__number__hovered]: scaled,
          })}
          ref={number}
        ></div>
      </div>

      <div className={styles.tech_intro__dc}>
        <p className={styles.tech_intro__dc_title}>Deeper circuits</p>
        <p className={styles.tech_intro__dc_description_top}>
          Running any circuit on a noisy device is an approximation — at least
          approximate it well.
        </p>
        <p className={styles.tech_intro__dc_description_bottom}>
          Our middleware uses noise-mitigation and approximate execution to
          maximize the capabilities of current QPUs. Run 100x deeper circuits
          automatically with Haiqu.
        </p>

        <button className={styles.tech_intro__learn_more}>learn more</button>
      </div>
    </section>
  );
};

export default TechIntroSection;