'use client';

import { useState, useEffect } from 'react';
import classNames from 'classnames';
import styles from './card.module.scss';
import Image from 'next/image';
import useIsRatioResponse from '@/src/hooks/useIsRatioResponce';

const Card = ({
  color,
  button,
  title,
  moto,
  badges,
  text,
  image,
  imageText,
}) => {
  const [isCardHovered, setIsCardHovered] = useState(false);
  const isDesktop = useIsRatioResponse({ aspectRatio: "15/9" });

  useEffect(() => {
      if (!isDesktop) {
        setIsCardHovered(true);
      } else {
        setIsCardHovered(false);
      }
  }, [isDesktop]);


  return (
    <div
      onMouseEnter={() => {
        if (isDesktop) {
        setIsCardHovered(true);
        }
      }}
      onMouseLeave={() => {
        if (isDesktop) {
          setIsCardHovered(false);
        }
      }}
      className={classNames(styles.card, {
        [styles.card__hovered]: isCardHovered,
        [styles.card__red]: isCardHovered && color === 'red',
        [styles.card__blue]: isCardHovered && color === 'blue',
        [styles.card__black]: isCardHovered && color === 'black',
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

      {button.active && (
          <a href={button.link} target='_blank' className={classNames(styles.card__button, {
            [styles.card__button__hovered]: isCardHovered,
          })}>
            {button.text}
          </a>
        )}

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
