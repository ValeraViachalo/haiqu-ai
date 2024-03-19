import { logos, testimonial } from '@/src/mockedData';
import Testimonial from '@/src/ui/testimonial';
import styles from './partners-sections.module.scss';
import { Ticker } from '@/src/ui';
import { constants } from '@/src/constants';

const PartnersSection = () => {
  return (
    <section className={styles.partners_section}>
      <Ticker
        title={constants.TICKER_TITLE_PARTNERS_ADOPTERS}
        logos={logos}
        dark
      />

      <div className={styles.partners_section__testimonial_container}>
        <Testimonial testimonial={testimonial} />
      </div>
    </section>
  );
};

export default PartnersSection;
