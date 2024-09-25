import Image from 'next/image';
import styles from './how_it_works.module.scss';

const HowItWorksSection = () => {
  return (
    <section className={styles.how_it_works}>
      <div className={styles.how_it_works__info}>
        <p className={styles.how_it_works__title}>How it works</p>
        <div className={styles.how_it_works__description}>
          <p className={styles.how_it_works__text}>
            We execute quantum algorithms as multiple modified circuits that
            each fit the constraints of the QPU. We combine all the results and
            apply noise mitigation to achieve a high-fidelity final result... in
            a way that scales.
          </p>
        </div>
      </div>
      <Image
        width={1862}
        height={1057}
        alt="input circuit"
        src="/images/input-circuit.png"
      />
    </section>
  );
};

export default HowItWorksSection;
