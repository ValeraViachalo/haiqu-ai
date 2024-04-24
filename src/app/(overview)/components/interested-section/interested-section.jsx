'use client';

import { useEffect, useState } from 'react';
import styles from './interested-section.module.scss';
import { constants } from '@/src/constants';
import { BookADemo } from '@/src/ui';

const InterestedSection = () => {
  const [videoSrc, setVideoSrc] = useState('/videos/quant-comp-tablet.mp4');

  console.log('videoSrc!!!', videoSrc);

  const chooseVideo = (width) => {
    if (width >= 835) {
      return '/videos/quant-comp-desktop.mp4';
    } else if (width <= 430) {
      return '/videos/quant-comp-mobile.mp4';
    } else {
      return '/videos/quant-comp-tablet.mp4';
    }
  };

  useEffect(() => {
    setVideoSrc(chooseVideo(window.innerWidth));

    const handleResize = () => {
      setVideoSrc(chooseVideo(window.innerWidth));
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section
      className={styles.interested_section}
      id="interested-section"
    >
      <p className={styles.interested_section__title}>
        {constants.INTERESTED_SECTION_TITLE}
      </p>

      <div className={styles.interested_section__book_button}>
        <BookADemo light />
      </div>

      <div className={styles.interested_section__video_container}>
        <video
          key={videoSrc}
          width="100%"
          height="100%"
          loop
          muted
          autoPlay
          webkit-playsinline="true"
          playsInline
        >
          <source
            src={videoSrc}
            type="video/mp4"
          />
        </video>
      </div>
    </section>
  );
};

export default InterestedSection;
