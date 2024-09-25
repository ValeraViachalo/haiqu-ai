'use client';

import { useRef } from 'react';
import Image from 'next/image';
import styles from './intro_section.module.scss';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const IntroSection = () => {
  const technologySectionRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: technologySectionRef.current,
        start: 'bottom bottom',
        end: '+=3000',
        pin: true,
        scrub: true,
        pinSpacing: false,
      },
    });
  }, []);

  return (
    <section
      className={styles.technology}
      ref={technologySectionRef}
    >
      <div className={styles.technology__info}>
        <p className={styles.technology__title}>We Execute Quantum Circuits</p>
        <p className={styles.technology__description}>
          Our middleware embraces the limitations of today’s quantum hardware to
          deliver breakthrough performance.
        </p>
      </div>

      <div className={styles.technology__illustration}>
        <Image
          width={1434}
          height={825}
          src="/images/quantum_circuits.png"
          alt="quantum circuits"
        />
      </div>
    </section>
  );
};

export default IntroSection;
