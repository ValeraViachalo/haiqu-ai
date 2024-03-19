import React from 'react';
import styles from './Logo.module.scss';
import Image from 'next/image';

const Logo = ({ blue, black }) => (
  <>
    {blue && <div className={styles.logo__blue} />}
    {black && (
      <Image
        className={styles.logo}
        src="/images/morph-logo.gif"
        alt="haiqu_logo"
        width={200}
        height={200}
      />
    )}
  </>
);

export default Logo;
