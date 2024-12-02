"use client";

import React, { useContext } from "react";
import styles from "./you_can_section.module.scss";
import { DataContext } from "@/src/context/DataProvider/context";

const YouCanSection = () => {
  const { data: allData } = useContext(DataContext);
  const data = allData?.what_you_can;

  return (
    data &&
    data.active && (
      <section className={styles.you_can}>
        <div className={styles.you_can__info}>
          <p className={styles.you_can__title}>{data.title}</p>
          {data.list.map((currItem, i) => (
            <div className={styles.you_can__rightbox} key={i}>
              <p className={styles.you_can__100x}>{currItem.title}</p>
              <p className={styles.you_can__description}>{currItem.text}</p>
            </div>
          ))}
          <p className={styles.you_can__title}>{data.title_2}</p>
        </div>
        {data.button_2.active && (
          <a href={data.button_2.link} className={styles.you_can__button}>
            {data.button_2.text}
          </a>
        )}
      </section>
    )
  );
};

export default YouCanSection;
