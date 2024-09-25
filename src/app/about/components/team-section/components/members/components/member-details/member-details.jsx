'use client';

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import classNames from 'classnames';
import styles from './member-details.module.scss';

const MemberDetails = ({ id, name, description, role, setPhotoId }) => {
  const roleRef = useRef(null);
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    if (roleRef.current) {
      const blockWidth = roleRef.current.offsetWidth;

      if (opened) {
        roleRef.current.style.left = `calc(100% - ${blockWidth}px)`;
      } else {
        roleRef.current.style.left = ``;
      }
    }
  }, [opened]);

  const handleOpenMember = () => {
    setOpened(true);
    setPhotoId(id);
  };

  const handleClosedMember = () => {
    setOpened(false);
    setPhotoId(null);
  };

  return (
    <div
      key={id}
      className={classNames(styles.member__info, {
        [styles.member__info__opened]: opened,
      })}
      onMouseEnter={() => handleOpenMember()}
      onMouseLeave={() => handleClosedMember()}
    >
      <div className={styles.member__details}>
        <p
          className={classNames(styles.member__name, {
            [styles.member__name__opened]: opened,
          })}
        >
          {name}
        </p>
        <p className={styles.member__description}>{description}</p>
        <div className={styles.member__icons}>
          <Image
            src="/mocked/team/icons.svg"
            alt="icons"
            fill
          />
        </div>
      </div>
      <div
        className={classNames(styles.member__role_container, {
          [styles.member__role_container__opened]: opened,
        })}
      >
        <div
          className={classNames(styles.member__role, {
            [styles.member__role__opened]: opened,
          })}
          ref={roleRef}
        >
          {role}
        </div>
      </div>
    </div>
  );
};
export default MemberDetails;
