'use client';

import React, { useState } from 'react';
import styles from './hackathon.module.scss';
import Image from 'next/image';
import classNames from 'classnames';
import Link from 'next/link';

const Hackathon = ({ date, title, photo, link }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href={link}
      className={styles.hackathon__link}
    >
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

        <p
          className={styles.hackathon__date}
          href={link}
        >
          {date}
        </p>
        <p className={styles.hackathon__title}>{title}</p>
      </article>
    </Link>
  );
};

export default Hackathon;
