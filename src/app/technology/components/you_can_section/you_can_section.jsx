'use client';

import React from 'react';
import styles from './you_can_section.module.scss';

const YouCanSection = () => {
  return (
    <section className={styles.you_can}>
      <div className={styles.you_can__info}>
        <p className={styles.you_can__title}>With Haiqu, you can:</p>
        <div className={styles.you_can__rightbox}>
          <p className={styles.you_can__100x}>100x</p>
          <p className={styles.you_can__description}>
            Execute complex quantum algorithms with 100x more operations
          </p>
        </div>
        <div className={styles.you_can__rightbox}>
          <p className={styles.you_can__100x}>4x</p>
          <p className={styles.you_can__description}>
            Extend the quantum volume of your QPU by 4x
          </p>
        </div>
        <p className={styles.you_can__title}>Can’t quite believe it?</p>
      </div>
      <button className={styles.you_can__button}>
        Check out our whitepaper
      </button>
    </section>
  );
};

export default YouCanSection;
