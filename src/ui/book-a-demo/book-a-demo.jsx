import React from 'react';
import styles from './book-a-demo.module.scss';
import classNames from 'classnames';

const BookADemo = ({ light }) => {
  return (
    <button
      className={classNames(styles.book_a_demo, {
        [styles.book_a_demo__light]: light,
      })}
    >
      book a demo
    </button>
  );
};

export default BookADemo;
