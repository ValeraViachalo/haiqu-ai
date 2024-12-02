import Image from 'next/image';
import styles from './example_section.module.scss';
import classNames from 'classnames';
import { useContext } from 'react';
import { DataContext } from '@/src/context/DataProvider/context';

const ExampleSection = () => {
  const { data: allData } = useContext(DataContext);
  const data = allData?.example;

  return data && data.active && (
    <section className={styles.example}>
      <p className={styles.example__title}>{data.title}</p>
      <div className={styles.example__info}>
        <div className={styles.example__description}>
          <p className={styles.example__subheading}>
            {data.subtitle}
          </p>
          {data.button.active && (
          <a href={data.button.link} className={styles.example__button}>
            {data.button.text}
          </a>
        )}
          <div className={styles.example__paragraphs_container} dangerouslySetInnerHTML={{ __html: data.text }} />
          {/* <div className={styles.example__paragraphs_container}>
            <p className={styles.example__paragraph}>
              We ran a time evolution circuit solving a 1D advection PDE
              equation on a noisy device. Notice that without our software,
              fidelity plummets to zero at around 5 time-steps.{' '}
            </p>
            <p className={styles.example__paragraph}>
              When we use our Optimized Execution (
              <span className={styles.example__orange_circle}></span>) software,
              we achieve 25 time-steps and 5500+ gates in depth, maintaining
              ~60% fidelity by the end—meaning we could keep going...
            </p>
          </div> */}
        </div>
        <div className={styles.example__graph}>
            <Image src={data.img} fill />
        </div>
      </div>
      <div className={styles.example__footer}>
        <p className={styles.example__subheading}>{data.title_compatibility}</p>
        <p
          className={classNames(
            styles.example__subheading,
            styles.example__subheading__opacity,
            styles.example__subheading__footer
          )}
        >
          {data.text_compatibility}
        </p>
      </div>
    </section>
  );
};

export default ExampleSection;
