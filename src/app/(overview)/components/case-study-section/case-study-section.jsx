'use client';

import { useState, useEffect } from 'react';
import styles from './case-study-section.module.scss';
import { CaseStudy, CaseStudyMobile } from '@/src/ui';
import { constants } from '@/src/constants';
import { caseStudy } from '@/src/mockedData';

const CaseStudySection = () => {
  const [isViewportSmall, setIsViewportSmall] = useState(
    window.innerWidth < 430
  );

  useEffect(() => {
    const handleResize = () => {
      setIsViewportSmall(window.innerWidth < 430);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className={styles.case_study}>
      <div className={styles.case_study__info}>
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
          ({ id, company, category, description, photo, dark }) => {
            return isViewportSmall ? (
              <CaseStudyMobile
                key={id}
                company={company}
                category={category}
                description={description}
                photo={photo}
                dark={dark}
              />
            ) : (
              <CaseStudy
                key={id}
                company={company}
                category={category}
                description={description}
                photo={photo}
                dark={dark}
              />
            );
          }
        )}
      </section>
    </section>
  );
};

export default CaseStudySection;
