'use client';

import { useContext, useRef } from 'react';
import Image from 'next/image';
import styles from './intro_section.module.scss';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { DataContext } from '@/src/context/DataProvider/context';

gsap.registerPlugin(ScrollTrigger);

const IntroSection = () => {
  const technologySectionRef = useRef(null);
  const { data: allData } = useContext(DataContext);
  const data = allData?.preview

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
        const { isDesktop } = context.conditions;

        if (isDesktop) {
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
        }
      }
    );
  }, [data]);

  return data && data.active && (
    <section
      className={styles.technology}
      ref={technologySectionRef}
    >
      <div className={styles.technology__info}>
        <p className={styles.technology__title}>{data.title}</p>
        <p className={styles.technology__description}>
        {data.text}
        </p>
      </div>

      <div className={styles.technology__illustration}>
        <Image
          width={1434}
          height={825}
          src={data.img}
          alt="quantum circuits"
        />
      </div>
    </section>
  );
};

export default IntroSection;
