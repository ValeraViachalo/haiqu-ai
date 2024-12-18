'use client';

import { useEffect, useState } from 'react';
import classNames from 'classnames';
import styles from './location.module.scss';
import Image from 'next/image';
import { useIsMobile } from '@/src/hooks';
import { mediaQueries } from '@/src/constants';

const Location = ({ city, id, photo, address, email, phone }) => {
  const [hovered, setHovered] = useState(false);

  const isTablet = useIsMobile(mediaQueries.tablet);

  useEffect(() => {
    if (isTablet) {
      setHovered(true);
    }
  }, [isTablet]);

  const handleMouseEnter = () => {
    if (isTablet) {
      setHovered(true);
      return;
    }

    setHovered(true);
  };

  const handleMouseLeave = () => {
    if (isTablet) {
      setHovered(true);
      return;
    }

    setHovered(false);
  };

  return (
    <div
      className={classNames(styles.location, {
        [styles.location__hovered]: hovered,
        [styles[`location__${id}`]]: hovered,
      })}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={classNames(styles.location__city, {
          [styles.location__city__hovered]: hovered,
        })}
      >
        {city}
      </div>

      <div
        className={classNames(styles.location__title, {
          [styles.location__title__hovered]: hovered,
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
        <div>
          <p className={styles.location__info_title}>Email</p>
          <p className={styles.location__info_content}>{email}</p>
        </div>

        <div>
          <p className={styles.location__info_title}>Address</p>
          <p className={styles.location__info_content}>{address}</p>
        </div>
      </div>

      {/* <p
        className={classNames(styles.location__address, {
          [styles.location__address__hovered]: hovered,
        })}
      >
        {address}
      </p> */}
    </div>
  );
};

export default Location;
