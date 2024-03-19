'use client';

import { useRef } from 'react';
import styles from './case-study-section.module.scss';
import { CaseStudy } from '@/src/ui';
import { constants } from '@/src/constants';
import { caseStudy } from '@/src/mockedData';
// import { useGSAP } from '@gsap/react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);

const CaseStudySection = () => {
  // const info = useRef(null);

  // useGSAP(() => {
  //   const tl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: info.current,
  //       start: 'top top',
  //       end: 'bottom bottom',
  //       pin: true,
  //     },
  //   });

  //   tl.to(info.current, {
  //     opacity: 1,
  //   });
  // }, []);

  return (
    <section className={styles.case_study}>
      <div
        className={styles.case_study__info}
        // ref={info}
      >
        <p className={styles.case_study__title}>
          {constants.CASE_STUDY_SECTION_TITLE}
        </p>
        <p className={styles.case_study__moto}>
          {constants.CASE_STUDY_SECTION_MOTO}
        </p>
        <p className={styles.case_study__description}>
          {constants.CASE_STUDY_SECTION_DESCRIPTION}
        </p>
      </div>

      <section className={styles.case_study__cases_container}>
        {caseStudy.map(
          ({ id, company, category, description, photo, dark }) => (
            <CaseStudy
              key={id}
              company={company}
              category={category}
              description={description}
              photo={photo}
              dark={dark}
            />
          )
        )}
      </section>
    </section>
  );
};

export default CaseStudySection;
