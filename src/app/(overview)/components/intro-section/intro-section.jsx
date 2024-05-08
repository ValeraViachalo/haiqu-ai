'use client';

import styles from './intro-section.module.scss';
import { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import Ball from './components/ball/ball';
import { balls } from '@/src/constants/balls';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const IntroSectionAlt = () => {
  const triggerRef = useRef(null);
  const videoRef = useRef(null);
  const videoContainerRef = useRef(null);
  const sphereRef = useRef(null);
  const ballsContainer = useRef(null);

  // const [trigger, setTrigger] = useState(false);
  const [ballTrigger, setBallTrigger] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const scrollHandler = () => {
      setBallTrigger(false);
    };

    window.addEventListener('scroll', scrollHandler);

    ScrollTrigger.create({
      trigger: '#intro',
      start: 'top 1%',
      onEnter: () => {
        if (triggerRef.current) {
          triggerRef.current.style.pointerEvents = 'none';
        }
      },
      onLeaveBack: () => {
        if (triggerRef.current) {
          triggerRef.current.style.pointerEvents = 'auto';
        }
      },
    });

    if (ballTrigger) {
      gsap.to(videoContainerRef.current, {
        opacity: 0,
        duration: 0,
      });

      gsap.to(sphereRef.current, { opacity: 1, duration: 0 });

      gsap.to(ballsContainer.current, { opacity: 1, duration: 0.1 });
    } else {
      gsap.to(videoContainerRef.current, {
        opacity: 1,
        duration: 0,
        delay: 0.1,
      });
      gsap.to(sphereRef.current, {
        opacity: 0,
        duration: 0,
        delay: 0.1,
      });
      gsap.to(ballsContainer.current, {
        opacity: 0,
        duration: 0,
        delay: 0.2,
      });
    }

    return () => window.removeEventListener('scroll', scrollHandler);
  }, [ballTrigger]);

  // useEffect(() => {
  //   const video = videoRef.current;
  //   if (!video || video.readyState < 1) {
  //     return;
  //   }

  //   let animationFrameId;

  //   const checkAndPauseAtMiddle = () => {
  //     if (!video) return;

  //     const middleTime = video.duration / 2;
  //     if (video.currentTime >= middleTime) {
  //       video.pause();
  //       setBallTrigger(true);
  //       if (animationFrameId) {
  //         cancelAnimationFrame(animationFrameId);
  //       }
  //     } else {
  //       animationFrameId = requestAnimationFrame(checkAndPauseAtMiddle);
  //     }
  //   };

  //   if (trigger) {
  //     video.playbackRate = 4;
  //     if (video.paused) {
  //       video.play();
  //     }
  //     checkAndPauseAtMiddle();
  //   } else {
  //     video.playbackRate = 1;
  //     if (animationFrameId) {
  //       cancelAnimationFrame(animationFrameId);
  //     }
  //     if (video.paused) {
  //       video.play();
  //       setBallTrigger(false);
  //       video.playbackRate = 2;
  //     }
  //   }

  //   const handleVideoEnd = () => {
  //     video.playbackRate = 1;
  //     video.currentTime = 0;
  //     video.play();
  //   };

  //   video.addEventListener('ended', handleVideoEnd);

  //   return () => {
  //     video.removeEventListener('ended', handleVideoEnd);
  //     if (animationFrameId) {
  //       cancelAnimationFrame(animationFrameId);
  //     }
  //   };
  // }, [trigger]);

  return (
    <section
      className={styles.intro}
      id="intro"
    >
      <p className={styles.intro__title}>
        Clumsy <br />
        Hardware
      </p>

      <div className={styles.intro__animation_container}>
        <div
          id="trigger-zone"
          ref={triggerRef}
          className={styles.intro__trigger_zone}
          onMouseEnter={() => setBallTrigger(true)}
          onMouseLeave={() => setBallTrigger(false)}
        />

        <div
          className={styles.intro__video_container}
          ref={videoContainerRef}
        >
          <video
            muted
            autoPlay
            webkit-playsinline="true"
            playsInline
            loop
            ref={videoRef}
          >
            <source
              src="/videos/intro-video.mp4"
              type="video/mp4"
            />
          </video>
        </div>

        <div
          className={styles.intro__sphere_container}
          ref={sphereRef}
        />
      </div>

      <div
        className={styles.intro__balls_container}
        ref={ballsContainer}
      >
        {balls.map((ball) => (
          <Ball
            trigger={ballTrigger}
            key={ball.id}
            {...ball}
          />
        ))}
      </div>

      <p className={styles.intro__title_bottom}>
        Needs Careful <br />
        Software
      </p>
    </section>
  );
};

export default IntroSectionAlt;
