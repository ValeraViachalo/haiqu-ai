'use client';

import { useState } from 'react';
//import { locations } from '@/src/mockedData';
import styles from './location-section.module.scss';
import Location from './components/location';
import { useIsMobile } from '@/src/hooks';
import { mediaQueries } from '@/src/constants';
import classNames from 'classnames';

const LocationsSection = ({ data }) => {
  if (data.locations.active !== true) {
    return '';
  }

  const locations = data.locations.list
    .filter(function (item) {
      if (item.name) {
        return true;
      }
      return false;
    })
    .map(function (item, key) {
      return {
        id: key,
        photo: item.img,
        city: item.name,
        email: item.email,
        phone: item.phone,
        address: item.address,
      };
    });

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
      <div className={styles.locations__extra}>
        <p className={styles.locations__title}>{data.locations.title}</p>
        {isMobile ? (
          <>
            {/* <p className={styles.locations__title}>Locations</p> */}
            <div className={styles.locations__list}>{titles}</div>
            {selectedCity && (
              <Location
                city={selectedCity.city}
                id={selectedCity.id}
                photo={selectedCity.photo}
                address={selectedCity.address}
                email={selectedCity.email}
                phone={selectedCity.phone}
              />
            )}
          </>
        ) : (
          <>
            {/* <p className={styles.locations__title}>Locations</p> */}

            <div className={styles.locations__grid}>
              {locations.map(({ id, city, photo, address, email, phone }) => (
                <Location
                  key={id}
                  city={city}
                  id={id}
                  photo={photo}
                  address={address}
                  email={email}
                  phone={phone}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default LocationsSection;
