'use client';

import Image from 'next/image';
import styles from './how_it_works.module.scss';
import { useIsMobile } from '@/src/hooks';
import { useContext } from 'react';
import { DataContext } from '@/src/context/DataProvider/context';

const HowItWorksSection = () => {
  const { data: allData } = useContext(DataContext);
  const data = allData?.how_it_works;

  const isMobile = useIsMobile();

  console.log('is mobile', isMobile);

  return data && data.active && (
    <section className={styles.how_it_works}>
      <div className={styles.how_it_works__info}>
        <p className={styles.how_it_works__title}>{data.title}</p>
        <div className={styles.how_it_works__description}>
          <p className={styles.how_it_works__text}>
            {data.text}
          </p>
        </div>
      </div>
      <picture>
        <source
          media="(max-width: 450px)"
          srcSet="/images/technology-page/input-circuit-mobile.png"
        />
        <Image
          width={1862}
          height={1057}
          alt="input circuit"
          src="/images/input-circuit.png"
        />
      </picture>
    </section>
  );
};

export default HowItWorksSection;
