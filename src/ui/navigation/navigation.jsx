'use client';

import { useState } from 'react';
import styles from './navigation.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import MobileNavMenu from './components/mobile-nav-menu';
import { links } from '@/src/constants';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={styles.navigation}>
      <div
        className={styles.navigation__burger_icon}
        onClick={() => setIsOpen(!isOpen)}
      >
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
