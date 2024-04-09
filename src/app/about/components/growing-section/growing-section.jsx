import Image from 'next/image';
import styles from './growing-section.module.scss';

const GrowingSection = () => {
  return (
    <section className={styles.growing}>
      <p className={styles.growing__title}>And we’re growing</p>
      <div className={styles.growing__graph}>
        <Image
          fill
          src="/images/about-page/graph.svg"
          alt="graph"
        />
      </div>
      <button className={styles.growing__button}>go to careers</button>
    </section>
  );
};

export default GrowingSection;
