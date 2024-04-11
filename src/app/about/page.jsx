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
      {/* <div style={{ height: '200vh', backgroundColor: 'pink' }}></div> */}
      {/* <IntroSection /> */}
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
