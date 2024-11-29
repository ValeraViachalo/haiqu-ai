'use client';
import { useState, useEffect } from 'react';

import styles from './page.module.scss';
import {
  CaseStudySection,
  EventsSection,
  InterestedSection,
  IntroSection,
  PartnersSection,
  TechIntroSection,
} from './components';

import { BookADemo, Testimonial } from '@/src/ui';

const Home = () => {
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(true)
    useEffect(() => {
        fetch(`https://app.haiqu.ai/wp-admin/admin-ajax.php?action=api&page=front`,{
            cache: "no-cache",
        })
            .then((res) => res.json())
            .then((data) => {
                setData(data)
                setLoading(false)
            })
    }, [])

    if (isLoading) {
        return (
            <main className={styles.main}>
                <div style={{height:'2000px'}}>
                    {/* <p>Loading...</p> */}
                </div>
            </main>
        );
    }
    //if (!data) return <p>No data</p>

    return (
      <main className={styles.main}>
      <IntroSection data={data} />
      <TechIntroSection data={data} />
      <InterestedSection data={data} />
      <PartnersSection data={data} />
      <Testimonial testimonial={data.quotes} />
      {/* <CaseStudySection /> */}
      <EventsSection data={data} />
      <div className={styles.book_a_demo_container}>
        <BookADemo />
      </div>
    </main>
  );
};

export default Home;
