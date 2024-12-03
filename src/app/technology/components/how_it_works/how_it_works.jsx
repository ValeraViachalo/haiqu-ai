"use client";

import Image from "next/image";
import styles from "./how_it_works.module.scss";
import { useContext } from "react";
import { DataContext } from "@/src/context/DataProvider/context";
import useIsRatioResponse from "@/src/hooks/useIsRatioResponce";

const HowItWorksSection = () => {
  const { data: allData } = useContext(DataContext);
  const data = allData?.how_it_works;

  const isTablet = useIsRatioResponse({ aspectRatio: "2/3-4/3", type: 'both' });
  const isMobile = useIsRatioResponse({ aspectRatio: "2/3", type: 'max' });
  
  return (
    data &&
    data.active && (
      <section className={styles.how_it_works}>
        <div className={styles.how_it_works__info}>
          <p className={styles.how_it_works__title}>{data.title}</p>
          <div className={styles.how_it_works__description}>
            <p className={styles.how_it_works__text}>{data.text}</p>
          </div>
        </div>
        <picture className={styles.how_it_works__image}>
          {!isTablet && !isMobile && (
            <Image
              fill
              alt="input circuit"
              src={data.img}
            />
          )}
          {isTablet && (
            <Image
              fill
              alt="input circuit"
              src={data.img_tablet}
            />
          )}
          {isMobile && (
            <Image
              fill
              alt="input circuit"
              src={data.img_mobile}
            />
          )}
        </picture>
      </section>
    )
  );
};

export default HowItWorksSection;
