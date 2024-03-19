'use client';

import React, { useEffect, useRef, useState } from 'react';
import styles from './latest-news.module.scss';
import Image from 'next/image';
import classNames from 'classnames';
import { constants } from '@/src/constants';
import ReadButton from '../read-button';

const LatestNews = ({ backgroundColor, photo, date, title, dark, color }) => {
  const container = useRef(null);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (container.current) {
      container.current.style.backgroundColor = backgroundColor;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <article
      className={classNames(styles.latest_news, {
        [styles.latest_news__dark]: dark,
      })}
      ref={container}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className={styles.latest_news__photo}>
        <Image
          src={photo}
          alt={title}
          fill
          className={classNames([styles.latest_news__image], {
            [`${styles.latest_news__image__hovered}`]: hovered,
          })}
        />
      </div>

      <p className={styles.latest_news__date}>{date}</p>
      <p className={styles.latest_news__title}>{title}</p>

      <ReadButton
        dark={dark}
        visibility={hovered}
        title={constants.LATEST_NEWS_BUTTON_TITLE}
      />
    </article>
  );
};

export default LatestNews;

//there will be some check for bg-color prop, and there will be a few different classes for read-butto, and font colors
