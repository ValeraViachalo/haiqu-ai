'use client';
import styles from './interested-section.module.scss';
import { constants } from '@/src/constants';
import { BookADemo } from '@/src/ui';

const InterestedSection = () => {
  return (
    <section className={styles.interested_section}>
      <p className={styles.interested_section__title}>
        {constants.INTERESTED_SECTION_TITLE}
      </p>

      <div className={styles.interested_section__book_button}>
        <BookADemo light />
      </div>

      <div className={styles.interested_section__video_container}>
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
            src="/videos/quant-comp-desktop.mp4"
            type="video/mp4"
            media="(min-width: 834px)"
          />

          <source
            media="(max-width: 430px)"
            src="/videos/quant-comp-mobile.mp4"
            type="video/mp4"
          />

          <source
            media="(max-width: 834px)"
            src="/videos/quant-comp-tablet.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </section>
  );
};

export default InterestedSection;
