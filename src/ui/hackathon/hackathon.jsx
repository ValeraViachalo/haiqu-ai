'use client';

import React, { useState } from 'react';
import styles from './hackathon.module.scss';
import Image from 'next/image';
import classNames from 'classnames';

const Hackathon = ({ date, title, photo }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <article
      className={styles.hackathon}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className={styles.hackathon__photo}>
        <Image
          alt={title}
          src={photo}
          fill
          className={classNames([`${styles.hackathon__image}`], {
            [`${styles.hackathon__image_hovered}`]: hovered,
          })}
        />
      </div>

      <p className={styles.hackathon__date}>{date}</p>
      <p className={styles.hackathon__title}>{title}</p>
    </article>
  );
};

export default Hackathon;
