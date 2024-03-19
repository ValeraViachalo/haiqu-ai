import React from 'react';
import styles from './navigation.module.scss';
import Link from 'next/link';

const links = [
  { id: 1, name: 'technology', href: '/technology' },
  { id: 2, name: 'verticals', href: '/verticals' },
  { id: 3, name: 'about', href: '/about' },
  { id: 4, name: 'articles', href: '/articles' },
  { id: 5, name: 'careers', href: '/careers' },
  { id: 6, name: 'contacts', href: '/contacts' },
];

const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      {links.map(({ id, name, href }) => (
        <Link
          key={id}
          href={href}
          className={styles.navigation__link}
        >
          {name}
        </Link>
      ))}
    </nav>
  );
};

export default Navigation;
