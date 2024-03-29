import { useGSAP } from '@gsap/react';
import styles from './illustration.module.scss';
import gsap from 'gsap';
import { useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

const Illustration = () => {
  const main = useRef(null);
  const chaos = useRef(null);
  const orderMask = useRef(null);
  const order = useRef(null);
  const rectSmall = useRef(null);
  const rectBig = useRef(null);
  const rects = useRef(null);
  const note = useRef(null);

  useGSAP(() => {
    ScrollTrigger.normalizeScroll(true);
    const applyPin = window.innerWidth > 430;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#tech_intro',
        start: !applyPin ? 'top 40%' : 'top top',
        // start: 'top 80%',
        // end: `+=${window.innerHeight}`,
        end: applyPin ? `+=${window.innerHeight}` : '+=300',
        scrub: 1.5,
      },
    });

    tl.to(
      orderMask.current,
      {
        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
      },
      '<'
    );

    tl.to(
      order.current,
      {
        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
      },
      '<'
    );

    tl.to(
      rectSmall.current,
      {
        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
        duration: 0.2,
      },
      '<'
    );

    tl.to(
      rectBig.current,
      {
        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
        duration: 0.2,
      },
      '<'
    );

    tl.to(
      note.current,
      {
        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
        duration: 0.08,
      },
      '<'
    );

    ScrollTrigger.normalizeScroll(true);
  }, []);

  return (
    <div
      className={styles.illustration}
      ref={main}
    >
      <div
        className={styles.illustration__chaos}
        ref={chaos}
      >
        <div className={styles.illustration__chaos_image}>
          <Image
            src="/images/tech-intro-chaos.svg"
            alt="tech-intro chaos"
            fill
          />
        </div>
      </div>

      <div
        className={styles.illustration__order_mask}
        ref={orderMask}
      />

      <div
        className={styles.illustration__rect_small}
        ref={rectSmall}
      />
      <div
        className={styles.illustration__rect_big}
        ref={rectBig}
      />

      <div
        className={styles.illustration__order}
        ref={order}
      >
        <div className={styles.illustration__order_image}>
          <Image
            src="/images/tech-intro-order_OLD.svg"
            alt="tech-intro order"
            fill
          />
        </div>
      </div>

      <div className={styles.illustration__gradient}>
        <Image
          src="/images/gradient.svg"
          alt="gradient"
          fill
        />
      </div>

      <div
        className={styles.illustration__note_container}
        ref={note}
      >
        <p className={styles.illustration__note_text}>4x Quantum Volume</p>

        <div className={styles.illustration__note_line}>
          <Image
            src="/images/note-line.svg"
            alt="note line"
            fill
          />
        </div>
      </div>
    </div>
  );
};

export default Illustration;
