import styles from './page.module.scss';
import {
  GrowingSection,
  IntroSection,
  LabSection,
  LocationsSection,
  NoiseSection,
  TeamSection,
  WeAreSection,
} from './components';

const About = () => {
  return (
    <main className={styles.about}>
      <IntroSection />
      <NoiseSection />
      <LabSection />
      <TeamSection />
      <WeAreSection />
      <GrowingSection />
      <LocationsSection />
    </main>
  );
};

export default About;
