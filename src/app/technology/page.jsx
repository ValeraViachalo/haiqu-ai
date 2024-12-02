'use client'

import styles from './page.module.scss';
import {
  ExampleSection,
  HowItWorksSection,
  IntroSection,
  OurMiddlewareSection,
  YouCanSection,
} from './components';
import { DataProvider } from '@/src/context/DataProvider/DataProvider';
import { useEffect } from 'react';

const Technology = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
  <DataProvider url="https://app.haiqu.ai/wp-admin/admin-ajax.php?action=api&page=technology">
    <section className={styles.page}>
      <IntroSection />
      <YouCanSection />
      <HowItWorksSection />
      <ExampleSection />
      <OurMiddlewareSection />
    </section>
  </DataProvider>
)};

export default Technology;
