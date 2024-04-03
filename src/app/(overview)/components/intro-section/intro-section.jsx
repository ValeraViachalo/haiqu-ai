'use client';

import { useGSAP } from '@gsap/react';
import { useRef, useState, useEffect } from 'react';
import styles from './intro-section.module.scss';
import Ball from './components/ball/ball';
import { balls } from '@/src/constants/balls';
import gsap from 'gsap';
import Image from 'next/image';

const IntroSection = () => {
  const triggerRef = useRef(null);
  const videoRef = useRef(null);
  const videoContainerRef = useRef(null);
  const sphereRef = useRef(null);
  const ballsContainer = useRef(null);

  const [trigger, setTrigger] = useState(false);
  const [ballTrigger, setBallTrigger] = useState(false);

  console.log('balls trig', ballTrigger);

  const handleOnEnter = () => {
    setTrigger(true);
  };

  const handleOnLeave = () => {
    setTrigger(false);
  };

  useGSAP(
    () => {
      const trigger = triggerRef.current;

      trigger.addEventListener('mouseenter', handleOnEnter);
      trigger.addEventListener('mouseleave', handleOnLeave);
    },
    { scope: triggerRef }
  );

  useEffect(() => {
    if (ballTrigger) {
      gsap.to(videoContainerRef.current, {
        opacity: 0,
        duration: 0,
      });
      gsap.to(sphereRef.current, { opacity: 1, duration: 0.2 });
      gsap.to(ballsContainer.current, { opacity: 1, duration: 0 });
    } else {
      gsap.to(videoContainerRef.current, {
        opacity: 1,
        duration: 0.2,
        delay: 0.1,
      });
      gsap.to(sphereRef.current, {
        opacity: 0,
        duration: 0.1,
      });
      gsap.to(ballsContainer.current, {
        opacity: 0,
        duration: 0,
        delay: 0.2,
      });
    }
  }, [ballTrigger]);
  //   const video = videoRef.current;
  //   if (!video) return;

  //   let animationFrameId;

  //   const checkAndPauseAtMiddle = () => {
  //     if (!video) return;

  //     const middleTime = video.duration / 2;
  //     if (video.currentTime >= middleTime) {
  //       video.pause();
  //       setBallTrigger(true);
  //     } else {
  //       // Планування наступної перевірки
  //       animationFrameId = requestAnimationFrame(checkAndPauseAtMiddle);
  //     }
  //   };

  //   if (trigger) {
  //     // Перезапуск відео з початку для демонстрації
  //     video.currentTime = 0;
  //     video.play();
  //     checkAndPauseAtMiddle();
  //   } else {
  //     if (animationFrameId) {
  //       cancelAnimationFrame(animationFrameId);
  //     }
  //   }

  //   return () => {
  //     if (animationFrameId) {
  //       cancelAnimationFrame(animationFrameId);
  //     }
  //   };

  useEffect(() => {
    const video = videoRef.current;
    if (!video || video.readyState < 1) {
      return;
    }

    let animationFrameId;

    const checkAndPauseAtMiddle = () => {
      if (!video) return;

      const middleTime = video.duration / 2;
      if (video.currentTime >= middleTime) {
        video.pause();
        setBallTrigger(true);
        if (animationFrameId) {
          cancelAnimationFrame(animationFrameId);
        }
      } else {
        animationFrameId = requestAnimationFrame(checkAndPauseAtMiddle);
      }
    };

    if (trigger) {
      video.playbackRate = 4;
      if (video.paused) {
        video.play();
      }
      checkAndPauseAtMiddle();
    } else {
      video.playbackRate = 1;
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      if (video.paused) {
        video.play();
        setBallTrigger(false);
        video.playbackRate = 2;
      }
    }

    const handleVideoEnd = () => {
      video.playbackRate = 1;
      video.currentTime = 0;
      video.play();
    };

    video.addEventListener('ended', handleVideoEnd);

    return () => {
      video.removeEventListener('ended', handleVideoEnd);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [trigger]);

  return (
    <section className={styles.intro}>
      <p className={styles.intro__title}>
        Clumsy <br />
        Hardware
      </p>

      <div className={styles.intro__scene}>
        <div
          ref={triggerRef}
          className={styles.intro__trigger_zone}
        />

        <div
          className={styles.intro__sphere_container}
          ref={sphereRef}
        >
          <Image
            src="/images/sphere.svg"
            alt="sphere"
            fill
            className={styles.intro__sphere_svg}
          />
        </div>

        <div
          className={styles.intro__balls_container}
          ref={ballsContainer}
        >
          {balls.map((ball) => (
            <Ball
              // trigger={trigger}
              trigger={ballTrigger}
              key={ball.id}
              {...ball}
            />
          ))}
        </div>

        <div
          className={styles.intro__video_container}
          ref={videoContainerRef}
        >
          <video
            width="360"
            height="176"
            // loop
            muted
            autoPlay
            webkit-playsinline="true"
            playsInline
            ref={videoRef}
          >
            <source
              src="/videos/intro-video-new.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>

      <p className={styles.intro__title2}>
        Needs Careful <br />
        Software
      </p>
    </section>
  );
};

export default IntroSection;
