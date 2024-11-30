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

const startAnimation = 'top 7.5%';
const scrubValue = 1.5;
const easing = 'power4.in';
let delay = 0.1;

const TechIntroSection = ({ data }) => {
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
        isHugeDesktop: '(min-width: 2560px)',
      },
      (context) => {
        const { isMobile, isHugeDesktop } = context.conditions;

        const tl1 = gsap.timeline({
          scrollTrigger: {
            trigger: main.current,
            start: isMobile ? startAnimation : 'top top',
            end: !isMobile ? `+=${window.innerHeight * 1.5}` : '+=1600',
            pin: true,
            scrub: isMobile ? true : scrubValue,
            ease: easing,
          },
        });

        // if (isHugeDesktop) {
        //   delay = 0;
        // }

        tl1.to(
          maskFilledBar.current,
          {
            clipPath: !isMobile
              ? 'polygon(0 0, 102% 0, 102% 100%, 0% 100%)'
              : 'polygon(0 0, 108% 0, 108% 100%, 0% 100%)',
            delay: isMobile ? 0.5 : delay,
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
            start: !isMobile ? '22% top' : 'top 5%',
            end: '+=350',
            scrub: 1,
          },
        });

        gsap.set(number.current, {
          scale: isMobile ? 0.2 : 0.06,
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

      <p
        className={styles.tech_intro__text}
        dangerouslySetInnerHTML={{ __html: data.computers.title_1 }}
      ></p>

      <p
        className={styles.tech_intro__moto}
        ref={moto}
        dangerouslySetInnerHTML={{ __html: data.computers.title_2 }}
      ></p>

      <div className={styles.tech_intro__illustration_container}>
        <Illustration
          scrub={scrubValue}
          easing={easing}
          delay={delay}
          startAnimation={startAnimation}
          data={data}
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

      <div className={styles.tech_intro__dc}>
        <p
          className={styles.tech_intro__dc_title}
          dangerouslySetInnerHTML={{ __html: data.computers.title }}
        ></p>
        <p
          className={styles.tech_intro__dc_description_top}
          dangerouslySetInnerHTML={{ __html: data.computers.text_1 }}
        ></p>
        <p
          className={styles.tech_intro__dc_description_bottom}
          dangerouslySetInnerHTML={{ __html: data.computers.text_2 }}
        ></p>

        {data.computers.button.active !== true ? (
          ''
        ) : (
          <button
            onClick={() => (location.href = data.computers.button.link)}
            className={styles.tech_intro__learn_more}
            dangerouslySetInnerHTML={{ __html: data.computers.button.text }}
          ></button>
        )}
      </div>
    </section>
  );
};

export default TechIntroSection;
