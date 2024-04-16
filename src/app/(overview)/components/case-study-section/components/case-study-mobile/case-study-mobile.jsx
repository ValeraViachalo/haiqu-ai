import Image from 'next/image';
import styles from './case-study-mobile.module.scss';
import { constants } from '@/src/constants';
import classNames from 'classnames';

const CaseStudyMobile = ({ company, category, description, photo, dark }) => {
  return (
    <article
      className={classNames(styles.case_study, {
        [`${styles.case_study__light}`]: !dark,
      })}
    >
      <div className={styles.case_study__top}>
        <div className={styles.case_study__photo}>
          <Image
            fill
            src={photo}
            alt={company}
            className={styles.case_study__image}
          />
        </div>

        <div className={styles.case_study__group_info}>
          <p className={styles.case_study__category}>{category}</p>
          <p className={styles.case_study__company}>{company}</p>
        </div>
      </div>

      <p className={styles.case_study__description}>{description}</p>

      <div className={styles.case_study__learn_button_container}>
        <div className={styles.case_study__union_symbol}>
          <Image
            src="/images/union.svg"
            alt="union"
            fill
          />
        </div>
        <button className={classNames(styles.case_study__learn_button, {
          [styles.case_study__learn_button__light]: !dark,
        })}>
          {constants.CASE_STUDY_LEARN_CASE_BUTTON}
        </button>
      </div>

      <button
        className={classNames(styles.case_study__read_button, {
          [styles.case_study__read_button__light]: !dark,
        })}
      >
        {constants.CASE_STUDY_BUTTON_TITLE}
      </button>
    </article>
  );
};

export default CaseStudyMobile;
