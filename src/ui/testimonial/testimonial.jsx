"use client";

import React, { useEffect, useRef, useState } from "react";
import styles from "./testimonial.module.scss";
import TestimonialItem from "./components/testimonial-item";
import { motion } from "framer-motion";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/core";

const Testimonial = ({ testimonial }) => {
  const containerRef = useRef(null);

  console.log(testimonial);

  return (
    testimonial.active && (
      <div className={styles.testimonial} ref={containerRef}>
        <Splide
          options={{
            perPage: 1,
            width: '100%',
            type: "loop",
            slideFocus: true,
            speed: 500,
            // easing: "cubic-bezier(0.85, 0, 0.15, 1)",
            snap: true,
            classes: {
              arrows: `${styles.testimonial__arrows}`,
              arrow: `${styles.testimonial__arrow}`,
              prev: `${styles.testimonial__arrow_prev}`,
              next: `${styles.testimonial__arrow_next}`,
              pagination: `${styles.testimonial__pagination}`,
              page: `${styles.testimonial__page}`,
            },
          }}
          hasTrack={false}
        >
          <SplideTrack>
            {testimonial.list.map(({ name, position, text }, i) => (
              <SplideSlide key={i} className={styles.testimonial__slide}>
                <TestimonialItem name={name} role={position} quote={text} />
              </SplideSlide>
            ))}
          </SplideTrack>
        </Splide>

        {/* <Splide
          options={{
            type: "loop",
            width: "100%",
            perPage: 3,
            perMove: 1,
            // pauseOnHover: false,
            pagination: false,
            slideFocus: true,
            focus: "center",
            rewind: true,
            keyboard: true,
            drag: true,
            classes: {
              arrows: "testimonials__arrows",
              arrow: "testimonials__arrow",
              prev: "testimonials__arrow--prev",
              next: "testimonials__arrow--next",
            },
          }}
          hasTrack={false}
        >
          <SplideTrack className="testimonials__slider">
            {testimonial.list.map(({ name, position, text }, i) => (
              <SplideSlide
                className="testimonials-slide"
                key={`testimonials-slide-${i}`}
              >
                <div className={styles.testimonial_item}>
                  <div>
                    <p className={styles.testimonial_item__name}>{name}</p>
                    <p className={styles.testimonial_item__role}>{position}</p>
                  </div>
                  <p
                    className={styles.testimonial_item__quote}
                    dangerouslySetInnerHTML={{ __html: text }}
                  />
                </div>
              </SplideSlide>
            ))}
          </SplideTrack>
        </Splide> */}
      </div>
    )
  );
};

export default Testimonial;
