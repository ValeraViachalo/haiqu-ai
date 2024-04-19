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

const scrubValue = 1.5;
const easing = 'power4.in';
const delay = 0.1;

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

    gsap.set([maskFilledBar.current, logo.current], {
      opacity: 1,
    });

    const mm = gsap.matchMedia();

    mm.add(
      {
        isMobile: '(max-width: 430px)',
        isTablet: '(max-width: 834px)',
        isDesktop: '(min-width: 834px)',
      },
      (context) => {
        const { isMobile, isTablet, isDesktop } = context.conditions;

        const tl1 = gsap.timeline({
          scrollTrigger: {
            trigger: main.current,
            start: isMobile ? 'top 40%' : 'top top',
            end: !isMobile ? `+=${window.innerHeight * 1.5}` : '+=300',
            pin: !isMobile,
            scrub: scrubValue,
            ease: easing,
          },
        });

        tl1.to(
          maskFilledBar.current,
          {
            clipPath: !isMobile
              ? 'polygon(0 0, 102% 0, 102% 100%, 0% 100%)'
              : 'polygon(0 0, 108% 0, 108% 100%, 0% 100%)',
            delay: !isMobile ? delay : 0,
            onUpdate: function () {
              console.log(this.progress());
            },
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
            start: !isMobile ? '22% top' : 'top 10%',
            end: '+=350',
            scrub: 1,
            // markers: true,
            // pin: !isMobile,
          },
        });

        gsap.set(number.current, {
          scale: !isMobile ? 0.06 : 0.09,
          transformOrigin: 'top center',
        });

        tl2.to(boost.current, {
          y: !isMobile ? '9vh' : '14vh',
        });

        tl2.to(
          line.current,
          {
            height: !isMobile ? '9rem' : '7rem',
            transformOrigin: 'top center',
            // onComplete: () => ScrollTrigger.refresh(),
          },
          '<'
        );

        tl2.to(
          number.current,
          {
            scale: 1,
            transformOrigin: 'top center',
            duration: 1,
            onUpdate: () => setScaled(true),
            onReverseComplete: () => setScaled(false),
          },
          '<'
        );
      }
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

      <Illustration
        scrub={scrubValue}
        easing={easing}
        delay={delay}
      />

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
          Executing algorithms on a quantum device is fundamentally an
          approximate process, which is especially difficult to control in the
          presence of noise.
        </p>
        <p className={styles.tech_intro__dc_description_bottom}>
          Our middleware embraces approximation by design to maximize the
          capabilities of current QPUs. Run up to 100X deeper circuits with
          Haiqu.
        </p>

        <button className={styles.tech_intro__learn_more}>learn more</button>
      </div>
    </section>
  );
};

export default TechIntroSection;
