'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import classNames from 'classnames';
import styles from './mobile-nav-menu.module.scss';
import React from "react";

const MobileNavMenu = ({ links, isOpened, data }) => {
  return (
    <div
      className={classNames(styles.mobile_menu__container, {
        [styles.mobile_menu__container__visible]: isOpened,
      })}
    >
      <div className={styles.mob_menu}>
        <div className={styles.mob_menu__top}>
          <div className={styles.mob_menu__links_container}>
            <div className={styles.mob_menu__explore}>explore</div>

            {links.map(({ id, name, href }) => (
              <Link
                key={id}
                href={href}
                className={styles.mob_menu__link}
                onClick={() => setIsOpen(false)}
              >
                {name}
              </Link>
            ))}
          </div>
        </div>
        <div className={styles.mob_menu__bottom}>
          <div className={styles.mob_menu__follow_us}>
            <p className={styles.mob_menu__follow_us_title}>follow us</p>

            <div className={styles.mob_menu__follow_us_links}>
              {data.footer.facebook ? <a href={data.footer.facebook} className={styles.mob_menu__follow_us_link} rel="nofollow" target="_blank">Facebook</a> : '' }
              {data.footer.x ? <a href={data.footer.x} className={styles.mob_menu__follow_us_link} rel="nofollow" target="_blank">X</a> : '' }
              {data.footer.linkedin ? <a href={data.footer.linkedin} className={styles.mob_menu__follow_us_link} rel="nofollow" target="_blank">LinkedIn</a> : '' }
            </div>
          </div>
        </div>
      </div>

      {/* <div
        className={classNames([styles.mobile_menu], {
          [styles.mobile_menu__visible]: isVisible,
        })}
      >
        <ul className={styles.mobile_menu__links_container}>
          <div className={styles.mobile_menu__explore}>explore</div>
          {links.map(({ id, name, href }) => (
            <Link
              key={id}
              href={href}
              className={styles.mobile_menu__link}
              onClick={() => setIsOpen(false)}
            >
              {name}
            </Link>
          ))}
        </ul>

        <div className={styles.mobile_menu__follow_us}>
          <p className={styles.mobile_menu__follow_us_title}>follow us</p>

          <div className={styles.mobile_menu__follow_us_links}>
            <a
              className={styles.navigation__follow_us_link}
              href="#"
            >
              Facebook
            </a>
            <a
              className={styles.navigation__follow_us_link}
              href="#"
            >
              X
            </a>
            <a
              className={styles.navigation__follow_us_link}
              href="#"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default MobileNavMenu;
