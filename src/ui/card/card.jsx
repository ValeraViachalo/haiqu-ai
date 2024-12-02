'use client';

import { useState, useEffect } from 'react';
import classNames from 'classnames';
import styles from './card.module.scss';
import Image from 'next/image';

const Card = ({
  color,
  btn_title,
  title,
  moto,
  badges,
  text,
  image,
  imageText,
}) => {
  const [isCardHovered, setIsCardHovered] = useState(false);

  useEffect(() => {
    const handleResize = () => {

      if (window.innerWidth < 834) {
        setIsCardHovered(true);
      } else {
        setIsCardHovered(false);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div
      onMouseEnter={() => {
        if (window.innerWidth >= 834) {
          setIsCardHovered(true);
        }
      }}
      onMouseLeave={() => {
        if (window.innerWidth >= 834) {
          setIsCardHovered(false);
        }
      }}
      className={classNames(styles.card, {
        [styles.card__hovered]: isCardHovered,
        [styles.card__red]: isCardHovered && color === 'red',
        [styles.card__blue]: isCardHovered && color === 'blue',
      })}
    >
      <div
        className={classNames(styles.card__image, {
          [styles.card__image__hovered]: isCardHovered,
        })}
      >
        <Image
          width={85}
          height={85}
          alt={imageText}
          src={image}
        />
        <p className={styles.card__image_text}>{imageText}</p>
      </div>

      <button
        className={classNames(styles.card__button, {
          [styles.card__button__hovered]: isCardHovered,
        })}
      >
        {btn_title}
      </button>

      <div
        className={classNames(styles.card__info, {
          [styles.card__info__hovered]: isCardHovered,
        })}
      >
        <p className={styles.card__title}>{title}</p>
        <p className={styles.card__moto}>{moto}</p>
        <div className={styles.card__badges}>
          {badges?.length > 0 &&
            badges?.map((badge) => (
              <div
                key={badge.tag}
                className={styles.card__badge}
              >
                {badge.tag}
              </div>
            ))}
        </div>
        <p className={styles.card__text} dangerouslySetInnerHTML={{ __html: text }}/>
      </div>
    </div>
  );
};

export default Card;
