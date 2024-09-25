import { logosAsSeenIs, testimonial } from '@/src/mockedData';
import Testimonial from '@/src/ui/testimonial';
import styles from './partners-sections.module.scss';
import { Ticker } from '@/src/ui';
import { constants } from '@/src/constants';

const PartnersSection = ({data}) => {
    if (data.partners.active !== true) {
        return ('');
    }

    const partners = data.partners.logo.filter(function(item) {
        if (item) {
            return true;
        }
        return false;
    }).map(function (item, key) {
        return {id:key, photo:item, alt:''}
    })

  return (
    <section className={styles.partners_section}>
      <div className={styles.partners_section__ticker_container}>
        <Ticker
          title={data.partners.title}
          logos={partners}
          dark
        />
      </div>

      {/* <div className={styles.partners_section__testimonial_container}>
        <Testimonial testimonial={testimonial} />
      </div> */}
    </section>
  );
};

export default PartnersSection;
