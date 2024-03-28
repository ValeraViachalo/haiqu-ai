'use client';
import { useRef } from 'react';
import Image from 'next/image';
import styles from './interested-section.module.scss';
import { constants } from '@/src/constants';
import { BookADemo } from '@/src/ui';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const InterestedSection = () => {
  const note1 = useRef(null);
  const note2 = useRef(null);
  const note3 = useRef(null);
  const note4 = useRef(null);
  const ellipse = useRef(null);

  // useGSAP(() => {
  //   gsap.to(note1.current, {
  //     x: '-150%',
  //     y: '-500%',
  //     yoyo: true,
  //     repeat: -1,
  //     duration: 10,
  //   });

  //   gsap.to(note2.current, {
  //     x: '50%',
  //     y: '-400%',
  //     yoyo: true,
  //     repeat: -1,
  //     duration: 10,
  //   });

  //   gsap.to(note3.current, {
  //     x: '-550%',
  //     y: '-50%',
  //     yoyo: true,
  //     repeat: -1,
  //     duration: 10,
  //   });

  //   gsap.to(note4.current, {
  //     x: '-40%',
  //     y: '200%',
  //     yoyo: true,
  //     repeat: -1,
  //     duration: 10,
  //   });

  //   gsap.to('.ellipse', {
  //     y: '-8rem',
  //     yoyo: true,
  //     repeat: -1,
  //     duration: 10,
  //   });

  //   gsap.to('.ellipse_first', {
  //     y: '-8rem',
  //     opacity: 0.3,
  //     yoyo: true,
  //     repeat: -1,
  //     duration: 10,
  //   });

  //   gsap.to('.ellipse_last', {
  //     y: '-8rem',
  //     opacity: 0.95,
  //     yoyo: true,
  //     repeat: -1,
  //     duration: 10,
  //   });
  // }, []);

  return (
    <section className={styles.interested_section}>
      <p className={styles.interested_section__title}>
        {constants.INTERESTED_SECTION_TITLE}
      </p>

      <div className={styles.interested_section__book_button}>
        <BookADemo />
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
          loading="lazy"
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
