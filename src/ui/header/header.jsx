'use client';

import { useState, useEffect } from 'react';
import styles from './header.module.scss';
import Navigation from '../navigation';
import Logo from '../logo';
import Image from 'next/image';
import Link from 'next/link';
import classNames from 'classnames';

const Header = ({data}) => {

  return (
    <header
      className={`${styles.header} ${styles.header__fixed}`}
      // className={classNames(styles.header, {
      //   [styles.header__fixed]: fixed,
      // })}
    >
      <Link
        href="/"
        className={styles.header__logo_group}
      >
        <div className={styles.header__logo_container}>
          <Logo black />
        </div>

        <div className={styles.header__logo_text}>
          <Image
            fill
            src="/images/text-logo.svg"
            alt="haiqu-text-logo"
          />
        </div>
      </Link>

      <Navigation data={data} />
    </header>
  );
};

export default Header;
