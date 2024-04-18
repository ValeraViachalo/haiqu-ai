import styles from './page.module.scss';
import {
  CaseStudySection,
  EventsSection,
  InterestedSection,
  IntroSection,
  PartnersSection,
  TechIntroSection,
} from './components';

import { BookADemo } from '@/src/ui';

const Home = () => {
  return (
    <main className={styles.main}>
      <IntroSection />
      <TechIntroSection />
      <InterestedSection />
      <CaseStudySection />
      <PartnersSection />
      <EventsSection />
      <div className={styles.book_a_demo_container}>
        <BookADemo />
      </div>
    </main>
  );
};

export default Home;
