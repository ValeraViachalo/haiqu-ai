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
