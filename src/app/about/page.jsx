'use client';
import { useState, useEffect } from 'react';

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
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    fetch(
      `https://app.haiqu.ai/wp-admin/admin-ajax.php?action=api&page=about`,
      {
        cache: 'no-cache',
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <main className={styles.main}>
        <div style={{ height: '2000px' }}>{/* <p>Loading...</p> */}</div>
      </main>
    );
  }

  return (
    <main className={styles.about}>
      <IntroSection data={data} />
      <NoiseSection data={data} />
      <LabSection data={data} />
      <div className={styles.about__extra}>
        <TeamSection data={data} />
        <WeAreSection data={data} />
        <GrowingSection data={data} />
      </div>
      <LocationsSection data={data} />
    </main>
  );
};

export default About;
