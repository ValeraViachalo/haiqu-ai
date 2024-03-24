import React from 'react';
import styles from './demo-booking-form.module.scss';

const DemoBookingForm = () => (
  <section className={styles.container}>
    <p className={styles.container__title}>book a demo</p>
    <form className={styles.container__form}>
      <input placeholder="EMAIL*" />
      <button className={styles.container__button}>submit</button>
    </form>

    <p className={styles.container__info}>
      Clumsy hardware needs
      <br />
      Careful Software
    </p>
  </section>
);

export default DemoBookingForm;
