import { locations } from '@/src/mockedData';
import styles from './location-section.module.scss';
import Location from './components/location';
const LocationsSection = () => {
  return (
    <section className={styles.locations}>
      <p className={styles.locations__title}>Locations</p>
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
    </section>
  );
};

export default LocationsSection;
