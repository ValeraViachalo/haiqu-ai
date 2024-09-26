import Image from 'next/image';
import styles from './example_section.module.scss';
import classNames from 'classnames';

const ExampleSection = () => {
  return (
    <section className={styles.example}>
      <p className={styles.example__title}>Example</p>
      <div className={styles.example__info}>
        <div className={styles.example__description}>
          <p className={styles.example__subheading}>
            This work made us finalists in this year’s Airbus-BMW Challenge.
          </p>
          <button className={styles.example__button}>see more here</button>
          <div className={styles.example__paragraphs_container}>
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
          </div>
        </div>
        <div className={styles.example__graph}>
          <div className={styles.example__graph_container}>
            <picture>
              <source
                media="(max-width: 450px)"
                srcSet="/images/technology-page/graph-mobile.svg"
              />
              <Image
                width={1021}
                height={681}
                src="/images/technology-page/graph.svg"
                alt="graph"
              />
            </picture>
          </div>
        </div>
      </div>
      <div className={styles.example__footer}>
        <p className={styles.example__subheading}>Built for Compatibility</p>
        <p
          className={classNames(
            styles.example__subheading,
            styles.example__subheading__opacity,
            styles.example__subheading__footer
          )}
        >
          Our execution technology is readily compatible with the growing
          middleware stack and can be integrated naturally with other
          compilation, error suppression, and noise mitigation techniques.
        </p>
      </div>
    </section>
  );
};

export default ExampleSection;
