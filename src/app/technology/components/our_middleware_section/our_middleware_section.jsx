import { Card } from '@/src/ui';
import styles from './our_middleware_section.module.scss';
import { useContext } from 'react';
import { DataContext } from '@/src/context/DataProvider/context';

const OurMiddlewareSection = () => {
  const { data: allData } = useContext(DataContext);
  const data = allData?.middleware;

  return data && data.active && (
    <section className={styles.our_middleware}>
      <div className={styles.our_middleware__leftside}>
        <p className={styles.our_middleware__title}>{data.title}</p>
        <p className={styles.our_middleware__description}>
          {data.text}
        </p>
      </div>

      <div className={styles.our_middleware__rightside}>
        {data?.list.map((currCard, i) => (
          <Card
            color={currCard.hover_bg}
            button={currCard.button}
            image={currCard.img.img}
            imageText={currCard.img.text}
            title={currCard.subtitle}
            moto={currCard.title}
            badges={currCard.tags}
            text={currCard.text}
            key={`${currCard.title}--${i}`}
          />
        ))}
      </div>
    </section>
  );
};

export default OurMiddlewareSection;
