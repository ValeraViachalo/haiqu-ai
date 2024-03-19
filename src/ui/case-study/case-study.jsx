'use client';

import React, { useState } from 'react';
import styles from './case-study.module.scss';
import Image from 'next/image';
import classNames from 'classnames';


import { ReadButton } from '..';
import { constants } from '@/src/constants';

const CaseStudy = ({ company, category, description, photo, dark }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <article
      className={classNames(styles.case_study, {
        [`${styles.case_study__light}`]: !dark,
      })}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className={styles.case_study__photo}>
        <Image
          fill
          src={photo}
          alt={company}
          className={classNames(styles.case_study__image, {
            [styles.case_study__image__hovered]: hovered,
            [styles.case_study__image__hovered__light]:hovered && !dark,
          })}
        />
      </div>

      <ReadButton
        title={constants.CASE_STUDY_BUTTON_TITLE}
        visibility={hovered}
        dark={dark}
      />

      {dark && (
        <>
          <div className={styles.case_study__learn_button_mask} />

          <div
            className={classNames(styles.case_study__learn_button_container, {
              [styles.case_study__learn_button_container__hovered]: hovered,
            })}
          >
            <div className={styles.case_study__union_symbol}>
              <Image
                src="/images/union.svg"
                alt="union"
                fill
              />
            </div>
            <button className={styles.case_study__learn_button}>
              {constants.CASE_STUDY_LEARN_CASE_BUTTON}
            </button>
          </div>
        </>
      )}

      <div
        className={classNames(styles.case_study__info, {
          [`${styles.case_study__info__hovered}`]: hovered,
        })}
      >
        <p className={styles.case_study__category}>{category}</p>
        <p className={styles.case_study__company}>{company}</p>
        <p className={styles.case_study__description}>{description}</p>
      </div>
    </article>
  );
};

export default CaseStudy;
