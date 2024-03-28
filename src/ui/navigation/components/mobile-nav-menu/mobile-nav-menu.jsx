'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import classNames from 'classnames';
import styles from './mobile-nav-menu.module.scss';

const MobileNavMenu = ({ links, isOpened }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    if (!isOpened) {
      setIsVisible(false);
    }
  }, [isOpened]);

  return (
    <div
      className={classNames(styles.mobile_menu__container, {
        [styles.mobile_menu__container__visible]: isOpened,
      })}
    >
      {/* <div className={styles.mob_menu}>
        <div className={styles.mob_menu__top}>top</div>
        <div className={styles.mob_menu__bottom}>bottom</div>
      </div> */}

      <div
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
      </div>
    </div>
  );
};

export default MobileNavMenu;
