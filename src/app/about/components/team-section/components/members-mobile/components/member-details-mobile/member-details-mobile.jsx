'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './member-details-mobile.module.scss';
import classNames from 'classnames';

const MemberDetailsMobile = ({ name, description, role, photo }) => {
  const [opened, setOpened] = useState(false);

  return (
    <div className={styles.member}>
      <div
        className={classNames(styles.member__content, {
          [styles.member__content__opened]: !opened,
        })}
      >
        <div className={styles.member__photo}>
          <Image
            fill
            src={photo}
            alt={name}
          />
        </div>

        <div
          className={classNames(styles.member__info, {
            [styles.member__info__opened]: opened,
          })}
        >
          <p className={styles.member__role}>{role}</p>
          <p
            className={classNames(styles.member__name, {
              [styles.member__name__opened]: opened,
            })}
          >
            {name}
          </p>
          <p className={styles.member__description}>{description}</p>

          <div className={styles.member__icons_container}>
            <div className={styles.member__icons}>
              <Image
                src="/mocked/team/icons.svg"
                alt="icons"
                fill
              />
            </div>
          </div>

          <div
            className={classNames(styles.member__button, {
              [styles.member__button__opened]: !opened,
            })}
            onClick={() => setOpened(!opened)}
          />
        </div>
      </div>
    </div>
  );
};

export default MemberDetailsMobile;
