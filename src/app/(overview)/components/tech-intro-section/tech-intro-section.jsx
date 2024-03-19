'use client';

import { useRef, useState } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Logo } from '@/src/ui';
import styles from './tech-intro-section.module.scss';
import Image from 'next/image';
import classNames from 'classnames';

gsap.registerPlugin(ScrollTrigger);

const TechIntroSection = () => {
  const filledBar = useRef(null);
  const main = useRef(null);
  const logo = useRef(null);
  const text = useRef(null);
  const order = useRef(null);
  const number = useRef(null);
  const boost = useRef(null);
  const line = useRef(null);
  const rectSmall = useRef(null);
  const rectBig = useRef(null);
  const orderMask = useRef(null);

  const [scaled, setScaled] = useState(false);

  useGSAP(() => {
    ScrollTrigger.normalizeScroll(true);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: main.current,
        start: 'top 10%',
        end: 'top 10%',
        toggleActions: 'restart none reverse none',
      },
    });

    tl.to(
      filledBar.current,
      {
        x: '-98.2vw',
        duration: 1,
      },
      '<'
    );

    tl.to(
      logo.current,
      {
        x: 0,
        duration: 1,
      },
      '<'
    );

    const tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: main.current,
        start: 'top top',
        end: `+=${window.innerHeight}`,
        pin: true,
        scrub: 1,
      },
    });

    tl1.to(filledBar.current, {
      x: 0,
    });
    tl1.to(
      logo.current,
      {
        x: '98.2vw',
      },
      '<'
    );

    tl1.to(
      text.current,
      {
        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
      },
      '<'
    );

    tl1.to(
      orderMask.current,
      {
        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
      },
      '<'
    );

    tl1.to(
      order.current,
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

    tl1.to(
      rectSmall.current,
      {
        width: '18.5rem',
        duration: 0.2,
      },
      '<'
    );

    tl1.to(
      rectBig.current,
      {
        width: '24.5rem',
        duration: 0.2,
      },
      '<'
    );

    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: main.current,
        start: '22% top',
        end: `+=${window.innerWidth / 2}`,
        scrub: 1,
        pin: true,
      },
    });

    gsap.set(number.current, {
      scale: 0.05,
      transformOrigin: 'top center',
    });

    gsap.set(line.current, {
      height: '8.375rem',
      transformOrigin: 'top center',
    });

    tl2.to(boost.current, {
      y: 100,
    });

    tl2.to(
      line.current,
      {
        height: '14.9375rem',
        transformOrigin: 'top center',
      },
      '<'
    );

    tl2.to(
      number.current,
      {
        scale: 1,
        transformOrigin: 'top center',
        onComplete: () => setScaled(true),
        onReverseComplete: () => setScaled(false),
      },
      '<'
    );
  }, []);

  return (
    <section
      className={`${styles.tech_intro} main`}
      ref={main}
    >
      <div className={styles.tech_intro__process_bar} />
      <div
        ref={filledBar}
        className={`${styles.tech_intro__process_bar} ${styles.tech_intro__process_bar__filled}`}
      />

      <div
        className={styles.tech_intro__logo}
        ref={logo}
      >
        <Logo blue />
      </div>

      <div>
        <p className={styles.tech_intro__text}>
          Today’s quantum computers are noisy.
        </p>
      </div>

      <div className={styles.tech_intro__illustration}>
        <div className={styles.tech_intro__chaos}>
          <Image
            src="/images/tech-intro-chaos.svg"
            alt="tech-intro chaos"
            fill
          />
        </div>

        <div
          className={styles.tech_intro__rect_small}
          ref={rectSmall}
        />

        <div
          className={styles.tech_intro__rect_big}
          ref={rectBig}
        />

        <div
          className={styles.tech_intro__order_mask}
          ref={orderMask}
        />

        <div
          className={styles.tech_intro__order}
          ref={order}
        >
          <Image
            src="/images/tech-intro-order.svg"
            alt="tech-intro order"
            fill
          />
        </div>

        <div className={styles.tech_intro__gradient}>
          <Image
            src="/images/gradient.svg"
            alt="gradient"
            width={84}
            height={504}
          />
        </div>

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
