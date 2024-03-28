'use client';

import { useEffect, useState } from 'react';
import styles from './navigation.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import MobileNavMenu from './components/mobile-nav-menu';
import { links } from '@/src/constants';
import BookADemo from '../book-a-demo';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  // useEffect(() => {
  //   if (isOpen) {
  //     document.documentElement.style.overflow = 'hidden';
  //   } else {
  //     document.documentElement.style.overflow = 'unset';
  //   }
  // }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsOpen(false);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={styles.navigation}>
      <div className={styles.navigation__book_a_demo_container}>
        <BookADemo />
      </div>

      <div
        className={styles.navigation__burger}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className={styles.navigation__icon}>
          <Image
            src={
              isOpen
                ? `${`/images/close.svg`}`
                : `${`/images/burger-menu-icon.svg`}`
            }
            alt="burger menu icon"
            fill
          />
        </div>
      </div>

      <MobileNavMenu
        links={links}
        isOpened={isOpen}
      />

      <div className={styles.navigation__links_container}>
        {links.map(({ id, name, href }) => (
          <Link
            key={id}
            href={href}
            className={styles.navigation__link}
          >
            {name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;
