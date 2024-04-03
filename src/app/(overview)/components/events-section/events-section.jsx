'use client';

import { useRef } from 'react';
import styles from './events-section.module.scss';
import { constants } from '@/src/constants';
import { hackathons, latestNews, logos, seminars } from '@/src/mockedData';
import { Carousel, Hackathon, LatestNews, Seminar, Ticker } from '@/src/ui';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const EventsSection = () => {
  const hackathonsRef = useRef(null);
  const seminarsRef = useRef(null);

  useGSAP(() => {
    const mediaQuery = window.matchMedia('(min-width: 835px)');

    const runAnimations = () => {
      gsap.set(hackathonsRef.current, { y: '7%' });
      gsap.set(seminarsRef.current, { y: '6%' });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: hackathonsRef.current,
          start: 'top 70%',
          end: '+=300',
          scrub: 3,
        },
      });

      tl.to([hackathonsRef.current, seminarsRef.current], {
        y: 0,
      });
    };

    if (mediaQuery.matches) {
      runAnimations();
    }
  }, []);

  return (
    <section className={styles.events_section} id="events-section">
      <div className={styles.events_section__header}>
        <p className={styles.events_section__title}>
          {constants.EVENTS_SECTION_TITLE}
        </p>

        <div>
          <p className={styles.events_section__description}>
            {constants.EVENTS_SECTION_DESCRIPTION}
          </p>
          <button className={styles.events_section__button}>
            {constants.EVENTS_SECTION_DISCOVER_BUTTON_TEXT}
          </button>
        </div>
      </div>

      <div className={styles.events_section__headings}>
      <div className={styles.events_section__row_single}>
      <div className={styles.events_section__row}>
          <p
            className={`${styles.events_section__row_title} ${styles.events_section__row_title__latest_news}`}
          >
            {constants.EVENTS_SECTION_LATEST_NEWS_TITLE}
          </p>

          <div className={styles.events_section__row__latest_news}>
            {latestNews.map(({ id, title, date, photo, color, dark }) => (
              <LatestNews
                key={id}
                backgroundColor={color}
                date={date}
                title={title}
                photo={photo}
                dark={dark}
                color={color}
              />
            ))}
          </div>

          <div className={styles.events_section__carousel_container}>
            <Carousel items={latestNews}>
              {latestNews.map(({ id, title, date, photo, color, dark }) => (
                <LatestNews
                  key={id}
                  backgroundColor={color}
                  date={date}
                  title={title}
                  photo={photo}
                  dark={dark}
                  color={color}
                />
              ))}
            </Carousel>
          </div>
        </div>
      </div>


        <div className={styles.events_section__row_unite}>
          <div className={styles.events_section__row}>
            <p className={styles.events_section__row_title}>
              {constants.EVENTS_SECTION_HACKATHONS_TITLE}
            </p>
            <div
              className={styles.events_section__row__hackathons}
              ref={hackathonsRef}
            >
              {hackathons.map(({ id, title, date, photo }) => (
                <Hackathon
                  key={id}
                  title={title}
                  date={date}
                  photo={photo}
                />
              ))}
            </div>
          </div>

          <div className={styles.events_section__row}>
            <p className={styles.events_section__row_title}>
              {constants.EVENTS_SECTION_SEMINARS}
            </p>

            <div
              className={styles.events_section__row__seminars}
              ref={seminarsRef}
            >
              {seminars.map(({ id, photo, title, description }) => (
                <Seminar
                  key={id}
                  photo={photo}
                  title={title}
                  description={description}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <Ticker
        logos={logos}
        title={constants.TICKER_TITLE_AS_SEEN_IN}
        dark={false}
      />
    </section>
  );
};

export default EventsSection;
