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
    gsap.to(note1.current, {
      x: '-150%',
      y: '-500%',
      yoyo: true,
      repeat: -1,
      duration: 10,
    });

    gsap.to(note2.current, {
      x: '50%',
      y: '-400%',
      yoyo: true,
      repeat: -1,
      duration: 10,
    });

    gsap.to(note3.current, {
      x: '-550%',
      y: '-50%',
      yoyo: true,
      repeat: -1,
      duration: 10,
    });

    gsap.to(note4.current, {
      x: '-40%',
      y: '200%',
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

      {/* <div className={styles.interested_section__book_button}>
        <BookADemo />
      </div> */}

      <div className={styles.interested_section__image_container}>
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
        className={`${styles.interested_section__note} ${styles.interested_section__note__1}`}
        ref={note1}
      >
        <div className={styles.interested_section__circle} />
        <p className={styles.interested_section__note_title}>
          we’re
          <br /> agnostic
        </p>
      </div>

      <div
        className={`${styles.interested_section__note} ${styles.interested_section__note__2}`}
        ref={note2}
      >
        <div className={styles.interested_section__circle} />
        <p className={styles.interested_section__note_title}>
          4x Quantum <br />
          Volume
        </p>
      </div>

      <div
        className={`${styles.interested_section__note} ${styles.interested_section__note__3}`}
        ref={note3}
      >
        <div className={styles.interested_section__circle} />
        <p className={styles.interested_section__note_title}>
          Up to 20 <br />
          qubits
        </p>
      </div>

      <div
        className={`${styles.interested_section__note} ${styles.interested_section__note__4}`}
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
