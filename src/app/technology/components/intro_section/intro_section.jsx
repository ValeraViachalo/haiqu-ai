'use client';

import { useContext, useRef } from 'react';
import Image from 'next/image';
import styles from './intro_section.module.scss';
import { DataContext } from '@/src/context/DataProvider/context';
import { motion, useScroll, useTransform } from 'framer-motion';


const IntroSection = () => {
  const technologySectionRef = useRef(null);
  const { data: allData } = useContext(DataContext);
  const data = allData?.preview

  const { scrollYProgress } = useScroll({
    target: technologySectionRef,
    offset: ["100% 100%", "100% 0%"],
    layoutEffect: false
  });

  const imageParalax = useTransform(scrollYProgress, [0,1], ["0%", "40%"])

  return data && data.active && (
    <section
      className={styles.technology}
    >
      <div className={styles.technology__info}>
        <p className={styles.technology__title}>{data.title}</p>
        <p className={styles.technology__description}>
        {data.text}
        </p>
      </div>

      <div className={styles.technology__illustration_wrapper}
      ref={technologySectionRef}
      >
        <motion.div style={{ y: imageParalax }} className={styles.technology__illustration}>
          <Image
            width={1434}
            height={825}
            src={data.img}
            alt="quantum circuits"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default IntroSection;
