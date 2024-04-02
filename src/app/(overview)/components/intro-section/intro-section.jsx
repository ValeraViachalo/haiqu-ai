'use client';

import { useGSAP } from '@gsap/react';
import { useRef, useState, useEffect } from 'react';
import styles from './intro-section.module.scss';
import Ball from './components/ball/ball';
import { balls } from '@/src/constants/balls';
import Sphere from './components/sphere';
import { BookADemo } from '@/src/ui';
import gsap from 'gsap';
import Image from 'next/image';

const IntroSection = () => {
  const triggerRef = useRef(null);
  const videoRef = useRef(null);
  const videoContainerRef = useRef(null);
  const sphereRef = useRef(null);

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

  const transitionDuration = 0.4;

  useEffect(() => {
    if (ballTrigger) {
      // Animate to full transparency when trigger is true
      gsap.to(videoContainerRef.current, {
        opacity: 0,
        duration: transitionDuration,
      });
      gsap.to(sphereRef.current, { opacity: 1, duration: transitionDuration });
    } else {
      // Animate back to full opacity when trigger is false
      gsap.to(videoContainerRef.current, {
        opacity: 1,
        duration: 0.2,
        delay: 0.1,
      });
      gsap.to(sphereRef.current, {
        opacity: 0,
        duration: 0.1,

      });
    }
  }, [ballTrigger]);

  // useEffect(() => {
  //   const video = videoRef.current;
  //   if (!video) return;

  //   if (trigger) {
  //     // Якщо trigger true, паузити відео
  //     video.pause();
  //   } else {
  //     // Інакше, якщо trigger false, продовжити відтворення відео
  //     if (video.paused) {
  //       video.play();
  //     }
  //   }
  // }, [trigger]);

  // useEffect(() => {
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
  // }, [trigger]);

  // useEffect(() => {
  //   const video = videoRef.current;
  //   if (!video || video.readyState < 1) {
  //     // Виходимо, якщо відео не завантажено або ref не ініціалізовано
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
  //         cancelAnimationFrame(animationFrameId); // Зупиняємо перевірку, якщо досягли середини
  //       }
  //     } else {
  //       // Планування наступної перевірки
  //       animationFrameId = requestAnimationFrame(checkAndPauseAtMiddle);
  //     }
  //   };

  //   if (trigger) {
  //     if (video.paused) {
  //       video.play();
  //       // Відновлюємо відтворення, якщо на паузі
  //     }
  //     checkAndPauseAtMiddle(); // Розпочинаємо моніторинг досягнення середини
  //   } else {
  //     if (animationFrameId) {
  //       cancelAnimationFrame(animationFrameId); // Скасовуємо перевірку, якщо trigger стає false
  //     }
  //     if (video.paused) {
  //       video.play();
  //       setBallTrigger(false); // Відновлюємо відтворення, якщо було на паузі
  //     }
  //   }

  //   return () => {
  //     if (animationFrameId) {
  //       cancelAnimationFrame(animationFrameId); // Очищення при демонтажі компонента
  //     }
  //   };
  // }, [trigger]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || video.readyState < 1) {
      // Виходимо, якщо відео не завантажено або ref не ініціалізовано
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
          cancelAnimationFrame(animationFrameId); // Зупиняємо перевірку, якщо досягли середини
        }
      } else {
        // Планування наступної перевірки
        animationFrameId = requestAnimationFrame(checkAndPauseAtMiddle);
      }
    };

    if (trigger) {
      video.playbackRate = 4; // Збільшуємо швидкість відтворення, наприклад, у 2 рази
      if (video.paused) {
        video.play()
      }
      checkAndPauseAtMiddle(); // Розпочинаємо моніторинг досягнення середини
    } else {
      video.playbackRate = 1; // Відновлюємо нормальну швидкість відтворення
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId); // Скасовуємо перевірку, якщо trigger стає false
      }
      if (video.paused) {
        video.play();
        setBallTrigger(false); // Відновлюємо відтворення, якщо було на паузі
      }
    }

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId); // Очищення при демонтажі компонента
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
          />
        </div>

        <div className={styles.intro__balls_container}>
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
            loop
            muted
            autoPlay
            webkit-playsinline="true"
            playsInline
            ref={videoRef}
          >
            <source
              src="/videos/intro-video-low.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>

      <p className={styles.intro__title2}>
        Needs Careful <br />
        Software
      </p>

      {/* <div className={styles.intro__book_a_demo_container}>
        <BookADemo />
      </div> */}
    </section>
  );
};

export default IntroSection;
