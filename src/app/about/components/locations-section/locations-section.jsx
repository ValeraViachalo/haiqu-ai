'use client';

import { useState } from 'react';
import { locations } from '@/src/mockedData';
import styles from './location-section.module.scss';
import Location from './components/location';
import { useIsMobile } from '@/src/hooks';
import { mediaQueries } from '@/src/constants';
import classNames from 'classnames';

const LocationsSection = () => {
  const [selected, setSelected] = useState(1);

  const isMobile = useIsMobile(mediaQueries.mobile);
  const titles = locations.map(({ city, id }) => {
    return (
      <div
        key={id}
        className={classNames(styles.locations__list_item, {
          [styles.locations__list_item__selected]: selected === id,
        })}
        onClick={() => setSelected(id)}
      >
        {city}
      </div>
    );
  });

  const selectedCity = locations.find(({ id }) => selected === id);

  return (
    <section className={styles.locations}>
      <p className={styles.locations__title}>Locations</p>
      {isMobile ? (
        <>
          {/* <p className={styles.locations__title}>Locations</p> */}
          <div className={styles.locations__list}>{titles}</div>
          {selectedCity && (
            <Location
              city={selectedCity.city}
              id={selectedCity.id}
              photo={selectedCity.photo}
            />
          )}
        </>
      ) : (
        <>
          {/* <p className={styles.locations__title}>Locations</p> */}

          <div className={styles.locations__grid}>
            {locations.map(({ id, city, photo }) => (
              <Location
                key={id}
                city={city}
                id={id}
                photo={photo}
              />
            ))}
          </div>
        </>
      )}
    </section>
  );
};

export default LocationsSection;
