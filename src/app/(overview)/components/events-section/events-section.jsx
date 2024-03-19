import React from 'react';
import styles from './events-section.module.scss';
import { constants } from '@/src/constants';
import { hackathons, latestNews, seminars } from '@/src/mockedData';
import { Hackathon, LatestNews, Seminar } from '@/src/ui';

const EventsSection = () => {
  return (
    <section className={styles.events_section}>
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
        <div
          className={`${styles.events_section__row__latest_news} ${styles.events_section__row}`}
        >
          <p className={styles.events_section__row_title}>
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
        </div>

        <div className={styles.events_section__row}>
          <p className={styles.events_section__row_title}>
            {constants.EVENTS_SECTION_HACKATHONS_TITLE}
          </p>
          <div className={styles.events_section__row__hackathons}>
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

          <div className={styles.events_section__row__seminars}>
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
    </section>
  );
};

export default EventsSection;
