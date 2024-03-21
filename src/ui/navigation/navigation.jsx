'use client';

import { useState } from 'react';
import styles from './navigation.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { MobileNavigationMenu } from './components/mobile-navigation-menu';

const links = [
  { id: 1, name: 'technology', href: '/technology' },
  { id: 2, name: 'verticals', href: '/verticals' },
  { id: 3, name: 'about', href: '/about' },
  { id: 4, name: 'articles', href: '/articles' },
  { id: 5, name: 'careers', href: '/careers' },
  { id: 6, name: 'contacts', href: '/contacts' },
];

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

      <MobileNavigationMenu
        links={links}
        isOpened={isOpen}
      />

      <ul className={styles.navigation__links_container}>
        {links.map(({ id, name, href }) => (
          <Link
            key={id}
            href={href}
            className={styles.navigation__link}
            onClick={() => setIsOpen(false)}
          >
            {name}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
