'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './growing-section.module.scss';

import { mediaQueries } from '@/src/constants';

const GrowingSection = ({ data }) => {
  const [graphImage, setGraphImage] = useState(data.careers.img);

  const chooseGraphImage = (width) => {
    if (width >= mediaQueries.tablet) {
      return data.careers.img;
    } else if (width <= mediaQueries.mobile) {
      return data.careers.img_mobile;
    } else {
      return data.careers.img_tablet;
    }
  };

  useEffect(() => {
    setGraphImage(chooseGraphImage(window.innerWidth));

    const handleResize = () => {
      setGraphImage(chooseGraphImage(window.innerWidth));
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className={styles.growing}>
      <p className={styles.growing__title}>{data.careers.title}</p>
      {data.careers.button.active !== true ? (
        ''
      ) : (
        <button
          onClick={() => (location.href = data.careers.button.link)}
          className={styles.growing__button}
        >
          {data.careers.button.text}
        </button>
      )}
      <div className={styles.growing__graph}>
        <Image
          fill
          src={graphImage}
          alt="graph"
        />
      </div>
    </section>
  );
};

export default GrowingSection;
