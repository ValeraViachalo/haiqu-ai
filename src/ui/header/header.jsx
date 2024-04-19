'use client';

import { useState, useEffect } from 'react';
import styles from './header.module.scss';
import Navigation from '../navigation';
import Logo from '../logo';
import Image from 'next/image';
import Link from 'next/link';
import classNames from 'classnames';

const Header = () => {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [fixed, setFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY === 0) {
        setFixed(false);
      } else if (currentScrollY < lastScrollY) {
        setFixed(true);
      } else {
        setFixed(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });


    document.body.style.paddingTop = fixed ? '5rem' : '0';

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.style.paddingTop = '0'; 
    };
  }, [lastScrollY, fixed]); 

  return (
    <header
      className={classNames(styles.header, {
        [styles.header__fixed]: fixed,
      })}
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

      <Navigation />
    </header>
  );
};

export default Header;
