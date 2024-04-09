'use client';

import { useState } from 'react';
import classNames from 'classnames';
import styles from './location.module.scss';
import Image from 'next/image';

const Location = ({ city, id, photo }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`${styles.location} ${styles[`location__${id}`]}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className={classNames(styles.location__city, {
          [styles.location__city__hovered]: hovered,
        })}
      >
        {city}
      </div>

      <div
        className={classNames(styles.location__photo, {
          [styles.location__photo__hovered]: hovered,
        })}
      >
        <Image
          src={photo}
          alt={city}
          fill
        />
      </div>

      <div
        className={classNames(styles.location__info, {
          [styles.location__info__hovered]: hovered,
        })}
      >
        <p className={styles.location__info_title}>Email</p>
        <p className={styles.location__info_title}>Phone</p>
        <p className={styles.location__info_content}>contact@haiqu.com</p>
        <p className={styles.location__info_content}>+34 943 371-956</p>
      </div>

      <p
        className={classNames(styles.location__address, {
          [styles.location__address__hovered]: hovered,
        })}
      >
        Crookedest Street In The World Lombard St, 1098, San Francisco,
        California, United States
      </p>
    </div>
  );
};

export default Location;
