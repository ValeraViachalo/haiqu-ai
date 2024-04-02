import React from 'react';
import Image from 'next/image';
import styles from './ticker.module.scss';
import classNames from 'classnames';

const Ticker = ({logos = [], title, dark}) => {
  return (
    <section className={styles.ticker} id="case-study-section">
      <p className={classNames(styles.ticker__title, {
        [styles.ticker__title__dark]: dark,
      })}>{title}</p>
      <div className={styles.ticker__container}>
        <div className={styles.ticker__logos}>
          {logos?.map(({ id, alt, photo }) => (
            <div
              key={id}
              className={styles.ticker__logo_container}
            >
              <Image
                alt={alt}
                src={photo}
                fill
              />
            </div>
          ))}
        </div>

        <div className={styles.ticker__logos}>
          {logos.map(({ id, alt, photo }) => (
            <div
              key={id}
              className={styles.ticker__logo_container}
            >
              <Image
                alt={alt}
                src={photo}
                fill
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ticker;
