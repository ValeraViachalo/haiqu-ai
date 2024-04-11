'use client';

import Image from 'next/image';
import styles from './growing-section.module.scss';
import { useIsMobile } from '@/src/hooks';
import { mediaQueries } from '@/src/constants';

const GrowingSection = () => {
  const isMobile = useIsMobile(mediaQueries.mobile);

  return (
    <section className={styles.growing}>
      <p className={styles.growing__title}>And we’re growing</p>
      <button className={styles.growing__button}>go to careers</button>
      <div className={styles.growing__graph}>
        <Image
          fill
          src={
            isMobile
              ? '/images/about-page/graph-mobile.svg'
              : '/images/about-page/graph.svg'
          }
          alt="graph"
        />
      </div>
    </section>
  );
};

export default GrowingSection;
