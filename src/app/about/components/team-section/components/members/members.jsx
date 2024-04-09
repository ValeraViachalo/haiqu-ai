'use client';

import { useEffect, useState, useRef } from 'react';
import { team } from '@/src/mockedData';
import styles from './members.module.scss';
import Image from 'next/image';
import classNames from 'classnames';

const Members = () => {
  return (
    <div className={styles.members}>
      <div>
        {team.map(({ id, name, description, role, photo }) => (
          <MemberDetails
            key={id}
            name={name}
            description={description}
            role={role}
            photo={photo}
          />
        ))}
      </div>

      <div className={styles.members__video_container}>
        <video
          width="100%"
          height="100%"
          loop
          muted
          autoPlay
          webkit-playsinline="true"
          playsInline
        >
          <source
            src="/videos/footer-video.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </div>
  );
};

const MemberDetails = ({ id, name, description, role, photo }) => {
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

  return (
    <div
      key={id}
      className={classNames(styles.members__info, {
        [styles.members__info__opened]: opened,
      })}
      onMouseEnter={() => setOpened(true)}
      onMouseLeave={() => setOpened(false)}
    >
      <div className={styles.members__details}>
        <p
          className={classNames(styles.members__name, {
            [styles.members__name__opened]: opened,
          })}
        >
          {name}
        </p>
        <p className={styles.members__description}>{description}</p>
        <div className={styles.members__icons}>
          <Image
            src="/mocked/team/icons.svg"
            alt="icons"
            fill
          />
        </div>
      </div>
      <div
        className={classNames(styles.members__role_container, {
          [styles.members__role_container__opened]: opened,
        })}
      >
        <div
          className={classNames(styles.members__role, {
            [styles.members__role__opened]: opened,
          })}
          ref={roleRef}
        >
          {role}
        </div>
      </div>
      {opened && (
        <div className={styles.members__photo}>
          <Image
            fill
            src={photo}
            alt={name}
          />
          <div className={styles.members__spot} />
        </div>
      )}
    </div>
  );
};

export default Members;
