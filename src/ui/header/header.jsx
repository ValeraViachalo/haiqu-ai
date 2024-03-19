import React from 'react';
import styles from './header.module.scss';
import Navigation from '../navigation';
import Logo from '../logo';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header className={styles.header}>
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

      <Navigation />
    </header>
  );
};

export default Header;
