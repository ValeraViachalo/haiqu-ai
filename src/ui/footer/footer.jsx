import React from 'react';
import styles from './footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__top_section}>
        <p>©2023 Haiqu. All rights reserved.</p>
        <p>+1 650 788 6011</p>
      </div>

      <div className={styles.footer__bottom_section}>
        <div>
          <a href="#">Facebook</a>
          <a href="#">X</a>
          <a href="#">LinkedIn</a>
        </div>

        <div>
          <a href="#">Terms & Conditions</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Cookie Policy</a>
        </div>

        <p>Made by twid</p>
      </div>
    </footer>
  );
};

export default Footer;
