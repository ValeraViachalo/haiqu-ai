'use client';

import { useGSAP } from '@gsap/react';
import { useRef, useState } from 'react';
import styles from './intro-section.module.scss';
import Ball from './components/ball/ball';
import { balls } from '@/src/constants/balls';
import Sphere from './components/sphere';

const IntroSection = () => {
  const triggerRef = useRef(null);
  const [trigger, setTrigger] = useState(false);

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
  return (
    <section className={styles.intro}>
      <p className={styles.intro__title}>
        Clumsy <br />
        Hardware
      </p>

      <div
        ref={triggerRef}
        className={styles.intro__trigger_zone}
      />

      <div className={styles.intro__sphere_container}>
        <Sphere />
      </div>


      <div className={styles.intro__balls_container}>
        {balls.map((ball) => (
          <Ball
            trigger={trigger}
            key={ball.id}
            {...ball}
          />
        ))}
      </div>

      <p className={`${styles.intro__title} ${styles.intro__title2}`}>
        Needs Careful <br />
        Software
      </p>
    </section>
  );
};

export default IntroSection;
