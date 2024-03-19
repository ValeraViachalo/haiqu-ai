'use client';

import React, { useState } from 'react';
import styles from './seminar.module.scss';
import Image from 'next/image';
import classNames from 'classnames';
import { constants } from '@/src/constants';

const Seminar = ({ title, description, photo }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <article
      className={styles.seminar}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className={styles.seminar__photo}>
        <Image
          src={photo}
          alt={title}
          className={classNames([`${styles.seminar__image}`], {
            [`${styles.seminar__image_hovered}`]: hovered,
          })}
          fill
        />
      </div>

      <p className={styles.seminar__title}>{title}</p>

      <p className={styles.seminar__description}>{description}</p>

      <button className={styles.seminar__button}>
        {constants.SEMINAR__BUTTON}
      </button>
    </article>
  );
};

export default Seminar;
