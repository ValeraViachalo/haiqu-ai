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

  useGSAP(() => {
    gsap.set(note1.current, {
      x: '38rem',
      y: '36.3125rem',
    });

    gsap.set(note2.current, {
      x: '34rem',
      y: '41rem',
    });

    gsap.set(note3.current, {
      x: '74rem',
      y: '42rem',
    });

    gsap.set(note4.current, {
      x: '78rem',
      y: '14rem',
    });

    gsap.to(note1.current, {
      x: '36rem',
      y: '18rem',
      yoyo: true,
      repeat: -1,
      duration: 10,
    });

    gsap.to(note2.current, {
      x: '35rem',
      y: '25rem',
      yoyo: true,
      repeat: -1,
      duration: 10,
    });

    gsap.to(note3.current, {
      x: '38rem',
      y: '40rem',
      yoyo: true,
      repeat: -1,
      duration: 10,
    });

    gsap.to(note4.current, {
      x: '76rem',
      y: '30rem',
      yoyo: true,
      repeat: -1,
      duration: 10,
    });

    gsap.to('.ellipse', {
      y: '-8rem',
      yoyo: true,
      repeat: -1,
      duration: 10,
    });

    gsap.to('.ellipse_first', {
      y: '-8rem',
      opacity: 0.3,
      yoyo: true,
      repeat: -1,
      duration: 10,
    });

    gsap.to('.ellipse_last', {
      y: '-8rem',
      opacity: 0.95,
      yoyo: true,
      repeat: -1,
      duration: 10,
    });
  }, []);

  return (
    <section className={styles.interested_section}>
      <p className={styles.interested_section__title}>
        {constants.INTERESTED_SECTION_TITLE}
      </p>

      <div className={styles.interested_section__book_button}>
        <BookADemo />
      </div>

      <div className={styles.interested_section__image_comntainer}>
        <Image
          fill
          src="/images/quantum-computer.svg"
          alt="quantum computer"
          className={styles.interested_section__image}
        />
      </div>

      <div
        ref={ellipse}
        className={`${styles.interested_section__elipse} ${styles.interested_section__elipse__1} ellipse_first`}
      >
        <Image
          fill
          src="/images/qc-ellipse.svg"
          alt="elipse"
        />
      </div>

      <div
        ref={ellipse}
        className={`${styles.interested_section__elipse} ${styles.interested_section__elipse__2} ellipse`}
      >
        <Image
          fill
          src="/images/qc-ellipse.svg"
          alt="elipse"
        />
      </div>

      <div
        ref={ellipse}
        className={`${styles.interested_section__elipse} ${styles.interested_section__elipse__3} ellipse`}
      >
        <Image
          fill
          src="/images/qc-ellipse.svg"
          alt="elipse"
        />
      </div>

      <div
        ref={ellipse}
        className={`${styles.interested_section__elipse} ${styles.interested_section__elipse__4} ellipse_last`}
      >
        <Image
          fill
          src="/images/qc-ellipse.svg"
          alt="elipse"
        />
      </div>

      <div
        className={styles.interested_section__note}
        ref={note1}
      >
        <div className={styles.interested_section__circle} />
        <p className={styles.interested_section__note_title}>
          we’re
          <br /> agnostic
        </p>
      </div>

      <div
        className={styles.interested_section__note}
        ref={note2}
      >
        <div className={styles.interested_section__circle} />
        <p className={styles.interested_section__note_title}>
          4x Quantum <br />
          Volume
        </p>
      </div>

      <div
        className={styles.interested_section__note}
        ref={note3}
      >
        <div className={styles.interested_section__circle} />
        <p className={styles.interested_section__note_title}>
          Up to 20 <br />
          qubits
        </p>
      </div>

      <div
        className={styles.interested_section__note}
        ref={note4}
      >
        <div className={styles.interested_section__circle} />
        <p className={styles.interested_section__note_title}>
          &gt;100x deeper <br /> circuits
        </p>
      </div>
    </section>
  );
};

export default InterestedSection;
