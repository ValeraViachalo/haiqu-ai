import { logos } from '@/src/mockedData';
import { DemoBookingForm, Ticker } from '@/src/ui';

import styles from './page.module.scss';
import {
  CaseStudySection,
  EventsSection,
  InterestedSection,
  IntroSection,
  PartnersSection,
  TechIntroSection,
} from './components';
import { constants } from '@/src/constants';

const Home = () => {
  return (
    <main className={styles.main}>
      <IntroSection />
      <TechIntroSection />
      <InterestedSection />
      <CaseStudySection />
      <PartnersSection />
      <EventsSection />

      <div className={styles.main__ticker_container}>
        <Ticker
          logos={logos}
          title={constants.TICKER_TITLE_AS_SEEN_IN}
        />
      </div>

      <DemoBookingForm />
    </main>
  );
};

export default Home;
