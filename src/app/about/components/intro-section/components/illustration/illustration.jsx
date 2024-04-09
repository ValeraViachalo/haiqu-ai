import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './illustration.module.scss';

gsap.registerPlugin(ScrollTrigger);

const Illustration = () => {
  useGSAP(() => {
    ScrollTrigger.normalizeScroll(true);

    const bubbles = gsap.utils.toArray([
      `.${styles.illustration__bubble}`,
      `.${styles.illustration__bubble_last}`,
    ]);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#about-main',
        start: '40% bottom',
        end: 'center 90%',
        scrub: 1,
      },
    });

    bubbles.forEach((bubble, index) => {
      tl.to(
        bubble,
        {
          y: `-=${6.4375 * (index + 1)}rem`, 
        },
        '<'
      );
    });

    ScrollTrigger.normalizeScroll(false);
  });

  return (
    <div
      className={styles.illustration}
    >
      <div className={styles.illustration__bubble} />
      <div className={styles.illustration__bubble} />
      <div className={styles.illustration__bubble} />
      <div className={styles.illustration__bubble_last} />
    </div>
  );
};

export default Illustration;
