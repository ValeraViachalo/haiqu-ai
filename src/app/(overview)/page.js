import styles from './page.module.scss';
import {
  CaseStudySection,
  EventsSection,
  InterestedSection,
  IntroSection,
  PartnersSection,
  TechIntroSection,
} from './components';

// async function getStrapiData(path) {
//   try {
//     const response = await fetch(path);
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error('THIS IS THE ERROR!', error);
//   }
// }

const Home = async () => {
  // const strapiData = await getStrapiData(
  //   'http://127.0.0.1:1337/api/hackhatons?populate=*'
  // );

  return (
    <main className={styles.main}>
      {/* <IntroSection /> */}
      {/* <TechIntroSection />
      <InterestedSection />
      <CaseStudySection />
      <PartnersSection />
      <EventsSection /> */}
    </main>
  );
};

export default Home;
