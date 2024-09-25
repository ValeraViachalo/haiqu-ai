'use client';

import { useRef } from 'react';
import styles from './events-section.module.scss';
import { constants } from '@/src/constants';
import { logos } from '@/src/mockedData';
import { Carousel, Hackathon, LatestNews, Seminar, Ticker } from '@/src/ui';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const EventsSection = ({data}) => {
    if (data.events.active !== true) {
        //return ('');
    }


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

    const logosAsSeenIs = data.seen.logo.filter(function(item) {
        if (item) {
            return true;
        }
        return false;
    }).map(function (item, key) {
        return {id:key, photo:item, alt:''}
    })

    const seminars = data.events.seminars.filter(function(item) {
        if (item.title) {
            return true;
        }
        return false;
    }).map(function (item, key) {
        return {id:key, photo:item.img, title:item.title, description:item.description, link:item.link}
    })

    const latestNews = data.events.events.filter(function(item) {
        if (item.title) {
            return true;
        }
        return false;
    }).map(function (item, key) {
        return {id:key, photo:item.img, title:item.title, color:item.bg, link:item.link, dark:!item.dark, date:item.date}
    })

    const hackathons = data.events.hackathons.filter(function(item) {
        if (item.title) {
            return true;
        }
        return false;
    }).map(function (item, key) {
        return {id:key, photo:item.img, title:item.title, subtitle:item.subtitle, link:item.link, date:item.date}
    })

  return (
    <section className={styles.events_section} id="events-section">
      <div className={styles.events_section__header}>
        <p className={styles.events_section__title}>
          {data.events.title}
        </p>

        <div>
          <p className={styles.events_section__description}>
              {data.events.text}
          </p>
            {data.events.button.active !== true ?
                '' :
                <button onClick={() => location.href=data.events.button.link} className={styles.events_section__button}>
                    {data.events.button.text}
                </button>
            }
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
            {latestNews.map(({ id, title, date, photo, color, dark, link }) => (
              <LatestNews
                key={id}
                backgroundColor={color}
                date={date}
                title={title}
                photo={photo}
                dark={dark}
                color={color}
                link={link}
              />
            ))}
          </div>

          <div className={styles.events_section__carousel_container}>
            <Carousel items={latestNews}>
              {latestNews.map(({ id, title, date, photo, color, dark, link }) => (
                <LatestNews
                  key={id}
                  backgroundColor={color}
                  date={date}
                  title={title}
                  photo={photo}
                  dark={dark}
                  color={color}
                  link={link}
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
              {hackathons.map(({ id, title, date, photo, link, subtitle }) => (
                <Hackathon
                  key={id}
                  title={title}
                  date={date}
                  photo={photo}
                  subtitle={subtitle}
                  link={link}
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
              {seminars.map(({ id, photo, title, description, link }) => (
                <Seminar
                  key={id}
                  photo={photo}
                  title={title}
                  description={description}
                  link={link}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <Ticker
        logos={logosAsSeenIs}
        title={data.seen.title}
        dark={false}
      />
    </section>
  );
};

export default EventsSection;
