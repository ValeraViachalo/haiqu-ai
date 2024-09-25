import styles from './page.module.scss';
import {
  ExampleSection,
  HowItWorksSection,
  IntroSection,
  OurMiddlewareSection,
  YouCanSection,
} from './components';

const Technology = () => (
  <section className={styles.page}>
    <IntroSection />
    <YouCanSection />
    <HowItWorksSection />
    <ExampleSection />
    <OurMiddlewareSection />
  </section>
);

export default Technology;
