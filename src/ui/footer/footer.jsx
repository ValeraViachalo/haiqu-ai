import React from 'react';
import styles from './footer.module.scss';
import DemoBookingForm from '../demo-booking-form';

const Footer = ({data}) => {

  return (
    <footer
      className={styles.footer}
      id="footer"
    >
      <DemoBookingForm data={data} />

      <div className={styles.footer__container}>
        <div className={styles.footer__top_section}>
          <p>©2023 {data.footer.copy}</p>
          <a
            href={"mailto:" + data.footer.phone}
            className={styles.footer__phone}
          >
            {data.footer.phone}
          </a>
        </div>

        <div className={styles.footer__bottom_section}>
          <div>
            {data.footer.facebook ? <a href={data.footer.facebook} rel="nofollow" target="_blank">Facebook</a> : '' }
            {data.footer.x ? <a href={data.footer.x} rel="nofollow" target="_blank">X</a> : '' }
            {data.footer.linkedin ? <a href={data.footer.linkedin} rel="nofollow" target="_blank">LinkedIn</a> : '' }
          </div>

          <div className={styles.footer__terms}>
            <a href="#">Terms & Conditions</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Cookie Policy</a>
          </div>

          <p>Made by twid</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
